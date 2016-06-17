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

app.set('port', (process_env_PORT || 3000))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.use(methodOverride('_method'));

app.use('/users', users);
app.use('/posts', posts);

app.get('/', (req, res) =>{
  res.send('Okay.');
})



app.listen(app.get('port'), () => {
  console.log('Server is listening.');
});
