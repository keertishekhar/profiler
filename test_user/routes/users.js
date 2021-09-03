var express = require('express');
var router = express.Router();
var { insertUser, fetchUser } = require('../controller/userController')
/* GET users listing. */
router.post('/sign_in', function(req, res, next) {
  let signIn = fetchUser(req.body);
  if(signIn){
    res.send('singed In successFully');
  }else{
    res.send('can not sign in with these credentials');
  }
});

router.get('/sign_up', function(req, res, next) {
  res.render('sign_up', { title: 'Profiler' })
});
router.post('/sign_up', function(req, res, next) {
      let createUser = insertUser(req.body)
      if(createUser){
        res.send("user created successfully")
      }else{
        res.send('unable to create user');
      }
});
module.exports = router;
