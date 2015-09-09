var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  res.json({userId:1, username:"Okazari", accessToken:"fake"});
});

module.exports = router;
