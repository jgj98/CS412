var express = require('express');
var router = express.Router();

router.route('/')
    .get((req, res, next) => {
        res.render('index', {'title': "Hello World"})
    })
    .post((req, res, next) => {
      res.render('index2',{'title': req.query.string, 'length' : req.query.string.length});
    })

module.exports = router;
