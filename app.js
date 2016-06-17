var bodyParser     = require('body-parser'),
    express        = require('express'),
    locus          = require('locus'),
    handlebars     = require('handlebars'),
    bookshelf      = require('./db/bookshelf'),
    users          = require('./routes/users'),
    posts          = require('./routes/posts'),
    methodOverride = require('method-override'),
    app            = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.set('port', process.env.PORT || 3000 );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(methodOverride('_method'));

app.use('/users', users);
app.use('/posts', posts);



app.listen(process.env.PORT || 3000, process.env.IP || 'localhost', () => {
console.log('Server is listening');
});
