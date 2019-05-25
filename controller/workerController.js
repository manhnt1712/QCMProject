var Worker= require('../models/worker')

exports.save=function (req,res) {
    var workerObj = new Worker(req.body);
    workerObj.save(function (err) {
        if (err) {
            return res.status(500).send(err);
        } else {
            return res.redirect('/');
        }
    });

}