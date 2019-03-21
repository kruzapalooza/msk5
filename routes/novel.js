var express = require('express');
var router = express.Router();

router.get('/novel', function(req, res) {
	var main		= req.app.get('appMain');
	var data 		= req.app.get('appData');
	var article 	= req.app.get('appArticle');
	var social 		= req.app.get('appSocial');
	var novel		= req.app.get('appNovel');
	var mainUrls    = [] ;
	var frontUrls 	= [] ;
	var articleUrls = [] ;
	var socialUrls  = [] ;
	var novelUrls   = [] ;
	// item is each url set
	data.front_links.forEach( function(item) {
		frontUrls = frontUrls.concat(item) ;
	});
	novel.novel_links.forEach( function(item) {
		novelUrls = novelUrls.concat(item) ;
	});
	social.social_links.forEach( function(item) {  
		socialUrls = socialUrls.concat(item) ;
	});

	res.render('novel', {
		pageTitle: 'Novel',
		pageID:    'novel', // id current page for js
		frontUrls: frontUrls ,
		novelUrls: novelUrls ,
		socialUrls : socialUrls
	});

});

module.exports = router;
