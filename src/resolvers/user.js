const lodash = require('lodash');
const model = require('../../model');
const createToken = require('../../utlis/createToken');

const { User: UserModel } = model;

module.exports = {
  Query: {
    user: async (parent, { input }) => {
      if (lodash.isEmpty(input)) {
        throw new Error("缺少必要参数")
      }
      return await UserModel.findOne(input).then(data => data)
    },
    userList: async (parent, query) => {
      return await UserModel.find(query).then(data => {
        return data || []
      })
    },
  },
  Mutation: {
    update: async (parent, { input, data }) => {
      return await UserModel.update(input, data).then(({ ok }) => {
        return ok ? '操作成功' : '操作失败'
      })

    },
    register: async (parent, { user_option }) => {
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
    login: async (parent, { account_name, account_password }) => {
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
  },
}