"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GraphQL = require("graphql");

var makeSchema = require("../utlis/makeSchema");

var model = require('../model');

var createToken = require('../utlis/createToken');

var UserModel = model.User;
var GraphQLSchema = GraphQL.GraphQLSchema,
    GraphQLObjectType = GraphQL.GraphQLObjectType,
    GraphQLInputObjectType = GraphQL.GraphQLInputObjectType,
    GraphQLUnionType = GraphQL.GraphQLUnionType,
    GraphQLList = GraphQL.GraphQLList,
    GraphQLString = GraphQL.GraphQLString,
    GraphQLID = GraphQL.GraphQLID;
var User = makeSchema("User", GraphQLObjectType, {
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
  department: GraphQLString
});
var UserId = makeSchema("UserId", GraphQLObjectType, {
  user_id: GraphQLID
});
var UserEmail = makeSchema("UserEmail", GraphQLObjectType, {
  user_email: GraphQLString
});
var AccountName = makeSchema("AccountName", GraphQLObjectType, {
  account_name: GraphQLString
}); // const newUser = makeSchema("newUser", GraphQLInputObjectType, {
//     user_name: GraphQLString,
//     user_email: GraphQLString,
//     account_name: GraphQLString,
//     account_password: GraphQLString,
//     role: GraphQLString,
//     job_post: GraphQLString,
//     avatar: GraphQLString,
//     department: GraphQLString,
// });

var updateUser = makeSchema("updateUser", GraphQLInputObjectType, {
  user_name: GraphQLString,
  user_email: GraphQLString,
  account_name: GraphQLString,
  account_password: GraphQLString,
  role: GraphQLString,
  job_post: GraphQLString,
  avatar: GraphQLString,
  department: GraphQLString
});
var UserClue = new GraphQLUnionType({
  name: "UserClue",
  types: [UserId, UserEmail, AccountName],
  resolveType: function resolveType(value) {
    if (value instanceof UserId) {
      return UserId;
    } else if (value instanceof UserEmail) {
      return UserEmail;
    } else {
      return AccountName;
    }
  }
});
var Query = new GraphQLObjectType({
  name: "Query",
  fields: {
    user: {
      type: User,
      args: {
        clue: {
          type: UserClue
        }
      },
      resolve: function resolve(_ref) {
        var query;
        return regeneratorRuntime.async(function resolve$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.clue;
                _context.next = 3;
                return regeneratorRuntime.awrap(UserModel.findOne(query).then(function (data) {
                  return data;
                }));

              case 3:
                return _context.abrupt("return", _context.sent);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        });
      }
    },
    userList: {
      type: new GraphQLList(User),
      args: {
        clue: {
          type: UserClue
        },
        data: {
          type: updateUser
        }
      },
      resolve: function resolve(query) {
        return regeneratorRuntime.async(function resolve$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return regeneratorRuntime.awrap(UserModel.find(query).then(function (data) {
                  return data || [];
                }));

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        });
      }
    }
  }
}); // const Mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//   }
// });

var schema = new GraphQLSchema({
  query: Query
});
var root = {
  update: function update(_ref2) {
    var clue, data;
    return regeneratorRuntime.async(function update$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            clue = _ref2.clue, data = _ref2.data;
            _context3.next = 3;
            return regeneratorRuntime.awrap(UserModel.update(clue, data).then(function (_ref3) {
              var ok = _ref3.ok;
              return ok ? '操作成功' : '操作失败';
            }));

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  },
  register: function register(_ref4) {
    var user_option, account_name, user_email, hasDuplicateEmail, hasDuplicateName, user_info, new_user;
    return regeneratorRuntime.async(function register$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            user_option = _ref4.user_option;

            /**
             * 新建用户需先查重：user_name、account_name、user_email中任一字段不允许重复
             */
            account_name = user_option.account_name, user_email = user_option.user_email;
            _context4.next = 4;
            return regeneratorRuntime.awrap(UserModel.findOne({
              account_name: account_name
            }));

          case 4:
            hasDuplicateEmail = _context4.sent;
            _context4.next = 7;
            return regeneratorRuntime.awrap(UserModel.findOne({
              user_email: user_email
            }));

          case 7:
            hasDuplicateName = _context4.sent;

            if (!(!hasDuplicateEmail && !hasDuplicateEmail)) {
              _context4.next = 18;
              break;
            }

            user_info = _objectSpread({}, user_option);
            user_info.token = createToken();
            user_info.time_stamp = new Date().getTime().toString();
            new_user = new UserModel(user_info);
            _context4.next = 15;
            return regeneratorRuntime.awrap(new_user.save().then(function (data) {
              return data;
            }));

          case 15:
            return _context4.abrupt("return", _context4.sent);

          case 18:
            throw new Error("存在相同的用户名或Email");

          case 19:
          case "end":
            return _context4.stop();
        }
      }
    });
  },
  user: function user(_ref5) {
    var query;
    return regeneratorRuntime.async(function user$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            query = _ref5.clue;
            _context5.next = 3;
            return regeneratorRuntime.awrap(UserModel.findOne(query).then(function (data) {
              return data;
            }));

          case 3:
            return _context5.abrupt("return", _context5.sent);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  },
  userList: function userList(query) {
    return regeneratorRuntime.async(function userList$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return regeneratorRuntime.awrap(UserModel.find(query).then(function (data) {
              return data || [];
            }));

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    });
  }
};
module.exports = {
  schema: schema // rootValue: root,

};