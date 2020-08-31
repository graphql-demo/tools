const { buildSchema } = require('graphql');
const model = require('../model');
const createToken = require('../utlis/createToken');

const { User: UserModel } = model;

const User = buildSchema(`
  type User {
    user_id: ID
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

  input UserInput {
    user_name: String!
    user_email: String!
    account_name: String!
    account_password: String!
    role: String!
    job_post: String!
    avatar: String
    department: String!
  }

  type Query {
    user(user_id: String, user_email: String, account_name: String): User
    userList(user_name: String, role: String, job_post: String, department: String): [User]
  }

  type Mutation {
    register(input: UserInput): User
    update(
      user_name: String,
      user_email: String,
      account_name: String,
      account_password: String,
      role: String,
      job_post: String,
      avatar: String,
      department: String
    ): User
}
`)

const root = {
  register: async ({ input }) => {
    const newUser = new UserModel(input);
    return await newUser.save().then(data => data)
  },
  user: async (query) => {
    return await UserModel.findOne(query).then(data => {
      return data;
    })
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