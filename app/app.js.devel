var express = require('express');
var reload = require('reload');
var app = express();
var dataFile = 		require('./data/front_links.json');
var dataMain = 		require('./data/main_links.json');
var dataArticle = 	require('./data/article_links.json');
var dataSocial  = 	require('./data/social_links.json');
var dataMedia   = 	require('./data/media_links.json');

app.set('port', process.env.PORT || 3000 );

// data files
app.set('appData',    dataFile) ;
app.set('appMain',    dataMain) ;
app.set('appArticle', dataArticle) ;
app.set('appSocial',  dataSocial) ;
app.set('appMedia',  dataMedia) ;

app.set('view engine', 'ejs');
app.set('views', 'app/views');
app.locals.siteTitle = 'Marc S. Kruza';

app.use(express.static('app/public'));
app.use(express.static('app/blog'));
app.use(require('./routes/index'));
// app.use(require('./routes/novel'));
app.use(require('./routes/article'));
// app.use(require('./routes/review'));
//app.use(require('./routes/blog'));
// app.use(require('./routes/event'));
app.use(require('./routes/media'));
app.use(require('./routes/about'));

// app.use(express.favicon("/public/images/favicon.ico"));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

reload(server, app);
