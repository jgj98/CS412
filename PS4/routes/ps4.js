var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfigs');
/* GET home page. */
router.route('/')
    .post(async (req,res) => {
        let returnVal = await fetch( FETCHCONFIG.fetchOptions.url + FETCHCONFIG.fetchOptions.secretKey +"&q=" + req.body.q)
        let result = await returnVal.json()
        res.render("index", {'title':"Weather", 'result': result})



    })
    .get((req, res, next) => {
        res.render("index2")
    })

module.exports = router;
