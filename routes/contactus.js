var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log('reeached');
  res.render('contactus', { csrfToken:req.csrfToken()});
  // });

});
router.post('/', function(req, res, next) {
  req.assert('description','Please enter description').notEmpty();
    req.assert('fullname','Please enter fullname').notEmpty();
  var errors=req.validationErrors();
//  console.log(errors.length);
  if(errors){
    //console.log(errors.length);
     res.render('contactus',{errors:errors,csrfToken:req.csrfToken()});
     res.end();
     }
  else{
    var data=JSON.stringify(req.body);
    // var data = 'Full Name: ' + req.body.fullname + '   ' + 'Type: ' + req.body.type + '   ' + 'Description: ' + req.body.description + '\n';
  fs.writeFile('./file.txt',data,function (err) {
if(err)console.log('erererererere');
else{
//  console.log('render');
//res.render('t',{Name:req.body.fullname});
      res.redirect(302,'/t');

}

  })}

//  console.log(req.body);
//  res.render('contactus', { message: 'new one' });

  // });

});

module.exports = router;
