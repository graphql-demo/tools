"use strict";

var express = require('express');

var cors = require('cors');

var body_parser = require('body-parser');

var multipart = require('connect-multiparty');

var _require = require('express-graphql'),
    graphqlHTTP = _require.graphqlHTTP; // schemas


var User = require('./schema/user');

var app = express();
app.set('port', process.env.PORT || 9000);
app.use(cors());
app.use(multipart());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: false
}));
app.use(body_parser.json());
app.use('/user', graphqlHTTP({
  schema: User.schema,
  // rootValue: User.rootValue,
  graphiql: true
}));
app.get('/', function (req, res) {
  res.send('server is starting on port 9000');
});
app.listen(app.get('port'), function () {
  console.log('服务已启动，请通过 http://localhost:' + app.get('port') + '访问。');
});