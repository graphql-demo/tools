module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./model/index.js":
/*!************************!*\
  !*** ./model/index.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const autoIncrement = __webpack_require__(/*! mongoose-auto-increment */ "mongoose-auto-increment");

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");
/* f2e base db */


const db = mongoose.createConnection('mongodb://119.23.36.140/cestc');

const user_schema = __webpack_require__(/*! ./user */ "./model/user.js");

autoIncrement.initialize(db);
user_schema.plugin(autoIncrement.plugin, {
  model: 'user',
  field: 'user_id'
});
exports.User = db.model('User', user_schema); // exports.ServiceDefineVersion = service_define_db.model('ServiceDefineVersion', service_define_version, 'service_define_version');

/***/ }),

/***/ "./model/user.js":
/*!***********************!*\
  !*** ./model/user.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const Schema = mongoose.Schema;
const schema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'user_id'
  },
  user_name: String,
  user_email: String,
  account_name: String,
  account_password: String,
  role: String,
  token: String,
  job_post: String,
  status: String,
  time_stamp: String,
  avatar: String,
  department: String
});
module.exports = schema;

/***/ }),

/***/ "./node_modules/graphpack/config/index.js":
/*!************************************************!*\
  !*** ./node_modules/graphpack/config/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const cosmiconfig = __webpack_require__(/*! cosmiconfig */ "cosmiconfig");

const webpack = __webpack_require__(/*! webpack */ "webpack");

const defaultConfig = __webpack_require__(/*! ./webpack.config */ "./node_modules/graphpack/config/webpack.config.js");

const explorer = cosmiconfig('graphpack').search();

const loadServerConfig = async () => {
  const result = await explorer;
  const userConfig = result ? typeof result.config === 'function' ? result.config(defaultConfig.mode) : result.config : {};
  return {
    port: Number(process.env.PORT),
    ...userConfig.server
  };
};

const loadWebpackConfig = async () => {
  const result = await explorer;
  const userConfig = result ? typeof result.config === 'function' ? result.config(defaultConfig.mode) : result.config : {};

  if (typeof userConfig.webpack === 'function') {
    return userConfig.webpack({
      config: defaultConfig,
      webpack
    });
  }

  return { ...defaultConfig,
    ...userConfig.webpack
  };
};

exports.loadServerConfig = loadServerConfig;
exports.loadWebpackConfig = loadWebpackConfig;

/***/ }),

/***/ "./node_modules/graphpack/config/webpack.config.js":
/*!*********************************************************!*\
  !*** ./node_modules/graphpack/config/webpack.config.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const FriendlyErrorsWebpackPlugin = __webpack_require__(/*! friendly-errors-webpack-plugin */ "friendly-errors-webpack-plugin");

const fs = __webpack_require__(/*! fs */ "fs");

const path = __webpack_require__(/*! path */ "path");

const webpack = __webpack_require__(/*! webpack */ "webpack");

const nodeExternals = __webpack_require__(/*! webpack-node-externals */ "webpack-node-externals");

const isDev = "development" !== 'production';
const isWebpack = typeof __webpack_require__.m === 'object';
const hasBabelRc = fs.existsSync(path.resolve('babel.config.js'));

if (hasBabelRc && !isWebpack) {
  console.info('🐠 Using babel.config.js defined in your app root');
}

module.exports = {
  devtool: 'source-map',
  entry: {
    // We take care of setting up entry file under lib/index.js
    index: ['graphpack']
  },
  // When bundling with Webpack for the backend you usually don't want to bundle
  // its node_modules dependencies. This creates an externals function that
  // ignores node_modules when bundling in Webpack.
  externals: [nodeExternals({
    whitelist: [/^graphpack$/]
  })],
  mode: isDev ? 'development' : 'production',
  module: {
    rules: [{
      test: /\.(gql|graphql)/,
      use: 'graphql-tag/loader'
    }, {
      test: /\.(js|ts)$/,
      use: [{
        loader: /*require.resolve*/(/*! babel-loader */ "babel-loader"),
        options: {
          babelrc: true,
          cacheDirectory: true,
          presets: hasBabelRc ? undefined : [/*require.resolve*/(/*! babel-preset-graphpack */ "babel-preset-graphpack")]
        }
      }]
    }, {
      test: /\.mjs$/,
      type: 'javascript/auto'
    }]
  },
  node: {
    __filename: true,
    __dirname: true
  },
  optimization: {
    noEmitOnErrors: true
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    path: path.join(process.cwd(), './build'),
    sourceMapFilename: '[name].map'
  },
  performance: {
    hints: false
  },
  plugins: [new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1
  }), new webpack.EnvironmentPlugin({
    DEBUG: false,
    GRAPHPACK_SRC_DIR: path.resolve(process.cwd(), 'src'),
    NODE_ENV: 'development'
  }), new FriendlyErrorsWebpackPlugin({
    clearConsole: isDev
  })],
  resolve: {
    extensions: ['.ts', '.js']
  },
  stats: 'minimal',
  target: 'node'
};

/***/ }),

/***/ "./node_modules/graphpack/lib/server.js":
/*!**********************************************!*\
  !*** ./node_modules/graphpack/lib/server.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server */ "./node_modules/graphpack/node_modules/apollo-server/dist/index.js");
/* harmony import */ var apollo_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-server-express */ "./node_modules/graphpack/node_modules/apollo-server-express/dist/index.js");
/* harmony import */ var apollo_server_express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_server_express__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _srcFiles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./srcFiles */ "./node_modules/graphpack/lib/srcFiles.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./node_modules/graphpack/config/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_config__WEBPACK_IMPORTED_MODULE_3__);





if (!(_srcFiles__WEBPACK_IMPORTED_MODULE_2__["resolvers"] && Object.keys(_srcFiles__WEBPACK_IMPORTED_MODULE_2__["resolvers"]).length > 0)) {
  throw Error(`Couldn't find any resolvers. Please add resolvers to your src/resolvers.js`);
}

const createServer = config => {
  const {
    applyMiddleware,
    port: serverPort,
    ...options
  } = config;
  const port = Number(process.env.PORT) || serverPort || 4000; // Pull out fields that are not relevant for the apollo server
  // Use apollo-server-express when middleware detected

  if (applyMiddleware && applyMiddleware.app && typeof applyMiddleware.app.listen === 'function') {
    const server = new apollo_server_express__WEBPACK_IMPORTED_MODULE_1__["ApolloServer"](options);
    server.applyMiddleware(applyMiddleware);
    return applyMiddleware.app.listen({
      port
    }, () => console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`));
  } // Use apollo-server


  const server = new apollo_server__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"](options);
  return server.listen({
    port
  }).then(({
    url
  }) => console.log(`🚀 Server ready at ${url}`));
};

const startServer = async () => {
  // Load server config from graphpack.config.js
  const config = await Object(_config__WEBPACK_IMPORTED_MODULE_3__["loadServerConfig"])();
  createServer({ ...config,
    context: _srcFiles__WEBPACK_IMPORTED_MODULE_2__["context"],
    resolvers: _srcFiles__WEBPACK_IMPORTED_MODULE_2__["resolvers"],
    typeDefs: _srcFiles__WEBPACK_IMPORTED_MODULE_2__["typeDefs"]
  });
};

startServer();

/***/ }),

/***/ "./node_modules/graphpack/lib/srcFiles.js":
/*!************************************************!*\
  !*** ./node_modules/graphpack/lib/srcFiles.js ***!
  \************************************************/
/*! exports provided: importFirst, context, resolvers, typeDefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importFirst", function() { return importFirst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolvers", function() { return resolvers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeDefs", function() { return typeDefs; });
const importFirst = req => req.keys().map(mod => req(mod).default || req(mod))[0]; // Optionally import modules

const context = importFirst(__webpack_require__("./src sync recursive ^\\.\\/(context|context\\/index)\\.(js|ts)$"));
const resolvers = importFirst(__webpack_require__("./src sync recursive ^\\.\\/(resolvers|resolvers\\/index)\\.(js|ts)$"));
const typeDefs = importFirst(__webpack_require__("./src sync recursive ^\\.\\/(schema|schema\\/index)\\.(gql|graphql|js|ts)$"));

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-link/lib/bundle.esm.js":
/*!***************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-link/lib/bundle.esm.js ***!
  \***************************************************************************/
/*! exports provided: Observable, getOperationName, ApolloLink, concat, createOperation, empty, execute, from, fromError, fromPromise, makePromise, split, toPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApolloLink", function() { return ApolloLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createOperation", function() { return createOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "from", function() { return from; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromError", function() { return fromError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromPromise", function() { return fromPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makePromise", function() { return makePromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "split", function() { return split; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toPromise", function() { return toPromise; });
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zen-observable-ts */ "zen-observable-ts");
/* harmony import */ var zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zen_observable_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Observable", function() { return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a; });
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "ts-invariant");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-utilities */ "./node_modules/graphpack/node_modules/apollo-utilities/lib/bundle.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"]; });








function validateOperation(operation) {
  var OPERATION_FIELDS = ['query', 'operationName', 'variables', 'extensions', 'context'];

  for (var _i = 0, _a = Object.keys(operation); _i < _a.length; _i++) {
    var key = _a[_i];

    if (OPERATION_FIELDS.indexOf(key) < 0) {
      throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("illegal argument: " + key);
    }
  }

  return operation;
}

var LinkError = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__extends"])(LinkError, _super);

  function LinkError(message, link) {
    var _this = _super.call(this, message) || this;

    _this.link = link;
    return _this;
  }

  return LinkError;
}(Error);

function isTerminating(link) {
  return link.request.length <= 1;
}

function toPromise(observable) {
  var completed = false;
  return new Promise(function (resolve, reject) {
    observable.subscribe({
      next: function (data) {
        if (completed) {
           false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn("Promise Wrapper does not support multiple results from Observable");
        } else {
          completed = true;
          resolve(data);
        }
      },
      error: reject
    });
  });
}

var makePromise = toPromise;

function fromPromise(promise) {
  return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a(function (observer) {
    promise.then(function (value) {
      observer.next(value);
      observer.complete();
    }).catch(observer.error.bind(observer));
  });
}

function fromError(errorValue) {
  return new zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a(function (observer) {
    observer.error(errorValue);
  });
}

function transformOperation(operation) {
  var transformedOperation = {
    variables: operation.variables || {},
    extensions: operation.extensions || {},
    operationName: operation.operationName,
    query: operation.query
  };

  if (!transformedOperation.operationName) {
    transformedOperation.operationName = typeof transformedOperation.query !== 'string' ? Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_3__["getOperationName"])(transformedOperation.query) : '';
  }

  return transformedOperation;
}

function createOperation(starting, operation) {
  var context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, starting);

  var setContext = function (next) {
    if (typeof next === 'function') {
      context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next(context));
    } else {
      context = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context, next);
    }
  };

  var getContext = function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, context);
  };

  Object.defineProperty(operation, 'setContext', {
    enumerable: false,
    value: setContext
  });
  Object.defineProperty(operation, 'getContext', {
    enumerable: false,
    value: getContext
  });
  Object.defineProperty(operation, 'toKey', {
    enumerable: false,
    value: function () {
      return getKey(operation);
    }
  });
  return operation;
}

function getKey(operation) {
  var query = operation.query,
      variables = operation.variables,
      operationName = operation.operationName;
  return JSON.stringify([operationName, query, variables]);
}

function passthrough(op, forward) {
  return forward ? forward(op) : zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
}

function toLink(handler) {
  return typeof handler === 'function' ? new ApolloLink(handler) : handler;
}

function empty() {
  return new ApolloLink(function () {
    return zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
  });
}

function from(links) {
  if (links.length === 0) return empty();
  return links.map(toLink).reduce(function (x, y) {
    return x.concat(y);
  });
}

function split(test, left, right) {
  var leftLink = toLink(left);
  var rightLink = toLink(right || new ApolloLink(passthrough));

  if (isTerminating(leftLink) && isTerminating(rightLink)) {
    return new ApolloLink(function (operation) {
      return test(operation) ? leftLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of() : rightLink.request(operation) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
    });
  } else {
    return new ApolloLink(function (operation, forward) {
      return test(operation) ? leftLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of() : rightLink.request(operation, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
    });
  }
}

var concat = function (first, second) {
  var firstLink = toLink(first);

  if (isTerminating(firstLink)) {
     false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn(new LinkError("You are calling concat on a terminating link, which will have no effect", firstLink));
    return firstLink;
  }

  var nextLink = toLink(second);

  if (isTerminating(nextLink)) {
    return new ApolloLink(function (operation) {
      return firstLink.request(operation, function (op) {
        return nextLink.request(op) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
      }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
    });
  } else {
    return new ApolloLink(function (operation, forward) {
      return firstLink.request(operation, function (op) {
        return nextLink.request(op, forward) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
      }) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
    });
  }
};

var ApolloLink = function () {
  function ApolloLink(request) {
    if (request) this.request = request;
  }

  ApolloLink.prototype.split = function (test, left, right) {
    return this.concat(split(test, left, right || new ApolloLink(passthrough)));
  };

  ApolloLink.prototype.concat = function (next) {
    return concat(this, next);
  };

  ApolloLink.prototype.request = function (operation, forward) {
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('request is not implemented');
  };

  ApolloLink.empty = empty;
  ApolloLink.from = from;
  ApolloLink.split = split;
  ApolloLink.execute = execute;
  return ApolloLink;
}();

function execute(link, operation) {
  return link.request(createOperation(operation.context, transformOperation(validateOperation(operation)))) || zen_observable_ts__WEBPACK_IMPORTED_MODULE_0___default.a.of();
}



/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server-express/dist/ApolloServer.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server-express/dist/ApolloServer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApolloServer = void 0;

const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));

const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));

const body_parser_1 = __webpack_require__(/*! body-parser */ "body-parser");

const graphql_playground_html_1 = __webpack_require__(/*! @apollographql/graphql-playground-html */ "@apollographql/graphql-playground-html");

const apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

const accepts_1 = __importDefault(__webpack_require__(/*! accepts */ "accepts"));

const type_is_1 = __importDefault(__webpack_require__(/*! type-is */ "type-is"));

const expressApollo_1 = __webpack_require__(/*! ./expressApollo */ "./node_modules/graphpack/node_modules/apollo-server-express/dist/expressApollo.js");

var apollo_server_core_2 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

Object.defineProperty(exports, "GraphQLExtension", {
  enumerable: true,
  get: function () {
    return apollo_server_core_2.GraphQLExtension;
  }
});

const fileUploadMiddleware = (uploadsConfig, server) => (req, res, next) => {
  if (typeof apollo_server_core_1.processFileUploads === 'function' && type_is_1.default(req, ['multipart/form-data'])) {
    apollo_server_core_1.processFileUploads(req, res, uploadsConfig).then(body => {
      req.body = body;
      next();
    }).catch(error => {
      if (error.status && error.expose) res.status(error.status);
      next(apollo_server_core_1.formatApolloErrors([error], {
        formatter: server.requestOptions.formatError,
        debug: server.requestOptions.debug
      }));
    });
  } else {
    next();
  }
};

class ApolloServer extends apollo_server_core_1.ApolloServerBase {
  constructor(config) {
    super(config);
  }

  createGraphQLServerOptions(req, res) {
    const _super = Object.create(null, {
      graphQLServerOptions: {
        get: () => super.graphQLServerOptions
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      return _super.graphQLServerOptions.call(this, {
        req,
        res
      });
    });
  }

  supportsSubscriptions() {
    return true;
  }

  supportsUploads() {
    return true;
  }

  applyMiddleware(_a) {
    var {
      app
    } = _a,
        rest = __rest(_a, ["app"]);

    app.use(this.getMiddleware(rest));
  }

  getMiddleware({
    path,
    cors,
    bodyParserConfig,
    disableHealthCheck,
    onHealthCheck
  } = {}) {
    if (!path) path = '/graphql';
    const router = express_1.default.Router();
    const promiseWillStart = this.willStart();
    router.use(path, (_req, _res, next) => {
      promiseWillStart.then(() => next()).catch(next);
    });

    if (!disableHealthCheck) {
      router.use('/.well-known/apollo/server-health', (req, res) => {
        res.type('application/health+json');

        if (onHealthCheck) {
          onHealthCheck(req).then(() => {
            res.json({
              status: 'pass'
            });
          }).catch(() => {
            res.status(503).json({
              status: 'fail'
            });
          });
        } else {
          res.json({
            status: 'pass'
          });
        }
      });
    }

    let uploadsMiddleware;

    if (this.uploadsConfig && typeof apollo_server_core_1.processFileUploads === 'function') {
      uploadsMiddleware = fileUploadMiddleware(this.uploadsConfig, this);
    }

    this.graphqlPath = path;

    if (cors === true) {
      router.use(path, cors_1.default());
    } else if (cors !== false) {
      router.use(path, cors_1.default(cors));
    }

    if (bodyParserConfig === true) {
      router.use(path, body_parser_1.json());
    } else if (bodyParserConfig !== false) {
      router.use(path, body_parser_1.json(bodyParserConfig));
    }

    if (uploadsMiddleware) {
      router.use(path, uploadsMiddleware);
    }

    router.use(path, (req, res, next) => {
      if (this.playgroundOptions && req.method === 'GET') {
        const accept = accepts_1.default(req);
        const types = accept.types();
        const prefersHTML = types.find(x => x === 'text/html' || x === 'application/json') === 'text/html';

        if (prefersHTML) {
          const playgroundRenderPageOptions = Object.assign({
            endpoint: req.originalUrl,
            subscriptionEndpoint: this.subscriptionsPath
          }, this.playgroundOptions);
          res.setHeader('Content-Type', 'text/html');
          const playground = graphql_playground_html_1.renderPlaygroundPage(playgroundRenderPageOptions);
          res.write(playground);
          res.end();
          return;
        }
      }

      return expressApollo_1.graphqlExpress(() => this.createGraphQLServerOptions(req, res))(req, res, next);
    });
    return router;
  }

}

exports.ApolloServer = ApolloServer;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server-express/dist/expressApollo.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server-express/dist/expressApollo.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.graphqlExpress = void 0;

const apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

function graphqlExpress(options) {
  if (!options) {
    throw new Error('Apollo Server requires options.');
  }

  if (arguments.length > 1) {
    throw new Error(`Apollo Server expects exactly one argument, got ${arguments.length}`);
  }

  return (req, res, next) => {
    apollo_server_core_1.runHttpQuery([req, res], {
      method: req.method,
      options: options,
      query: req.method === 'POST' ? req.body : req.query,
      request: apollo_server_core_1.convertNodeHttpToRequest(req)
    }).then(({
      graphqlResponse,
      responseInit
    }) => {
      if (responseInit.headers) {
        for (const [name, value] of Object.entries(responseInit.headers)) {
          res.setHeader(name, value);
        }
      }

      if (typeof res.send === 'function') {
        res.send(graphqlResponse);
      } else {
        res.end(graphqlResponse);
      }
    }, error => {
      if ('HttpQueryError' !== error.name) {
        return next(error);
      }

      if (error.headers) {
        for (const [name, value] of Object.entries(error.headers)) {
          res.setHeader(name, value);
        }
      }

      res.statusCode = error.statusCode;

      if (typeof res.send === 'function') {
        res.send(error.message);
      } else {
        res.end(error.message);
      }
    });
  };
}

exports.graphqlExpress = graphqlExpress;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server-express/dist/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server-express/dist/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __createBinding = this && this.__createBinding || (Object.create ? function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  Object.defineProperty(o, k2, {
    enumerable: true,
    get: function () {
      return m[k];
    }
  });
} : function (o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

var __exportStar = this && this.__exportStar || function (m, exports) {
  for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

Object.defineProperty(exports, "GraphQLUpload", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.GraphQLUpload;
  }
});
Object.defineProperty(exports, "GraphQLExtension", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.GraphQLExtension;
  }
});
Object.defineProperty(exports, "gql", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.gql;
  }
});
Object.defineProperty(exports, "ApolloError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.ApolloError;
  }
});
Object.defineProperty(exports, "toApolloError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.toApolloError;
  }
});
Object.defineProperty(exports, "SyntaxError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.SyntaxError;
  }
});
Object.defineProperty(exports, "ValidationError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.ValidationError;
  }
});
Object.defineProperty(exports, "AuthenticationError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.AuthenticationError;
  }
});
Object.defineProperty(exports, "ForbiddenError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.ForbiddenError;
  }
});
Object.defineProperty(exports, "UserInputError", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.UserInputError;
  }
});
Object.defineProperty(exports, "defaultPlaygroundOptions", {
  enumerable: true,
  get: function () {
    return apollo_server_core_1.defaultPlaygroundOptions;
  }
});

__exportStar(__webpack_require__(/*! graphql-tools */ "./node_modules/graphpack/node_modules/graphql-tools/dist/index.js"), exports);

__exportStar(__webpack_require__(/*! graphql-subscriptions */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/index.js"), exports);

var ApolloServer_1 = __webpack_require__(/*! ./ApolloServer */ "./node_modules/graphpack/node_modules/apollo-server-express/dist/ApolloServer.js");

Object.defineProperty(exports, "ApolloServer", {
  enumerable: true,
  get: function () {
    return ApolloServer_1.ApolloServer;
  }
});

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server/dist/exports.js":
/*!***************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server/dist/exports.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! graphql-tools */ "./node_modules/graphpack/node_modules/graphql-tools/dist/index.js"));

__export(__webpack_require__(/*! graphql-subscriptions */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/index.js"));

var apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

exports.gql = apollo_server_core_1.gql;
exports.GraphQLUpload = apollo_server_core_1.GraphQLUpload;
exports.GraphQLExtension = apollo_server_core_1.GraphQLExtension;
exports.ApolloError = apollo_server_core_1.ApolloError;
exports.toApolloError = apollo_server_core_1.toApolloError;
exports.SyntaxError = apollo_server_core_1.SyntaxError;
exports.ValidationError = apollo_server_core_1.ValidationError;
exports.AuthenticationError = apollo_server_core_1.AuthenticationError;
exports.ForbiddenError = apollo_server_core_1.ForbiddenError;
exports.UserInputError = apollo_server_core_1.UserInputError;
exports.defaultPlaygroundOptions = apollo_server_core_1.defaultPlaygroundOptions;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server/dist/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const express_1 = __importDefault(__webpack_require__(/*! express */ "express"));

const http_1 = __importDefault(__webpack_require__(/*! http */ "http"));

const apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ "./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/index.js");

__export(__webpack_require__(/*! ./exports */ "./node_modules/graphpack/node_modules/apollo-server/dist/exports.js"));

class ApolloServer extends apollo_server_express_1.ApolloServer {
  constructor(config) {
    super(config);
    this.cors = config && config.cors;
  }

  createServerInfo(server, subscriptionsPath) {
    const serverInfo = Object.assign({}, server.address(), {
      server,
      subscriptionsPath
    });
    let hostForUrl = serverInfo.address;
    if (serverInfo.address === '' || serverInfo.address === '::') hostForUrl = 'localhost';
    serverInfo.url = __webpack_require__(/*! url */ "url").format({
      protocol: 'http',
      hostname: hostForUrl,
      port: serverInfo.port,
      pathname: this.graphqlPath
    });
    serverInfo.subscriptionsUrl = __webpack_require__(/*! url */ "url").format({
      protocol: 'ws',
      hostname: hostForUrl,
      port: serverInfo.port,
      slashes: true,
      pathname: subscriptionsPath
    });
    return serverInfo;
  }

  applyMiddleware() {
    throw new Error('To use Apollo Server with an existing express application, please use apollo-server-express');
  }

  listen(...opts) {
    const _super = Object.create(null, {
      applyMiddleware: {
        get: () => super.applyMiddleware
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      const app = express_1.default();

      _super.applyMiddleware.call(this, {
        app,
        path: '/',
        bodyParserConfig: {
          limit: '50mb'
        },
        cors: typeof this.cors !== 'undefined' ? this.cors : {
          origin: '*'
        }
      });

      const httpServer = http_1.default.createServer(app);
      this.httpServer = httpServer;

      if (this.subscriptionServerOptions) {
        this.installSubscriptionHandlers(httpServer);
      }

      yield new Promise(resolve => {
        httpServer.once('listening', resolve);
        httpServer.listen(...(opts.length ? opts : [{
          port: 4000
        }]));
      });
      return this.createServerInfo(httpServer, this.subscriptionsPath);
    });
  }

  stop() {
    const _super = Object.create(null, {
      stop: {
        get: () => super.stop
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      if (this.httpServer) {
        const httpServer = this.httpServer;
        yield new Promise(resolve => httpServer.close(resolve));
        this.httpServer = undefined;
      }

      yield _super.stop.call(this);
    });
  }

}

exports.ApolloServer = ApolloServer;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/ApolloServer.js":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/ApolloServer.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cors_1 = __importDefault(__webpack_require__(/*! cors */ "cors"));

const body_parser_1 = __webpack_require__(/*! body-parser */ "body-parser");

const graphql_playground_html_1 = __webpack_require__(/*! @apollographql/graphql-playground-html */ "@apollographql/graphql-playground-html");

const apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

const accepts_1 = __importDefault(__webpack_require__(/*! accepts */ "accepts"));

const type_is_1 = __importDefault(__webpack_require__(/*! type-is */ "type-is"));

const expressApollo_1 = __webpack_require__(/*! ./expressApollo */ "./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/expressApollo.js");

var apollo_server_core_2 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

exports.GraphQLExtension = apollo_server_core_2.GraphQLExtension;

const fileUploadMiddleware = (uploadsConfig, server) => (req, res, next) => {
  if (typeof apollo_server_core_1.processFileUploads === 'function' && type_is_1.default(req, ['multipart/form-data'])) {
    apollo_server_core_1.processFileUploads(req, res, uploadsConfig).then(body => {
      req.body = body;
      next();
    }).catch(error => {
      if (error.status && error.expose) res.status(error.status);
      next(apollo_server_core_1.formatApolloErrors([error], {
        formatter: server.requestOptions.formatError,
        debug: server.requestOptions.debug
      }));
    });
  } else {
    next();
  }
};

class ApolloServer extends apollo_server_core_1.ApolloServerBase {
  constructor(config) {
    super(config);
  }

  createGraphQLServerOptions(req, res) {
    const _super = Object.create(null, {
      graphQLServerOptions: {
        get: () => super.graphQLServerOptions
      }
    });

    return __awaiter(this, void 0, void 0, function* () {
      return _super.graphQLServerOptions.call(this, {
        req,
        res
      });
    });
  }

  supportsSubscriptions() {
    return true;
  }

  supportsUploads() {
    return true;
  }

  applyMiddleware({
    app,
    path,
    cors,
    bodyParserConfig,
    disableHealthCheck,
    onHealthCheck
  }) {
    if (!path) path = '/graphql';
    const promiseWillStart = this.willStart();
    app.use(path, (_req, _res, next) => {
      promiseWillStart.then(() => next()).catch(next);
    });

    if (!disableHealthCheck) {
      app.use('/.well-known/apollo/server-health', (req, res) => {
        res.type('application/health+json');

        if (onHealthCheck) {
          onHealthCheck(req).then(() => {
            res.json({
              status: 'pass'
            });
          }).catch(() => {
            res.status(503).json({
              status: 'fail'
            });
          });
        } else {
          res.json({
            status: 'pass'
          });
        }
      });
    }

    let uploadsMiddleware;

    if (this.uploadsConfig && typeof apollo_server_core_1.processFileUploads === 'function') {
      uploadsMiddleware = fileUploadMiddleware(this.uploadsConfig, this);
    }

    this.graphqlPath = path;

    if (cors === true) {
      app.use(path, cors_1.default());
    } else if (cors !== false) {
      app.use(path, cors_1.default(cors));
    }

    if (bodyParserConfig === true) {
      app.use(path, body_parser_1.json());
    } else if (bodyParserConfig !== false) {
      app.use(path, body_parser_1.json(bodyParserConfig));
    }

    if (uploadsMiddleware) {
      app.use(path, uploadsMiddleware);
    }

    app.use(path, (req, res, next) => {
      if (this.playgroundOptions && req.method === 'GET') {
        const accept = accepts_1.default(req);
        const types = accept.types();
        const prefersHTML = types.find(x => x === 'text/html' || x === 'application/json') === 'text/html';

        if (prefersHTML) {
          const playgroundRenderPageOptions = Object.assign({
            endpoint: path,
            subscriptionEndpoint: this.subscriptionsPath
          }, this.playgroundOptions);
          res.setHeader('Content-Type', 'text/html');
          const playground = graphql_playground_html_1.renderPlaygroundPage(playgroundRenderPageOptions);
          res.write(playground);
          res.end();
          return;
        }
      }

      return expressApollo_1.graphqlExpress(() => {
        return this.createGraphQLServerOptions(req, res);
      })(req, res, next);
    });
  }

}

exports.ApolloServer = ApolloServer;

exports.registerServer = () => {
  throw new Error('Please use server.applyMiddleware instead of registerServer. This warning will be removed in the next release');
};

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/expressApollo.js":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/expressApollo.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

function graphqlExpress(options) {
  if (!options) {
    throw new Error('Apollo Server requires options.');
  }

  if (arguments.length > 1) {
    throw new Error(`Apollo Server expects exactly one argument, got ${arguments.length}`);
  }

  return (req, res, next) => {
    apollo_server_core_1.runHttpQuery([req, res], {
      method: req.method,
      options: options,
      query: req.method === 'POST' ? req.body : req.query,
      request: apollo_server_core_1.convertNodeHttpToRequest(req)
    }).then(({
      graphqlResponse,
      responseInit
    }) => {
      if (responseInit.headers) {
        for (const [name, value] of Object.entries(responseInit.headers)) {
          res.setHeader(name, value);
        }
      }

      res.write(graphqlResponse);
      res.end();
    }, error => {
      if ('HttpQueryError' !== error.name) {
        return next(error);
      }

      if (error.headers) {
        for (const [name, value] of Object.entries(error.headers)) {
          res.setHeader(name, value);
        }
      }

      res.statusCode = error.statusCode;
      res.write(error.message);
      res.end();
    });
  };
}

exports.graphqlExpress = graphqlExpress;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/index.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/index.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var apollo_server_core_1 = __webpack_require__(/*! apollo-server-core */ "apollo-server-core");

exports.GraphQLUpload = apollo_server_core_1.GraphQLUpload;
exports.GraphQLExtension = apollo_server_core_1.GraphQLExtension;
exports.gql = apollo_server_core_1.gql;
exports.ApolloError = apollo_server_core_1.ApolloError;
exports.toApolloError = apollo_server_core_1.toApolloError;
exports.SyntaxError = apollo_server_core_1.SyntaxError;
exports.ValidationError = apollo_server_core_1.ValidationError;
exports.AuthenticationError = apollo_server_core_1.AuthenticationError;
exports.ForbiddenError = apollo_server_core_1.ForbiddenError;
exports.UserInputError = apollo_server_core_1.UserInputError;
exports.defaultPlaygroundOptions = apollo_server_core_1.defaultPlaygroundOptions;

__export(__webpack_require__(/*! graphql-tools */ "./node_modules/graphpack/node_modules/graphql-tools/dist/index.js"));

__export(__webpack_require__(/*! graphql-subscriptions */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/index.js"));

var ApolloServer_1 = __webpack_require__(/*! ./ApolloServer */ "./node_modules/graphpack/node_modules/apollo-server/node_modules/apollo-server-express/dist/ApolloServer.js");

exports.ApolloServer = ApolloServer_1.ApolloServer;
exports.registerServer = ApolloServer_1.registerServer;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/apollo-utilities/lib/bundle.esm.js":
/*!********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/apollo-utilities/lib/bundle.esm.js ***!
  \********************************************************************************/
/*! exports provided: isEqual, addTypenameToDocument, argumentsObjectFromField, assign, buildQueryFromSelectionSet, canUseWeakMap, checkDocument, cloneDeep, createFragmentMap, getDefaultValues, getDirectiveInfoFromField, getDirectiveNames, getDirectivesFromDocument, getEnv, getFragmentDefinition, getFragmentDefinitions, getFragmentQueryDocument, getInclusionDirectives, getMainDefinition, getMutationDefinition, getOperationDefinition, getOperationDefinitionOrDie, getOperationName, getQueryDefinition, getStoreKeyName, graphQLResultHasError, hasClientExports, hasDirectives, isDevelopment, isEnv, isField, isIdValue, isInlineFragment, isJsonValue, isNumberValue, isProduction, isScalarValue, isTest, maybeDeepFreeze, mergeDeep, mergeDeepArray, removeArgumentsFromDocument, removeClientSetsFromDocument, removeConnectionDirectiveFromDocument, removeDirectivesFromDocument, removeFragmentSpreadFromDocument, resultKeyNameFromField, shouldInclude, storeKeyNameFromField, stripSymbols, toIdValue, tryFunctionOrLogError, valueFromNode, valueToObjectRepresentation, variablesInOperation, warnOnceInDevelopment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTypenameToDocument", function() { return addTypenameToDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argumentsObjectFromField", function() { return argumentsObjectFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildQueryFromSelectionSet", function() { return buildQueryFromSelectionSet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canUseWeakMap", function() { return canUseWeakMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkDocument", function() { return checkDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneDeep", function() { return cloneDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFragmentMap", function() { return createFragmentMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValues", function() { return getDefaultValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveInfoFromField", function() { return getDirectiveInfoFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectiveNames", function() { return getDirectiveNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDirectivesFromDocument", function() { return getDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEnv", function() { return getEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinition", function() { return getFragmentDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentDefinitions", function() { return getFragmentDefinitions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFragmentQueryDocument", function() { return getFragmentQueryDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInclusionDirectives", function() { return getInclusionDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMainDefinition", function() { return getMainDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMutationDefinition", function() { return getMutationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinition", function() { return getOperationDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationDefinitionOrDie", function() { return getOperationDefinitionOrDie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOperationName", function() { return getOperationName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQueryDefinition", function() { return getQueryDefinition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoreKeyName", function() { return getStoreKeyName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphQLResultHasError", function() { return graphQLResultHasError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasClientExports", function() { return hasClientExports; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasDirectives", function() { return hasDirectives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDevelopment", function() { return isDevelopment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEnv", function() { return isEnv; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isField", function() { return isField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdValue", function() { return isIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInlineFragment", function() { return isInlineFragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJsonValue", function() { return isJsonValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberValue", function() { return isNumberValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProduction", function() { return isProduction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isScalarValue", function() { return isScalarValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTest", function() { return isTest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeDeepFreeze", function() { return maybeDeepFreeze; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeep", function() { return mergeDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeDeepArray", function() { return mergeDeepArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeArgumentsFromDocument", function() { return removeArgumentsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClientSetsFromDocument", function() { return removeClientSetsFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeConnectionDirectiveFromDocument", function() { return removeConnectionDirectiveFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDirectivesFromDocument", function() { return removeDirectivesFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFragmentSpreadFromDocument", function() { return removeFragmentSpreadFromDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resultKeyNameFromField", function() { return resultKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shouldInclude", function() { return shouldInclude; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeKeyNameFromField", function() { return storeKeyNameFromField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripSymbols", function() { return stripSymbols; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toIdValue", function() { return toIdValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tryFunctionOrLogError", function() { return tryFunctionOrLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueFromNode", function() { return valueFromNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valueToObjectRepresentation", function() { return valueToObjectRepresentation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "variablesInOperation", function() { return variablesInOperation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "warnOnceInDevelopment", function() { return warnOnceInDevelopment; });
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql/language/visitor */ "graphql/language/visitor");
/* harmony import */ var graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ts-invariant */ "ts-invariant");
/* harmony import */ var ts_invariant__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ts_invariant__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-json-stable-stringify */ "fast-json-stable-stringify");
/* harmony import */ var fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wry/equality */ "@wry/equality");
/* harmony import */ var _wry_equality__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wry_equality__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _wry_equality__WEBPACK_IMPORTED_MODULE_4__["equal"]; });







function isScalarValue(value) {
  return ['StringValue', 'BooleanValue', 'EnumValue'].indexOf(value.kind) > -1;
}

function isNumberValue(value) {
  return ['IntValue', 'FloatValue'].indexOf(value.kind) > -1;
}

function isStringValue(value) {
  return value.kind === 'StringValue';
}

function isBooleanValue(value) {
  return value.kind === 'BooleanValue';
}

function isIntValue(value) {
  return value.kind === 'IntValue';
}

function isFloatValue(value) {
  return value.kind === 'FloatValue';
}

function isVariable(value) {
  return value.kind === 'Variable';
}

function isObjectValue(value) {
  return value.kind === 'ObjectValue';
}

function isListValue(value) {
  return value.kind === 'ListValue';
}

function isEnumValue(value) {
  return value.kind === 'EnumValue';
}

function isNullValue(value) {
  return value.kind === 'NullValue';
}

function valueToObjectRepresentation(argObj, name, value, variables) {
  if (isIntValue(value) || isFloatValue(value)) {
    argObj[name.value] = Number(value.value);
  } else if (isBooleanValue(value) || isStringValue(value)) {
    argObj[name.value] = value.value;
  } else if (isObjectValue(value)) {
    var nestedArgObj_1 = {};
    value.fields.map(function (obj) {
      return valueToObjectRepresentation(nestedArgObj_1, obj.name, obj.value, variables);
    });
    argObj[name.value] = nestedArgObj_1;
  } else if (isVariable(value)) {
    var variableValue = (variables || {})[value.name.value];
    argObj[name.value] = variableValue;
  } else if (isListValue(value)) {
    argObj[name.value] = value.values.map(function (listValue) {
      var nestedArgArrayObj = {};
      valueToObjectRepresentation(nestedArgArrayObj, name, listValue, variables);
      return nestedArgArrayObj[name.value];
    });
  } else if (isEnumValue(value)) {
    argObj[name.value] = value.value;
  } else if (isNullValue(value)) {
    argObj[name.value] = null;
  } else {
    throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("The inline argument \"" + name.value + "\" of kind \"" + value.kind + "\"" + 'is not supported. Use variables instead of inline arguments to ' + 'overcome this limitation.');
  }
}

function storeKeyNameFromField(field, variables) {
  var directivesObj = null;

  if (field.directives) {
    directivesObj = {};
    field.directives.forEach(function (directive) {
      directivesObj[directive.name.value] = {};

      if (directive.arguments) {
        directive.arguments.forEach(function (_a) {
          var name = _a.name,
              value = _a.value;
          return valueToObjectRepresentation(directivesObj[directive.name.value], name, value, variables);
        });
      }
    });
  }

  var argObj = null;

  if (field.arguments && field.arguments.length) {
    argObj = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj, name, value, variables);
    });
  }

  return getStoreKeyName(field.name.value, argObj, directivesObj);
}

var KNOWN_DIRECTIVES = ['connection', 'include', 'skip', 'client', 'rest', 'export'];

function getStoreKeyName(fieldName, args, directives) {
  if (directives && directives['connection'] && directives['connection']['key']) {
    if (directives['connection']['filter'] && directives['connection']['filter'].length > 0) {
      var filterKeys = directives['connection']['filter'] ? directives['connection']['filter'] : [];
      filterKeys.sort();
      var queryArgs_1 = args;
      var filteredArgs_1 = {};
      filterKeys.forEach(function (key) {
        filteredArgs_1[key] = queryArgs_1[key];
      });
      return directives['connection']['key'] + "(" + JSON.stringify(filteredArgs_1) + ")";
    } else {
      return directives['connection']['key'];
    }
  }

  var completeFieldName = fieldName;

  if (args) {
    var stringifiedArgs = fast_json_stable_stringify__WEBPACK_IMPORTED_MODULE_3___default()(args);
    completeFieldName += "(" + stringifiedArgs + ")";
  }

  if (directives) {
    Object.keys(directives).forEach(function (key) {
      if (KNOWN_DIRECTIVES.indexOf(key) !== -1) return;

      if (directives[key] && Object.keys(directives[key]).length) {
        completeFieldName += "@" + key + "(" + JSON.stringify(directives[key]) + ")";
      } else {
        completeFieldName += "@" + key;
      }
    });
  }

  return completeFieldName;
}

function argumentsObjectFromField(field, variables) {
  if (field.arguments && field.arguments.length) {
    var argObj_1 = {};
    field.arguments.forEach(function (_a) {
      var name = _a.name,
          value = _a.value;
      return valueToObjectRepresentation(argObj_1, name, value, variables);
    });
    return argObj_1;
  }

  return null;
}

function resultKeyNameFromField(field) {
  return field.alias ? field.alias.value : field.name.value;
}

function isField(selection) {
  return selection.kind === 'Field';
}

function isInlineFragment(selection) {
  return selection.kind === 'InlineFragment';
}

function isIdValue(idObject) {
  return idObject && idObject.type === 'id' && typeof idObject.generated === 'boolean';
}

function toIdValue(idConfig, generated) {
  if (generated === void 0) {
    generated = false;
  }

  return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
    type: 'id',
    generated: generated
  }, typeof idConfig === 'string' ? {
    id: idConfig,
    typename: undefined
  } : idConfig);
}

function isJsonValue(jsonObject) {
  return jsonObject != null && typeof jsonObject === 'object' && jsonObject.type === 'json';
}

function defaultValueFromVariable(node) {
  throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Variable nodes are not supported by valueFromNode");
}

function valueFromNode(node, onVariable) {
  if (onVariable === void 0) {
    onVariable = defaultValueFromVariable;
  }

  switch (node.kind) {
    case 'Variable':
      return onVariable(node);

    case 'NullValue':
      return null;

    case 'IntValue':
      return parseInt(node.value, 10);

    case 'FloatValue':
      return parseFloat(node.value);

    case 'ListValue':
      return node.values.map(function (v) {
        return valueFromNode(v, onVariable);
      });

    case 'ObjectValue':
      {
        var value = {};

        for (var _i = 0, _a = node.fields; _i < _a.length; _i++) {
          var field = _a[_i];
          value[field.name.value] = valueFromNode(field.value, onVariable);
        }

        return value;
      }

    default:
      return node.value;
  }
}

function getDirectiveInfoFromField(field, variables) {
  if (field.directives && field.directives.length) {
    var directiveObj_1 = {};
    field.directives.forEach(function (directive) {
      directiveObj_1[directive.name.value] = argumentsObjectFromField(directive, variables);
    });
    return directiveObj_1;
  }

  return null;
}

function shouldInclude(selection, variables) {
  if (variables === void 0) {
    variables = {};
  }

  return getInclusionDirectives(selection.directives).every(function (_a) {
    var directive = _a.directive,
        ifArgument = _a.ifArgument;
    var evaledValue = false;

    if (ifArgument.value.kind === 'Variable') {
      evaledValue = variables[ifArgument.value.name.value];
       false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(evaledValue !== void 0, "Invalid variable referenced in @" + directive.name.value + " directive.");
    } else {
      evaledValue = ifArgument.value.value;
    }

    return directive.name.value === 'skip' ? !evaledValue : evaledValue;
  });
}

function getDirectiveNames(doc) {
  var names = [];
  Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
    Directive: function (node) {
      names.push(node.name.value);
    }
  });
  return names;
}

function hasDirectives(names, doc) {
  return getDirectiveNames(doc).some(function (name) {
    return names.indexOf(name) > -1;
  });
}

function hasClientExports(document) {
  return document && hasDirectives(['client'], document) && hasDirectives(['export'], document);
}

function isInclusionDirective(_a) {
  var value = _a.name.value;
  return value === 'skip' || value === 'include';
}

function getInclusionDirectives(directives) {
  return directives ? directives.filter(isInclusionDirective).map(function (directive) {
    var directiveArguments = directive.arguments;
    var directiveName = directive.name.value;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(directiveArguments && directiveArguments.length === 1, "Incorrect number of arguments for the @" + directiveName + " directive.");
    var ifArgument = directiveArguments[0];
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifArgument.name && ifArgument.name.value === 'if', "Invalid argument for the @" + directiveName + " directive.");
    var ifValue = ifArgument.value;
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(ifValue && (ifValue.kind === 'Variable' || ifValue.kind === 'BooleanValue'), "Argument for the @" + directiveName + " directive must be a variable or a boolean value.");
    return {
      directive: directive,
      ifArgument: ifArgument
    };
  }) : [];
}

function getFragmentQueryDocument(document, fragmentName) {
  var actualFragmentName = fragmentName;
  var fragments = [];
  document.definitions.forEach(function (definition) {
    if (definition.kind === 'OperationDefinition') {
      throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Found a " + definition.operation + " operation" + (definition.name ? " named '" + definition.name.value + "'" : '') + ". " + 'No operations are allowed when using a fragment as a query. Only fragments are allowed.');
    }

    if (definition.kind === 'FragmentDefinition') {
      fragments.push(definition);
    }
  });

  if (typeof actualFragmentName === 'undefined') {
     false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragments.length === 1, "Found " + fragments.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment.");
    actualFragmentName = fragments[0].name.value;
  }

  var query = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, document), {
    definitions: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([{
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{
          kind: 'FragmentSpread',
          name: {
            kind: 'Name',
            value: actualFragmentName
          }
        }]
      }
    }], document.definitions)
  });

  return query;
}

function assign(target) {
  var sources = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }

  sources.forEach(function (source) {
    if (typeof source === 'undefined' || source === null) {
      return;
    }

    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
  });
  return target;
}

function getMutationDefinition(doc) {
  checkDocument(doc);
  var mutationDef = doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition' && definition.operation === 'mutation';
  })[0];
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(mutationDef, 'Must contain a mutation definition.');
  return mutationDef;
}

function checkDocument(doc) {
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc && doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
  var operations = doc.definitions.filter(function (d) {
    return d.kind !== 'FragmentDefinition';
  }).map(function (definition) {
    if (definition.kind !== 'OperationDefinition') {
      throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]("Schema type definitions not allowed in queries. Found: \"" + definition.kind + "\"");
    }

    return definition;
  });
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(operations.length <= 1, "Ambiguous GraphQL document: contains " + operations.length + " operations");
  return doc;
}

function getOperationDefinition(doc) {
  checkDocument(doc);
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition';
  })[0];
}

function getOperationDefinitionOrDie(document) {
  var def = getOperationDefinition(document);
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(def, "GraphQL document is missing an operation");
  return def;
}

function getOperationName(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'OperationDefinition' && definition.name;
  }).map(function (x) {
    return x.name.value;
  })[0] || null;
}

function getFragmentDefinitions(doc) {
  return doc.definitions.filter(function (definition) {
    return definition.kind === 'FragmentDefinition';
  });
}

function getQueryDefinition(doc) {
  var queryDef = getOperationDefinition(doc);
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(queryDef && queryDef.operation === 'query', 'Must contain a query definition.');
  return queryDef;
}

function getFragmentDefinition(doc) {
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.kind === 'Document', "Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a \"gql\" tag? http://docs.apollostack.com/apollo-client/core.html#gql");
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(doc.definitions.length <= 1, 'Fragment must have exactly one definition.');
  var fragmentDef = doc.definitions[0];
   false ? undefined : Object(ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"])(fragmentDef.kind === 'FragmentDefinition', 'Must be a fragment definition.');
  return fragmentDef;
}

function getMainDefinition(queryDoc) {
  checkDocument(queryDoc);
  var fragmentDefinition;

  for (var _i = 0, _a = queryDoc.definitions; _i < _a.length; _i++) {
    var definition = _a[_i];

    if (definition.kind === 'OperationDefinition') {
      var operation = definition.operation;

      if (operation === 'query' || operation === 'mutation' || operation === 'subscription') {
        return definition;
      }
    }

    if (definition.kind === 'FragmentDefinition' && !fragmentDefinition) {
      fragmentDefinition = definition;
    }
  }

  if (fragmentDefinition) {
    return fragmentDefinition;
  }

  throw  false ? undefined : new ts_invariant__WEBPACK_IMPORTED_MODULE_1__["InvariantError"]('Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.');
}

function createFragmentMap(fragments) {
  if (fragments === void 0) {
    fragments = [];
  }

  var symTable = {};
  fragments.forEach(function (fragment) {
    symTable[fragment.name.value] = fragment;
  });
  return symTable;
}

function getDefaultValues(definition) {
  if (definition && definition.variableDefinitions && definition.variableDefinitions.length) {
    var defaultValues = definition.variableDefinitions.filter(function (_a) {
      var defaultValue = _a.defaultValue;
      return defaultValue;
    }).map(function (_a) {
      var variable = _a.variable,
          defaultValue = _a.defaultValue;
      var defaultValueObj = {};
      valueToObjectRepresentation(defaultValueObj, variable.name, defaultValue);
      return defaultValueObj;
    });
    return assign.apply(void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])([{}], defaultValues));
  }

  return {};
}

function variablesInOperation(operation) {
  var names = new Set();

  if (operation.variableDefinitions) {
    for (var _i = 0, _a = operation.variableDefinitions; _i < _a.length; _i++) {
      var definition = _a[_i];
      names.add(definition.variable.name.value);
    }
  }

  return names;
}

function filterInPlace(array, test, context) {
  var target = 0;
  array.forEach(function (elem, i) {
    if (test.call(this, elem, i, array)) {
      array[target++] = elem;
    }
  }, context);
  array.length = target;
  return array;
}

var TYPENAME_FIELD = {
  kind: 'Field',
  name: {
    kind: 'Name',
    value: '__typename'
  }
};

function isEmpty(op, fragments) {
  return op.selectionSet.selections.every(function (selection) {
    return selection.kind === 'FragmentSpread' && isEmpty(fragments[selection.name.value], fragments);
  });
}

function nullIfDocIsEmpty(doc) {
  return isEmpty(getOperationDefinition(doc) || getFragmentDefinition(doc), createFragmentMap(getFragmentDefinitions(doc))) ? null : doc;
}

function getDirectiveMatcher(directives) {
  return function directiveMatcher(directive) {
    return directives.some(function (dir) {
      return dir.name && dir.name === directive.name.value || dir.test && dir.test(directive);
    });
  };
}

function removeDirectivesFromDocument(directives, doc) {
  var variablesInUse = Object.create(null);
  var variablesToRemove = [];
  var fragmentSpreadsInUse = Object.create(null);
  var fragmentSpreadsToRemove = [];
  var modifiedDoc = nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
    Variable: {
      enter: function (node, _key, parent) {
        if (parent.kind !== 'VariableDefinition') {
          variablesInUse[node.name.value] = true;
        }
      }
    },
    Field: {
      enter: function (node) {
        if (directives && node.directives) {
          var shouldRemoveField = directives.some(function (directive) {
            return directive.remove;
          });

          if (shouldRemoveField && node.directives && node.directives.some(getDirectiveMatcher(directives))) {
            if (node.arguments) {
              node.arguments.forEach(function (arg) {
                if (arg.value.kind === 'Variable') {
                  variablesToRemove.push({
                    name: arg.value.name.value
                  });
                }
              });
            }

            if (node.selectionSet) {
              getAllFragmentSpreadsFromSelectionSet(node.selectionSet).forEach(function (frag) {
                fragmentSpreadsToRemove.push({
                  name: frag.name.value
                });
              });
            }

            return null;
          }
        }
      }
    },
    FragmentSpread: {
      enter: function (node) {
        fragmentSpreadsInUse[node.name.value] = true;
      }
    },
    Directive: {
      enter: function (node) {
        if (getDirectiveMatcher(directives)(node)) {
          return null;
        }
      }
    }
  }));

  if (modifiedDoc && filterInPlace(variablesToRemove, function (v) {
    return !variablesInUse[v.name];
  }).length) {
    modifiedDoc = removeArgumentsFromDocument(variablesToRemove, modifiedDoc);
  }

  if (modifiedDoc && filterInPlace(fragmentSpreadsToRemove, function (fs) {
    return !fragmentSpreadsInUse[fs.name];
  }).length) {
    modifiedDoc = removeFragmentSpreadFromDocument(fragmentSpreadsToRemove, modifiedDoc);
  }

  return modifiedDoc;
}

function addTypenameToDocument(doc) {
  return Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(checkDocument(doc), {
    SelectionSet: {
      enter: function (node, _key, parent) {
        if (parent && parent.kind === 'OperationDefinition') {
          return;
        }

        var selections = node.selections;

        if (!selections) {
          return;
        }

        var skip = selections.some(function (selection) {
          return isField(selection) && (selection.name.value === '__typename' || selection.name.value.lastIndexOf('__', 0) === 0);
        });

        if (skip) {
          return;
        }

        var field = parent;

        if (isField(field) && field.directives && field.directives.some(function (d) {
          return d.name.value === 'export';
        })) {
          return;
        }

        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), {
          selections: Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spreadArrays"])(selections, [TYPENAME_FIELD])
        });
      }
    }
  });
}

var connectionRemoveConfig = {
  test: function (directive) {
    var willRemove = directive.name.value === 'connection';

    if (willRemove) {
      if (!directive.arguments || !directive.arguments.some(function (arg) {
        return arg.name.value === 'key';
      })) {
         false || ts_invariant__WEBPACK_IMPORTED_MODULE_1__["invariant"].warn('Removing an @connection directive even though it does not have a key. ' + 'You may want to use the key parameter to specify a store key.');
      }
    }

    return willRemove;
  }
};

function removeConnectionDirectiveFromDocument(doc) {
  return removeDirectivesFromDocument([connectionRemoveConfig], checkDocument(doc));
}

function hasDirectivesInSelectionSet(directives, selectionSet, nestedCheck) {
  if (nestedCheck === void 0) {
    nestedCheck = true;
  }

  return selectionSet && selectionSet.selections && selectionSet.selections.some(function (selection) {
    return hasDirectivesInSelection(directives, selection, nestedCheck);
  });
}

function hasDirectivesInSelection(directives, selection, nestedCheck) {
  if (nestedCheck === void 0) {
    nestedCheck = true;
  }

  if (!isField(selection)) {
    return true;
  }

  if (!selection.directives) {
    return false;
  }

  return selection.directives.some(getDirectiveMatcher(directives)) || nestedCheck && hasDirectivesInSelectionSet(directives, selection.selectionSet, nestedCheck);
}

function getDirectivesFromDocument(directives, doc) {
  checkDocument(doc);
  var parentPath;
  return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
    SelectionSet: {
      enter: function (node, _key, _parent, path) {
        var currentPath = path.join('-');

        if (!parentPath || currentPath === parentPath || !currentPath.startsWith(parentPath)) {
          if (node.selections) {
            var selectionsWithDirectives = node.selections.filter(function (selection) {
              return hasDirectivesInSelection(directives, selection);
            });

            if (hasDirectivesInSelectionSet(directives, node, false)) {
              parentPath = currentPath;
            }

            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), {
              selections: selectionsWithDirectives
            });
          } else {
            return null;
          }
        }
      }
    }
  }));
}

function getArgumentMatcher(config) {
  return function argumentMatcher(argument) {
    return config.some(function (aConfig) {
      return argument.value && argument.value.kind === 'Variable' && argument.value.name && (aConfig.name === argument.value.name.value || aConfig.test && aConfig.test(argument));
    });
  };
}

function removeArgumentsFromDocument(config, doc) {
  var argMatcher = getArgumentMatcher(config);
  return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
    OperationDefinition: {
      enter: function (node) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), {
          variableDefinitions: node.variableDefinitions.filter(function (varDef) {
            return !config.some(function (arg) {
              return arg.name === varDef.variable.name.value;
            });
          })
        });
      }
    },
    Field: {
      enter: function (node) {
        var shouldRemoveField = config.some(function (argConfig) {
          return argConfig.remove;
        });

        if (shouldRemoveField) {
          var argMatchCount_1 = 0;
          node.arguments.forEach(function (arg) {
            if (argMatcher(arg)) {
              argMatchCount_1 += 1;
            }
          });

          if (argMatchCount_1 === 1) {
            return null;
          }
        }
      }
    },
    Argument: {
      enter: function (node) {
        if (argMatcher(node)) {
          return null;
        }
      }
    }
  }));
}

function removeFragmentSpreadFromDocument(config, doc) {
  function enter(node) {
    if (config.some(function (def) {
      return def.name === node.name.value;
    })) {
      return null;
    }
  }

  return nullIfDocIsEmpty(Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(doc, {
    FragmentSpread: {
      enter: enter
    },
    FragmentDefinition: {
      enter: enter
    }
  }));
}

function getAllFragmentSpreadsFromSelectionSet(selectionSet) {
  var allFragments = [];
  selectionSet.selections.forEach(function (selection) {
    if ((isField(selection) || isInlineFragment(selection)) && selection.selectionSet) {
      getAllFragmentSpreadsFromSelectionSet(selection.selectionSet).forEach(function (frag) {
        return allFragments.push(frag);
      });
    } else if (selection.kind === 'FragmentSpread') {
      allFragments.push(selection);
    }
  });
  return allFragments;
}

function buildQueryFromSelectionSet(document) {
  var definition = getMainDefinition(document);
  var definitionOperation = definition.operation;

  if (definitionOperation === 'query') {
    return document;
  }

  var modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(document, {
    OperationDefinition: {
      enter: function (node) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({}, node), {
          operation: 'query'
        });
      }
    }
  });
  return modifiedDoc;
}

function removeClientSetsFromDocument(document) {
  checkDocument(document);
  var modifiedDoc = removeDirectivesFromDocument([{
    test: function (directive) {
      return directive.name.value === 'client';
    },
    remove: true
  }], document);

  if (modifiedDoc) {
    modifiedDoc = Object(graphql_language_visitor__WEBPACK_IMPORTED_MODULE_0__["visit"])(modifiedDoc, {
      FragmentDefinition: {
        enter: function (node) {
          if (node.selectionSet) {
            var isTypenameOnly = node.selectionSet.selections.every(function (selection) {
              return isField(selection) && selection.name.value === '__typename';
            });

            if (isTypenameOnly) {
              return null;
            }
          }
        }
      }
    });
  }

  return modifiedDoc;
}

var canUseWeakMap = typeof WeakMap === 'function' && !(typeof navigator === 'object' && navigator.product === 'ReactNative');
var toString = Object.prototype.toString;

function cloneDeep(value) {
  return cloneDeepHelper(value, new Map());
}

function cloneDeepHelper(val, seen) {
  switch (toString.call(val)) {
    case "[object Array]":
      {
        if (seen.has(val)) return seen.get(val);
        var copy_1 = val.slice(0);
        seen.set(val, copy_1);
        copy_1.forEach(function (child, i) {
          copy_1[i] = cloneDeepHelper(child, seen);
        });
        return copy_1;
      }

    case "[object Object]":
      {
        if (seen.has(val)) return seen.get(val);
        var copy_2 = Object.create(Object.getPrototypeOf(val));
        seen.set(val, copy_2);
        Object.keys(val).forEach(function (key) {
          copy_2[key] = cloneDeepHelper(val[key], seen);
        });
        return copy_2;
      }

    default:
      return val;
  }
}

function getEnv() {
  if (typeof process !== 'undefined' && "development") {
    return "development";
  }

  return 'development';
}

function isEnv(env) {
  return getEnv() === env;
}

function isProduction() {
  return isEnv('production') === true;
}

function isDevelopment() {
  return isEnv('development') === true;
}

function isTest() {
  return isEnv('test') === true;
}

function tryFunctionOrLogError(f) {
  try {
    return f();
  } catch (e) {
    if (console.error) {
      console.error(e);
    }
  }
}

function graphQLResultHasError(result) {
  return result.errors && result.errors.length;
}

function deepFreeze(o) {
  Object.freeze(o);
  Object.getOwnPropertyNames(o).forEach(function (prop) {
    if (o[prop] !== null && (typeof o[prop] === 'object' || typeof o[prop] === 'function') && !Object.isFrozen(o[prop])) {
      deepFreeze(o[prop]);
    }
  });
  return o;
}

function maybeDeepFreeze(obj) {
  if (isDevelopment() || isTest()) {
    var symbolIsPolyfilled = typeof Symbol === 'function' && typeof Symbol('') === 'string';

    if (!symbolIsPolyfilled) {
      return deepFreeze(obj);
    }
  }

  return obj;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;

function mergeDeep() {
  var sources = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    sources[_i] = arguments[_i];
  }

  return mergeDeepArray(sources);
}

function mergeDeepArray(sources) {
  var target = sources[0] || {};
  var count = sources.length;

  if (count > 1) {
    var pastCopies = [];
    target = shallowCopyForMerge(target, pastCopies);

    for (var i = 1; i < count; ++i) {
      target = mergeHelper(target, sources[i], pastCopies);
    }
  }

  return target;
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function mergeHelper(target, source, pastCopies) {
  if (isObject(source) && isObject(target)) {
    if (Object.isExtensible && !Object.isExtensible(target)) {
      target = shallowCopyForMerge(target, pastCopies);
    }

    Object.keys(source).forEach(function (sourceKey) {
      var sourceValue = source[sourceKey];

      if (hasOwnProperty.call(target, sourceKey)) {
        var targetValue = target[sourceKey];

        if (sourceValue !== targetValue) {
          target[sourceKey] = mergeHelper(shallowCopyForMerge(targetValue, pastCopies), sourceValue, pastCopies);
        }
      } else {
        target[sourceKey] = sourceValue;
      }
    });
    return target;
  }

  return source;
}

function shallowCopyForMerge(value, pastCopies) {
  if (value !== null && typeof value === 'object' && pastCopies.indexOf(value) < 0) {
    if (Array.isArray(value)) {
      value = value.slice(0);
    } else {
      value = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({
        __proto__: Object.getPrototypeOf(value)
      }, value);
    }

    pastCopies.push(value);
  }

  return value;
}

var haveWarned = Object.create({});

function warnOnceInDevelopment(msg, type) {
  if (type === void 0) {
    type = 'warn';
  }

  if (!isProduction() && !haveWarned[msg]) {
    if (!isTest()) {
      haveWarned[msg] = true;
    }

    if (type === 'error') {
      console.error(msg);
    } else {
      console.warn(msg);
    }
  }
}

function stripSymbols(data) {
  return JSON.parse(JSON.stringify(data));
}



/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-subscriptions/dist/index.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var pubsub_engine_1 = __webpack_require__(/*! ./pubsub-engine */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-engine.js");

exports.PubSubEngine = pubsub_engine_1.PubSubEngine;

var pubsub_1 = __webpack_require__(/*! ./pubsub */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub.js");

exports.PubSub = pubsub_1.PubSub;

var with_filter_1 = __webpack_require__(/*! ./with-filter */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/with-filter.js");

exports.withFilter = with_filter_1.withFilter;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-async-iterator.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-async-iterator.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterall_1 = __webpack_require__(/*! iterall */ "iterall");

var PubSubAsyncIterator = function () {
  function PubSubAsyncIterator(pubsub, eventNames) {
    this.pubsub = pubsub;
    this.pullQueue = [];
    this.pushQueue = [];
    this.running = true;
    this.allSubscribed = null;
    this.eventsArray = typeof eventNames === 'string' ? [eventNames] : eventNames;
  }

  PubSubAsyncIterator.prototype.next = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!!this.allSubscribed) return [3, 2];
            return [4, this.allSubscribed = this.subscribeAll()];

          case 1:
            _a.sent();

            _a.label = 2;

          case 2:
            return [2, this.pullValue()];
        }
      });
    });
  };

  PubSubAsyncIterator.prototype.return = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.emptyQueue()];

          case 1:
            _a.sent();

            return [2, {
              value: undefined,
              done: true
            }];
        }
      });
    });
  };

  PubSubAsyncIterator.prototype.throw = function (error) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.emptyQueue()];

          case 1:
            _a.sent();

            return [2, Promise.reject(error)];
        }
      });
    });
  };

  PubSubAsyncIterator.prototype[iterall_1.$$asyncIterator] = function () {
    return this;
  };

  PubSubAsyncIterator.prototype.pushValue = function (event) {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4, this.allSubscribed];

          case 1:
            _a.sent();

            if (this.pullQueue.length !== 0) {
              this.pullQueue.shift()(this.running ? {
                value: event,
                done: false
              } : {
                value: undefined,
                done: true
              });
            } else {
              this.pushQueue.push(event);
            }

            return [2];
        }
      });
    });
  };

  PubSubAsyncIterator.prototype.pullValue = function () {
    var _this = this;

    return new Promise(function (resolve) {
      if (_this.pushQueue.length !== 0) {
        resolve(_this.running ? {
          value: _this.pushQueue.shift(),
          done: false
        } : {
          value: undefined,
          done: true
        });
      } else {
        _this.pullQueue.push(resolve);
      }
    });
  };

  PubSubAsyncIterator.prototype.emptyQueue = function () {
    return __awaiter(this, void 0, void 0, function () {
      var subscriptionIds;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            if (!this.running) return [3, 2];
            this.running = false;
            this.pullQueue.forEach(function (resolve) {
              return resolve({
                value: undefined,
                done: true
              });
            });
            this.pullQueue.length = 0;
            this.pushQueue.length = 0;
            return [4, this.allSubscribed];

          case 1:
            subscriptionIds = _a.sent();

            if (subscriptionIds) {
              this.unsubscribeAll(subscriptionIds);
            }

            _a.label = 2;

          case 2:
            return [2];
        }
      });
    });
  };

  PubSubAsyncIterator.prototype.subscribeAll = function () {
    var _this = this;

    return Promise.all(this.eventsArray.map(function (eventName) {
      return _this.pubsub.subscribe(eventName, _this.pushValue.bind(_this), {});
    }));
  };

  PubSubAsyncIterator.prototype.unsubscribeAll = function (subscriptionIds) {
    for (var _i = 0, subscriptionIds_1 = subscriptionIds; _i < subscriptionIds_1.length; _i++) {
      var subscriptionId = subscriptionIds_1[_i];
      this.pubsub.unsubscribe(subscriptionId);
    }
  };

  return PubSubAsyncIterator;
}();

exports.PubSubAsyncIterator = PubSubAsyncIterator;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-engine.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-engine.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var pubsub_async_iterator_1 = __webpack_require__(/*! ./pubsub-async-iterator */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-async-iterator.js");

var PubSubEngine = function () {
  function PubSubEngine() {}

  PubSubEngine.prototype.asyncIterator = function (triggers) {
    return new pubsub_async_iterator_1.PubSubAsyncIterator(this, triggers);
  };

  return PubSubEngine;
}();

exports.PubSubEngine = PubSubEngine;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __extends = this && this.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var events_1 = __webpack_require__(/*! events */ "events");

var pubsub_engine_1 = __webpack_require__(/*! ./pubsub-engine */ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/pubsub-engine.js");

var PubSub = function (_super) {
  __extends(PubSub, _super);

  function PubSub(options) {
    if (options === void 0) {
      options = {};
    }

    var _this = _super.call(this) || this;

    _this.ee = options.eventEmitter || new events_1.EventEmitter();
    _this.subscriptions = {};
    _this.subIdCounter = 0;
    return _this;
  }

  PubSub.prototype.publish = function (triggerName, payload) {
    this.ee.emit(triggerName, payload);
    return Promise.resolve();
  };

  PubSub.prototype.subscribe = function (triggerName, onMessage) {
    this.ee.addListener(triggerName, onMessage);
    this.subIdCounter = this.subIdCounter + 1;
    this.subscriptions[this.subIdCounter] = [triggerName, onMessage];
    return Promise.resolve(this.subIdCounter);
  };

  PubSub.prototype.unsubscribe = function (subId) {
    var _a = this.subscriptions[subId],
        triggerName = _a[0],
        onMessage = _a[1];
    delete this.subscriptions[subId];
    this.ee.removeListener(triggerName, onMessage);
  };

  return PubSub;
}(pubsub_engine_1.PubSubEngine);

exports.PubSub = PubSub;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-subscriptions/dist/with-filter.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-subscriptions/dist/with-filter.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterall_1 = __webpack_require__(/*! iterall */ "iterall");

exports.withFilter = function (asyncIteratorFn, filterFn) {
  return function (rootValue, args, context, info) {
    var _a;

    var asyncIterator = asyncIteratorFn(rootValue, args, context, info);

    var getNextPromise = function () {
      return asyncIterator.next().then(function (payload) {
        if (payload.done === true) {
          return payload;
        }

        return Promise.resolve(filterFn(payload.value, args, context, info)).catch(function () {
          return false;
        }).then(function (filterResult) {
          if (filterResult === true) {
            return payload;
          }

          return getNextPromise();
        });
      });
    };

    return _a = {
      next: function () {
        return getNextPromise();
      },
      return: function () {
        return asyncIterator.return();
      },
      throw: function (error) {
        return asyncIterator.throw(error);
      }
    }, _a[iterall_1.$$asyncIterator] = function () {
      return this;
    }, _a;
  };
};

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/SchemaError.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/SchemaError.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

Object.defineProperty(exports, "__esModule", {
  value: true
}); // @schemaDefinition: A GraphQL type schema in shorthand
// @resolvers: Definitions for resolvers to be merged with schema

var SchemaError =
/** @class */
function (_super) {
  __extends(SchemaError, _super);

  function SchemaError(message) {
    var _this = _super.call(this, message) || this;

    _this.message = message;
    Error.captureStackTrace(_this, _this.constructor);
    return _this;
  }

  return SchemaError;
}(Error);

exports.default = SchemaError;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _1 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js");

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var transforms_1 = __webpack_require__(/*! ../transforms/transforms */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transforms.js");

var _2 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js");

var ConvertEnumValues_1 = __webpack_require__(/*! ../transforms/ConvertEnumValues */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js");

function addResolveFunctionsToSchema(options, legacyInputResolvers, legacyInputValidationOptions) {
  if (options instanceof graphql_1.GraphQLSchema) {
    console.warn('The addResolveFunctionsToSchema function takes named options now; see IAddResolveFunctionsToSchemaOptions');
    options = {
      schema: options,
      resolvers: legacyInputResolvers,
      resolverValidationOptions: legacyInputValidationOptions
    };
  }

  var schema = options.schema,
      inputResolvers = options.resolvers,
      _a = options.resolverValidationOptions,
      resolverValidationOptions = _a === void 0 ? {} : _a,
      _b = options.inheritResolversFromInterfaces,
      inheritResolversFromInterfaces = _b === void 0 ? false : _b;
  var _c = resolverValidationOptions.allowResolversNotInSchema,
      allowResolversNotInSchema = _c === void 0 ? false : _c,
      requireResolversForResolveType = resolverValidationOptions.requireResolversForResolveType;
  var resolvers = inheritResolversFromInterfaces ? _2.extendResolversFromInterfaces(schema, inputResolvers) : inputResolvers; // Used to map the external value of an enum to its internal value, when
  // that internal value is provided by a resolver.

  var enumValueMap = Object.create(null);
  Object.keys(resolvers).forEach(function (typeName) {
    var resolverValue = resolvers[typeName];
    var resolverType = typeof resolverValue;

    if (resolverType !== 'object' && resolverType !== 'function') {
      throw new _1.SchemaError("\"" + typeName + "\" defined in resolvers, but has invalid value \"" + resolverValue + "\". A resolver's value " + "must be of type object or function.");
    }

    var type = schema.getType(typeName);

    if (!type && typeName !== '__schema') {
      if (allowResolversNotInSchema) {
        return;
      }

      throw new _1.SchemaError("\"" + typeName + "\" defined in resolvers, but not in schema");
    }

    Object.keys(resolverValue).forEach(function (fieldName) {
      if (fieldName.startsWith('__')) {
        // this is for isTypeOf and resolveType and all the other stuff.
        type[fieldName.substring(2)] = resolverValue[fieldName];
        return;
      }

      if (type instanceof graphql_1.GraphQLScalarType) {
        type[fieldName] = resolverValue[fieldName];
        return;
      }

      if (type instanceof graphql_1.GraphQLEnumType) {
        if (!type.getValue(fieldName)) {
          if (allowResolversNotInSchema) {
            return;
          }

          throw new _1.SchemaError(typeName + "." + fieldName + " was defined in resolvers, but enum is not in schema");
        } // We've encountered an enum resolver that is being used to provide an
        // internal enum value.
        // Reference: https://www.apollographql.com/docs/graphql-tools/scalars.html#internal-values
        //
        // We're storing a map of the current enums external facing value to
        // its resolver provided internal value. This map is used to transform
        // the current schema to a new schema that includes enums with the new
        // internal value.


        enumValueMap[type.name] = enumValueMap[type.name] || {};
        enumValueMap[type.name][fieldName] = resolverValue[fieldName];
        return;
      } // object type


      var fields = getFieldsForType(type);

      if (!fields) {
        if (allowResolversNotInSchema) {
          return;
        }

        throw new _1.SchemaError(typeName + " was defined in resolvers, but it's not an object");
      }

      if (!fields[fieldName]) {
        if (allowResolversNotInSchema) {
          return;
        }

        throw new _1.SchemaError(typeName + "." + fieldName + " defined in resolvers, but not in schema");
      }

      var field = fields[fieldName];
      var fieldResolve = resolverValue[fieldName];

      if (typeof fieldResolve === 'function') {
        // for convenience. Allows shorter syntax in resolver definition file
        setFieldProperties(field, {
          resolve: fieldResolve
        });
      } else {
        if (typeof fieldResolve !== 'object') {
          throw new _1.SchemaError("Resolver " + typeName + "." + fieldName + " must be object or function");
        }

        setFieldProperties(field, fieldResolve);
      }
    });
  });

  _2.checkForResolveTypeResolver(schema, requireResolversForResolveType); // If there are any enum resolver functions (that are used to return
  // internal enum values), create a new schema that includes enums with the
  // new internal facing values.


  var updatedSchema = transforms_1.applySchemaTransforms(schema, [new ConvertEnumValues_1.default(enumValueMap)]);
  return updatedSchema;
}

function getFieldsForType(type) {
  if (type instanceof graphql_1.GraphQLObjectType || type instanceof graphql_1.GraphQLInterfaceType) {
    return type.getFields();
  } else {
    return undefined;
  }
}

function setFieldProperties(field, propertiesObj) {
  Object.keys(propertiesObj).forEach(function (propertyName) {
    field[propertyName] = propertiesObj[propertyName];
  });
}

exports.default = addResolveFunctionsToSchema;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql"); // wraps all resolve functions of query, mutation or subscription fields
// with the provided function to simulate a root schema level resolve funciton


function addSchemaLevelResolveFunction(schema, fn) {
  // TODO test that schema is a schema, fn is a function
  var rootTypes = [schema.getQueryType(), schema.getMutationType(), schema.getSubscriptionType()].filter(function (x) {
    return !!x;
  });
  rootTypes.forEach(function (type) {
    // XXX this should run at most once per request to simulate a true root resolver
    // for graphql-js this is an approximation that works with queries but not mutations
    var rootResolveFn = runAtMostOncePerRequest(fn);
    var fields = type.getFields();
    Object.keys(fields).forEach(function (fieldName) {
      // XXX if the type is a subscription, a same query AST will be ran multiple times so we
      // deactivate here the runOnce if it's a subscription. This may not be optimal though...
      if (type === schema.getSubscriptionType()) {
        fields[fieldName].resolve = wrapResolver(fields[fieldName].resolve, fn);
      } else {
        fields[fieldName].resolve = wrapResolver(fields[fieldName].resolve, rootResolveFn);
      }
    });
  });
} // XXX badly named function. this doesn't really wrap, it just chains resolvers...


function wrapResolver(innerResolver, outerResolver) {
  return function (obj, args, ctx, info) {
    return Promise.resolve(outerResolver(obj, args, ctx, info)).then(function (root) {
      if (innerResolver) {
        return innerResolver(root, args, ctx, info);
      }

      return graphql_1.defaultFieldResolver(root, args, ctx, info);
    });
  };
} // XXX this function only works for resolvers
// XXX very hacky way to remember if the function
// already ran for this request. This will only work
// if people don't actually cache the operation.
// if they do cache the operation, they will have to
// manually remove the __runAtMostOnce before every request.


function runAtMostOncePerRequest(fn) {
  var value;
  var randomNumber = Math.random();
  return function (root, args, ctx, info) {
    if (!info.operation['__runAtMostOnce']) {
      info.operation['__runAtMostOnce'] = {};
    }

    if (!info.operation['__runAtMostOnce'][randomNumber]) {
      info.operation['__runAtMostOnce'][randomNumber] = true;
      value = fn(root, args, ctx, info);
    }

    return value;
  };
}

exports.default = addSchemaLevelResolveFunction;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var _1 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js");

function assertResolveFunctionsPresent(schema, resolverValidationOptions) {
  if (resolverValidationOptions === void 0) {
    resolverValidationOptions = {};
  }

  var _a = resolverValidationOptions.requireResolversForArgs,
      requireResolversForArgs = _a === void 0 ? false : _a,
      _b = resolverValidationOptions.requireResolversForNonScalar,
      requireResolversForNonScalar = _b === void 0 ? false : _b,
      _c = resolverValidationOptions.requireResolversForAllFields,
      requireResolversForAllFields = _c === void 0 ? false : _c;

  if (requireResolversForAllFields && (requireResolversForArgs || requireResolversForNonScalar)) {
    throw new TypeError('requireResolversForAllFields takes precedence over the more specific assertions. ' + 'Please configure either requireResolversForAllFields or requireResolversForArgs / ' + 'requireResolversForNonScalar, but not a combination of them.');
  }

  _1.forEachField(schema, function (field, typeName, fieldName) {
    // requires a resolve function for *every* field.
    if (requireResolversForAllFields) {
      expectResolveFunction(field, typeName, fieldName);
    } // requires a resolve function on every field that has arguments


    if (requireResolversForArgs && field.args.length > 0) {
      expectResolveFunction(field, typeName, fieldName);
    } // requires a resolve function on every field that returns a non-scalar type


    if (requireResolversForNonScalar && !(graphql_1.getNamedType(field.type) instanceof graphql_1.GraphQLScalarType)) {
      expectResolveFunction(field, typeName, fieldName);
    }
  });
}

function expectResolveFunction(field, typeName, fieldName) {
  if (!field.resolve) {
    console.warn( // tslint:disable-next-line: max-line-length
    "Resolve function missing for \"" + typeName + "." + fieldName + "\". To disable this warning check https://github.com/apollostack/graphql-tools/issues/131");
    return;
  }

  if (typeof field.resolve !== 'function') {
    throw new _1.SchemaError("Resolver \"" + typeName + "." + fieldName + "\" must be a function");
  }
}

exports.default = assertResolveFunctionsPresent;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var deprecated_decorator_1 = __webpack_require__(/*! deprecated-decorator */ "deprecated-decorator");

var _1 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js"); // takes a GraphQL-JS schema and an object of connectors, then attaches
// the connectors to the context by wrapping each query or mutation resolve
// function with a function that attaches connectors if they don't exist.
// attaches connectors only once to make sure they are singletons


var attachConnectorsToContext = deprecated_decorator_1.deprecated({
  version: '0.7.0',
  url: 'https://github.com/apollostack/graphql-tools/issues/140'
}, function (schema, connectors) {
  if (!schema || !(schema instanceof graphql_1.GraphQLSchema)) {
    throw new Error('schema must be an instance of GraphQLSchema. ' + 'This error could be caused by installing more than one version of GraphQL-JS');
  }

  if (typeof connectors !== 'object') {
    var connectorType = typeof connectors;
    throw new Error("Expected connectors to be of type object, got " + connectorType);
  }

  if (Object.keys(connectors).length === 0) {
    throw new Error('Expected connectors to not be an empty object');
  }

  if (Array.isArray(connectors)) {
    throw new Error('Expected connectors to be of type object, got Array');
  }

  if (schema['_apolloConnectorsAttached']) {
    throw new Error('Connectors already attached to context, cannot attach more than once');
  }

  schema['_apolloConnectorsAttached'] = true;

  var attachconnectorFn = function (root, args, ctx) {
    if (typeof ctx !== 'object') {
      // if in any way possible, we should throw an error when the attachconnectors
      // function is called, not when a query is executed.
      var contextType = typeof ctx;
      throw new Error("Cannot attach connector because context is not an object: " + contextType);
    }

    if (typeof ctx.connectors === 'undefined') {
      ctx.connectors = {};
    }

    Object.keys(connectors).forEach(function (connectorName) {
      var connector = connectors[connectorName];

      if (!!connector.prototype) {
        ctx.connectors[connectorName] = new connector(ctx);
      } else {
        throw new Error("Connector must be a function or an class");
      }
    });
    return root;
  };

  _1.addSchemaLevelResolveFunction(schema, attachconnectorFn);
});
exports.default = attachConnectorsToContext;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var schemaVisitor_1 = __webpack_require__(/*! ../schemaVisitor */ "./node_modules/graphpack/node_modules/graphql-tools/dist/schemaVisitor.js");

function attachDirectiveResolvers(schema, directiveResolvers) {
  if (typeof directiveResolvers !== 'object') {
    throw new Error("Expected directiveResolvers to be of type object, got " + typeof directiveResolvers);
  }

  if (Array.isArray(directiveResolvers)) {
    throw new Error('Expected directiveResolvers to be of type object, got Array');
  }

  var schemaDirectives = Object.create(null);
  Object.keys(directiveResolvers).forEach(function (directiveName) {
    schemaDirectives[directiveName] =
    /** @class */
    function (_super) {
      __extends(class_1, _super);

      function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
      }

      class_1.prototype.visitFieldDefinition = function (field) {
        var _this = this;

        var resolver = directiveResolvers[directiveName];
        var originalResolver = field.resolve || graphql_1.defaultFieldResolver;
        var directiveArgs = this.args;

        field.resolve = function () {
          var args = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }

          var source = args[0]
          /* original args */
          ,
              context = args[2],
              info = args[3];
          return resolver(function () {
            return __awaiter(_this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                return [2
                /*return*/
                , originalResolver.apply(field, args)];
              });
            });
          }, source, directiveArgs, context, info);
        };
      };

      return class_1;
    }(schemaVisitor_1.SchemaDirectiveVisitor);
  });
  schemaVisitor_1.SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
}

exports.default = attachDirectiveResolvers;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var _1 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js");

var filterExtensionDefinitions_1 = __webpack_require__(/*! ./filterExtensionDefinitions */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/filterExtensionDefinitions.js");

function buildSchemaFromTypeDefinitions(typeDefinitions, parseOptions) {
  // TODO: accept only array here, otherwise interfaces get confusing.
  var myDefinitions = typeDefinitions;
  var astDocument;

  if (isDocumentNode(typeDefinitions)) {
    astDocument = typeDefinitions;
  } else if (typeof myDefinitions !== 'string') {
    if (!Array.isArray(myDefinitions)) {
      var type = typeof myDefinitions;
      throw new _1.SchemaError("typeDefs must be a string, array or schema AST, got " + type);
    }

    myDefinitions = _1.concatenateTypeDefs(myDefinitions);
  }

  if (typeof myDefinitions === 'string') {
    astDocument = graphql_1.parse(myDefinitions, parseOptions);
  }

  var backcompatOptions = {
    commentDescriptions: true
  };
  var typesAst = filterExtensionDefinitions_1.default(astDocument); // TODO fix types https://github.com/apollographql/graphql-tools/issues/542

  var schema = graphql_1.buildASTSchema(typesAst, backcompatOptions);

  var extensionsAst = _1.extractExtensionDefinitions(astDocument);

  if (extensionsAst.definitions.length > 0) {
    // TODO fix types https://github.com/apollographql/graphql-tools/issues/542
    schema = graphql_1.extendSchema(schema, extensionsAst, backcompatOptions);
  }

  return schema;
}

function isDocumentNode(typeDefinitions) {
  return typeDefinitions.kind !== undefined;
}

exports.default = buildSchemaFromTypeDefinitions;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/chainResolvers.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/chainResolvers.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

function chainResolvers(resolvers) {
  return function (root, args, ctx, info) {
    return resolvers.reduce(function (prev, curResolver) {
      if (curResolver) {
        return curResolver(prev, args, ctx, info);
      }

      return graphql_1.defaultFieldResolver(prev, args, ctx, info);
    }, root);
  };
}

exports.chainResolvers = chainResolvers;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var _1 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js"); // If we have any union or interface types throw if no there is no resolveType or isTypeOf resolvers


function checkForResolveTypeResolver(schema, requireResolversForResolveType) {
  Object.keys(schema.getTypeMap()).map(function (typeName) {
    return schema.getType(typeName);
  }).forEach(function (type) {
    if (!(type instanceof graphql_1.GraphQLUnionType || type instanceof graphql_1.GraphQLInterfaceType)) {
      return;
    }

    if (!type.resolveType) {
      if (requireResolversForResolveType === false) {
        return;
      }

      if (requireResolversForResolveType === true) {
        throw new _1.SchemaError("Type \"" + type.name + "\" is missing a \"resolveType\" resolver");
      } // tslint:disable-next-line:max-line-length


      console.warn("Type \"" + type.name + "\" is missing a \"__resolveType\" resolver. Pass false into " + "\"resolverValidationOptions.requireResolversForResolveType\" to disable this warning.");
    }
  });
}

exports.default = checkForResolveTypeResolver;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var _1 = __webpack_require__(/*! . */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js");

function concatenateTypeDefs(typeDefinitionsAry, calledFunctionRefs) {
  if (calledFunctionRefs === void 0) {
    calledFunctionRefs = [];
  }

  var resolvedTypeDefinitions = [];
  typeDefinitionsAry.forEach(function (typeDef) {
    if (typeDef.kind !== undefined) {
      typeDef = graphql_1.print(typeDef);
    }

    if (typeof typeDef === 'function') {
      if (calledFunctionRefs.indexOf(typeDef) === -1) {
        calledFunctionRefs.push(typeDef);
        resolvedTypeDefinitions = resolvedTypeDefinitions.concat(concatenateTypeDefs(typeDef(), calledFunctionRefs));
      }
    } else if (typeof typeDef === 'string') {
      resolvedTypeDefinitions.push(typeDef.trim());
    } else {
      var type = typeof typeDef;
      throw new _1.SchemaError("typeDef array must contain only strings and functions, got " + type);
    }
  });
  return uniq(resolvedTypeDefinitions.map(function (x) {
    return x.trim();
  })).join('\n');
}

function uniq(array) {
  return array.reduce(function (accumulator, currentValue) {
    return accumulator.indexOf(currentValue) === -1 ? __spreadArrays(accumulator, [currentValue]) : accumulator;
  }, []);
}

exports.default = concatenateTypeDefs;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/decorateWithLogger.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/decorateWithLogger.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");
/*
 * fn: The function to decorate with the logger
 * logger: an object instance of type Logger
 * hint: an optional hint to add to the error's message
 */


function decorateWithLogger(fn, logger, hint) {
  if (typeof fn === 'undefined') {
    fn = graphql_1.defaultFieldResolver;
  }

  var logError = function (e) {
    // TODO: clone the error properly
    var newE = new Error();
    newE.stack = e.stack;
    /* istanbul ignore else: always get the hint from addErrorLoggingToSchema */

    if (hint) {
      newE['originalMessage'] = e.message;
      newE['message'] = "Error in resolver " + hint + "\n" + e.message;
    }

    logger.log(newE);
  };

  return function (root, args, ctx, info) {
    try {
      var result = fn(root, args, ctx, info); // If the resolve function returns a Promise log any Promise rejects.

      if (result && typeof result.then === 'function' && typeof result.catch === 'function') {
        result.catch(function (reason) {
          // make sure that it's an error we're logging.
          var error = reason instanceof Error ? reason : new Error(reason);
          logError(error); // We don't want to leave an unhandled exception so pass on error.

          return reason;
        });
      }

      return result;
    } catch (e) {
      logError(e); // we want to pass on the error, just in case.

      throw e;
    }
  };
}

exports.default = decorateWithLogger;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

function extendResolversFromInterfaces(schema, resolvers) {
  var typeNames = Object.keys(__assign(__assign({}, schema.getTypeMap()), resolvers));
  var extendedResolvers = {};
  typeNames.forEach(function (typeName) {
    var typeResolvers = resolvers[typeName];
    var type = schema.getType(typeName);

    if (type instanceof graphql_1.GraphQLObjectType) {
      var interfaceResolvers = type.getInterfaces().map(function (iFace) {
        return resolvers[iFace.name];
      });
      extendedResolvers[typeName] = Object.assign.apply(Object, __spreadArrays([{}], interfaceResolvers, [typeResolvers]));
    } else {
      if (typeResolvers) {
        extendedResolvers[typeName] = typeResolvers;
      }
    }
  });
  return extendedResolvers;
}

exports.default = extendResolversFromInterfaces;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var newExtensionDefinitionKind = 'ObjectTypeExtension';
var interfaceExtensionDefinitionKind = 'InterfaceTypeExtension';
var inputObjectExtensionDefinitionKind = 'InputObjectTypeExtension';
var unionExtensionDefinitionKind = 'UnionTypeExtension';
var enumExtensionDefinitionKind = 'EnumTypeExtension';

function extractExtensionDefinitions(ast) {
  var extensionDefs = ast.definitions.filter(function (def) {
    return def.kind === newExtensionDefinitionKind || def.kind === interfaceExtensionDefinitionKind || def.kind === inputObjectExtensionDefinitionKind || def.kind === unionExtensionDefinitionKind || def.kind === enumExtensionDefinitionKind;
  });
  return Object.assign({}, ast, {
    definitions: extensionDefs
  });
}

exports.default = extractExtensionDefinitions;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/filterExtensionDefinitions.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/filterExtensionDefinitions.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

function filterExtensionDefinitions(ast) {
  var extensionDefs = ast.definitions.filter(function (def) {
    return def.kind !== graphql_1.Kind.OBJECT_TYPE_EXTENSION && def.kind !== graphql_1.Kind.INTERFACE_TYPE_EXTENSION && def.kind !== graphql_1.Kind.INPUT_OBJECT_TYPE_EXTENSION && def.kind !== graphql_1.Kind.UNION_TYPE_EXTENSION && def.kind !== graphql_1.Kind.ENUM_TYPE_EXTENSION && def.kind !== graphql_1.Kind.SCALAR_TYPE_EXTENSION && def.kind !== graphql_1.Kind.SCHEMA_EXTENSION;
  });
  return __assign(__assign({}, ast), {
    definitions: extensionDefs
  });
}

exports.default = filterExtensionDefinitions;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/forEachField.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/forEachField.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

function forEachField(schema, fn) {
  var typeMap = schema.getTypeMap();
  Object.keys(typeMap).forEach(function (typeName) {
    var type = typeMap[typeName]; // TODO: maybe have an option to include these?

    if (!graphql_1.getNamedType(type).name.startsWith('__') && type instanceof graphql_1.GraphQLObjectType) {
      var fields_1 = type.getFields();
      Object.keys(fields_1).forEach(function (fieldName) {
        var field = fields_1[fieldName];
        fn(field, typeName, fieldName);
      });
    }
  });
}

exports.default = forEachField;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var addResolveFunctionsToSchema_1 = __webpack_require__(/*! ./addResolveFunctionsToSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/addResolveFunctionsToSchema.js");

exports.addResolveFunctionsToSchema = addResolveFunctionsToSchema_1.default;

var addSchemaLevelResolveFunction_1 = __webpack_require__(/*! ./addSchemaLevelResolveFunction */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/addSchemaLevelResolveFunction.js");

exports.addSchemaLevelResolveFunction = addSchemaLevelResolveFunction_1.default;

var assertResolveFunctionsPresent_1 = __webpack_require__(/*! ./assertResolveFunctionsPresent */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/assertResolveFunctionsPresent.js");

exports.assertResolveFunctionsPresent = assertResolveFunctionsPresent_1.default;

var attachDirectiveResolvers_1 = __webpack_require__(/*! ./attachDirectiveResolvers */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/attachDirectiveResolvers.js");

exports.attachDirectiveResolvers = attachDirectiveResolvers_1.default;

var attachConnectorsToContext_1 = __webpack_require__(/*! ./attachConnectorsToContext */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/attachConnectorsToContext.js");

exports.attachConnectorsToContext = attachConnectorsToContext_1.default;

var buildSchemaFromTypeDefinitions_1 = __webpack_require__(/*! ./buildSchemaFromTypeDefinitions */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/buildSchemaFromTypeDefinitions.js");

exports.buildSchemaFromTypeDefinitions = buildSchemaFromTypeDefinitions_1.default;

var chainResolvers_1 = __webpack_require__(/*! ./chainResolvers */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/chainResolvers.js");

exports.chainResolvers = chainResolvers_1.chainResolvers;

var checkForResolveTypeResolver_1 = __webpack_require__(/*! ./checkForResolveTypeResolver */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/checkForResolveTypeResolver.js");

exports.checkForResolveTypeResolver = checkForResolveTypeResolver_1.default;

var concatenateTypeDefs_1 = __webpack_require__(/*! ./concatenateTypeDefs */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/concatenateTypeDefs.js");

exports.concatenateTypeDefs = concatenateTypeDefs_1.default;

var decorateWithLogger_1 = __webpack_require__(/*! ./decorateWithLogger */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/decorateWithLogger.js");

exports.decorateWithLogger = decorateWithLogger_1.default;

var extendResolversFromInterfaces_1 = __webpack_require__(/*! ./extendResolversFromInterfaces */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/extendResolversFromInterfaces.js");

exports.extendResolversFromInterfaces = extendResolversFromInterfaces_1.default;

var extractExtensionDefinitions_1 = __webpack_require__(/*! ./extractExtensionDefinitions */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/extractExtensionDefinitions.js");

exports.extractExtensionDefinitions = extractExtensionDefinitions_1.default;

var forEachField_1 = __webpack_require__(/*! ./forEachField */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/forEachField.js");

exports.forEachField = forEachField_1.default;

var SchemaError_1 = __webpack_require__(/*! ./SchemaError */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/SchemaError.js");

exports.SchemaError = SchemaError_1.default;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/implementsAbstractType.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/implementsAbstractType.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

function implementsAbstractType(schema, typeA, typeB) {
  if (typeA === typeB) {
    return true;
  } else if (graphql_1.isCompositeType(typeA) && graphql_1.isCompositeType(typeB)) {
    return graphql_1.doTypesOverlap(schema, typeA, typeB);
  } else {
    return false;
  }
}

exports.default = implementsAbstractType;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./makeExecutableSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js"));

__export(__webpack_require__(/*! ./mock */ "./node_modules/graphpack/node_modules/graphql-tools/dist/mock.js"));

__export(__webpack_require__(/*! ./stitching */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/index.js"));

__export(__webpack_require__(/*! ./transforms */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/index.js"));

var schemaVisitor_1 = __webpack_require__(/*! ./schemaVisitor */ "./node_modules/graphpack/node_modules/graphql-tools/dist/schemaVisitor.js");

exports.SchemaDirectiveVisitor = schemaVisitor_1.SchemaDirectiveVisitor;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/isEmptyObject.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/isEmptyObject.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function isEmptyObject(obj) {
  if (!obj) {
    return true;
  }

  for (var key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }

  return true;
}

exports.default = isEmptyObject;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/isSpecifiedScalarType.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/isSpecifiedScalarType.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql"); // FIXME: Replace with https://github.com/graphql/graphql-js/blob/master/src/type/scalars.js#L139


exports.specifiedScalarTypes = [graphql_1.GraphQLString, graphql_1.GraphQLInt, graphql_1.GraphQLFloat, graphql_1.GraphQLBoolean, graphql_1.GraphQLID];

function isSpecifiedScalarType(type) {
  return graphql_1.isNamedType(type) && ( // Would prefer to use specifiedScalarTypes.some(), however %checks needs
  // a simple expression.
  type.name === graphql_1.GraphQLString.name || type.name === graphql_1.GraphQLInt.name || type.name === graphql_1.GraphQLFloat.name || type.name === graphql_1.GraphQLBoolean.name || type.name === graphql_1.GraphQLID.name);
}

exports.default = isSpecifiedScalarType;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function __export(m) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var schemaVisitor_1 = __webpack_require__(/*! ./schemaVisitor */ "./node_modules/graphpack/node_modules/graphql-tools/dist/schemaVisitor.js");

var mergeDeep_1 = __webpack_require__(/*! ./mergeDeep */ "./node_modules/graphpack/node_modules/graphql-tools/dist/mergeDeep.js");

var generate_1 = __webpack_require__(/*! ./generate */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js");

function makeExecutableSchema(_a) {
  var typeDefs = _a.typeDefs,
      _b = _a.resolvers,
      resolvers = _b === void 0 ? {} : _b,
      connectors = _a.connectors,
      logger = _a.logger,
      _c = _a.allowUndefinedInResolve,
      allowUndefinedInResolve = _c === void 0 ? true : _c,
      _d = _a.resolverValidationOptions,
      resolverValidationOptions = _d === void 0 ? {} : _d,
      _e = _a.directiveResolvers,
      directiveResolvers = _e === void 0 ? null : _e,
      _f = _a.schemaDirectives,
      schemaDirectives = _f === void 0 ? null : _f,
      _g = _a.parseOptions,
      parseOptions = _g === void 0 ? {} : _g,
      _h = _a.inheritResolversFromInterfaces,
      inheritResolversFromInterfaces = _h === void 0 ? false : _h; // Validate and clean up arguments

  if (typeof resolverValidationOptions !== 'object') {
    throw new generate_1.SchemaError('Expected `resolverValidationOptions` to be an object');
  }

  if (!typeDefs) {
    throw new generate_1.SchemaError('Must provide typeDefs');
  }

  if (!resolvers) {
    throw new generate_1.SchemaError('Must provide resolvers');
  } // We allow passing in an array of resolver maps, in which case we merge them


  var resolverMap = Array.isArray(resolvers) ? resolvers.filter(function (resolverObj) {
    return typeof resolverObj === 'object';
  }).reduce(mergeDeep_1.default, {}) : resolvers; // Arguments are now validated and cleaned up

  var schema = generate_1.buildSchemaFromTypeDefinitions(typeDefs, parseOptions);
  schema = generate_1.addResolveFunctionsToSchema({
    schema: schema,
    resolvers: resolverMap,
    resolverValidationOptions: resolverValidationOptions,
    inheritResolversFromInterfaces: inheritResolversFromInterfaces
  });
  generate_1.assertResolveFunctionsPresent(schema, resolverValidationOptions);

  if (!allowUndefinedInResolve) {
    addCatchUndefinedToSchema(schema);
  }

  if (logger) {
    addErrorLoggingToSchema(schema, logger);
  }

  if (typeof resolvers['__schema'] === 'function') {
    // TODO a bit of a hack now, better rewrite generateSchema to attach it there.
    // not doing that now, because I'd have to rewrite a lot of tests.
    generate_1.addSchemaLevelResolveFunction(schema, resolvers['__schema']);
  }

  if (connectors) {
    // connectors are optional, at least for now. That means you can just import them in the resolve
    // function if you want.
    generate_1.attachConnectorsToContext(schema, connectors);
  }

  if (directiveResolvers) {
    generate_1.attachDirectiveResolvers(schema, directiveResolvers);
  }

  if (schemaDirectives) {
    schemaVisitor_1.SchemaDirectiveVisitor.visitSchemaDirectives(schema, schemaDirectives);
  }

  return schema;
}

exports.makeExecutableSchema = makeExecutableSchema;

function decorateToCatchUndefined(fn, hint) {
  if (typeof fn === 'undefined') {
    fn = graphql_1.defaultFieldResolver;
  }

  return function (root, args, ctx, info) {
    var result = fn(root, args, ctx, info);

    if (typeof result === 'undefined') {
      throw new Error("Resolve function for \"" + hint + "\" returned undefined");
    }

    return result;
  };
}

function addCatchUndefinedToSchema(schema) {
  generate_1.forEachField(schema, function (field, typeName, fieldName) {
    var errorHint = typeName + "." + fieldName;
    field.resolve = decorateToCatchUndefined(field.resolve, errorHint);
  });
}

exports.addCatchUndefinedToSchema = addCatchUndefinedToSchema;

function addErrorLoggingToSchema(schema, logger) {
  if (!logger) {
    throw new Error('Must provide a logger');
  }

  if (typeof logger.log !== 'function') {
    throw new Error('Logger.log must be a function');
  }

  generate_1.forEachField(schema, function (field, typeName, fieldName) {
    var errorHint = typeName + "." + fieldName;
    field.resolve = generate_1.decorateWithLogger(field.resolve, logger, errorHint);
  });
}

exports.addErrorLoggingToSchema = addErrorLoggingToSchema;

__export(__webpack_require__(/*! ./generate */ "./node_modules/graphpack/node_modules/graphql-tools/dist/generate/index.js"));

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/mergeDeep.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/mergeDeep.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mergeDeep(target, source) {
  var output = Object.assign({}, target);

  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(function (key) {
      var _a, _b;

      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, (_a = {}, _a[key] = source[key], _a));
        } else {
          output[key] = mergeDeep(target[key], source[key]);
        }
      } else {
        Object.assign(output, (_b = {}, _b[key] = source[key], _b));
      }
    });
  }

  return output;
}

exports.default = mergeDeep;

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/mock.js":
/*!************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/mock.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var uuid = __webpack_require__(/*! uuid */ "uuid");

var makeExecutableSchema_1 = __webpack_require__(/*! ./makeExecutableSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js"); // This function wraps addMockFunctionsToSchema for more convenience


function mockServer(schema, mocks, preserveResolvers) {
  if (preserveResolvers === void 0) {
    preserveResolvers = false;
  }

  var mySchema;

  if (!(schema instanceof graphql_1.GraphQLSchema)) {
    // TODO: provide useful error messages here if this fails
    mySchema = makeExecutableSchema_1.buildSchemaFromTypeDefinitions(schema);
  } else {
    mySchema = schema;
  }

  addMockFunctionsToSchema({
    schema: mySchema,
    mocks: mocks,
    preserveResolvers: preserveResolvers
  });
  return {
    query: function (query, vars) {
      return graphql_1.graphql(mySchema, query, {}, {}, vars);
    }
  };
}

exports.mockServer = mockServer;
var defaultMockMap = new Map();
defaultMockMap.set('Int', function () {
  return Math.round(Math.random() * 200) - 100;
});
defaultMockMap.set('Float', function () {
  return Math.random() * 200 - 100;
});
defaultMockMap.set('String', function () {
  return 'Hello World';
});
defaultMockMap.set('Boolean', function () {
  return Math.random() > 0.5;
});
defaultMockMap.set('ID', function () {
  return uuid.v4();
}); // TODO allow providing a seed such that lengths of list could be deterministic
// this could be done by using casual to get a random list length if the casual
// object is global.

function addMockFunctionsToSchema(_a) {
  var schema = _a.schema,
      _b = _a.mocks,
      mocks = _b === void 0 ? {} : _b,
      _c = _a.preserveResolvers,
      preserveResolvers = _c === void 0 ? false : _c;

  if (!schema) {
    throw new Error('Must provide schema to mock');
  }

  if (!(schema instanceof graphql_1.GraphQLSchema)) {
    throw new Error('Value at "schema" must be of type GraphQLSchema');
  }

  if (!isObject(mocks)) {
    throw new Error('mocks must be of type Object');
  } // use Map internally, because that API is nicer.


  var mockFunctionMap = new Map();
  Object.keys(mocks).forEach(function (typeName) {
    mockFunctionMap.set(typeName, mocks[typeName]);
  });
  mockFunctionMap.forEach(function (mockFunction, mockTypeName) {
    if (typeof mockFunction !== 'function') {
      throw new Error("mockFunctionMap[" + mockTypeName + "] must be a function");
    }
  });

  var mockType = function (type, typeName, fieldName) {
    // order of precendence for mocking:
    // 1. if the object passed in already has fieldName, just use that
    // --> if it's a function, that becomes your resolver
    // --> if it's a value, the mock resolver will return that
    // 2. if the nullableType is a list, recurse
    // 2. if there's a mock defined for this typeName, that will be used
    // 3. if there's no mock defined, use the default mocks for this type
    return function (root, args, context, info) {
      // nullability doesn't matter for the purpose of mocking.
      var fieldType = graphql_1.getNullableType(type);
      var namedFieldType = graphql_1.getNamedType(fieldType);

      if (root && typeof root[fieldName] !== 'undefined') {
        var result = void 0; // if we're here, the field is already defined

        if (typeof root[fieldName] === 'function') {
          result = root[fieldName](root, args, context, info);

          if (result instanceof MockList) {
            result = result.mock(root, args, context, info, fieldType, mockType);
          }
        } else {
          result = root[fieldName];
        } // Now we merge the result with the default mock for this type.
        // This allows overriding defaults while writing very little code.


        if (mockFunctionMap.has(namedFieldType.name)) {
          result = mergeMocks(mockFunctionMap.get(namedFieldType.name).bind(null, root, args, context, info), result);
        }

        return result;
      }

      if (fieldType instanceof graphql_1.GraphQLList || fieldType instanceof graphql_1.GraphQLNonNull) {
        return [mockType(fieldType.ofType)(root, args, context, info), mockType(fieldType.ofType)(root, args, context, info)];
      }

      if (mockFunctionMap.has(fieldType.name) && !(fieldType instanceof graphql_1.GraphQLUnionType || fieldType instanceof graphql_1.GraphQLInterfaceType)) {
        // the object passed doesn't have this field, so we apply the default mock
        return mockFunctionMap.get(fieldType.name)(root, args, context, info);
      }

      if (fieldType instanceof graphql_1.GraphQLObjectType) {
        // objects don't return actual data, we only need to mock scalars!
        return {};
      } // if a mock function is provided for unionType or interfaceType, execute it to resolve the concrete type
      // otherwise randomly pick a type from all implementation types


      if (fieldType instanceof graphql_1.GraphQLUnionType || fieldType instanceof graphql_1.GraphQLInterfaceType) {
        var implementationType = void 0;

        if (mockFunctionMap.has(fieldType.name)) {
          var interfaceMockObj = mockFunctionMap.get(fieldType.name)(root, args, context, info);

          if (!interfaceMockObj || !interfaceMockObj.__typename) {
            return Error("Please return a __typename in \"" + fieldType.name + "\"");
          }

          implementationType = schema.getType(interfaceMockObj.__typename);
        } else {
          var possibleTypes = schema.getPossibleTypes(fieldType);
          implementationType = getRandomElement(possibleTypes);
        }

        return Object.assign({
          __typename: implementationType
        }, mockType(implementationType)(root, args, context, info));
      }

      if (fieldType instanceof graphql_1.GraphQLEnumType) {
        return getRandomElement(fieldType.getValues()).value;
      }

      if (defaultMockMap.has(fieldType.name)) {
        return defaultMockMap.get(fieldType.name)(root, args, context, info);
      } // if we get to here, we don't have a value, and we don't have a mock for this type,
      // we could return undefined, but that would be hard to debug, so we throw instead.
      // however, we returning it instead of throwing it, so preserveResolvers can handle the failures.


      return Error("No mock defined for type \"" + fieldType.name + "\"");
    };
  };

  makeExecutableSchema_1.forEachField(schema, function (field, typeName, fieldName) {
    assignResolveType(field.type, preserveResolvers);
    var mockResolver; // we have to handle the root mutation and root query types differently,
    // because no resolver is called at the root.

    /* istanbul ignore next: Must provide schema DefinitionNode with query type or a type named Query. */

    var isOnQueryType = schema.getQueryType() && schema.getQueryType().name === typeName;
    var isOnMutationType = schema.getMutationType() && schema.getMutationType().name === typeName;

    if (isOnQueryType || isOnMutationType) {
      if (mockFunctionMap.has(typeName)) {
        var rootMock_1 = mockFunctionMap.get(typeName); // XXX: BUG in here, need to provide proper signature for rootMock.

        if (typeof rootMock_1(undefined, {}, {}, {})[fieldName] === 'function') {
          mockResolver = function (root, args, context, info) {
            var updatedRoot = root || {}; // TODO: should we clone instead?

            updatedRoot[fieldName] = rootMock_1(root, args, context, info)[fieldName]; // XXX this is a bit of a hack to still use mockType, which
            // lets you mock lists etc. as well
            // otherwise we could just set field.resolve to rootMock()[fieldName]
            // it's like pretending there was a resolve function that ran before
            // the root resolve function.

            return mockType(field.type, typeName, fieldName)(updatedRoot, args, context, info);
          };
        }
      }
    }

    if (!mockResolver) {
      mockResolver = mockType(field.type, typeName, fieldName);
    }

    if (!preserveResolvers || !field.resolve) {
      field.resolve = mockResolver;
    } else {
      var oldResolver_1 = field.resolve;

      field.resolve = function (rootObject, args, context, info) {
        return Promise.all([mockResolver(rootObject, args, context, info), oldResolver_1(rootObject, args, context, info)]).then(function (values) {
          var mockedValue = values[0],
              resolvedValue = values[1]; // In case we couldn't mock

          if (mockedValue instanceof Error) {
            // only if value was not resolved, populate the error.
            if (undefined === resolvedValue) {
              throw mockedValue;
            }

            return resolvedValue;
          }

          if (resolvedValue instanceof Date && mockedValue instanceof Date) {
            return undefined !== resolvedValue ? resolvedValue : mockedValue;
          }

          if (isObject(mockedValue) && isObject(resolvedValue)) {
            // Object.assign() won't do here, as we need to all properties, including
            // the non-enumerable ones and defined using Object.defineProperty
            var emptyObject = Object.create(Object.getPrototypeOf(resolvedValue));
            return copyOwnProps(emptyObject, resolvedValue, mockedValue);
          }

          return undefined !== resolvedValue ? resolvedValue : mockedValue;
        });
      };
    }
  });
}

exports.addMockFunctionsToSchema = addMockFunctionsToSchema;

function isObject(thing) {
  return thing === Object(thing) && !Array.isArray(thing);
} // returns a random element from that ary


function getRandomElement(ary) {
  var sample = Math.floor(Math.random() * ary.length);
  return ary[sample];
}

function mergeObjects(a, b) {
  return Object.assign(a, b);
}

function copyOwnPropsIfNotPresent(target, source) {
  Object.getOwnPropertyNames(source).forEach(function (prop) {
    if (!Object.getOwnPropertyDescriptor(target, prop)) {
      Object.defineProperty(target, prop, Object.getOwnPropertyDescriptor(source, prop));
    }
  });
}

function copyOwnProps(target) {
  var sources = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    sources[_i - 1] = arguments[_i];
  }

  sources.forEach(function (source) {
    var chain = source;

    while (chain) {
      copyOwnPropsIfNotPresent(target, chain);
      chain = Object.getPrototypeOf(chain);
    }
  });
  return target;
} // takes either an object or a (possibly nested) array
// and completes the customMock object with any fields
// defined on genericMock
// only merges objects or arrays. Scalars are returned as is


function mergeMocks(genericMockFunction, customMock) {
  if (Array.isArray(customMock)) {
    return customMock.map(function (el) {
      return mergeMocks(genericMockFunction, el);
    });
  }

  if (isObject(customMock)) {
    return mergeObjects(genericMockFunction(), customMock);
  }

  return customMock;
}

function getResolveType(namedFieldType) {
  if (namedFieldType instanceof graphql_1.GraphQLInterfaceType || namedFieldType instanceof graphql_1.GraphQLUnionType) {
    return namedFieldType.resolveType;
  } else {
    return undefined;
  }
}

function assignResolveType(type, preserveResolvers) {
  var fieldType = graphql_1.getNullableType(type);
  var namedFieldType = graphql_1.getNamedType(fieldType);
  var oldResolveType = getResolveType(namedFieldType);

  if (preserveResolvers && oldResolveType && oldResolveType.length) {
    return;
  }

  if (namedFieldType instanceof graphql_1.GraphQLUnionType || namedFieldType instanceof graphql_1.GraphQLInterfaceType) {
    // the default `resolveType` always returns null. We add a fallback
    // resolution that works with how unions and interface are mocked
    namedFieldType.resolveType = function (data, context, info) {
      return info.schema.getType(data.__typename);
    };
  }
}

var MockList =
/** @class */
function () {
  // wrappedFunction can return another MockList or a value
  function MockList(len, wrappedFunction) {
    this.len = len;

    if (typeof wrappedFunction !== 'undefined') {
      if (typeof wrappedFunction !== 'function') {
        throw new Error('Second argument to MockList must be a function or undefined');
      }

      this.wrappedFunction = wrappedFunction;
    }
  }

  MockList.prototype.mock = function (root, args, context, info, fieldType, mockTypeFunc) {
    var arr;

    if (Array.isArray(this.len)) {
      arr = new Array(this.randint(this.len[0], this.len[1]));
    } else {
      arr = new Array(this.len);
    }

    for (var i = 0; i < arr.length; i++) {
      if (typeof this.wrappedFunction === 'function') {
        var res = this.wrappedFunction(root, args, context, info);

        if (res instanceof MockList) {
          var nullableType = graphql_1.getNullableType(fieldType.ofType);
          arr[i] = res.mock(root, args, context, info, nullableType, mockTypeFunc);
        } else {
          arr[i] = res;
        }
      } else {
        arr[i] = mockTypeFunc(fieldType.ofType)(root, args, context, info);
      }
    }

    return arr;
  };

  MockList.prototype.randint = function (low, high) {
    return Math.floor(Math.random() * (high - low + 1) + low);
  };

  return MockList;
}();

exports.MockList = MockList;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/schemaVisitor.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/schemaVisitor.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var values_1 = __webpack_require__(/*! graphql/execution/values */ "graphql/execution/values");

var hasOwn = Object.prototype.hasOwnProperty; // Abstract base class of any visitor implementation, defining the available
// visitor methods along with their parameter types, and providing a static
// helper function for determining whether a subclass implements a given
// visitor method, as opposed to inheriting one of the stubs defined here.

var SchemaVisitor =
/** @class */
function () {
  function SchemaVisitor() {} // Determine if this SchemaVisitor (sub)class implements a particular
  // visitor method.


  SchemaVisitor.implementsVisitorMethod = function (methodName) {
    if (!methodName.startsWith('visit')) {
      return false;
    }

    var method = this.prototype[methodName];

    if (typeof method !== 'function') {
      return false;
    }

    if (this === SchemaVisitor) {
      // The SchemaVisitor class implements every visitor method.
      return true;
    }

    var stub = SchemaVisitor.prototype[methodName];

    if (method === stub) {
      // If this.prototype[methodName] was just inherited from SchemaVisitor,
      // then this class does not really implement the method.
      return false;
    }

    return true;
  }; // Concrete subclasses of SchemaVisitor should override one or more of these
  // visitor methods, in order to express their interest in handling certain
  // schema types/locations. Each method may return null to remove the given
  // type from the schema, a non-null value of the same type to update the
  // type in the schema, or nothing to leave the type as it was.

  /* tslint:disable:no-empty */


  SchemaVisitor.prototype.visitSchema = function (schema) {};

  SchemaVisitor.prototype.visitScalar = function (scalar) {};

  SchemaVisitor.prototype.visitObject = function (object) {};

  SchemaVisitor.prototype.visitFieldDefinition = function (field, details) {};

  SchemaVisitor.prototype.visitArgumentDefinition = function (argument, details) {};

  SchemaVisitor.prototype.visitInterface = function (iface) {};

  SchemaVisitor.prototype.visitUnion = function (union) {};

  SchemaVisitor.prototype.visitEnum = function (type) {};

  SchemaVisitor.prototype.visitEnumValue = function (value, details) {};

  SchemaVisitor.prototype.visitInputObject = function (object) {};

  SchemaVisitor.prototype.visitInputFieldDefinition = function (field, details) {};

  return SchemaVisitor;
}();

exports.SchemaVisitor = SchemaVisitor; // Generic function for visiting GraphQLSchema objects.

function visitSchema(schema, // To accommodate as many different visitor patterns as possible, the
// visitSchema function does not simply accept a single instance of the
// SchemaVisitor class, but instead accepts a function that takes the
// current VisitableSchemaType object and the name of a visitor method and
// returns an array of SchemaVisitor instances that implement the visitor
// method and have an interest in handling the given VisitableSchemaType
// object. In the simplest case, this function can always return an array
// containing a single visitor object, without even looking at the type or
// methodName parameters. In other cases, this function might sometimes
// return an empty array to indicate there are no visitors that should be
// applied to the given VisitableSchemaType object. For an example of a
// visitor pattern that benefits from this abstraction, see the
// SchemaDirectiveVisitor class below.
visitorSelector) {
  // Helper function that calls visitorSelector and applies the resulting
  // visitors to the given type, with arguments [type, ...args].
  function callMethod(methodName, type) {
    var args = [];

    for (var _i = 2; _i < arguments.length; _i++) {
      args[_i - 2] = arguments[_i];
    }

    visitorSelector(type, methodName).every(function (visitor) {
      var newType = visitor[methodName].apply(visitor, __spreadArrays([type], args));

      if (typeof newType === 'undefined') {
        // Keep going without modifying type.
        return true;
      }

      if (methodName === 'visitSchema' || type instanceof graphql_1.GraphQLSchema) {
        throw new Error("Method " + methodName + " cannot replace schema with " + newType);
      }

      if (newType === null) {
        // Stop the loop and return null form callMethod, which will cause
        // the type to be removed from the schema.
        type = null;
        return false;
      } // Update type to the new type returned by the visitor method, so that
      // later directives will see the new type, and callMethod will return
      // the final type.


      type = newType;
      return true;
    }); // If there were no directives for this type object, or if all visitor
    // methods returned nothing, type will be returned unmodified.

    return type;
  } // Recursive helper function that calls any appropriate visitor methods for
  // each object in the schema, then traverses the object's children (if any).


  function visit(type) {
    if (type instanceof graphql_1.GraphQLSchema) {
      // Unlike the other types, the root GraphQLSchema object cannot be
      // replaced by visitor methods, because that would make life very hard
      // for SchemaVisitor subclasses that rely on the original schema object.
      callMethod('visitSchema', type);
      updateEachKey(type.getTypeMap(), function (namedType, typeName) {
        if (!typeName.startsWith('__')) {
          // Call visit recursively to let it determine which concrete
          // subclass of GraphQLNamedType we found in the type map. Because
          // we're using updateEachKey, the result of visit(namedType) may
          // cause the type to be removed or replaced.
          return visit(namedType);
        }
      });
      return type;
    }

    if (type instanceof graphql_1.GraphQLObjectType) {
      // Note that callMethod('visitObject', type) may not actually call any
      // methods, if there are no @directive annotations associated with this
      // type, or if this SchemaDirectiveVisitor subclass does not override
      // the visitObject method.
      var newObject = callMethod('visitObject', type);

      if (newObject) {
        visitFields(newObject);
      }

      return newObject;
    }

    if (type instanceof graphql_1.GraphQLInterfaceType) {
      var newInterface = callMethod('visitInterface', type);

      if (newInterface) {
        visitFields(newInterface);
      }

      return newInterface;
    }

    if (type instanceof graphql_1.GraphQLInputObjectType) {
      var newInputObject_1 = callMethod('visitInputObject', type);

      if (newInputObject_1) {
        updateEachKey(newInputObject_1.getFields(), function (field) {
          // Since we call a different method for input object fields, we
          // can't reuse the visitFields function here.
          return callMethod('visitInputFieldDefinition', field, {
            objectType: newInputObject_1
          });
        });
      }

      return newInputObject_1;
    }

    if (type instanceof graphql_1.GraphQLScalarType) {
      return callMethod('visitScalar', type);
    }

    if (type instanceof graphql_1.GraphQLUnionType) {
      return callMethod('visitUnion', type);
    }

    if (type instanceof graphql_1.GraphQLEnumType) {
      var newEnum_1 = callMethod('visitEnum', type);

      if (newEnum_1) {
        updateEachKey(newEnum_1.getValues(), function (value) {
          return callMethod('visitEnumValue', value, {
            enumType: newEnum_1
          });
        });
      }

      return newEnum_1;
    }

    throw new Error("Unexpected schema type: " + type);
  }

  function visitFields(type) {
    updateEachKey(type.getFields(), function (field) {
      // It would be nice if we could call visit(field) recursively here, but
      // GraphQLField is merely a type, not a value that can be detected using
      // an instanceof check, so we have to visit the fields in this lexical
      // context, so that TypeScript can validate the call to
      // visitFieldDefinition.
      var newField = callMethod('visitFieldDefinition', field, {
        // While any field visitor needs a reference to the field object, some
        // field visitors may also need to know the enclosing (parent) type,
        // perhaps to determine if the parent is a GraphQLObjectType or a
        // GraphQLInterfaceType. To obtain a reference to the parent, a
        // visitor method can have a second parameter, which will be an object
        // with an .objectType property referring to the parent.
        objectType: type
      });

      if (newField && newField.args) {
        updateEachKey(newField.args, function (arg) {
          return callMethod('visitArgumentDefinition', arg, {
            // Like visitFieldDefinition, visitArgumentDefinition takes a
            // second parameter that provides additional context, namely the
            // parent .field and grandparent .objectType. Remember that the
            // current GraphQLSchema is always available via this.schema.
            field: newField,
            objectType: type
          });
        });
      }

      return newField;
    });
  }

  visit(schema); // Return the original schema for convenience, even though it cannot have
  // been replaced or removed by the code above.

  return schema;
}

exports.visitSchema = visitSchema; // Update any references to named schema types that disagree with the named
// types found in schema.getTypeMap().

function healSchema(schema) {
  heal(schema);
  return schema;

  function heal(type) {
    if (type instanceof graphql_1.GraphQLSchema) {
      var originalTypeMap_1 = type.getTypeMap();
      var actualNamedTypeMap_1 = Object.create(null); // If any of the .name properties of the GraphQLNamedType objects in
      // schema.getTypeMap() have changed, the keys of the type map need to
      // be updated accordingly.

      each(originalTypeMap_1, function (namedType, typeName) {
        if (typeName.startsWith('__')) {
          return;
        }

        var actualName = namedType.name;

        if (actualName.startsWith('__')) {
          return;
        }

        if (hasOwn.call(actualNamedTypeMap_1, actualName)) {
          throw new Error("Duplicate schema type name " + actualName);
        }

        actualNamedTypeMap_1[actualName] = namedType; // Note: we are deliberately leaving namedType in the schema by its
        // original name (which might be different from actualName), so that
        // references by that name can be healed.
      }); // Now add back every named type by its actual name.

      each(actualNamedTypeMap_1, function (namedType, typeName) {
        originalTypeMap_1[typeName] = namedType;
      }); // Directive declaration argument types can refer to named types.

      each(type.getDirectives(), function (decl) {
        if (decl.args) {
          each(decl.args, function (arg) {
            arg.type = healType(arg.type);
          });
        }
      });
      each(originalTypeMap_1, function (namedType, typeName) {
        if (!typeName.startsWith('__')) {
          heal(namedType);
        }
      });
      updateEachKey(originalTypeMap_1, function (namedType, typeName) {
        // Dangling references to renamed types should remain in the schema
        // during healing, but must be removed now, so that the following
        // invariant holds for all names: schema.getType(name).name === name
        if (!typeName.startsWith('__') && !hasOwn.call(actualNamedTypeMap_1, typeName)) {
          return null;
        }
      });
    } else if (type instanceof graphql_1.GraphQLObjectType) {
      healFields(type);
      each(type.getInterfaces(), function (iface) {
        return heal(iface);
      });
    } else if (type instanceof graphql_1.GraphQLInterfaceType) {
      healFields(type);
    } else if (type instanceof graphql_1.GraphQLInputObjectType) {
      each(type.getFields(), function (field) {
        field.type = healType(field.type);
      });
    } else if (type instanceof graphql_1.GraphQLScalarType) {// Nothing to do.
    } else if (type instanceof graphql_1.GraphQLUnionType) {
      updateEachKey(type.getTypes(), function (t) {
        return healType(t);
      });
    } else if (type instanceof graphql_1.GraphQLEnumType) {// Nothing to do.
    } else {
      throw new Error("Unexpected schema type: " + type);
    }
  }

  function healFields(type) {
    each(type.getFields(), function (field) {
      field.type = healType(field.type);

      if (field.args) {
        each(field.args, function (arg) {
          arg.type = healType(arg.type);
        });
      }
    });
  }

  function healType(type) {
    // Unwrap the two known wrapper types
    if (type instanceof graphql_1.GraphQLList) {
      type = new graphql_1.GraphQLList(healType(type.ofType));
    } else if (type instanceof graphql_1.GraphQLNonNull) {
      type = new graphql_1.GraphQLNonNull(healType(type.ofType));
    } else if (graphql_1.isNamedType(type)) {
      // If a type annotation on a field or an argument or a union member is
      // any `GraphQLNamedType` with a `name`, then it must end up identical
      // to `schema.getType(name)`, since `schema.getTypeMap()` is the source
      // of truth for all named schema types.
      var namedType = type;
      var officialType = schema.getType(namedType.name);

      if (officialType && namedType !== officialType) {
        return officialType;
      }
    }

    return type;
  }
}

exports.healSchema = healSchema; // This class represents a reusable implementation of a @directive that may
// appear in a GraphQL schema written in Schema Definition Language.
//
// By overriding one or more visit{Object,Union,...} methods, a subclass
// registers interest in certain schema types, such as GraphQLObjectType,
// GraphQLUnionType, etc. When SchemaDirectiveVisitor.visitSchemaDirectives is
// called with a GraphQLSchema object and a map of visitor subclasses, the
// overidden methods of those subclasses allow the visitors to obtain
// references to any type objects that have @directives attached to them,
// enabling visitors to inspect or modify the schema as appropriate.
//
// For example, if a directive called @rest(url: "...") appears after a field
// definition, a SchemaDirectiveVisitor subclass could provide meaning to that
// directive by overriding the visitFieldDefinition method (which receives a
// GraphQLField parameter), and then the body of that visitor method could
// manipulate the field's resolver function to fetch data from a REST endpoint
// described by the url argument passed to the @rest directive:
//
//   const typeDefs = `
//   type Query {
//     people: [Person] @rest(url: "/api/v1/people")
//   }`;
//
//   const schema = makeExecutableSchema({ typeDefs });
//
//   SchemaDirectiveVisitor.visitSchemaDirectives(schema, {
//     rest: class extends SchemaDirectiveVisitor {
//       public visitFieldDefinition(field: GraphQLField<any, any>) {
//         const { url } = this.args;
//         field.resolve = () => fetch(url);
//       }
//     }
//   });
//
// The subclass in this example is defined as an anonymous class expression,
// for brevity. A truly reusable SchemaDirectiveVisitor would most likely be
// defined in a library using a named class declaration, and then exported for
// consumption by other modules and packages.
//
// See below for a complete list of overridable visitor methods, their
// parameter types, and more details about the properties exposed by instances
// of the SchemaDirectiveVisitor class.

var SchemaDirectiveVisitor =
/** @class */
function (_super) {
  __extends(SchemaDirectiveVisitor, _super); // Mark the constructor protected to enforce passing SchemaDirectiveVisitor
  // subclasses (not instances) to visitSchemaDirectives.


  function SchemaDirectiveVisitor(config) {
    var _this = _super.call(this) || this;

    _this.name = config.name;
    _this.args = config.args;
    _this.visitedType = config.visitedType;
    _this.schema = config.schema;
    _this.context = config.context;
    return _this;
  } // Override this method to return a custom GraphQLDirective (or modify one
  // already present in the schema) to enforce argument types, provide default
  // argument values, or specify schema locations where this @directive may
  // appear. By default, any declaration found in the schema will be returned.


  SchemaDirectiveVisitor.getDirectiveDeclaration = function (directiveName, schema) {
    return schema.getDirective(directiveName);
  }; // Call SchemaDirectiveVisitor.visitSchemaDirectives to visit every
  // @directive in the schema and create an appropriate SchemaDirectiveVisitor
  // instance to visit the object decorated by the @directive.


  SchemaDirectiveVisitor.visitSchemaDirectives = function (schema, directiveVisitors, // Optional context object that will be available to all visitor instances
  // via this.context. Defaults to an empty null-prototype object.
  context) {
    if (context === void 0) {
      context = Object.create(null);
    } // If the schema declares any directives for public consumption, record
    // them here so that we can properly coerce arguments when/if we encounter
    // an occurrence of the directive while walking the schema below.


    var declaredDirectives = this.getDeclaredDirectives(schema, directiveVisitors); // Map from directive names to lists of SchemaDirectiveVisitor instances
    // created while visiting the schema.

    var createdVisitors = Object.create(null);
    Object.keys(directiveVisitors).forEach(function (directiveName) {
      createdVisitors[directiveName] = [];
    });

    function visitorSelector(type, methodName) {
      var visitors = [];
      var directiveNodes = type.astNode && type.astNode.directives;

      if (!directiveNodes) {
        return visitors;
      }

      directiveNodes.forEach(function (directiveNode) {
        var directiveName = directiveNode.name.value;

        if (!hasOwn.call(directiveVisitors, directiveName)) {
          return;
        }

        var visitorClass = directiveVisitors[directiveName]; // Avoid creating visitor objects if visitorClass does not override
        // the visitor method named by methodName.

        if (!visitorClass.implementsVisitorMethod(methodName)) {
          return;
        }

        var decl = declaredDirectives[directiveName];
        var args;

        if (decl) {
          // If this directive was explicitly declared, use the declared
          // argument types (and any default values) to check, coerce, and/or
          // supply default values for the given arguments.
          args = values_1.getArgumentValues(decl, directiveNode);
        } else {
          // If this directive was not explicitly declared, just convert the
          // argument nodes to their corresponding JavaScript values.
          args = Object.create(null);
          directiveNode.arguments.forEach(function (arg) {
            args[arg.name.value] = valueFromASTUntyped(arg.value);
          });
        } // As foretold in comments near the top of the visitSchemaDirectives
        // method, this is where instances of the SchemaDirectiveVisitor class
        // get created and assigned names. While subclasses could override the
        // constructor method, the constructor is marked as protected, so
        // these are the only arguments that will ever be passed.


        visitors.push(new visitorClass({
          name: directiveName,
          args: args,
          visitedType: type,
          schema: schema,
          context: context
        }));
      });

      if (visitors.length > 0) {
        visitors.forEach(function (visitor) {
          createdVisitors[visitor.name].push(visitor);
        });
      }

      return visitors;
    }

    visitSchema(schema, visitorSelector); // Automatically update any references to named schema types replaced
    // during the traversal, so implementors don't have to worry about that.

    healSchema(schema);
    return createdVisitors;
  };

  SchemaDirectiveVisitor.getDeclaredDirectives = function (schema, directiveVisitors) {
    var declaredDirectives = Object.create(null);
    each(schema.getDirectives(), function (decl) {
      declaredDirectives[decl.name] = decl;
    }); // If the visitor subclass overrides getDirectiveDeclaration, and it
    // returns a non-null GraphQLDirective, use that instead of any directive
    // declared in the schema itself. Reasoning: if a SchemaDirectiveVisitor
    // goes to the trouble of implementing getDirectiveDeclaration, it should
    // be able to rely on that implementation.

    each(directiveVisitors, function (visitorClass, directiveName) {
      var decl = visitorClass.getDirectiveDeclaration(directiveName, schema);

      if (decl) {
        declaredDirectives[directiveName] = decl;
      }
    });
    each(declaredDirectives, function (decl, name) {
      if (!hasOwn.call(directiveVisitors, name)) {
        // SchemaDirectiveVisitors.visitSchemaDirectives might be called
        // multiple times with partial directiveVisitors maps, so it's not
        // necessarily an error for directiveVisitors to be missing an
        // implementation of a directive that was declared in the schema.
        return;
      }

      var visitorClass = directiveVisitors[name];
      each(decl.locations, function (loc) {
        var visitorMethodName = directiveLocationToVisitorMethodName(loc);

        if (SchemaVisitor.implementsVisitorMethod(visitorMethodName) && !visitorClass.implementsVisitorMethod(visitorMethodName)) {
          // While visitor subclasses may implement extra visitor methods,
          // it's definitely a mistake if the GraphQLDirective declares itself
          // applicable to certain schema locations, and the visitor subclass
          // does not implement all the corresponding methods.
          throw new Error("SchemaDirectiveVisitor for @" + name + " must implement " + visitorMethodName + " method");
        }
      });
    });
    return declaredDirectives;
  };

  return SchemaDirectiveVisitor;
}(SchemaVisitor);

exports.SchemaDirectiveVisitor = SchemaDirectiveVisitor; // Convert a string like "FIELD_DEFINITION" to "visitFieldDefinition".

function directiveLocationToVisitorMethodName(loc) {
  return 'visit' + loc.replace(/([^_]*)_?/g, function (wholeMatch, part) {
    return part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
  });
}

function each(arrayOrObject, callback) {
  Object.keys(arrayOrObject).forEach(function (key) {
    callback(arrayOrObject[key], key);
  });
} // A more powerful version of each that has the ability to replace or remove
// array or object keys.


function updateEachKey(arrayOrObject, // The callback can return nothing to leave the key untouched, null to remove
// the key from the array or object, or a non-null V to replace the value.
callback) {
  var deletedCount = 0;
  Object.keys(arrayOrObject).forEach(function (key) {
    var result = callback(arrayOrObject[key], key);

    if (typeof result === 'undefined') {
      return;
    }

    if (result === null) {
      delete arrayOrObject[key];
      deletedCount++;
      return;
    }

    arrayOrObject[key] = result;
  });

  if (deletedCount > 0 && Array.isArray(arrayOrObject)) {
    // Remove any holes from the array due to deleted elements.
    arrayOrObject.splice(0).forEach(function (elem) {
      arrayOrObject.push(elem);
    });
  }
} // Similar to the graphql-js function of the same name, slightly simplified:
// https://github.com/graphql/graphql-js/blob/master/src/utilities/valueFromASTUntyped.js


function valueFromASTUntyped(valueNode) {
  switch (valueNode.kind) {
    case graphql_1.Kind.NULL:
      return null;

    case graphql_1.Kind.INT:
      return parseInt(valueNode.value, 10);

    case graphql_1.Kind.FLOAT:
      return parseFloat(valueNode.value);

    case graphql_1.Kind.STRING:
    case graphql_1.Kind.ENUM:
    case graphql_1.Kind.BOOLEAN:
      return valueNode.value;

    case graphql_1.Kind.LIST:
      return valueNode.values.map(valueFromASTUntyped);

    case graphql_1.Kind.OBJECT:
      var obj_1 = Object.create(null);
      valueNode.fields.forEach(function (field) {
        obj_1[field.name.value] = valueFromASTUntyped(field.value);
      });
      return obj_1;

    /* istanbul ignore next */

    default:
      throw new Error('Unexpected value kind: ' + valueNode.kind);
  }
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var error_1 = __webpack_require__(/*! graphql/error */ "graphql/error");

var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/errors.js");

var getResponseKeyFromInfo_1 = __webpack_require__(/*! ./getResponseKeyFromInfo */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js"); // Resolver that knows how to:
// a) handle aliases for proxied schemas
// b) handle errors from proxied schemas


var defaultMergedResolver = function (parent, args, context, info) {
  if (!parent) {
    return null;
  }

  var responseKey = getResponseKeyFromInfo_1.getResponseKeyFromInfo(info);
  var errorResult = errors_1.getErrorsFromParent(parent, responseKey);

  if (errorResult.kind === 'OWN') {
    throw error_1.locatedError(new Error(errorResult.error.message), info.fieldNodes, graphql_1.responsePathAsArray(info.path));
  }

  var result = parent[responseKey];

  if (result == null) {
    result = parent[info.fieldName];
  } // subscription result mapping


  if (!result && parent.data && parent.data[responseKey]) {
    result = parent.data[responseKey];
  }

  if (errorResult.errors) {
    result = errors_1.annotateWithChildrenErrors(result, errorResult.errors);
  }

  return result;
};

exports.default = defaultMergedResolver;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/delegateToSchema.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/delegateToSchema.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var transforms_1 = __webpack_require__(/*! ../transforms/transforms */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transforms.js");

var AddArgumentsAsVariables_1 = __webpack_require__(/*! ../transforms/AddArgumentsAsVariables */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js");

var FilterToSchema_1 = __webpack_require__(/*! ../transforms/FilterToSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterToSchema.js");

var AddTypenameToAbstract_1 = __webpack_require__(/*! ../transforms/AddTypenameToAbstract */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js");

var CheckResultAndHandleErrors_1 = __webpack_require__(/*! ../transforms/CheckResultAndHandleErrors */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js");

var mapAsyncIterator_1 = __webpack_require__(/*! ./mapAsyncIterator */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js");

var ExpandAbstractTypes_1 = __webpack_require__(/*! ../transforms/ExpandAbstractTypes */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js");

var ReplaceFieldWithFragment_1 = __webpack_require__(/*! ../transforms/ReplaceFieldWithFragment */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js");

var ConvertEnumResponse_1 = __webpack_require__(/*! ../transforms/ConvertEnumResponse */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ConvertEnumResponse.js");

function delegateToSchema(options) {
  var args = [];

  for (var _i = 1; _i < arguments.length; _i++) {
    args[_i - 1] = arguments[_i];
  }

  if (options instanceof graphql_1.GraphQLSchema) {
    throw new Error('Passing positional arguments to delegateToSchema is a deprecated. ' + 'Please pass named parameters instead.');
  }

  return delegateToSchemaImplementation(options);
}

exports.default = delegateToSchema;

function delegateToSchemaImplementation(options) {
  return __awaiter(this, void 0, void 0, function () {
    var info, _a, args, operation, rawDocument, rawRequest, transforms, processedRequest, errors, _b, executionResult;

    return __generator(this, function (_c) {
      switch (_c.label) {
        case 0:
          info = options.info, _a = options.args, args = _a === void 0 ? {} : _a;
          operation = options.operation || info.operation.operation;
          rawDocument = createDocument(options.fieldName, operation, info.fieldNodes, Object.keys(info.fragments).map(function (fragmentName) {
            return info.fragments[fragmentName];
          }), info.operation.variableDefinitions, info.operation.name);
          rawRequest = {
            document: rawDocument,
            variables: info.variableValues
          };
          transforms = __spreadArrays(options.transforms || [], [new ExpandAbstractTypes_1.default(info.schema, options.schema)]);

          if (info.mergeInfo && info.mergeInfo.fragments) {
            transforms.push(new ReplaceFieldWithFragment_1.default(options.schema, info.mergeInfo.fragments));
          }

          transforms = transforms.concat([new AddArgumentsAsVariables_1.default(options.schema, args), new FilterToSchema_1.default(options.schema), new AddTypenameToAbstract_1.default(options.schema), new CheckResultAndHandleErrors_1.default(info, options.fieldName)]);

          if (graphql_1.isEnumType(options.info.returnType)) {
            transforms = transforms.concat(new ConvertEnumResponse_1.default(options.info.returnType));
          }

          processedRequest = transforms_1.applyRequestTransforms(rawRequest, transforms);

          if (!options.skipValidation) {
            errors = graphql_1.validate(options.schema, processedRequest.document);

            if (errors.length > 0) {
              throw errors;
            }
          }

          if (!(operation === 'query' || operation === 'mutation')) return [3
          /*break*/
          , 2];
          _b = transforms_1.applyResultTransforms;
          return [4
          /*yield*/
          , graphql_1.execute(options.schema, processedRequest.document, info.rootValue, options.context, processedRequest.variables)];

        case 1:
          return [2
          /*return*/
          , _b.apply(void 0, [_c.sent(), transforms])];

        case 2:
          if (!(operation === 'subscription')) return [3
          /*break*/
          , 4];
          return [4
          /*yield*/
          , graphql_1.subscribe(options.schema, processedRequest.document, info.rootValue, options.context, processedRequest.variables)];

        case 3:
          executionResult = _c.sent(); // "subscribe" to the subscription result and map the result through the transforms

          return [2
          /*return*/
          , mapAsyncIterator_1.default(executionResult, function (result) {
            var _a;

            var transformedResult = transforms_1.applyResultTransforms(result, transforms);
            var subscriptionKey = Object.keys(result.data)[0]; // for some reason the returned transformedResult needs to be nested inside the root subscription field
            // does not work otherwise...

            return _a = {}, _a[subscriptionKey] = transformedResult, _a;
          })];

        case 4:
          return [2
          /*return*/
          ];
      }
    });
  });
}

function createDocument(targetField, targetOperation, originalSelections, fragments, variables, operationName) {
  var selections = [];
  var args = [];
  originalSelections.forEach(function (field) {
    var fieldSelections = field.selectionSet ? field.selectionSet.selections : [];
    selections = selections.concat(fieldSelections);
    args = args.concat(field.arguments || []);
  });
  var selectionSet = null;

  if (selections.length > 0) {
    selectionSet = {
      kind: graphql_1.Kind.SELECTION_SET,
      selections: selections
    };
  }

  var rootField = {
    kind: graphql_1.Kind.FIELD,
    alias: null,
    arguments: args,
    selectionSet: selectionSet,
    name: {
      kind: graphql_1.Kind.NAME,
      value: targetField
    }
  };
  var rootSelectionSet = {
    kind: graphql_1.Kind.SELECTION_SET,
    selections: [rootField]
  };
  var operationDefinition = {
    kind: graphql_1.Kind.OPERATION_DEFINITION,
    operation: targetOperation,
    variableDefinitions: variables,
    selectionSet: rootSelectionSet,
    name: operationName
  };
  return {
    kind: graphql_1.Kind.DOCUMENT,
    definitions: __spreadArrays([operationDefinition], fragments)
  };
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/errors.js":
/*!************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/errors.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __extends = this && this.__extends || function () {
  var extendStatics = function (d, b) {
    extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    };

    return extendStatics(d, b);
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var error_1 = __webpack_require__(/*! graphql/error */ "graphql/error");

var getResponseKeyFromInfo_1 = __webpack_require__(/*! ./getResponseKeyFromInfo */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js");

if (typeof global !== 'undefined' && 'Symbol' in global || typeof window !== 'undefined' && 'Symbol' in window) {
  exports.ERROR_SYMBOL = Symbol('subSchemaErrors');
} else {
  exports.ERROR_SYMBOL = '@@__subSchemaErrors';
}

function annotateWithChildrenErrors(object, childrenErrors) {
  var _a;

  if (!childrenErrors || childrenErrors.length === 0) {
    // Nothing to see here, move along
    return object;
  }

  if (Array.isArray(object)) {
    var byIndex_1 = {};
    childrenErrors.forEach(function (error) {
      if (!error.path) {
        return;
      }

      var index = error.path[1];
      var current = byIndex_1[index] || [];
      current.push(__assign(__assign({}, error), {
        path: error.path.slice(1)
      }));
      byIndex_1[index] = current;
    });
    return object.map(function (item, index) {
      return annotateWithChildrenErrors(item, byIndex_1[index]);
    });
  }

  return __assign(__assign({}, object), (_a = {}, _a[exports.ERROR_SYMBOL] = childrenErrors.map(function (error) {
    return __assign(__assign({}, error), error.path ? {
      path: error.path.slice(1)
    } : {});
  }), _a));
}

exports.annotateWithChildrenErrors = annotateWithChildrenErrors;

function getErrorsFromParent(object, fieldName) {
  var errors = object && object[exports.ERROR_SYMBOL] || [];
  var childrenErrors = [];

  for (var _i = 0, errors_1 = errors; _i < errors_1.length; _i++) {
    var error = errors_1[_i];

    if (!error.path || error.path.length === 1 && error.path[0] === fieldName) {
      return {
        kind: 'OWN',
        error: error
      };
    } else if (error.path[0] === fieldName) {
      childrenErrors.push(error);
    }
  }

  return {
    kind: 'CHILDREN',
    errors: childrenErrors
  };
}

exports.getErrorsFromParent = getErrorsFromParent;

var CombinedError =
/** @class */
function (_super) {
  __extends(CombinedError, _super);

  function CombinedError(message, errors) {
    var _this = _super.call(this, message) || this;

    _this.errors = errors;
    return _this;
  }

  return CombinedError;
}(Error);

function checkResultAndHandleErrors(result, info, responseKey) {
  if (!responseKey) {
    responseKey = getResponseKeyFromInfo_1.getResponseKeyFromInfo(info);
  }

  if (result.errors && (!result.data || result.data[responseKey] == null)) {
    // apollo-link-http & http-link-dataloader need the
    // result property to be passed through for better error handling.
    // If there is only one error, which contains a result property, pass the error through
    var newError = result.errors.length === 1 && hasResult(result.errors[0]) ? result.errors[0] : new CombinedError(concatErrors(result.errors), result.errors);
    throw error_1.locatedError(newError, info.fieldNodes, graphql_1.responsePathAsArray(info.path));
  }

  var resultObject = result.data[responseKey];

  if (result.errors) {
    resultObject = annotateWithChildrenErrors(resultObject, result.errors);
  }

  return resultObject;
}

exports.checkResultAndHandleErrors = checkResultAndHandleErrors;

function concatErrors(errors) {
  return errors.map(function (error) {
    return error.message;
  }).join('\n');
}

function hasResult(error) {
  return error.result || error.extensions || error.originalError && error.originalError.result;
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/getResponseKeyFromInfo.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Get the key under which the result of this resolver will be placed in the response JSON. Basically, just
 * resolves aliases.
 * @param info The info argument to the resolver.
 */

function getResponseKeyFromInfo(info) {
  return info.fieldNodes[0].alias ? info.fieldNodes[0].alias.value : info.fieldName;
}

exports.getResponseKeyFromInfo = getResponseKeyFromInfo;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/index.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var makeRemoteExecutableSchema_1 = __webpack_require__(/*! ./makeRemoteExecutableSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js");

exports.makeRemoteExecutableSchema = makeRemoteExecutableSchema_1.default;
exports.defaultCreateRemoteResolver = makeRemoteExecutableSchema_1.createResolver;

var introspectSchema_1 = __webpack_require__(/*! ./introspectSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/introspectSchema.js");

exports.introspectSchema = introspectSchema_1.default;

var mergeSchemas_1 = __webpack_require__(/*! ./mergeSchemas */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/mergeSchemas.js");

exports.mergeSchemas = mergeSchemas_1.default;

var delegateToSchema_1 = __webpack_require__(/*! ./delegateToSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/delegateToSchema.js");

exports.delegateToSchema = delegateToSchema_1.default;

var defaultMergedResolver_1 = __webpack_require__(/*! ./defaultMergedResolver */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js");

exports.defaultMergedResolver = defaultMergedResolver_1.default;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/introspectSchema.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/introspectSchema.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var utilities_1 = __webpack_require__(/*! graphql/utilities */ "graphql/utilities");

var linkToFetcher_1 = __webpack_require__(/*! ./linkToFetcher */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/linkToFetcher.js");

var parsedIntrospectionQuery = graphql_1.parse(utilities_1.getIntrospectionQuery());

function introspectSchema(fetcher, linkContext) {
  return __awaiter(this, void 0, void 0, function () {
    var introspectionResult, schema;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          // Convert link to fetcher
          if (fetcher.request) {
            fetcher = linkToFetcher_1.default(fetcher);
          }

          return [4
          /*yield*/
          , fetcher({
            query: parsedIntrospectionQuery,
            context: linkContext
          })];

        case 1:
          introspectionResult = _a.sent();

          if (introspectionResult.errors && introspectionResult.errors.length || !introspectionResult.data.__schema) {
            throw introspectionResult.errors;
          } else {
            schema = graphql_1.buildClientSchema(introspectionResult.data);
            return [2
            /*return*/
            , schema];
          }

          return [2
          /*return*/
          ];
      }
    });
  });
}

exports.default = introspectSchema;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/linkToFetcher.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/linkToFetcher.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var apollo_link_1 = __webpack_require__(/*! apollo-link */ "./node_modules/graphpack/node_modules/apollo-link/lib/bundle.esm.js");

var apollo_link_2 = __webpack_require__(/*! apollo-link */ "./node_modules/graphpack/node_modules/apollo-link/lib/bundle.esm.js");

exports.execute = apollo_link_2.execute;

function linkToFetcher(link) {
  return function (fetcherOperation) {
    return apollo_link_1.makePromise(apollo_link_1.execute(link, fetcherOperation));
  };
}

exports.default = linkToFetcher;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/makeRemoteExecutableSchema.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var linkToFetcher_1 = __webpack_require__(/*! ./linkToFetcher */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/linkToFetcher.js");

var isEmptyObject_1 = __webpack_require__(/*! ../isEmptyObject */ "./node_modules/graphpack/node_modules/graphql-tools/dist/isEmptyObject.js");

var makeExecutableSchema_1 = __webpack_require__(/*! ../makeExecutableSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js");

var schemaRecreation_1 = __webpack_require__(/*! ./schemaRecreation */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js");

var resolveFromParentTypename_1 = __webpack_require__(/*! ./resolveFromParentTypename */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js");

var defaultMergedResolver_1 = __webpack_require__(/*! ./defaultMergedResolver */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js");

var errors_1 = __webpack_require__(/*! ./errors */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/errors.js");

var observableToAsyncIterable_1 = __webpack_require__(/*! ./observableToAsyncIterable */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js");

function makeRemoteExecutableSchema(_a) {
  var _b;

  var schema = _a.schema,
      link = _a.link,
      fetcher = _a.fetcher,
      _c = _a.createResolver,
      customCreateResolver = _c === void 0 ? createResolver : _c,
      buildSchemaOptions = _a.buildSchemaOptions,
      _d = _a.printSchemaOptions,
      printSchemaOptions = _d === void 0 ? {
    commentDescriptions: true
  } : _d;

  if (!fetcher && link) {
    fetcher = linkToFetcher_1.default(link);
  }

  var typeDefs;

  if (typeof schema === 'string') {
    typeDefs = schema;
    schema = graphql_1.buildSchema(typeDefs, buildSchemaOptions);
  } else {
    typeDefs = graphql_1.printSchema(schema, printSchemaOptions);
  } // prepare query resolvers


  var queryResolvers = {};
  var queryType = schema.getQueryType();
  var queries = queryType.getFields();
  Object.keys(queries).forEach(function (key) {
    queryResolvers[key] = customCreateResolver(fetcher);
  }); // prepare mutation resolvers

  var mutationResolvers = {};
  var mutationType = schema.getMutationType();

  if (mutationType) {
    var mutations = mutationType.getFields();
    Object.keys(mutations).forEach(function (key) {
      mutationResolvers[key] = customCreateResolver(fetcher);
    });
  } // prepare subscription resolvers


  var subscriptionResolvers = {};
  var subscriptionType = schema.getSubscriptionType();

  if (subscriptionType) {
    var subscriptions = subscriptionType.getFields();
    Object.keys(subscriptions).forEach(function (key) {
      subscriptionResolvers[key] = {
        subscribe: createSubscriptionResolver(key, link)
      };
    });
  } // merge resolvers into resolver map


  var resolvers = (_b = {}, _b[queryType.name] = queryResolvers, _b);

  if (!isEmptyObject_1.default(mutationResolvers)) {
    resolvers[mutationType.name] = mutationResolvers;
  }

  if (!isEmptyObject_1.default(subscriptionResolvers)) {
    resolvers[subscriptionType.name] = subscriptionResolvers;
  } // add missing abstract resolvers (scalar, unions, interfaces)


  var typeMap = schema.getTypeMap();
  var types = Object.keys(typeMap).map(function (name) {
    return typeMap[name];
  });

  var _loop_1 = function (type) {
    if (type instanceof graphql_1.GraphQLInterfaceType || type instanceof graphql_1.GraphQLUnionType) {
      resolvers[type.name] = {
        __resolveType: function (parent, context, info) {
          return resolveFromParentTypename_1.default(parent, info.schema);
        }
      };
    } else if (type instanceof graphql_1.GraphQLScalarType) {
      if (!(type === graphql_1.GraphQLID || type === graphql_1.GraphQLString || type === graphql_1.GraphQLFloat || type === graphql_1.GraphQLBoolean || type === graphql_1.GraphQLInt)) {
        resolvers[type.name] = schemaRecreation_1.recreateType(type, function (name) {
          return null;
        }, false);
      }
    } else if (type instanceof graphql_1.GraphQLObjectType && type.name.slice(0, 2) !== '__' && type !== queryType && type !== mutationType && type !== subscriptionType) {
      var resolver_1 = {};
      Object.keys(type.getFields()).forEach(function (field) {
        resolver_1[field] = defaultMergedResolver_1.default;
      });
      resolvers[type.name] = resolver_1;
    }
  };

  for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
    var type = types_1[_i];

    _loop_1(type);
  }

  return makeExecutableSchema_1.makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
  });
}

exports.default = makeRemoteExecutableSchema;

function createResolver(fetcher) {
  var _this = this;

  return function (root, args, context, info) {
    return __awaiter(_this, void 0, void 0, function () {
      var fragments, document, result;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            fragments = Object.keys(info.fragments).map(function (fragment) {
              return info.fragments[fragment];
            });
            document = {
              kind: graphql_1.Kind.DOCUMENT,
              definitions: __spreadArrays([info.operation], fragments)
            };
            return [4
            /*yield*/
            , fetcher({
              query: document,
              variables: info.variableValues,
              context: {
                graphqlContext: context
              }
            })];

          case 1:
            result = _a.sent();
            return [2
            /*return*/
            , errors_1.checkResultAndHandleErrors(result, info)];
        }
      });
    });
  };
}

exports.createResolver = createResolver;

function createSubscriptionResolver(name, link) {
  return function (root, args, context, info) {
    var fragments = Object.keys(info.fragments).map(function (fragment) {
      return info.fragments[fragment];
    });
    var document = {
      kind: graphql_1.Kind.DOCUMENT,
      definitions: __spreadArrays([info.operation], fragments)
    };
    var operation = {
      query: document,
      variables: info.variableValues,
      context: {
        graphqlContext: context
      }
    };
    var observable = linkToFetcher_1.execute(link, operation);
    return observableToAsyncIterable_1.observableToAsyncIterable(observable);
  };
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/mapAsyncIterator.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterall_1 = __webpack_require__(/*! iterall */ "iterall");
/**
 * Given an AsyncIterable and a callback function, return an AsyncIterator
 * which produces values mapped via calling the callback function.
 */


function mapAsyncIterator(iterator, callback, rejectCallback) {
  var _a;

  var $return;
  var abruptClose;

  if (typeof iterator.return === 'function') {
    $return = iterator.return;

    abruptClose = function (error) {
      var rethrow = function () {
        return Promise.reject(error);
      };

      return $return.call(iterator).then(rethrow, rethrow);
    };
  }

  function mapResult(result) {
    return result.done ? result : asyncMapValue(result.value, callback).then(iteratorResult, abruptClose);
  }

  var mapReject;

  if (rejectCallback) {
    // Capture rejectCallback to ensure it cannot be null.
    var reject_1 = rejectCallback;

    mapReject = function (error) {
      return asyncMapValue(error, reject_1).then(iteratorResult, abruptClose);
    };
  }

  return _a = {
    next: function () {
      return iterator.next().then(mapResult, mapReject);
    },
    return: function () {
      return $return ? $return.call(iterator).then(mapResult, mapReject) : Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function (error) {
      if (typeof iterator.throw === 'function') {
        return iterator.throw(error).then(mapResult, mapReject);
      }

      return Promise.reject(error).catch(abruptClose);
    }
  }, _a[iterall_1.$$asyncIterator] = function () {
    return this;
  }, _a;
}

exports.default = mapAsyncIterator;

function asyncMapValue(value, callback) {
  return new Promise(function (resolve) {
    return resolve(callback(value));
  });
}

function iteratorResult(value) {
  return {
    value: value,
    done: false
  };
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/mergeSchemas.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/mergeSchemas.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var makeExecutableSchema_1 = __webpack_require__(/*! ../makeExecutableSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js");

var schemaRecreation_1 = __webpack_require__(/*! ./schemaRecreation */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js");

var delegateToSchema_1 = __webpack_require__(/*! ./delegateToSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/delegateToSchema.js");

var typeFromAST_1 = __webpack_require__(/*! ./typeFromAST */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/typeFromAST.js");

var transforms_1 = __webpack_require__(/*! ../transforms */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/index.js");

var mergeDeep_1 = __webpack_require__(/*! ../mergeDeep */ "./node_modules/graphpack/node_modules/graphql-tools/dist/mergeDeep.js");

var schemaVisitor_1 = __webpack_require__(/*! ../schemaVisitor */ "./node_modules/graphpack/node_modules/graphql-tools/dist/schemaVisitor.js");

function mergeSchemas(_a) {
  var schemas = _a.schemas,
      onTypeConflict = _a.onTypeConflict,
      resolvers = _a.resolvers,
      schemaDirectives = _a.schemaDirectives,
      inheritResolversFromInterfaces = _a.inheritResolversFromInterfaces,
      mergeDirectives = _a.mergeDirectives;
  return mergeSchemasImplementation({
    schemas: schemas,
    resolvers: resolvers,
    schemaDirectives: schemaDirectives,
    inheritResolversFromInterfaces: inheritResolversFromInterfaces,
    mergeDirectives: mergeDirectives
  });
}

exports.default = mergeSchemas;

function mergeSchemasImplementation(_a) {
  var schemas = _a.schemas,
      resolvers = _a.resolvers,
      schemaDirectives = _a.schemaDirectives,
      inheritResolversFromInterfaces = _a.inheritResolversFromInterfaces,
      mergeDirectives = _a.mergeDirectives;
  var allSchemas = [];
  var typeCandidates = {};
  var types = {};
  var extensions = [];
  var directives = [];
  var fragments = [];
  var resolveType = schemaRecreation_1.createResolveType(function (name) {
    if (types[name] === undefined) {
      throw new Error("Can't find type " + name + ".");
    }

    return types[name];
  });
  schemas.forEach(function (schema) {
    if (schema instanceof graphql_1.GraphQLSchema) {
      allSchemas.push(schema);
      var queryType_1 = schema.getQueryType();
      var mutationType_1 = schema.getMutationType();
      var subscriptionType_1 = schema.getSubscriptionType();

      if (queryType_1) {
        addTypeCandidate(typeCandidates, 'Query', {
          schema: schema,
          type: queryType_1
        });
      }

      if (mutationType_1) {
        addTypeCandidate(typeCandidates, 'Mutation', {
          schema: schema,
          type: mutationType_1
        });
      }

      if (subscriptionType_1) {
        addTypeCandidate(typeCandidates, 'Subscription', {
          schema: schema,
          type: subscriptionType_1
        });
      }

      if (mergeDirectives) {
        var directiveInstances = schema.getDirectives();
        directiveInstances.forEach(function (directive) {
          directives.push(directive);
        });
      }

      var typeMap_1 = schema.getTypeMap();
      Object.keys(typeMap_1).forEach(function (typeName) {
        var type = typeMap_1[typeName];

        if (graphql_1.isNamedType(type) && graphql_1.getNamedType(type).name.slice(0, 2) !== '__' && type !== queryType_1 && type !== mutationType_1 && type !== subscriptionType_1) {
          addTypeCandidate(typeCandidates, type.name, {
            schema: schema,
            type: type
          });
        }
      });
    } else if (typeof schema === 'string' || schema && schema.kind === graphql_1.Kind.DOCUMENT) {
      var parsedSchemaDocument = typeof schema === 'string' ? graphql_1.parse(schema) : schema;
      parsedSchemaDocument.definitions.forEach(function (def) {
        var type = typeFromAST_1.default(def);

        if (type instanceof graphql_1.GraphQLDirective && mergeDirectives) {
          directives.push(type);
        } else if (type && !(type instanceof graphql_1.GraphQLDirective)) {
          addTypeCandidate(typeCandidates, type.name, {
            type: type
          });
        }
      });
      var extensionsDocument = makeExecutableSchema_1.extractExtensionDefinitions(parsedSchemaDocument);

      if (extensionsDocument.definitions.length > 0) {
        extensions.push(extensionsDocument);
      }
    } else if (Array.isArray(schema)) {
      schema.forEach(function (type) {
        addTypeCandidate(typeCandidates, type.name, {
          type: type
        });
      });
    } else {
      throw new Error("Invalid schema passed");
    }
  });
  var mergeInfo = createMergeInfo(allSchemas, fragments);

  if (!resolvers) {
    resolvers = {};
  } else if (typeof resolvers === 'function') {
    console.warn('Passing functions as resolver parameter is deprecated. Use `info.mergeInfo` instead.');
    resolvers = resolvers(mergeInfo);
  } else if (Array.isArray(resolvers)) {
    resolvers = resolvers.reduce(function (left, right) {
      if (typeof right === 'function') {
        console.warn('Passing functions as resolver parameter is deprecated. Use `info.mergeInfo` instead.');
        right = right(mergeInfo);
      }

      return mergeDeep_1.default(left, right);
    }, {});
  }

  var generatedResolvers = {};
  Object.keys(typeCandidates).forEach(function (typeName) {
    var resultType = defaultVisitType(typeName, typeCandidates[typeName]);

    if (resultType === null) {
      types[typeName] = null;
    } else {
      var type = void 0;
      var typeResolvers = void 0;

      if (graphql_1.isNamedType(resultType)) {
        type = resultType;
      } else if (resultType.type) {
        type = resultType.type;
        typeResolvers = resultType.resolvers;
      } else {
        throw new Error("Invalid visitType result for type " + typeName);
      }

      types[typeName] = schemaRecreation_1.recreateType(type, resolveType, false);

      if (typeResolvers) {
        generatedResolvers[typeName] = typeResolvers;
      }
    }
  });
  var mergedSchema = new graphql_1.GraphQLSchema({
    query: types.Query,
    mutation: types.Mutation,
    subscription: types.Subscription,
    types: Object.keys(types).map(function (key) {
      return types[key];
    }),
    directives: directives.map(function (directive) {
      return schemaRecreation_1.recreateDirective(directive, resolveType);
    })
  });
  extensions.forEach(function (extension) {
    mergedSchema = graphql_1.extendSchema(mergedSchema, extension, {
      commentDescriptions: true
    });
  });

  if (!resolvers) {
    resolvers = {};
  } else if (Array.isArray(resolvers)) {
    resolvers = resolvers.reduce(mergeDeep_1.default, {});
  }

  Object.keys(resolvers).forEach(function (typeName) {
    var type = resolvers[typeName];

    if (type instanceof graphql_1.GraphQLScalarType) {
      return;
    }

    Object.keys(type).forEach(function (fieldName) {
      var field = type[fieldName];

      if (field.fragment) {
        fragments.push({
          field: fieldName,
          fragment: field.fragment
        });
      }
    });
  });
  mergedSchema = makeExecutableSchema_1.addResolveFunctionsToSchema({
    schema: mergedSchema,
    resolvers: mergeDeep_1.default(generatedResolvers, resolvers),
    inheritResolversFromInterfaces: inheritResolversFromInterfaces
  });
  forEachField(mergedSchema, function (field) {
    if (field.resolve) {
      var fieldResolver_1 = field.resolve;

      field.resolve = function (parent, args, context, info) {
        var newInfo = __assign(__assign({}, info), {
          mergeInfo: mergeInfo
        });

        return fieldResolver_1(parent, args, context, newInfo);
      };
    }

    if (field.subscribe) {
      var fieldResolver_2 = field.subscribe;

      field.subscribe = function (parent, args, context, info) {
        var newInfo = __assign(__assign({}, info), {
          mergeInfo: mergeInfo
        });

        return fieldResolver_2(parent, args, context, newInfo);
      };
    }
  });

  if (schemaDirectives) {
    schemaVisitor_1.SchemaDirectiveVisitor.visitSchemaDirectives(mergedSchema, schemaDirectives);
  }

  return mergedSchema;
}

function createMergeInfo(allSchemas, fragments) {
  return {
    delegate: function (operation, fieldName, args, context, info, transforms) {
      console.warn('`mergeInfo.delegate` is deprecated. ' + 'Use `mergeInfo.delegateToSchema and pass explicit schema instances.');
      var schema = guessSchemaByRootField(allSchemas, operation, fieldName);
      var expandTransforms = new transforms_1.ExpandAbstractTypes(info.schema, schema);
      var fragmentTransform = new transforms_1.ReplaceFieldWithFragment(schema, fragments);
      return delegateToSchema_1.default({
        schema: schema,
        operation: operation,
        fieldName: fieldName,
        args: args,
        context: context,
        info: info,
        transforms: __spreadArrays(transforms || [], [expandTransforms, fragmentTransform])
      });
    },
    delegateToSchema: function (options) {
      return delegateToSchema_1.default(__assign(__assign({}, options), {
        transforms: options.transforms
      }));
    },
    fragments: fragments
  };
}

function guessSchemaByRootField(schemas, operation, fieldName) {
  for (var _i = 0, schemas_1 = schemas; _i < schemas_1.length; _i++) {
    var schema = schemas_1[_i];
    var rootObject = void 0;

    if (operation === 'subscription') {
      rootObject = schema.getSubscriptionType();
    } else if (operation === 'mutation') {
      rootObject = schema.getMutationType();
    } else {
      rootObject = schema.getQueryType();
    }

    if (rootObject) {
      var fields = rootObject.getFields();

      if (fields[fieldName]) {
        return schema;
      }
    }
  }

  throw new Error("Could not find subschema with field `" + operation + "." + fieldName + "`");
}

function createDelegatingResolver(schema, operation, fieldName) {
  return function (root, args, context, info) {
    return info.mergeInfo.delegateToSchema({
      schema: schema,
      operation: operation,
      fieldName: fieldName,
      args: args,
      context: context,
      info: info
    });
  };
}

function forEachField(schema, fn) {
  var typeMap = schema.getTypeMap();
  Object.keys(typeMap).forEach(function (typeName) {
    var type = typeMap[typeName];

    if (!graphql_1.getNamedType(type).name.startsWith('__') && type instanceof graphql_1.GraphQLObjectType) {
      var fields_1 = type.getFields();
      Object.keys(fields_1).forEach(function (fieldName) {
        var field = fields_1[fieldName];
        fn(field, typeName, fieldName);
      });
    }
  });
}

function addTypeCandidate(typeCandidates, name, typeCandidate) {
  if (!typeCandidates[name]) {
    typeCandidates[name] = [];
  }

  typeCandidates[name].push(typeCandidate);
}

function defaultVisitType(name, candidates, candidateSelector) {
  if (!candidateSelector) {
    candidateSelector = function (cands) {
      return cands[cands.length - 1];
    };
  }

  var resolveType = schemaRecreation_1.createResolveType(function (_, type) {
    return type;
  });

  if (name === 'Query' || name === 'Mutation' || name === 'Subscription') {
    var fields_2 = {};
    var operationName_1;

    switch (name) {
      case 'Query':
        operationName_1 = 'query';
        break;

      case 'Mutation':
        operationName_1 = 'mutation';
        break;

      case 'Subscription':
        operationName_1 = 'subscription';
        break;

      default:
        break;
    }

    var resolvers_1 = {};
    var resolverKey_1 = operationName_1 === 'subscription' ? 'subscribe' : 'resolve';
    candidates.forEach(function (_a) {
      var candidateType = _a.type,
          schema = _a.schema;
      var candidateFields = candidateType.getFields();
      fields_2 = __assign(__assign({}, fields_2), candidateFields);
      Object.keys(candidateFields).forEach(function (fieldName) {
        var _a;

        resolvers_1[fieldName] = (_a = {}, _a[resolverKey_1] = createDelegatingResolver(schema, operationName_1, fieldName), _a);
      });
    });
    var type = new graphql_1.GraphQLObjectType({
      name: name,
      fields: schemaRecreation_1.fieldMapToFieldConfigMap(fields_2, resolveType, false)
    });
    return {
      type: type,
      resolvers: resolvers_1
    };
  } else {
    var candidate = candidateSelector(candidates);
    return candidate.type;
  }
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/observableToAsyncIterable.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function () {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];

      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;

        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };

        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;

        case 7:
          op = _.ops.pop();

          _.trys.pop();

          continue;

        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }

          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }

          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }

          if (t && _.label < t[2]) {
            _.label = t[2];

            _.ops.push(op);

            break;
          }

          if (t[2]) _.ops.pop();

          _.trys.pop();

          continue;
      }

      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var iterall_1 = __webpack_require__(/*! iterall */ "iterall");

function observableToAsyncIterable(observable) {
  var _a;

  var pullQueue = [];
  var pushQueue = [];
  var listening = true;

  var pushValue = function (_a) {
    var data = _a.data;

    if (pullQueue.length !== 0) {
      pullQueue.shift()({
        value: data,
        done: false
      });
    } else {
      pushQueue.push({
        value: data
      });
    }
  };

  var pushError = function (error) {
    if (pullQueue.length !== 0) {
      pullQueue.shift()({
        value: {
          errors: [error]
        },
        done: false
      });
    } else {
      pushQueue.push({
        value: {
          errors: [error]
        }
      });
    }
  };

  var pullValue = function () {
    return new Promise(function (resolve) {
      if (pushQueue.length !== 0) {
        var element = pushQueue.shift(); // either {value: {errors: [...]}} or {value: ...}

        resolve(__assign(__assign({}, element), {
          done: false
        }));
      } else {
        pullQueue.push(resolve);
      }
    });
  };

  var subscription = observable.subscribe({
    next: function (value) {
      pushValue(value);
    },
    error: function (err) {
      pushError(err);
    }
  });

  var emptyQueue = function () {
    if (listening) {
      listening = false;
      subscription.unsubscribe();
      pullQueue.forEach(function (resolve) {
        return resolve({
          value: undefined,
          done: true
        });
      });
      pullQueue.length = 0;
      pushQueue.length = 0;
    }
  };

  return _a = {
    next: function () {
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          return [2
          /*return*/
          , listening ? pullValue() : this.return()];
        });
      });
    },
    return: function () {
      emptyQueue();
      return Promise.resolve({
        value: undefined,
        done: true
      });
    },
    throw: function (error) {
      emptyQueue();
      return Promise.reject(error);
    }
  }, _a[iterall_1.$$asyncIterator] = function () {
    return this;
  }, _a;
}

exports.observableToAsyncIterable = observableToAsyncIterable;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

function resolveFromParentTypename(parent, schema) {
  var parentTypename = parent['__typename'];

  if (!parentTypename) {
    throw new Error('Did not fetch typename for object, unable to resolve interface.');
  }

  var resolvedType = schema.getType(parentTypename);

  if (!(resolvedType instanceof graphql_1.GraphQLObjectType)) {
    throw new Error('__typename did not match an object type: ' + parentTypename);
  }

  return resolvedType;
}

exports.default = resolveFromParentTypename;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolvers.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolvers.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var delegateToSchema_1 = __webpack_require__(/*! ./delegateToSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/delegateToSchema.js");

function generateProxyingResolvers(targetSchema, transforms, mapping) {
  var result = {};
  Object.keys(mapping).forEach(function (name) {
    result[name] = {};
    var innerMapping = mapping[name];
    Object.keys(innerMapping).forEach(function (from) {
      var _a;

      var to = innerMapping[from];
      var resolverType = to.operation === 'subscription' ? 'subscribe' : 'resolve';
      result[name][from] = (_a = {}, _a[resolverType] = createProxyingResolver(targetSchema, to.operation, to.name, transforms), _a);
    });
  });
  return result;
}

exports.generateProxyingResolvers = generateProxyingResolvers;

function generateSimpleMapping(targetSchema) {
  var query = targetSchema.getQueryType();
  var mutation = targetSchema.getMutationType();
  var subscription = targetSchema.getSubscriptionType();
  var result = {};

  if (query) {
    result[query.name] = generateMappingFromObjectType(query, 'query');
  }

  if (mutation) {
    result[mutation.name] = generateMappingFromObjectType(mutation, 'mutation');
  }

  if (subscription) {
    result[subscription.name] = generateMappingFromObjectType(subscription, 'subscription');
  }

  return result;
}

exports.generateSimpleMapping = generateSimpleMapping;

function generateMappingFromObjectType(type, operation) {
  var result = {};
  var fields = type.getFields();
  Object.keys(fields).forEach(function (fieldName) {
    result[fieldName] = {
      name: fieldName,
      operation: operation
    };
  });
  return result;
}

exports.generateMappingFromObjectType = generateMappingFromObjectType;

function createProxyingResolver(schema, operation, fieldName, transforms) {
  return function (parent, args, context, info) {
    return delegateToSchema_1.default({
      schema: schema,
      operation: operation,
      fieldName: fieldName,
      args: {},
      context: context,
      info: info,
      transforms: transforms
    });
  };
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var isSpecifiedScalarType_1 = __webpack_require__(/*! ../isSpecifiedScalarType */ "./node_modules/graphpack/node_modules/graphql-tools/dist/isSpecifiedScalarType.js");

var resolveFromParentTypename_1 = __webpack_require__(/*! ./resolveFromParentTypename */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js");

var defaultMergedResolver_1 = __webpack_require__(/*! ./defaultMergedResolver */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/defaultMergedResolver.js");

function recreateType(type, resolveType, keepResolvers) {
  if (type instanceof graphql_1.GraphQLObjectType) {
    var fields_1 = type.getFields();
    var interfaces_1 = type.getInterfaces();
    return new graphql_1.GraphQLObjectType({
      name: type.name,
      description: type.description,
      astNode: type.astNode,
      isTypeOf: keepResolvers ? type.isTypeOf : undefined,
      fields: function () {
        return fieldMapToFieldConfigMap(fields_1, resolveType, keepResolvers);
      },
      interfaces: function () {
        return interfaces_1.map(function (iface) {
          return resolveType(iface);
        });
      }
    });
  } else if (type instanceof graphql_1.GraphQLInterfaceType) {
    var fields_2 = type.getFields();
    return new graphql_1.GraphQLInterfaceType({
      name: type.name,
      description: type.description,
      astNode: type.astNode,
      fields: function () {
        return fieldMapToFieldConfigMap(fields_2, resolveType, keepResolvers);
      },
      resolveType: keepResolvers ? type.resolveType : function (parent, context, info) {
        return resolveFromParentTypename_1.default(parent, info.schema);
      }
    });
  } else if (type instanceof graphql_1.GraphQLUnionType) {
    return new graphql_1.GraphQLUnionType({
      name: type.name,
      description: type.description,
      astNode: type.astNode,
      types: function () {
        return type.getTypes().map(function (unionMember) {
          return resolveType(unionMember);
        });
      },
      resolveType: keepResolvers ? type.resolveType : function (parent, context, info) {
        return resolveFromParentTypename_1.default(parent, info.schema);
      }
    });
  } else if (type instanceof graphql_1.GraphQLInputObjectType) {
    return new graphql_1.GraphQLInputObjectType({
      name: type.name,
      description: type.description,
      astNode: type.astNode,
      fields: function () {
        return inputFieldMapToFieldConfigMap(type.getFields(), resolveType);
      }
    });
  } else if (type instanceof graphql_1.GraphQLEnumType) {
    var values = type.getValues();
    var newValues_1 = {};
    values.forEach(function (value) {
      newValues_1[value.name] = {
        value: value.value,
        deprecationReason: value.deprecationReason,
        description: value.description,
        astNode: value.astNode
      };
    });
    return new graphql_1.GraphQLEnumType({
      name: type.name,
      description: type.description,
      astNode: type.astNode,
      values: newValues_1
    });
  } else if (type instanceof graphql_1.GraphQLScalarType) {
    if (keepResolvers || isSpecifiedScalarType_1.default(type)) {
      return type;
    } else {
      return new graphql_1.GraphQLScalarType({
        name: type.name,
        description: type.description,
        astNode: type.astNode,
        serialize: function (value) {
          return value;
        },
        parseValue: function (value) {
          return value;
        },
        parseLiteral: function (ast) {
          return parseLiteral(ast);
        }
      });
    }
  } else {
    throw new Error("Invalid type " + type);
  }
}

exports.recreateType = recreateType;

function recreateDirective(directive, resolveType) {
  return new graphql_1.GraphQLDirective({
    name: directive.name,
    description: directive.description,
    locations: directive.locations,
    args: argsToFieldConfigArgumentMap(directive.args, resolveType),
    astNode: directive.astNode
  });
}

exports.recreateDirective = recreateDirective;

function parseLiteral(ast) {
  switch (ast.kind) {
    case graphql_1.Kind.STRING:
    case graphql_1.Kind.BOOLEAN:
      {
        return ast.value;
      }

    case graphql_1.Kind.INT:
    case graphql_1.Kind.FLOAT:
      {
        return parseFloat(ast.value);
      }

    case graphql_1.Kind.OBJECT:
      {
        var value_1 = Object.create(null);
        ast.fields.forEach(function (field) {
          value_1[field.name.value] = parseLiteral(field.value);
        });
        return value_1;
      }

    case graphql_1.Kind.LIST:
      {
        return ast.values.map(parseLiteral);
      }

    default:
      return null;
  }
}

function fieldMapToFieldConfigMap(fields, resolveType, keepResolvers) {
  var result = {};
  Object.keys(fields).forEach(function (name) {
    var field = fields[name];
    var type = resolveType(field.type);

    if (type !== null) {
      result[name] = fieldToFieldConfig(fields[name], resolveType, keepResolvers);
    }
  });
  return result;
}

exports.fieldMapToFieldConfigMap = fieldMapToFieldConfigMap;

function createResolveType(getType) {
  var resolveType = function (type) {
    if (type instanceof graphql_1.GraphQLList) {
      var innerType = resolveType(type.ofType);

      if (innerType === null) {
        return null;
      } else {
        return new graphql_1.GraphQLList(innerType);
      }
    } else if (type instanceof graphql_1.GraphQLNonNull) {
      var innerType = resolveType(type.ofType);

      if (innerType === null) {
        return null;
      } else {
        return new graphql_1.GraphQLNonNull(innerType);
      }
    } else if (graphql_1.isNamedType(type)) {
      var typeName = graphql_1.getNamedType(type).name;

      switch (typeName) {
        case graphql_1.GraphQLInt.name:
          return graphql_1.GraphQLInt;

        case graphql_1.GraphQLFloat.name:
          return graphql_1.GraphQLFloat;

        case graphql_1.GraphQLString.name:
          return graphql_1.GraphQLString;

        case graphql_1.GraphQLBoolean.name:
          return graphql_1.GraphQLBoolean;

        case graphql_1.GraphQLID.name:
          return graphql_1.GraphQLID;

        default:
          return getType(typeName, type);
      }
    } else {
      return type;
    }
  };

  return resolveType;
}

exports.createResolveType = createResolveType;

function fieldToFieldConfig(field, resolveType, keepResolvers) {
  return {
    type: resolveType(field.type),
    args: argsToFieldConfigArgumentMap(field.args, resolveType),
    resolve: keepResolvers ? field.resolve : defaultMergedResolver_1.default,
    subscribe: keepResolvers ? field.subscribe : null,
    description: field.description,
    deprecationReason: field.deprecationReason,
    astNode: field.astNode
  };
}

exports.fieldToFieldConfig = fieldToFieldConfig;

function argsToFieldConfigArgumentMap(args, resolveType) {
  var result = {};
  args.forEach(function (arg) {
    var newArg = argumentToArgumentConfig(arg, resolveType);

    if (newArg) {
      result[newArg[0]] = newArg[1];
    }
  });
  return result;
}

exports.argsToFieldConfigArgumentMap = argsToFieldConfigArgumentMap;

function argumentToArgumentConfig(argument, resolveType) {
  var type = resolveType(argument.type);

  if (type === null) {
    return null;
  } else {
    return [argument.name, {
      type: type,
      defaultValue: argument.defaultValue,
      description: argument.description
    }];
  }
}

exports.argumentToArgumentConfig = argumentToArgumentConfig;

function inputFieldMapToFieldConfigMap(fields, resolveType) {
  var result = {};
  Object.keys(fields).forEach(function (name) {
    var field = fields[name];
    var type = resolveType(field.type);

    if (type !== null) {
      result[name] = inputFieldToFieldConfig(fields[name], resolveType);
    }
  });
  return result;
}

exports.inputFieldMapToFieldConfigMap = inputFieldMapToFieldConfigMap;

function inputFieldToFieldConfig(field, resolveType) {
  return {
    type: resolveType(field.type),
    defaultValue: field.defaultValue,
    description: field.description,
    astNode: field.astNode
  };
}

exports.inputFieldToFieldConfig = inputFieldToFieldConfig;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/typeFromAST.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/typeFromAST.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var resolveFromParentTypename_1 = __webpack_require__(/*! ./resolveFromParentTypename */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolveFromParentTypename.js");

var backcompatOptions = {
  commentDescriptions: true
};

function typeFromAST(node) {
  switch (node.kind) {
    case graphql_1.Kind.OBJECT_TYPE_DEFINITION:
      return makeObjectType(node);

    case graphql_1.Kind.INTERFACE_TYPE_DEFINITION:
      return makeInterfaceType(node);

    case graphql_1.Kind.ENUM_TYPE_DEFINITION:
      return makeEnumType(node);

    case graphql_1.Kind.UNION_TYPE_DEFINITION:
      return makeUnionType(node);

    case graphql_1.Kind.SCALAR_TYPE_DEFINITION:
      return makeScalarType(node);

    case graphql_1.Kind.INPUT_OBJECT_TYPE_DEFINITION:
      return makeInputObjectType(node);

    case graphql_1.Kind.DIRECTIVE_DEFINITION:
      return makeDirective(node);

    default:
      return null;
  }
}

exports.default = typeFromAST;

function makeObjectType(node) {
  return new graphql_1.GraphQLObjectType({
    name: node.name.value,
    fields: function () {
      return makeFields(node.fields);
    },
    interfaces: function () {
      return node.interfaces.map(function (iface) {
        return createNamedStub(iface.name.value, 'interface');
      });
    },
    description: graphql_1.getDescription(node, backcompatOptions)
  });
}

function makeInterfaceType(node) {
  return new graphql_1.GraphQLInterfaceType({
    name: node.name.value,
    fields: function () {
      return makeFields(node.fields);
    },
    description: graphql_1.getDescription(node, backcompatOptions),
    resolveType: function (parent, context, info) {
      return resolveFromParentTypename_1.default(parent, info.schema);
    }
  });
}

function makeEnumType(node) {
  var values = {};
  node.values.forEach(function (value) {
    values[value.name.value] = {
      description: graphql_1.getDescription(value, backcompatOptions)
    };
  });
  return new graphql_1.GraphQLEnumType({
    name: node.name.value,
    values: values,
    description: graphql_1.getDescription(node, backcompatOptions)
  });
}

function makeUnionType(node) {
  return new graphql_1.GraphQLUnionType({
    name: node.name.value,
    types: function () {
      return node.types.map(function (type) {
        return resolveType(type, 'object');
      });
    },
    description: graphql_1.getDescription(node, backcompatOptions),
    resolveType: function (parent, context, info) {
      return resolveFromParentTypename_1.default(parent, info.schema);
    }
  });
}

function makeScalarType(node) {
  return new graphql_1.GraphQLScalarType({
    name: node.name.value,
    description: graphql_1.getDescription(node, backcompatOptions),
    serialize: function () {
      return null;
    },
    // Note: validation calls the parse functions to determine if a
    // literal value is correct. Returning null would cause use of custom
    // scalars to always fail validation. Returning false causes them to
    // always pass validation.
    parseValue: function () {
      return false;
    },
    parseLiteral: function () {
      return false;
    }
  });
}

function makeInputObjectType(node) {
  return new graphql_1.GraphQLInputObjectType({
    name: node.name.value,
    fields: function () {
      return makeValues(node.fields);
    },
    description: graphql_1.getDescription(node, backcompatOptions)
  });
}

function makeFields(nodes) {
  var result = {};
  nodes.forEach(function (node) {
    var deprecatedDirective = node.directives.find(function (directive) {
      return directive && directive.name && directive.name.value === 'deprecated';
    });
    var deprecatedArgument = deprecatedDirective && deprecatedDirective.arguments && deprecatedDirective.arguments.find(function (arg) {
      return arg && arg.name && arg.name.value === 'reason';
    });
    var deprecationReason = deprecatedArgument && deprecatedArgument.value && deprecatedArgument.value.value;
    result[node.name.value] = {
      type: resolveType(node.type, 'object'),
      args: makeValues(node.arguments),
      description: graphql_1.getDescription(node, backcompatOptions),
      deprecationReason: deprecationReason
    };
  });
  return result;
}

function makeValues(nodes) {
  var result = {};
  nodes.forEach(function (node) {
    var type = resolveType(node.type, 'input');
    result[node.name.value] = {
      type: type,
      defaultValue: graphql_1.valueFromAST(node.defaultValue, type),
      description: graphql_1.getDescription(node, backcompatOptions)
    };
  });
  return result;
}

function resolveType(node, type) {
  switch (node.kind) {
    case graphql_1.Kind.LIST_TYPE:
      return new graphql_1.GraphQLList(resolveType(node.type, type));

    case graphql_1.Kind.NON_NULL_TYPE:
      return new graphql_1.GraphQLNonNull(resolveType(node.type, type));

    default:
      return createNamedStub(node.name.value, type);
  }
}

function createNamedStub(name, type) {
  var constructor;

  if (type === 'object') {
    constructor = graphql_1.GraphQLObjectType;
  } else if (type === 'interface') {
    constructor = graphql_1.GraphQLInterfaceType;
  } else {
    constructor = graphql_1.GraphQLInputObjectType;
  }

  return new constructor({
    name: name,
    fields: {
      __fake: {
        type: graphql_1.GraphQLString
      }
    }
  });
}

function makeDirective(node) {
  var locations = [];
  node.locations.forEach(function (location) {
    if (location.value in graphql_1.DirectiveLocation) {
      locations.push(location.value);
    }
  });
  return new graphql_1.GraphQLDirective({
    name: node.name.value,
    description: node.description ? node.description.value : null,
    args: makeValues(node.arguments),
    locations: locations
  });
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var AddArgumentsAsVariablesTransform =
/** @class */
function () {
  function AddArgumentsAsVariablesTransform(schema, args) {
    this.schema = schema;
    this.args = args;
  }

  AddArgumentsAsVariablesTransform.prototype.transformRequest = function (originalRequest) {
    var _a = addVariablesToRootField(this.schema, originalRequest.document, this.args),
        document = _a.document,
        newVariables = _a.newVariables;

    var variables = __assign(__assign({}, originalRequest.variables), newVariables);

    return {
      document: document,
      variables: variables
    };
  };

  return AddArgumentsAsVariablesTransform;
}();

exports.default = AddArgumentsAsVariablesTransform;

function addVariablesToRootField(targetSchema, document, args) {
  var operations = document.definitions.filter(function (def) {
    return def.kind === graphql_1.Kind.OPERATION_DEFINITION;
  });
  var fragments = document.definitions.filter(function (def) {
    return def.kind === graphql_1.Kind.FRAGMENT_DEFINITION;
  });
  var variableNames = {};
  var newOperations = operations.map(function (operation) {
    var existingVariables = operation.variableDefinitions.map(function (variableDefinition) {
      return variableDefinition.variable.name.value;
    });
    var variableCounter = 0;
    var variables = {};

    var generateVariableName = function (argName) {
      var varName;

      do {
        varName = "_v" + variableCounter + "_" + argName;
        variableCounter++;
      } while (existingVariables.indexOf(varName) !== -1);

      return varName;
    };

    var type;

    if (operation.operation === 'subscription') {
      type = targetSchema.getSubscriptionType();
    } else if (operation.operation === 'mutation') {
      type = targetSchema.getMutationType();
    } else {
      type = targetSchema.getQueryType();
    }

    var newSelectionSet = [];
    operation.selectionSet.selections.forEach(function (selection) {
      if (selection.kind === graphql_1.Kind.FIELD) {
        var newArgs_1 = {};
        selection.arguments.forEach(function (argument) {
          newArgs_1[argument.name.value] = argument;
        });
        var name_1 = selection.name.value;
        var field = type.getFields()[name_1];
        field.args.forEach(function (argument) {
          if (argument.name in args) {
            var variableName = generateVariableName(argument.name);
            variableNames[argument.name] = variableName;
            newArgs_1[argument.name] = {
              kind: graphql_1.Kind.ARGUMENT,
              name: {
                kind: graphql_1.Kind.NAME,
                value: argument.name
              },
              value: {
                kind: graphql_1.Kind.VARIABLE,
                name: {
                  kind: graphql_1.Kind.NAME,
                  value: variableName
                }
              }
            };
            existingVariables.push(variableName);
            variables[variableName] = {
              kind: graphql_1.Kind.VARIABLE_DEFINITION,
              variable: {
                kind: graphql_1.Kind.VARIABLE,
                name: {
                  kind: graphql_1.Kind.NAME,
                  value: variableName
                }
              },
              type: typeToAst(argument.type)
            };
          }
        });
        newSelectionSet.push(__assign(__assign({}, selection), {
          arguments: Object.keys(newArgs_1).map(function (argName) {
            return newArgs_1[argName];
          })
        }));
      } else {
        newSelectionSet.push(selection);
      }
    });
    return __assign(__assign({}, operation), {
      variableDefinitions: operation.variableDefinitions.concat(Object.keys(variables).map(function (varName) {
        return variables[varName];
      })),
      selectionSet: {
        kind: graphql_1.Kind.SELECTION_SET,
        selections: newSelectionSet
      }
    });
  });
  var newVariables = {};
  Object.keys(variableNames).forEach(function (name) {
    newVariables[variableNames[name]] = args[name];
  });
  return {
    document: __assign(__assign({}, document), {
      definitions: __spreadArrays(newOperations, fragments)
    }),
    newVariables: newVariables
  };
}

function typeToAst(type) {
  if (type instanceof graphql_1.GraphQLNonNull) {
    var innerType = typeToAst(type.ofType);

    if (innerType.kind === graphql_1.Kind.LIST_TYPE || innerType.kind === graphql_1.Kind.NAMED_TYPE) {
      return {
        kind: graphql_1.Kind.NON_NULL_TYPE,
        type: innerType
      };
    } else {
      throw new Error('Incorrent inner non-null type');
    }
  } else if (type instanceof graphql_1.GraphQLList) {
    return {
      kind: graphql_1.Kind.LIST_TYPE,
      type: typeToAst(type.ofType)
    };
  } else {
    return {
      kind: graphql_1.Kind.NAMED_TYPE,
      name: {
        kind: graphql_1.Kind.NAME,
        value: type.toString()
      }
    };
  }
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var AddTypenameToAbstract =
/** @class */
function () {
  function AddTypenameToAbstract(targetSchema) {
    this.targetSchema = targetSchema;
  }

  AddTypenameToAbstract.prototype.transformRequest = function (originalRequest) {
    var document = addTypenameToAbstract(this.targetSchema, originalRequest.document);
    return __assign(__assign({}, originalRequest), {
      document: document
    });
  };

  return AddTypenameToAbstract;
}();

exports.default = AddTypenameToAbstract;

function addTypenameToAbstract(targetSchema, document) {
  var _a;

  var typeInfo = new graphql_1.TypeInfo(targetSchema);
  return graphql_1.visit(document, graphql_1.visitWithTypeInfo(typeInfo, (_a = {}, _a[graphql_1.Kind.SELECTION_SET] = function (node) {
    var parentType = typeInfo.getParentType();
    var selections = node.selections;

    if (parentType && (parentType instanceof graphql_1.GraphQLInterfaceType || parentType instanceof graphql_1.GraphQLUnionType) && !selections.find(function (_) {
      return _.kind === graphql_1.Kind.FIELD && _.name.value === '__typename';
    })) {
      selections = selections.concat({
        kind: graphql_1.Kind.FIELD,
        name: {
          kind: graphql_1.Kind.NAME,
          value: '__typename'
        }
      });
    }

    if (selections !== node.selections) {
      return __assign(__assign({}, node), {
        selections: selections
      });
    }
  }, _a)));
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var errors_1 = __webpack_require__(/*! ../stitching/errors */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/errors.js");

var CheckResultAndHandleErrors =
/** @class */
function () {
  function CheckResultAndHandleErrors(info, fieldName) {
    this.info = info;
    this.fieldName = fieldName;
  }

  CheckResultAndHandleErrors.prototype.transformResult = function (result) {
    return errors_1.checkResultAndHandleErrors(result, this.info, this.fieldName);
  };

  return CheckResultAndHandleErrors;
}();

exports.default = CheckResultAndHandleErrors;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ConvertEnumResponse.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ConvertEnumResponse.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ConvertEnumResponse =
/** @class */
function () {
  function ConvertEnumResponse(enumNode) {
    this.enumNode = enumNode;
  }

  ConvertEnumResponse.prototype.transformResult = function (result) {
    var value = this.enumNode.getValue(result);

    if (value) {
      return value.value;
    }

    return result;
  };

  return ConvertEnumResponse;
}();

exports.default = ConvertEnumResponse;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ConvertEnumValues.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js"); // Transformation used to modifiy `GraphQLEnumType` values in a schema.


var ConvertEnumValues =
/** @class */
function () {
  function ConvertEnumValues(enumValueMap) {
    this.enumValueMap = enumValueMap;
  } // Walk a schema looking for `GraphQLEnumType` types. If found, and
  // matching types have been identified in `this.enumValueMap`, create new
  // `GraphQLEnumType` types using the `this.enumValueMap` specified new
  // values, and return them in the new schema.


  ConvertEnumValues.prototype.transformSchema = function (schema) {
    var _a;

    var enumValueMap = this.enumValueMap;

    if (!enumValueMap || Object.keys(enumValueMap).length === 0) {
      return schema;
    }

    var transformedSchema = visitSchema_1.visitSchema(schema, (_a = {}, _a[visitSchema_1.VisitSchemaKind.ENUM_TYPE] = function (enumType) {
      var externalToInternalValueMap = enumValueMap[enumType.name];

      if (externalToInternalValueMap) {
        var values = enumType.getValues();
        var newValues_1 = {};
        values.forEach(function (value) {
          var newValue = Object.keys(externalToInternalValueMap).includes(value.name) ? externalToInternalValueMap[value.name] : value.name;
          newValues_1[value.name] = {
            value: newValue,
            deprecationReason: value.deprecationReason,
            description: value.description,
            astNode: value.astNode
          };
        });
        return new graphql_1.GraphQLEnumType({
          name: enumType.name,
          description: enumType.description,
          astNode: enumType.astNode,
          values: newValues_1
        });
      }

      return enumType;
    }, _a));
    return transformedSchema;
  };

  return ConvertEnumValues;
}();

exports.default = ConvertEnumValues;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var implementsAbstractType_1 = __webpack_require__(/*! ../implementsAbstractType */ "./node_modules/graphpack/node_modules/graphql-tools/dist/implementsAbstractType.js");

var ExpandAbstractTypes =
/** @class */
function () {
  function ExpandAbstractTypes(transformedSchema, targetSchema) {
    this.targetSchema = targetSchema;
    this.mapping = extractPossibleTypes(transformedSchema, targetSchema);
    this.reverseMapping = flipMapping(this.mapping);
  }

  ExpandAbstractTypes.prototype.transformRequest = function (originalRequest) {
    var document = expandAbstractTypes(this.targetSchema, this.mapping, this.reverseMapping, originalRequest.document);
    return __assign(__assign({}, originalRequest), {
      document: document
    });
  };

  return ExpandAbstractTypes;
}();

exports.default = ExpandAbstractTypes;

function extractPossibleTypes(transformedSchema, targetSchema) {
  var typeMap = transformedSchema.getTypeMap();
  var mapping = {};
  Object.keys(typeMap).forEach(function (typeName) {
    var type = typeMap[typeName];

    if (graphql_1.isAbstractType(type)) {
      var targetType = targetSchema.getType(typeName);

      if (!graphql_1.isAbstractType(targetType)) {
        var implementations = transformedSchema.getPossibleTypes(type) || [];
        mapping[typeName] = implementations.filter(function (impl) {
          return targetSchema.getType(impl.name);
        }).map(function (impl) {
          return impl.name;
        });
      }
    }
  });
  return mapping;
}

function flipMapping(mapping) {
  var result = {};
  Object.keys(mapping).forEach(function (typeName) {
    var toTypeNames = mapping[typeName];
    toTypeNames.forEach(function (toTypeName) {
      if (!result[toTypeName]) {
        result[toTypeName] = [];
      }

      result[toTypeName].push(typeName);
    });
  });
  return result;
}

function expandAbstractTypes(targetSchema, mapping, reverseMapping, document) {
  var _a;

  var operations = document.definitions.filter(function (def) {
    return def.kind === graphql_1.Kind.OPERATION_DEFINITION;
  });
  var fragments = document.definitions.filter(function (def) {
    return def.kind === graphql_1.Kind.FRAGMENT_DEFINITION;
  });
  var existingFragmentNames = fragments.map(function (fragment) {
    return fragment.name.value;
  });
  var fragmentCounter = 0;

  var generateFragmentName = function (typeName) {
    var fragmentName;

    do {
      fragmentName = "_" + typeName + "_Fragment" + fragmentCounter;
      fragmentCounter++;
    } while (existingFragmentNames.indexOf(fragmentName) !== -1);

    return fragmentName;
  };

  var newFragments = [];
  var fragmentReplacements = {};
  fragments.forEach(function (fragment) {
    newFragments.push(fragment);
    var possibleTypes = mapping[fragment.typeCondition.name.value];

    if (possibleTypes) {
      fragmentReplacements[fragment.name.value] = [];
      possibleTypes.forEach(function (possibleTypeName) {
        var name = generateFragmentName(possibleTypeName);
        existingFragmentNames.push(name);
        var newFragment = {
          kind: graphql_1.Kind.FRAGMENT_DEFINITION,
          name: {
            kind: graphql_1.Kind.NAME,
            value: name
          },
          typeCondition: {
            kind: graphql_1.Kind.NAMED_TYPE,
            name: {
              kind: graphql_1.Kind.NAME,
              value: possibleTypeName
            }
          },
          selectionSet: fragment.selectionSet
        };
        newFragments.push(newFragment);
        fragmentReplacements[fragment.name.value].push({
          fragmentName: name,
          typeName: possibleTypeName
        });
      });
    }
  });

  var newDocument = __assign(__assign({}, document), {
    definitions: __spreadArrays(operations, newFragments)
  });

  var typeInfo = new graphql_1.TypeInfo(targetSchema);
  return graphql_1.visit(newDocument, graphql_1.visitWithTypeInfo(typeInfo, (_a = {}, _a[graphql_1.Kind.SELECTION_SET] = function (node) {
    var newSelections = __spreadArrays(node.selections);

    var parentType = graphql_1.getNamedType(typeInfo.getParentType());
    node.selections.forEach(function (selection) {
      if (selection.kind === graphql_1.Kind.INLINE_FRAGMENT) {
        var possibleTypes = mapping[selection.typeCondition.name.value];

        if (possibleTypes) {
          possibleTypes.forEach(function (possibleType) {
            if (implementsAbstractType_1.default(targetSchema, parentType, targetSchema.getType(possibleType))) {
              newSelections.push({
                kind: graphql_1.Kind.INLINE_FRAGMENT,
                typeCondition: {
                  kind: graphql_1.Kind.NAMED_TYPE,
                  name: {
                    kind: graphql_1.Kind.NAME,
                    value: possibleType
                  }
                },
                selectionSet: selection.selectionSet
              });
            }
          });
        }
      } else if (selection.kind === graphql_1.Kind.FRAGMENT_SPREAD) {
        var fragmentName = selection.name.value;
        var replacements = fragmentReplacements[fragmentName];

        if (replacements) {
          replacements.forEach(function (replacement) {
            var typeName = replacement.typeName;

            if (implementsAbstractType_1.default(targetSchema, parentType, targetSchema.getType(typeName))) {
              newSelections.push({
                kind: graphql_1.Kind.FRAGMENT_SPREAD,
                name: {
                  kind: graphql_1.Kind.NAME,
                  value: replacement.fragmentName
                }
              });
            }
          });
        }
      }
    });

    if (parentType && reverseMapping[parentType.name]) {
      newSelections.push({
        kind: graphql_1.Kind.FIELD,
        name: {
          kind: graphql_1.Kind.NAME,
          value: '__typename'
        }
      });
    }

    if (newSelections.length !== node.selections.length) {
      return __assign(__assign({}, node), {
        selections: newSelections
      });
    }
  }, _a)));
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExtractField.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExtractField.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var ExtractField =
/** @class */
function () {
  function ExtractField(_a) {
    var from = _a.from,
        to = _a.to;
    this.from = from;
    this.to = to;
  }

  ExtractField.prototype.transformRequest = function (originalRequest) {
    var _a, _b;

    var fromSelection;
    var ourPathFrom = JSON.stringify(this.from);
    var ourPathTo = JSON.stringify(this.to);
    var fieldPath = [];
    graphql_1.visit(originalRequest.document, (_a = {}, _a[graphql_1.Kind.FIELD] = {
      enter: function (node) {
        fieldPath.push(node.name.value);

        if (ourPathFrom === JSON.stringify(fieldPath)) {
          fromSelection = node.selectionSet;
          return graphql_1.BREAK;
        }
      },
      leave: function (node) {
        fieldPath.pop();
      }
    }, _a));
    fieldPath = [];
    var newDocument = graphql_1.visit(originalRequest.document, (_b = {}, _b[graphql_1.Kind.FIELD] = {
      enter: function (node) {
        fieldPath.push(node.name.value);

        if (ourPathTo === JSON.stringify(fieldPath) && fromSelection) {
          return __assign(__assign({}, node), {
            selectionSet: fromSelection
          });
        }
      },
      leave: function (node) {
        fieldPath.pop();
      }
    }, _b));
    return __assign(__assign({}, originalRequest), {
      document: newDocument
    });
  };

  return ExtractField;
}();

exports.default = ExtractField;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterRootFields.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterRootFields.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var TransformRootFields_1 = __webpack_require__(/*! ./TransformRootFields */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/TransformRootFields.js");

var FilterRootFields =
/** @class */
function () {
  function FilterRootFields(filter) {
    this.transformer = new TransformRootFields_1.default(function (operation, fieldName, field) {
      if (filter(operation, fieldName, field)) {
        return undefined;
      } else {
        return null;
      }
    });
  }

  FilterRootFields.prototype.transformSchema = function (originalSchema) {
    return this.transformer.transformSchema(originalSchema);
  };

  return FilterRootFields;
}();

exports.default = FilterRootFields;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterToSchema.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterToSchema.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var implementsAbstractType_1 = __webpack_require__(/*! ../implementsAbstractType */ "./node_modules/graphpack/node_modules/graphql-tools/dist/implementsAbstractType.js");

var FilterToSchema =
/** @class */
function () {
  function FilterToSchema(targetSchema) {
    this.targetSchema = targetSchema;
  }

  FilterToSchema.prototype.transformRequest = function (originalRequest) {
    var document = filterDocumentToSchema(this.targetSchema, originalRequest.document);
    return __assign(__assign({}, originalRequest), {
      document: document
    });
  };

  return FilterToSchema;
}();

exports.default = FilterToSchema;

function filterDocumentToSchema(targetSchema, document) {
  var operations = document.definitions.filter(function (def) {
    return def.kind === graphql_1.Kind.OPERATION_DEFINITION;
  });
  var fragments = document.definitions.filter(function (def) {
    return def.kind === graphql_1.Kind.FRAGMENT_DEFINITION;
  });
  var usedFragments = [];
  var newOperations = [];
  var newFragments = [];
  var validFragments = fragments.filter(function (fragment) {
    var typeName = fragment.typeCondition.name.value;
    return Boolean(targetSchema.getType(typeName));
  });
  var validFragmentsWithType = {};
  validFragments.forEach(function (fragment) {
    var typeName = fragment.typeCondition.name.value;
    var type = targetSchema.getType(typeName);
    validFragmentsWithType[fragment.name.value] = type;
  });
  var fragmentSet = Object.create(null);
  operations.forEach(function (operation) {
    var type;

    if (operation.operation === 'subscription') {
      type = targetSchema.getSubscriptionType();
    } else if (operation.operation === 'mutation') {
      type = targetSchema.getMutationType();
    } else {
      type = targetSchema.getQueryType();
    }

    var _a = filterSelectionSet(targetSchema, type, validFragmentsWithType, operation.selectionSet),
        selectionSet = _a.selectionSet,
        operationUsedFragments = _a.usedFragments,
        operationUsedVariables = _a.usedVariables;

    usedFragments = union(usedFragments, operationUsedFragments);

    var _b = collectFragmentVariables(targetSchema, fragmentSet, validFragments, validFragmentsWithType, usedFragments),
        collectedUsedVariables = _b.usedVariables,
        collectedNewFragments = _b.newFragments,
        collectedFragmentSet = _b.fragmentSet;

    var fullUsedVariables = union(operationUsedVariables, collectedUsedVariables);
    newFragments = collectedNewFragments;
    fragmentSet = collectedFragmentSet;
    var variableDefinitions = operation.variableDefinitions.filter(function (variable) {
      return fullUsedVariables.indexOf(variable.variable.name.value) !== -1;
    });
    newOperations.push({
      kind: graphql_1.Kind.OPERATION_DEFINITION,
      operation: operation.operation,
      name: operation.name,
      directives: operation.directives,
      variableDefinitions: variableDefinitions,
      selectionSet: selectionSet
    });
  });
  return {
    kind: graphql_1.Kind.DOCUMENT,
    definitions: __spreadArrays(newOperations, newFragments)
  };
}

function collectFragmentVariables(targetSchema, fragmentSet, validFragments, validFragmentsWithType, usedFragments) {
  var usedVariables = [];
  var newFragments = [];

  var _loop_1 = function () {
    var nextFragmentName = usedFragments.pop();
    var fragment = validFragments.find(function (fr) {
      return fr.name.value === nextFragmentName;
    });

    if (fragment) {
      var name_1 = nextFragmentName;
      var typeName = fragment.typeCondition.name.value;
      var type = targetSchema.getType(typeName);

      var _a = filterSelectionSet(targetSchema, type, validFragmentsWithType, fragment.selectionSet),
          selectionSet = _a.selectionSet,
          fragmentUsedFragments = _a.usedFragments,
          fragmentUsedVariables = _a.usedVariables;

      usedFragments = union(usedFragments, fragmentUsedFragments);
      usedVariables = union(usedVariables, fragmentUsedVariables);

      if (!fragmentSet[name_1]) {
        fragmentSet[name_1] = true;
        newFragments.push({
          kind: graphql_1.Kind.FRAGMENT_DEFINITION,
          name: {
            kind: graphql_1.Kind.NAME,
            value: name_1
          },
          typeCondition: fragment.typeCondition,
          selectionSet: selectionSet
        });
      }
    }
  };

  while (usedFragments.length !== 0) {
    _loop_1();
  }

  return {
    usedVariables: usedVariables,
    newFragments: newFragments,
    fragmentSet: fragmentSet
  };
}

function filterSelectionSet(schema, type, validFragments, selectionSet) {
  var _a;

  var usedFragments = [];
  var usedVariables = [];
  var typeStack = [type]; // Should be rewritten using visitWithSchema

  var filteredSelectionSet = graphql_1.visit(selectionSet, (_a = {}, _a[graphql_1.Kind.FIELD] = {
    enter: function (node) {
      var parentType = resolveType(typeStack[typeStack.length - 1]);

      if (parentType instanceof graphql_1.GraphQLObjectType || parentType instanceof graphql_1.GraphQLInterfaceType) {
        var fields = parentType.getFields();
        var field = node.name.value === '__typename' ? graphql_1.TypeNameMetaFieldDef : fields[node.name.value];

        if (!field) {
          return null;
        } else {
          typeStack.push(field.type);
        }

        var argNames_1 = (field.args || []).map(function (arg) {
          return arg.name;
        });

        if (node.arguments) {
          var args = node.arguments.filter(function (arg) {
            return argNames_1.indexOf(arg.name.value) !== -1;
          });

          if (args.length !== node.arguments.length) {
            return __assign(__assign({}, node), {
              arguments: args
            });
          }
        }
      } else if (parentType instanceof graphql_1.GraphQLUnionType && node.name.value === '__typename') {
        typeStack.push(graphql_1.TypeNameMetaFieldDef.type);
      }
    },
    leave: function (node) {
      var _a;

      var currentType = typeStack.pop();
      var resolvedType = resolveType(currentType);

      if (resolvedType instanceof graphql_1.GraphQLObjectType || resolvedType instanceof graphql_1.GraphQLInterfaceType) {
        var selections = node.selectionSet && node.selectionSet.selections || null;

        if (!selections || selections.length === 0) {
          // need to remove any added variables. Is there a better way to do this?
          graphql_1.visit(node, (_a = {}, _a[graphql_1.Kind.VARIABLE] = function (variableNode) {
            var index = usedVariables.indexOf(variableNode.name.value);

            if (index !== -1) {
              usedVariables.splice(index, 1);
            }
          }, _a));
          return null;
        }
      }
    }
  }, _a[graphql_1.Kind.FRAGMENT_SPREAD] = function (node) {
    if (node.name.value in validFragments) {
      var parentType = resolveType(typeStack[typeStack.length - 1]);
      var innerType = validFragments[node.name.value];

      if (!implementsAbstractType_1.default(schema, parentType, innerType)) {
        return null;
      } else {
        usedFragments.push(node.name.value);
        return;
      }
    } else {
      return null;
    }
  }, _a[graphql_1.Kind.INLINE_FRAGMENT] = {
    enter: function (node) {
      if (node.typeCondition) {
        var innerType = schema.getType(node.typeCondition.name.value);
        var parentType = resolveType(typeStack[typeStack.length - 1]);

        if (implementsAbstractType_1.default(schema, parentType, innerType)) {
          typeStack.push(innerType);
        } else {
          return null;
        }
      }
    },
    leave: function (node) {
      typeStack.pop();
    }
  }, _a[graphql_1.Kind.VARIABLE] = function (node) {
    usedVariables.push(node.name.value);
  }, _a));
  return {
    selectionSet: filteredSelectionSet,
    usedFragments: usedFragments,
    usedVariables: usedVariables
  };
}

function resolveType(type) {
  var lastType = type;

  while (lastType instanceof graphql_1.GraphQLNonNull || lastType instanceof graphql_1.GraphQLList) {
    lastType = lastType.ofType;
  }

  return lastType;
}

function union() {
  var arrays = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    arrays[_i] = arguments[_i];
  }

  var cache = {};
  var result = [];
  arrays.forEach(function (array) {
    array.forEach(function (item) {
      if (!cache[item]) {
        cache[item] = true;
        result.push(item);
      }
    });
  });
  return result;
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterTypes.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterTypes.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* tslint:disable:no-unused-expression */
Object.defineProperty(exports, "__esModule", {
  value: true
});

var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js");

var FilterTypes =
/** @class */
function () {
  function FilterTypes(filter) {
    this.filter = filter;
  }

  FilterTypes.prototype.transformSchema = function (schema) {
    var _a;

    var _this = this;

    return visitSchema_1.visitSchema(schema, (_a = {}, _a[visitSchema_1.VisitSchemaKind.TYPE] = function (type) {
      if (_this.filter(type)) {
        return undefined;
      } else {
        return null;
      }
    }, _a));
  };

  return FilterTypes;
}();

exports.default = FilterTypes;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/RenameRootFields.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/RenameRootFields.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var schemaRecreation_1 = __webpack_require__(/*! ../stitching/schemaRecreation */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js");

var TransformRootFields_1 = __webpack_require__(/*! ./TransformRootFields */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/TransformRootFields.js");

var RenameRootFields =
/** @class */
function () {
  function RenameRootFields(renamer) {
    var resolveType = schemaRecreation_1.createResolveType(function (name, type) {
      return type;
    });
    this.transformer = new TransformRootFields_1.default(function (operation, fieldName, field) {
      return {
        name: renamer(operation, fieldName, field),
        field: schemaRecreation_1.fieldToFieldConfig(field, resolveType, true)
      };
    });
  }

  RenameRootFields.prototype.transformSchema = function (originalSchema) {
    return this.transformer.transformSchema(originalSchema);
  };

  return RenameRootFields;
}();

exports.default = RenameRootFields;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/RenameTypes.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/RenameTypes.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var isSpecifiedScalarType_1 = __webpack_require__(/*! ../isSpecifiedScalarType */ "./node_modules/graphpack/node_modules/graphql-tools/dist/isSpecifiedScalarType.js");

var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js");

var RenameTypes =
/** @class */
function () {
  function RenameTypes(renamer, options) {
    this.renamer = renamer;
    this.reverseMap = {};

    var _a = options || {},
        _b = _a.renameBuiltins,
        renameBuiltins = _b === void 0 ? false : _b,
        _c = _a.renameScalars,
        renameScalars = _c === void 0 ? true : _c;

    this.renameBuiltins = renameBuiltins;
    this.renameScalars = renameScalars;
  }

  RenameTypes.prototype.transformSchema = function (originalSchema) {
    var _a;

    var _this = this;

    return visitSchema_1.visitSchema(originalSchema, (_a = {}, _a[visitSchema_1.VisitSchemaKind.TYPE] = function (type) {
      if (isSpecifiedScalarType_1.default(type) && !_this.renameBuiltins) {
        return undefined;
      }

      if (type instanceof graphql_1.GraphQLScalarType && !_this.renameScalars) {
        return undefined;
      }

      var newName = _this.renamer(type.name);

      if (newName && newName !== type.name) {
        _this.reverseMap[newName] = type.name;
        var newType = Object.assign(Object.create(type), type);
        newType.name = newName;
        return newType;
      }
    }, _a[visitSchema_1.VisitSchemaKind.ROOT_OBJECT] = function (type) {
      return undefined;
    }, _a));
  };

  RenameTypes.prototype.transformRequest = function (originalRequest) {
    var _a;

    var _this = this;

    var newDocument = graphql_1.visit(originalRequest.document, (_a = {}, _a[graphql_1.Kind.NAMED_TYPE] = function (node) {
      var name = node.name.value;

      if (name in _this.reverseMap) {
        return __assign(__assign({}, node), {
          name: {
            kind: graphql_1.Kind.NAME,
            value: _this.reverseMap[name]
          }
        });
      }
    }, _a));
    return {
      document: newDocument,
      variables: originalRequest.variables
    };
  };

  RenameTypes.prototype.transformResult = function (result) {
    if (result.data) {
      var data = this.renameTypes(result.data, 'data');

      if (data !== result.data) {
        return __assign(__assign({}, result), {
          data: data
        });
      }
    }

    return result;
  };

  RenameTypes.prototype.renameTypes = function (value, name) {
    var _this = this;

    if (name === '__typename') {
      return this.renamer(value);
    }

    if (value && typeof value === 'object') {
      var newValue_1 = Array.isArray(value) ? [] // Create a new object with the same prototype.
      : Object.create(Object.getPrototypeOf(value));
      var returnNewValue_1 = false;
      Object.keys(value).forEach(function (key) {
        var oldChild = value[key];

        var newChild = _this.renameTypes(oldChild, key);

        newValue_1[key] = newChild;

        if (newChild !== oldChild) {
          returnNewValue_1 = true;
        }
      });

      if (returnNewValue_1) {
        return newValue_1;
      }
    }

    return value;
  };

  return RenameTypes;
}();

exports.default = RenameTypes;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var ReplaceFieldWithFragment =
/** @class */
function () {
  function ReplaceFieldWithFragment(targetSchema, fragments) {
    this.targetSchema = targetSchema;
    this.mapping = {};

    for (var _i = 0, fragments_1 = fragments; _i < fragments_1.length; _i++) {
      var _a = fragments_1[_i],
          field = _a.field,
          fragment = _a.fragment;
      var parsedFragment = parseFragmentToInlineFragment(fragment);
      var actualTypeName = parsedFragment.typeCondition.name.value;
      this.mapping[actualTypeName] = this.mapping[actualTypeName] || {};

      if (this.mapping[actualTypeName][field]) {
        this.mapping[actualTypeName][field].push(parsedFragment);
      } else {
        this.mapping[actualTypeName][field] = [parsedFragment];
      }
    }
  }

  ReplaceFieldWithFragment.prototype.transformRequest = function (originalRequest) {
    var document = replaceFieldsWithFragments(this.targetSchema, originalRequest.document, this.mapping);
    return __assign(__assign({}, originalRequest), {
      document: document
    });
  };

  return ReplaceFieldWithFragment;
}();

exports.default = ReplaceFieldWithFragment;

function replaceFieldsWithFragments(targetSchema, document, mapping) {
  var _a;

  var typeInfo = new graphql_1.TypeInfo(targetSchema);
  return graphql_1.visit(document, graphql_1.visitWithTypeInfo(typeInfo, (_a = {}, _a[graphql_1.Kind.SELECTION_SET] = function (node) {
    var parentType = typeInfo.getParentType();

    if (parentType) {
      var parentTypeName_1 = parentType.name;
      var selections_1 = node.selections;

      if (mapping[parentTypeName_1]) {
        node.selections.forEach(function (selection) {
          if (selection.kind === graphql_1.Kind.FIELD) {
            var name_1 = selection.name.value;
            var fragments = mapping[parentTypeName_1][name_1];

            if (fragments && fragments.length > 0) {
              var fragment = concatInlineFragments(parentTypeName_1, fragments);
              selections_1 = selections_1.concat(fragment);
            }
          }
        });
      }

      if (selections_1 !== node.selections) {
        return __assign(__assign({}, node), {
          selections: selections_1
        });
      }
    }
  }, _a)));
}

function parseFragmentToInlineFragment(definitions) {
  if (definitions.trim().startsWith('fragment')) {
    var document_1 = graphql_1.parse(definitions);

    for (var _i = 0, _a = document_1.definitions; _i < _a.length; _i++) {
      var definition = _a[_i];

      if (definition.kind === graphql_1.Kind.FRAGMENT_DEFINITION) {
        return {
          kind: graphql_1.Kind.INLINE_FRAGMENT,
          typeCondition: definition.typeCondition,
          selectionSet: definition.selectionSet
        };
      }
    }
  }

  var query = graphql_1.parse("{" + definitions + "}").definitions[0];

  for (var _b = 0, _c = query.selectionSet.selections; _b < _c.length; _b++) {
    var selection = _c[_b];

    if (selection.kind === graphql_1.Kind.INLINE_FRAGMENT) {
      return selection;
    }
  }

  throw new Error('Could not parse fragment');
}

function concatInlineFragments(type, fragments) {
  var fragmentSelections = fragments.reduce(function (selections, fragment) {
    return selections.concat(fragment.selectionSet.selections);
  }, []);
  var deduplicatedFragmentSelection = deduplicateSelection(fragmentSelections);
  return {
    kind: graphql_1.Kind.INLINE_FRAGMENT,
    typeCondition: {
      kind: graphql_1.Kind.NAMED_TYPE,
      name: {
        kind: graphql_1.Kind.NAME,
        value: type
      }
    },
    selectionSet: {
      kind: graphql_1.Kind.SELECTION_SET,
      selections: deduplicatedFragmentSelection
    }
  };
}

function deduplicateSelection(nodes) {
  var selectionMap = nodes.reduce(function (map, node) {
    var _a, _b, _c;

    switch (node.kind) {
      case 'Field':
        {
          if (node.alias) {
            if (map.hasOwnProperty(node.alias.value)) {
              return map;
            } else {
              return __assign(__assign({}, map), (_a = {}, _a[node.alias.value] = node, _a));
            }
          } else {
            if (map.hasOwnProperty(node.name.value)) {
              return map;
            } else {
              return __assign(__assign({}, map), (_b = {}, _b[node.name.value] = node, _b));
            }
          }
        }

      case 'FragmentSpread':
        {
          if (map.hasOwnProperty(node.name.value)) {
            return map;
          } else {
            return __assign(__assign({}, map), (_c = {}, _c[node.name.value] = node, _c));
          }
        }

      case 'InlineFragment':
        {
          if (map.__fragment) {
            var fragment = map.__fragment;
            return __assign(__assign({}, map), {
              __fragment: concatInlineFragments(fragment.typeCondition.name.value, [fragment, node])
            });
          } else {
            return __assign(__assign({}, map), {
              __fragment: node
            });
          }
        }

      default:
        {
          return map;
        }
    }
  }, {});
  var selection = Object.keys(selectionMap).reduce(function (selectionList, node) {
    return selectionList.concat(selectionMap[node]);
  }, []);
  return selection;
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/TransformRootFields.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/TransformRootFields.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var isEmptyObject_1 = __webpack_require__(/*! ../isEmptyObject */ "./node_modules/graphpack/node_modules/graphql-tools/dist/isEmptyObject.js");

var visitSchema_1 = __webpack_require__(/*! ./visitSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js");

var schemaRecreation_1 = __webpack_require__(/*! ../stitching/schemaRecreation */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js");

var TransformRootFields =
/** @class */
function () {
  function TransformRootFields(transform) {
    this.transform = transform;
  }

  TransformRootFields.prototype.transformSchema = function (originalSchema) {
    var _a;

    var _this = this;

    return visitSchema_1.visitSchema(originalSchema, (_a = {}, _a[visitSchema_1.VisitSchemaKind.QUERY] = function (type) {
      return transformFields(type, function (fieldName, field) {
        return _this.transform('Query', fieldName, field);
      });
    }, _a[visitSchema_1.VisitSchemaKind.MUTATION] = function (type) {
      return transformFields(type, function (fieldName, field) {
        return _this.transform('Mutation', fieldName, field);
      });
    }, _a[visitSchema_1.VisitSchemaKind.SUBSCRIPTION] = function (type) {
      return transformFields(type, function (fieldName, field) {
        return _this.transform('Subscription', fieldName, field);
      });
    }, _a));
  };

  return TransformRootFields;
}();

exports.default = TransformRootFields;

function transformFields(type, transformer) {
  var resolveType = schemaRecreation_1.createResolveType(function (name, originalType) {
    return originalType;
  });
  var fields = type.getFields();
  var newFields = {};
  Object.keys(fields).forEach(function (fieldName) {
    var field = fields[fieldName];
    var newField = transformer(fieldName, field);

    if (typeof newField === 'undefined') {
      newFields[fieldName] = schemaRecreation_1.fieldToFieldConfig(field, resolveType, true);
    } else if (newField !== null) {
      if (newField.name) {
        newFields[newField.name] = newField.field;
      } else {
        newFields[fieldName] = newField;
      }
    }
  });

  if (isEmptyObject_1.default(newFields)) {
    return null;
  } else {
    return new graphql_1.GraphQLObjectType({
      name: type.name,
      description: type.description,
      astNode: type.astNode,
      fields: newFields
    });
  }
}

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/WrapQuery.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/WrapQuery.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __assign = this && this.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var WrapQuery =
/** @class */
function () {
  function WrapQuery(path, wrapper, extractor) {
    this.path = path;
    this.wrapper = wrapper;
    this.extractor = extractor;
  }

  WrapQuery.prototype.transformRequest = function (originalRequest) {
    var _a;

    var _this = this;

    var document = originalRequest.document;
    var fieldPath = [];
    var ourPath = JSON.stringify(this.path);
    var newDocument = graphql_1.visit(document, (_a = {}, _a[graphql_1.Kind.FIELD] = {
      enter: function (node) {
        fieldPath.push(node.name.value);

        if (ourPath === JSON.stringify(fieldPath)) {
          var wrapResult = _this.wrapper(node.selectionSet); // Selection can be either a single selection or a selection set. If it's just one selection,
          // let's wrap it in a selection set. Otherwise, keep it as is.


          var selectionSet = wrapResult.kind === graphql_1.Kind.SELECTION_SET ? wrapResult : {
            kind: graphql_1.Kind.SELECTION_SET,
            selections: [wrapResult]
          };
          return __assign(__assign({}, node), {
            selectionSet: selectionSet
          });
        }
      },
      leave: function (node) {
        fieldPath.pop();
      }
    }, _a));
    return __assign(__assign({}, originalRequest), {
      document: newDocument
    });
  };

  WrapQuery.prototype.transformResult = function (originalResult) {
    var rootData = originalResult.data;

    if (rootData) {
      var data = rootData;

      var path = __spreadArrays(this.path);

      while (path.length > 1) {
        var next = path.shift();

        if (data[next]) {
          data = data[next];
        }
      }

      data[path[0]] = this.extractor(data[path[0]]);
    }

    return {
      data: rootData,
      errors: originalResult.errors
    };
  };

  return WrapQuery;
}();

exports.default = WrapQuery;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/index.js":
/*!************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var transformSchema_1 = __webpack_require__(/*! ./transformSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transformSchema.js");

exports.transformSchema = transformSchema_1.default;

var AddArgumentsAsVariables_1 = __webpack_require__(/*! ./AddArgumentsAsVariables */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddArgumentsAsVariables.js");

exports.AddArgumentsAsVariables = AddArgumentsAsVariables_1.default;

var CheckResultAndHandleErrors_1 = __webpack_require__(/*! ./CheckResultAndHandleErrors */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/CheckResultAndHandleErrors.js");

exports.CheckResultAndHandleErrors = CheckResultAndHandleErrors_1.default;

var ReplaceFieldWithFragment_1 = __webpack_require__(/*! ./ReplaceFieldWithFragment */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ReplaceFieldWithFragment.js");

exports.ReplaceFieldWithFragment = ReplaceFieldWithFragment_1.default;

var AddTypenameToAbstract_1 = __webpack_require__(/*! ./AddTypenameToAbstract */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/AddTypenameToAbstract.js");

exports.AddTypenameToAbstract = AddTypenameToAbstract_1.default;

var FilterToSchema_1 = __webpack_require__(/*! ./FilterToSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterToSchema.js");

exports.FilterToSchema = FilterToSchema_1.default;

var RenameTypes_1 = __webpack_require__(/*! ./RenameTypes */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/RenameTypes.js");

exports.RenameTypes = RenameTypes_1.default;

var FilterTypes_1 = __webpack_require__(/*! ./FilterTypes */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterTypes.js");

exports.FilterTypes = FilterTypes_1.default;

var TransformRootFields_1 = __webpack_require__(/*! ./TransformRootFields */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/TransformRootFields.js");

exports.TransformRootFields = TransformRootFields_1.default;

var RenameRootFields_1 = __webpack_require__(/*! ./RenameRootFields */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/RenameRootFields.js");

exports.RenameRootFields = RenameRootFields_1.default;

var FilterRootFields_1 = __webpack_require__(/*! ./FilterRootFields */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/FilterRootFields.js");

exports.FilterRootFields = FilterRootFields_1.default;

var ExpandAbstractTypes_1 = __webpack_require__(/*! ./ExpandAbstractTypes */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExpandAbstractTypes.js");

exports.ExpandAbstractTypes = ExpandAbstractTypes_1.default;

var ExtractField_1 = __webpack_require__(/*! ./ExtractField */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/ExtractField.js");

exports.ExtractField = ExtractField_1.default;

var WrapQuery_1 = __webpack_require__(/*! ./WrapQuery */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/WrapQuery.js");

exports.WrapQuery = WrapQuery_1.default;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transformSchema.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transformSchema.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var makeExecutableSchema_1 = __webpack_require__(/*! ../makeExecutableSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/makeExecutableSchema.js");

var visitSchema_1 = __webpack_require__(/*! ../transforms/visitSchema */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js");

var transforms_1 = __webpack_require__(/*! ../transforms/transforms */ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transforms.js");

var resolvers_1 = __webpack_require__(/*! ../stitching/resolvers */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/resolvers.js");

function transformSchema(targetSchema, transforms) {
  var schema = visitSchema_1.visitSchema(targetSchema, {}, true);
  var mapping = resolvers_1.generateSimpleMapping(targetSchema);
  var resolvers = resolvers_1.generateProxyingResolvers(targetSchema, transforms, mapping);
  schema = makeExecutableSchema_1.addResolveFunctionsToSchema({
    schema: schema,
    resolvers: resolvers,
    resolverValidationOptions: {
      allowResolversNotInSchema: true
    }
  });
  schema = transforms_1.applySchemaTransforms(schema, transforms);
  schema.transforms = transforms;
  return schema;
}

exports.default = transformSchema;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transforms.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/transforms.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

function applySchemaTransforms(originalSchema, transforms) {
  return transforms.reduce(function (schema, transform) {
    return transform.transformSchema ? transform.transformSchema(schema) : schema;
  }, originalSchema);
}

exports.applySchemaTransforms = applySchemaTransforms;

function applyRequestTransforms(originalRequest, transforms) {
  return transforms.reduce(function (request, transform) {
    return transform.transformRequest ? transform.transformRequest(request) : request;
  }, originalRequest);
}

exports.applyRequestTransforms = applyRequestTransforms;

function applyResultTransforms(originalResult, transforms) {
  return transforms.reduce(function (result, transform) {
    return transform.transformResult ? transform.transformResult(result) : result;
  }, originalResult);
}

exports.applyResultTransforms = applyResultTransforms;

function composeTransforms() {
  var transforms = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    transforms[_i] = arguments[_i];
  }

  var reverseTransforms = __spreadArrays(transforms).reverse();

  return {
    transformSchema: function (originalSchema) {
      return applySchemaTransforms(originalSchema, transforms);
    },
    transformRequest: function (originalRequest) {
      return applyRequestTransforms(originalRequest, reverseTransforms);
    },
    transformResult: function (result) {
      return applyResultTransforms(result, reverseTransforms);
    }
  };
}

exports.composeTransforms = composeTransforms;

/***/ }),

/***/ "./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/graphpack/node_modules/graphql-tools/dist/transforms/visitSchema.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __spreadArrays = this && this.__spreadArrays || function () {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

  for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

  return r;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var graphql_1 = __webpack_require__(/*! graphql */ "graphql");

var schemaRecreation_1 = __webpack_require__(/*! ../stitching/schemaRecreation */ "./node_modules/graphpack/node_modules/graphql-tools/dist/stitching/schemaRecreation.js");

var VisitSchemaKind;

(function (VisitSchemaKind) {
  VisitSchemaKind["TYPE"] = "VisitSchemaKind.TYPE";
  VisitSchemaKind["SCALAR_TYPE"] = "VisitSchemaKind.SCALAR_TYPE";
  VisitSchemaKind["ENUM_TYPE"] = "VisitSchemaKind.ENUM_TYPE";
  VisitSchemaKind["COMPOSITE_TYPE"] = "VisitSchemaKind.COMPOSITE_TYPE";
  VisitSchemaKind["OBJECT_TYPE"] = "VisitSchemaKind.OBJECT_TYPE";
  VisitSchemaKind["INPUT_OBJECT_TYPE"] = "VisitSchemaKind.INPUT_OBJECT_TYPE";
  VisitSchemaKind["ABSTRACT_TYPE"] = "VisitSchemaKind.ABSTRACT_TYPE";
  VisitSchemaKind["UNION_TYPE"] = "VisitSchemaKind.UNION_TYPE";
  VisitSchemaKind["INTERFACE_TYPE"] = "VisitSchemaKind.INTERFACE_TYPE";
  VisitSchemaKind["ROOT_OBJECT"] = "VisitSchemaKind.ROOT_OBJECT";
  VisitSchemaKind["QUERY"] = "VisitSchemaKind.QUERY";
  VisitSchemaKind["MUTATION"] = "VisitSchemaKind.MUTATION";
  VisitSchemaKind["SUBSCRIPTION"] = "VisitSchemaKind.SUBSCRIPTION";
})(VisitSchemaKind = exports.VisitSchemaKind || (exports.VisitSchemaKind = {}));

function visitSchema(schema, visitor, stripResolvers) {
  var types = {};
  var resolveType = schemaRecreation_1.createResolveType(function (name) {
    if (typeof types[name] === 'undefined') {
      throw new Error("Can't find type " + name + ".");
    }

    return types[name];
  });
  var queryType = schema.getQueryType();
  var mutationType = schema.getMutationType();
  var subscriptionType = schema.getSubscriptionType();
  var typeMap = schema.getTypeMap();
  Object.keys(typeMap).map(function (typeName) {
    var type = typeMap[typeName];

    if (graphql_1.isNamedType(type) && graphql_1.getNamedType(type).name.slice(0, 2) !== '__') {
      var specifiers = getTypeSpecifiers(type, schema);
      var typeVisitor = getVisitor(visitor, specifiers);

      if (typeVisitor) {
        var result = typeVisitor(type, schema);

        if (typeof result === 'undefined') {
          types[typeName] = schemaRecreation_1.recreateType(type, resolveType, !stripResolvers);
        } else if (result === null) {
          types[typeName] = null;
        } else {
          types[typeName] = schemaRecreation_1.recreateType(result, resolveType, !stripResolvers);
        }
      } else {
        types[typeName] = schemaRecreation_1.recreateType(type, resolveType, !stripResolvers);
      }
    }
  });
  return new graphql_1.GraphQLSchema({
    query: queryType ? types[queryType.name] : null,
    mutation: mutationType ? types[mutationType.name] : null,
    subscription: subscriptionType ? types[subscriptionType.name] : null,
    types: Object.keys(types).map(function (name) {
      return types[name];
    })
  });
}

exports.visitSchema = visitSchema;

function getTypeSpecifiers(type, schema) {
  var specifiers = [VisitSchemaKind.TYPE];

  if (type instanceof graphql_1.GraphQLObjectType) {
    specifiers.unshift(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.OBJECT_TYPE);
    var query = schema.getQueryType();
    var mutation = schema.getMutationType();
    var subscription = schema.getSubscriptionType();

    if (type === query) {
      specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.QUERY);
    } else if (type === mutation) {
      specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.MUTATION);
    } else if (type === subscription) {
      specifiers.push(VisitSchemaKind.ROOT_OBJECT, VisitSchemaKind.SUBSCRIPTION);
    }
  } else if (type instanceof graphql_1.GraphQLInputObjectType) {
    specifiers.push(VisitSchemaKind.INPUT_OBJECT_TYPE);
  } else if (type instanceof graphql_1.GraphQLInterfaceType) {
    specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.INTERFACE_TYPE);
  } else if (type instanceof graphql_1.GraphQLUnionType) {
    specifiers.push(VisitSchemaKind.COMPOSITE_TYPE, VisitSchemaKind.ABSTRACT_TYPE, VisitSchemaKind.UNION_TYPE);
  } else if (type instanceof graphql_1.GraphQLEnumType) {
    specifiers.push(VisitSchemaKind.ENUM_TYPE);
  } else if (type instanceof graphql_1.GraphQLScalarType) {
    specifiers.push(VisitSchemaKind.SCALAR_TYPE);
  }

  return specifiers;
}

function getVisitor(visitor, specifiers) {
  var typeVisitor = null;

  var stack = __spreadArrays(specifiers);

  while (!typeVisitor && stack.length > 0) {
    var next = stack.pop();
    typeVisitor = visitor[next];
  }

  return typeVisitor;
}

/***/ }),

/***/ "./src sync recursive ^\\.\\/(context|context\\/index)\\.(js|ts)$":
/*!**********************************************************!*\
  !*** ./src sync ^\.\/(context|context\/index)\.(js|ts)$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src sync recursive ^\\.\\/(context|context\\/index)\\.(js|ts)$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/(resolvers|resolvers\\/index)\\.(js|ts)$":
/*!**************************************************************!*\
  !*** ./src sync ^\.\/(resolvers|resolvers\/index)\.(js|ts)$ ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./resolvers/index.js": "./src/resolvers/index.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/(resolvers|resolvers\\/index)\\.(js|ts)$";

/***/ }),

/***/ "./src sync recursive ^\\.\\/(schema|schema\\/index)\\.(gql|graphql|js|ts)$":
/*!********************************************************************!*\
  !*** ./src sync ^\.\/(schema|schema\/index)\.(gql|graphql|js|ts)$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./schema.graphql": "./src/schema.graphql"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src sync recursive ^\\.\\/(schema|schema\\/index)\\.(gql|graphql|js|ts)$";

/***/ }),

/***/ "./src/resolvers/index.js":
/*!********************************!*\
  !*** ./src/resolvers/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/merge */ "lodash/merge");
/* harmony import */ var lodash_merge__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_merge__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.js */ "./src/resolvers/user.js");
/* harmony import */ var _user_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_user_js__WEBPACK_IMPORTED_MODULE_1__);


const PureObj = Object.create(null);
/* harmony default export */ __webpack_exports__["default"] = (lodash_merge__WEBPACK_IMPORTED_MODULE_0___default()(PureObj, _user_js__WEBPACK_IMPORTED_MODULE_1___default.a));

/***/ }),

/***/ "./src/resolvers/user.js":
/*!*******************************!*\
  !*** ./src/resolvers/user.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const lodash = __webpack_require__(/*! lodash */ "lodash");

const model = __webpack_require__(/*! ../../model */ "./model/index.js");

const createToken = __webpack_require__(/*! ../../utlis/createToken */ "./utlis/createToken.js");

const {
  User: UserModel
} = model;
module.exports = {
  Query: {
    user: async (parent, {
      input
    }) => {
      if (lodash.isEmpty(input)) {
        throw new Error("缺少必要参数");
      }

      return await UserModel.findOne(input).then(data => data);
    },
    userList: async (parent, query) => {
      return await UserModel.find(query).then(data => {
        return data || [];
      });
    }
  },
  Mutation: {
    update: async (parent, {
      input,
      data
    }) => {
      return await UserModel.update(input, data).then(({
        ok
      }) => {
        return ok ? '操作成功' : '操作失败';
      });
    },
    register: async (parent, {
      user_option
    }) => {
      /**
       * 新建用户需先查重：user_name、account_name、user_email中任一字段不允许重复
       */
      const {
        account_name,
        user_email
      } = user_option;
      const hasDuplicateEmail = await UserModel.findOne({
        account_name
      });
      const hasDuplicateName = await UserModel.findOne({
        user_email
      });

      if (!hasDuplicateEmail && !hasDuplicateEmail) {
        const user_info = { ...user_option
        };
        user_info.token = createToken();
        user_info.time_stamp = new Date().getTime().toString();
        user_info.status = "disabled";
        const new_user = new UserModel(user_info);
        return await new_user.save().then(data => data);
      } else {
        throw new Error("存在相同的用户名或Email");
      }
    },
    login: async (parent, {
      account_name,
      account_password
    }) => {
      const hasUser = await UserModel.findOne({
        account_name
      });
      const userPass = await UserModel.findOne({
        account_name,
        account_password
      });

      if (!hasUser) {
        throw new Error("用户不存在！");
      }

      if (!userPass) {
        throw new Error("密码错误！");
      }

      const token = createToken();
      const time_stamp = new Date().getTime().toString();
      return await UserModel.update({
        account_name,
        account_password
      }, {
        token,
        time_stamp
      }).then(({
        ok
      }) => {
        console.log("userPass", userPass);
        return userPass;
      });
    }
  }
};

/***/ }),

/***/ "./src/schema.graphql":
/*!****************************!*\
  !*** ./src/schema.graphql ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {


    var doc = {"kind":"Document","definitions":[{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserBase"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user_id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"status"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user_name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user_email"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"role"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"job_post"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"avatar"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"department"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"UserAuth"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user_id"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"status"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user_name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"user_email"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"account_name"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"token"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"time_stamp"},"arguments":[],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"UserClue"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_id"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_email"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"newUser"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_email"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_password"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"job_post"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"avatar"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"department"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}]},{"kind":"InputObjectTypeDefinition","name":{"kind":"Name","value":"updateUser"},"directives":[],"fields":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_email"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_password"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"job_post"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"avatar"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"department"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Query"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"user"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserClue"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserBase"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"userList"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_name"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"role"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"job_post"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"department"},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserBase"}}},"directives":[]}]},{"kind":"ObjectTypeDefinition","name":{"kind":"Name","value":"Mutation"},"interfaces":[],"directives":[],"fields":[{"kind":"FieldDefinition","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"user_option"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"newUser"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuth"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"update"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"input"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserClue"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"data"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"updateUser"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"FieldDefinition","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_name"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"InputValueDefinition","name":{"kind":"Name","value":"account_password"},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuth"}},"directives":[]}]}],"loc":{"start":0,"end":1280}};
    doc.loc.source = {"body":"# User Schema\r\n\r\n## 基础信息\r\ntype UserBase {\r\n\tuser_id: ID\r\n\tstatus: String\r\n\tuser_name: String\r\n\tuser_email: String\r\n\trole: String\r\n\tjob_post: String\r\n\tavatar: String\r\n\tdepartment: String\r\n}\r\n## 鉴权信息\r\ntype UserAuth {\r\n\tuser_id: ID\r\n\tstatus: String\r\n\tuser_name: String\r\n\tuser_email: String\r\n\taccount_name: String\r\n\ttoken: String\r\n\ttime_stamp: String\r\n}\r\n## 筛选条件\r\ninput UserClue {\r\n\tuser_id: ID\r\n\tuser_email: String\r\n\taccount_name: String\r\n}\r\n## 新用户基本信息\r\ninput newUser {\r\n\tuser_name: String!\r\n\tuser_email: String!\r\n\taccount_name: String!\r\n\taccount_password: String!\r\n\trole: String!\r\n\tjob_post: String!\r\n\tavatar: String\r\n\tdepartment: String!\r\n}\r\n## 更新用户信息\r\ninput updateUser {\r\n\tuser_name: String\r\n\tuser_email: String\r\n\taccount_name: String\r\n\taccount_password: String\r\n\trole: String\r\n\tjob_post: String\r\n\tavatar: String\r\n\tdepartment: String\r\n}\r\n\r\n### query ###\r\ntype Query {\r\n\t### 查询单个用户\r\n\tuser(input: UserClue!): UserBase\r\n\t### 获取用户列表\r\n\tuserList(\r\n\t\tuser_name: String\r\n\t\trole: String\r\n\t\tjob_post: String\r\n\t\tdepartment: String\r\n\t): [UserBase]\r\n}\r\n### mutation ###\r\ntype Mutation {\r\n\t### 注册新用户\r\n\tregister(user_option: newUser!): UserAuth\r\n\t### 更新用户信息\r\n\tupdate(input: UserClue!, data: updateUser!): String\r\n\t### 用户登录\r\n\tlogin(account_name: String!, account_password: String!): UserAuth\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

      module.exports = doc;
    


/***/ }),

/***/ "./utlis/createToken.js":
/*!******************************!*\
  !*** ./utlis/createToken.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function createPassword(min, max) {
  //可以生成随机密码的相关数组
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var english = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var ENGLISH = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var special = ['-', '_', '#'];
  var config = num.concat(english).concat(ENGLISH).concat(special); //先放入一个必须存在的

  var arr = [];
  arr.push(getOne(num));
  arr.push(getOne(english));
  arr.push(getOne(ENGLISH));
  arr.push(getOne(special)); //获取需要生成的长度

  var len = min + Math.floor(Math.random() * (max - min));

  for (var i = 4; i < len; i++) {
    //从数组里面抽出一个
    arr.push(config[Math.floor(Math.random() * config.length)]);
  } //乱序


  var newArr = [];

  for (var j = 0; j < len; j++) {
    newArr.push(arr.splice(Math.random() * arr.length, 1)[0]);
  } //随机从数组中抽出一个数值


  function getOne(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return newArr.join('');
}

module.exports = () => createPassword(128, 128);

/***/ }),

/***/ 0:
/*!***********************!*\
  !*** multi graphpack ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! graphpack */"./node_modules/graphpack/lib/server.js");


/***/ }),

/***/ "@apollographql/graphql-playground-html":
/*!*********************************************************!*\
  !*** external "@apollographql/graphql-playground-html" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollographql/graphql-playground-html");

/***/ }),

/***/ "@wry/equality":
/*!********************************!*\
  !*** external "@wry/equality" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@wry/equality");

/***/ }),

/***/ "accepts":
/*!**************************!*\
  !*** external "accepts" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("accepts");

/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-core");

/***/ }),

/***/ "babel-loader":
/*!*******************************!*\
  !*** external "babel-loader" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-loader");

/***/ }),

/***/ "babel-preset-graphpack":
/*!*****************************************!*\
  !*** external "babel-preset-graphpack" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-preset-graphpack");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "cosmiconfig":
/*!******************************!*\
  !*** external "cosmiconfig" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cosmiconfig");

/***/ }),

/***/ "deprecated-decorator":
/*!***************************************!*\
  !*** external "deprecated-decorator" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deprecated-decorator");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("events");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fast-json-stable-stringify":
/*!*********************************************!*\
  !*** external "fast-json-stable-stringify" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fast-json-stable-stringify");

/***/ }),

/***/ "friendly-errors-webpack-plugin":
/*!*************************************************!*\
  !*** external "friendly-errors-webpack-plugin" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("friendly-errors-webpack-plugin");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "graphql/error":
/*!********************************!*\
  !*** external "graphql/error" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql/error");

/***/ }),

/***/ "graphql/execution/values":
/*!*******************************************!*\
  !*** external "graphql/execution/values" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql/execution/values");

/***/ }),

/***/ "graphql/language/visitor":
/*!*******************************************!*\
  !*** external "graphql/language/visitor" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql/language/visitor");

/***/ }),

/***/ "graphql/utilities":
/*!************************************!*\
  !*** external "graphql/utilities" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql/utilities");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "iterall":
/*!**************************!*\
  !*** external "iterall" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("iterall");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/merge":
/*!*******************************!*\
  !*** external "lodash/merge" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),

/***/ "mongoose-auto-increment":
/*!******************************************!*\
  !*** external "mongoose-auto-increment" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mongoose-auto-increment");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "ts-invariant":
/*!*******************************!*\
  !*** external "ts-invariant" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-invariant");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "type-is":
/*!**************************!*\
  !*** external "type-is" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("type-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("webpack-node-externals");

/***/ }),

/***/ "zen-observable-ts":
/*!************************************!*\
  !*** external "zen-observable-ts" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zen-observable-ts");

/***/ })

/******/ });
//# sourceMappingURL=index.map