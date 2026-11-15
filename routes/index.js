var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home | My Portfolio' });
});


/* GET About Me page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me | My Portfolio' });
});

/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects | My Portfolio' });
});


/* GET Contact Me page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me | My Portfolio' });
});

module.exports = router;
