const GraphQL = require("graphql");
const makeSchema = require("../utlis/makeSchema");
const model = require('../model');
const createToken = require('../utlis/createToken');

const { User: UserModel } = model;
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLUnionType,
  GraphQLList,
  // GraphQLEnumType,
  GraphQLString,
  GraphQLID,
} = GraphQL;

const User = makeSchema("User", GraphQLObjectType, {
  user_id: GraphQLID,
  user_name: GraphQLString,
  user_email: GraphQLString,
  account_name: GraphQLString,
  account_password: GraphQLString,
  role: GraphQLString,
  token: GraphQLString,
  job_post: GraphQLString,
  time_stamp: GraphQLString,
  avatar: GraphQLString,
  department: GraphQLString,
});


const UserId = makeSchema("UserId", GraphQLObjectType, {
  user_id: GraphQLID,
});

const UserEmail = makeSchema("UserEmail", GraphQLObjectType, {
  user_email: GraphQLString,
});

const AccountName = makeSchema("AccountName", GraphQLObjectType, {
  account_name: GraphQLString,
});

// const newUser = makeSchema("newUser", GraphQLInputObjectType, {
//     user_name: GraphQLString,
//     user_email: GraphQLString,
//     account_name: GraphQLString,
//     account_password: GraphQLString,
//     role: GraphQLString,
//     job_post: GraphQLString,
//     avatar: GraphQLString,
//     department: GraphQLString,
// });

const updateUser = makeSchema("updateUser", GraphQLInputObjectType, {
  user_name: GraphQLString,
  user_email: GraphQLString,
  account_name: GraphQLString,
  account_password: GraphQLString,
  role: GraphQLString,
  job_post: GraphQLString,
  avatar: GraphQLString,
  department: GraphQLString,
});

const UserClue = new GraphQLUnionType({
  name: "UserClue",
  types: [UserId, UserEmail, AccountName],
  resolveType: (value) => {
    if (value instanceof UserId) {
      return UserId;
    } else if (value instanceof UserEmail) {
      return UserEmail;
    } else {
      return AccountName;
    }
  },
});

const Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: User,
      args: {
        clue: { type: UserClue },
      },
      resolve: async ({ clue: query }) => {
        return await UserModel.findOne(query).then((data) => data);
      },
    },
    userList: {
      type: new GraphQLList(User),
      args: {
        clue: { type: UserClue },
        data: { type: updateUser },
      },
      resolve: async (query) => {
        return await UserModel.find(query).then((data) => {
          return data || [];
        });
      },
    },
  },
});

// const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {

//   }
// });

var schema = new GraphQLSchema({ query: Query });

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
      const new_user = new UserModel(user_info);
      return await new_user.save().then(data => data)
    } else {
      throw new Error("存在相同的用户名或Email")
    }
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
  schema: schema,
  // rootValue: root,
};