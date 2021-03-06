const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const multipart = require('connect-multiparty');
const { graphqlHTTP } = require('express-graphql');
// schemas
const User = require('./schema/user');

const app = express();
app.set('port', process.env.PORT || 9000);
app.use(cors());
app.use(multipart());
app.use(body_parser.json());
app.use(body_parser.urlencoded({
  extended: false
}));
app.use(body_parser.json());

app.use(
  '/user',
  graphqlHTTP({
    schema: User.schema,
    rootValue: User.rootValue,
    graphiql: true,
  }),
);

app.get('/', function (req, res) {
  res.send('server is starting on port 9000');
})
app.listen(app.get('port'), function () {
  console.log('服务已启动，请通过 http://localhost:' + app.get('port') + '访问。')
});


