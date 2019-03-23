require('dotenv');
var express = require('express');
var app = express();
var dataFile = 		require('./data/front_links.json');
var dataMain = 		require('./data/main_links.json');
var dataArticle = 	require('./data/article_links.json');
var dataSocial  = 	require('./data/social_links.json');
var dataMedia   = 	require('./data/media_links.json');
var dataNovel   =   require('./data/novel_links.json');

// data files
app.set('appData',    dataFile) ;
app.set('appMain',    dataMain) ;
app.set('appArticle', dataArticle) ;
app.set('appSocial',  dataSocial) ;
app.set('appMedia',  dataMedia) ;
app.set('appNovel',  dataNovel) ;

// set views folder location and title
app.set('view engine', 'ejs');
app.set('views', 'views');
app.locals.siteTitle = 'Marc S. Kruza';

// set public folder location
app.use(express.static('app/public'));

// set routes
app.use(require('./routes/index'));
app.use(require('./routes/article'));
app.use(require('./routes/media'));
app.use(require('./routes/about'));
app.use(require('./routes/novel'));
app.use(require('./routes/events'));

// listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
