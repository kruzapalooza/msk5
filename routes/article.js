var express = require('express');
var router = express.Router();

router.get('/article', function(req, res) {
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
	article.article_links.forEach( function(item) {
		articleUrls = articleUrls.concat(item) ;
	});
	social.social_links.forEach( function(item) {  
		socialUrls = socialUrls.concat(item) ;
	});

	res.render('article', {
		pageTitle: 'Article',
		pageID:    'article', // id current page for js
		frontUrls: frontUrls ,
		articleUrls : articleUrls,
		socialUrls : socialUrls
	});

});

module.exports = router;
