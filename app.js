var bodyParser     = require('body-parser'),
    express        = require('express'),
    locus          = require('locus'),
    handlebars     = require('handlebars'),
    bookshelf      = require('./db/bookshelf'),
    users          = require('./routes/users'),
    posts          = require('./routes/posts'),
    methodOverride = require('method-override'),
    app            = express();

bookshelf.plugin('registry');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(methodOverride('_method'));

app.use('/posts', posts);
app.use('/users', users);

app.get('/', (req, res) =>{
  res.redirect('/users');
});



app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
});
