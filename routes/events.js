var express = require('express');
var router = express.Router();

router.get('/events', function(req, res) {
	var main		= req.app.get('appMain');
	var data 		= req.app.get('appData');
	var article 	= req.app.get('appArticle');
	var social 		= req.app.get('appSocial');

	var mainUrls    = [] ;
	var frontUrls 	= [] ;
	var articleUrls = [] ;
	var socialUrls  = [] ;

	// item is each url set
	data.front_links.forEach( function(item) {
		frontUrls = frontUrls.concat(item) ;
	});
	main.main_links.forEach( function(item) {
		mainUrls = mainUrls.concat(item) ;
	});
	social.social_links.forEach( function(item) {  
		socialUrls = socialUrls.concat(item) ;
	});

	res.render('events', {
		pageTitle: 'Events',
		pageID:    'events', // id current page for js
		frontUrls: frontUrls ,
		mainUrls: mainUrls ,
		socialUrls : socialUrls
	});

});

module.exports = router;
