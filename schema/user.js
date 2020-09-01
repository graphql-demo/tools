const { buildSchema } = require('graphql');
const model = require('../model');
const createToken = require('../utlis/createToken');

const { User: UserModel } = model;

const User = buildSchema(`
  type User {
    user_id: ID
    status: String
    user_name: String
    user_email: String
    account_name: String
    account_password: String
    role: String
    token: String
    job_post: String
    time_stamp: String
    avatar: String
    department: String
  }

  type UserBase {
    user_id: ID
    status: String
    user_name: String
    user_email: String
    role: String
    job_post: String
    avatar: String
    department: String
  }

  type UserAuth {
    user_id: ID
    status: String
    user_name: String
    user_email: String
    account_name: String
    token: String
    time_stamp: String
  }

  input UserClue {
    user_id: ID
    user_email: String
    account_name: String
  }

  input newUser {
    user_name: String!
    user_email: String!
    account_name: String!
    account_password: String!
    role: String!
    job_post: String!
    avatar: String
    department: String!
  }

  input updateUser {
    user_name: String,
    user_email: String,
    account_name: String,
    account_password: String,
    role: String,
    job_post: String,
    avatar: String,
    department: String
  }

  type Query {
    user(clue: UserClue!): UserBase
    userList(user_name: String, role: String, job_post: String, department: String): [UserBase]
  }

  type Mutation {
    register(user_option: newUser!): User
    update(clue: UserClue!, data: updateUser!): String
    login(account_name: String!, account_password: String!): UserAuth
  }
`)

const root = {
  update: async ({ clue, data }) => {
    return await UserModel.update(clue, data).then(({ ok }) => {
      return ok ? '操作成功' : '操作失败'
    })

  },
  register: async ({ user_option }) => {
    /**
     * 新建用户需先查重：user_name、account_name、user_email中任一字段不允许重复
     */
    const { account_name, user_email } = user_option;
    const hasDuplicateEmail = await UserModel.findOne({ account_name })
    const hasDuplicateName = await UserModel.findOne({ user_email })
    if (!hasDuplicateEmail && !hasDuplicateEmail) {
      const user_info = { ...user_option };
      user_info.token = createToken();
      user_info.time_stamp = new Date().getTime().toString();
      user_info.status = "disabled"
      const new_user = new UserModel(user_info);
      return await new_user.save().then(data => data)
    } else {
      throw new Error("存在相同的用户名或Email")
    }
  },
  login: async ({ account_name, account_password }) => {
    const hasUser = await UserModel.findOne({ account_name });
    const userPass = await UserModel.findOne({ account_name, account_password });
    if (!hasUser) {
      throw new Error("用户不存在！")
    }
    if (!userPass) {
      throw new Error("密码错误！")
    }
    const token = createToken();
    const time_stamp = new Date().getTime().toString();
    return await UserModel.update({ account_name, account_password }, { token, time_stamp })
      .then(({ ok }) => {
        console.log("userPass", userPass);
        return userPass;
      });
  },
  user: async ({ clue: query }) => {
    return await UserModel.findOne(query).then(data => data)
  },
  userList: async (query) => {
    return await UserModel.find(query).then(data => {
      return data || []
    })
  },
};

module.exports = {
  schema: User,
  rootValue: root,
};