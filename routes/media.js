var express = require('express');
var router = express.Router();

router.get('/media', function(req, res) {
	var main		= req.app.get('appMain');
	var data 		= req.app.get('appData');
	var media 		= req.app.get('appMedia');
	var social 		= req.app.get('appSocial');

	var mainUrls    = [] ;
	var frontUrls 	= [] ;
	var mediaUrls   = [] ;
	var socialUrls  = [] ;

	// item is each url set
	data.front_links.forEach( function(item) {
		frontUrls = frontUrls.concat(item) ;
	});
	media.media_links.forEach( function(item) {
		mediaUrls = mediaUrls.concat(item) ;
	});
	social.social_links.forEach( function(item) {  
		socialUrls = socialUrls.concat(item) ;
	});

	res.render('media', {
		pageTitle: 'Media',
		pageID:    'media', // id current page for js
		frontUrls: frontUrls ,
		mediaUrls : mediaUrls,
		socialUrls : socialUrls
	});

});

module.exports = router;
