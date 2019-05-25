var express = require('express');
var router = express.Router();

var hirerController=require('../controller/hirerController')
router.get('/signup',function (req,res,next) {
    return res.render('hirer/signup');
})
router.post('/save',hirerController.save)
module.exports = router;