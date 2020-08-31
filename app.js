const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const multipart = require('connect-multiparty');
const { graphqlHTTP } = require('express-graphql');
const User = require('./schema/user');
const { schema, rootValue } = User;

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
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }),
);

app.use(require('./middleware/wrapSend'));
app.use(require('./middleware/authorized'));
app.get('/', function (req, res) {
  res.send('server is starting on port 9000');
})

const routes = require('./router');
routes(app);
app.listen(app.get('port'), function () {
  console.log('服务已启动，请通过 http://localhost:' + app.get('port') + '访问。')
});


