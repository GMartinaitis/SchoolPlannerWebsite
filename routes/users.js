var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) { /*Notice that this is still a / for the path. Once the path is passed here it is relative. Meaning it is just
                                                                localhost:3000/users. */
  res.send('respond with a resource');
});

module.exports = router;
