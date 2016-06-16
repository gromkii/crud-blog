var bodyParser     = require('body-parser'),
    express        = require('express'),
    locus          = require('locus'),
    handlebars     = require('handlebars'),
    bookshelf      = require('./db/bookshelf'),
    users          = require('./routes/users'),
    methodOverride = require('method-override'),
    app            = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(methodOverride('_method'));

app.use('/users', users);



app.listen(process.env.IP || 3000, process.env.HOST || 'localhost', () => {
  console.log('Server is listening');
});
