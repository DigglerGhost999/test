var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users=[
  {name:"John Doe", birthDate:"19/02/1999"},
  {name:"Jane Doe", birthDate:"25/06/1996"}
  ];
  res.send(users);
});

module.exports = router;
