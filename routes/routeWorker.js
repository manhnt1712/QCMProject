var express = require('express');
var router = express.Router();

var workerController=require('../controller/workerController')

router.get('/signup',function (req,res,next) {
    return res.render('worker/signup');
})
router.post('/save',workerController.save)
module.exports = router;