const express = require('express');
const load = require('express-load');
const app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('nodetalk'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

load('models').then('controllers').then('routes').into(app);

app.get('/', routes.home);
app.get('/usuarios', routes.user.index);

app.listen(3000, (req, res, next) => {
  console.log('Nodetalk no ar.');
});

module.exports = app;
