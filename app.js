var bodyParser = require('body-parser'),
    express    = require('express'),
    locus      = require('locus'),
    handlebars = require('handlebars'),
    bookshelf  = require('./db/bookshelf'),
    users      = require('./routes/users'),
    app        = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use('/users', users);

app.listen(3000, 'localhost', () => {
  console.log('Server is listening');
});
