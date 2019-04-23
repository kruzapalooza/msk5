var express = require('express');
var router = express.Router();

router.get('/music', function(req, res) {
	var main		= req.app.get('appMain');
	var data 		= req.app.get('appData');
	var article 	= req.app.get('appArticle');
	var social 		= req.app.get('appSocial');
	var music		= req.app.get('appMusic');
	var mainUrls    = [] ;
	var frontUrls 	= [] ;
	var articleUrls = [] ;
	var socialUrls  = [] ;
	var musicUrls   = [] ;
	// item is each url set
	data.front_links.forEach( function(item) {
		frontUrls = frontUrls.concat(item) ;
	});
	music.music_links.forEach( function(item) {
		musicUrls = musicUrls.concat(item) ;
	});
	social.social_links.forEach( function(item) {  
		socialUrls = socialUrls.concat(item) ;
	});

	res.render('music', {
		pageTitle: 'Music',
		pageID:    'music', // id current page for js
		frontUrls: frontUrls ,
		musicUrls: musicUrls ,
		socialUrls : socialUrls
	});

});

module.exports = router;
