var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// router.route("/")
// .all(function (req,res,next) {console.log(' all'); next(); console.log('after next');})
// .post(function (req,res,next) {console.log('post')})
// .get(function (req,res,next) {console.log('get'); return next();
// //res.render('index', { title: 'Express' })
// });
//
// router.get('/', function(req, res, next) {
//   req.query.name="haleka";
//   //res.redirect(302,'http://localhost:8080/users?name=henok');
//   request('http://localhost:8080/users').pipe(res);
//  //res.render('index', { title: 'Express' });
// console.log('new one');
//  });

module.exports = router;
