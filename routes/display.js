var express = require('express');
var router = express.Router();
var app = express();

app.use(express.json());

const jsonArr = require('../public/dataset/data.json');

/* GET display page. */
router.get('/', function(req, res, next) {
  const obj = jsonArr[4];
  if (obj.name === 'The Dark Knight') {
    res.render('display', {result: `I love the movie, "${obj.name}"! It was released in ${obj.year}.`})
  } else {
    res.render('display', {result: `I have never seen the movie, "${obj.name}". It was released in ${obj.year}.`});
  }
  
});

module.exports = router;