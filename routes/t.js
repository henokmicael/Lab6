var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');



/* GET users listing. */
router.get('/', function(req, res, next) {
fs.readFile('./file.txt',function (err,data){

if(err){
  throw err;
}
else{
  //data.toString();

var fullname=JSON.parse(data.toString()).fullname;
  res.render('t',{Name:fullname});
}
})



});

module.exports = router;
