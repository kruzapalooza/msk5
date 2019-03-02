var express = require('express');
var router = express.Router();

router.get('/about', function(req, res) {
	var main		= req.app.get('appMain');
	var data 		= req.app.get('appData');

	var social 		= req.app.get('appSocial');

	var mainUrls    = [] ;
	var frontUrls 	= [] ;
	var articleUrls = [] ;
	var socialUrls  = [] ;

	// item is each url set
	data.front_links.forEach( function(item) {
		frontUrls = frontUrls.concat(item) ;
	});



	social.social_links.forEach( function(item) {  
		socialUrls = socialUrls.concat(item) ;
	});

	res.render('about', {
		pageTitle: 'About',
		pageID:    'about', // id current page for js
		frontUrls: frontUrls ,

		socialUrls : socialUrls
	});

});

module.exports = router;
