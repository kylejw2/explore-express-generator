var express = require('express');
var router = express.Router();
var app = express();

app.use(express.json());

const jsonArr = require('../public/dataset/data.json');

/* GET display page. */
router.get('/:index', function(req, res, next) {
  const myIndex = req.params.index;
  res.render('display', { result: `The movie you requested is "${jsonArr[myIndex].name}". It was released in ${jsonArr[myIndex].year}.` });
});

module.exports = router;

























// app.use(express.json());

// const jsonArr = require('../public/dataset/data.json');



// const index = req.params.index;
  // const obj = jsonArr[index];
  // if (obj.name === 'The Dark Knight') {
  //   res.render('display', {result: `I love the movie, "${obj.name}"! It was released in ${obj.year}.`})
  // } else {
  //   res.render('display', {result: `I have never seen the movie, "${obj.name}". It was released in ${obj.year}.`});
  // }