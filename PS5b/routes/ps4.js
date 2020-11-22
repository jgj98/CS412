const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const FETCHCONFIG = require('../config/fetchConfigs');

const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);
const existsAsync = promisify(client.exists).bind(client);
const setAsync = promisify(client.set).bind(client);
const expireAsync = promisify(client.expire).bind(client);


client.flushdb((err, success) => {
    if (err) {
        throw new Error(err)
    }
});
router.route('/')
    .post(async (req,res) => {



      let q = req.body.q;
      let match = await existsAsync(q);
      if(match){
          let weatherData = await getAsync(q);
          let response = {
              weatherData: weatherData,
              cached: true
          }
          res.send(response)
      }else{
          let returnVal = await fetch( FETCHCONFIG.fetchOptions.url + FETCHCONFIG.fetchOptions.secretKey +"&q=" + req.body.q);
          let  weatherData  = await returnVal.json();
          await setAsync(q,JSON.stringify(weatherData));
          let response = {
              weatherData: weatherData,
              cached: false
          }
          await expireAsync(q,15);
          res.send(response);

      }



    })
    .get((req, res, next) => {
      res.render("index2")
    })

module.exports = router;
