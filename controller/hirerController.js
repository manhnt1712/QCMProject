var Hirer= require('../models/hirer')

exports.save=function (req,res) {
    var hirerObj = new Hirer(req.body);
    hirerObj.save(function (err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.redirect('/');
        }
    });

}