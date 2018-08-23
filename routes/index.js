var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Useless' }); /*Defines home or localhose:3000 by rendering index.html and passing the js object {title:'express'}*/
  res.send('stylesheets/style.css');
});
module.exports = router;
