var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // return res.json(
  //   {
  //     message: 'hhhhhhhhhhhhh'
  //   }
  // );
  return res.send('BACKEND SIRUANG ACTIVATED');
});

module.exports = router;
