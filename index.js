var express = require('express');
var reload = require('reload');
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

// console log the port number
var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});

// reload automatically on file edits
reload(server, app);

// load environment configuration depending on env var setting
var config = require('./config.json');
var defaultConfig = config.development;
var environment = process.env.NODE_ENV || 'development';
var environmentConfig = config[environment];
global.gConfig = environmentConfig;


var server = app.listen(global.gConfig.node_port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
  console.log(`global.gConfig: ${JSON.stringify(global.gConfig, undefined, global.gConfig.json_indentation)}`);
});

