const { buildSchema } = require('graphql');

const User = buildSchema(`
  type User {
    id: ID
    name: String
  }
  type Query {
    me: User
  }
`)

const root = { me: () => ({ id: 1, name: 'zoulei' }) };

module.exports = {
  schema: User,
  rootValue: root,
};