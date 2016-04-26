/**
 * Created by sam on 17/04/16.
 */
var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();


/* GET radiateur. */
router.get('/:nom', function(req, res, next) {

// direct way
    client.get("http://192.168.1.30/ZAutomation/api/v1/devices/ZWayVDev_zway_6-0-38", function (data, response) {
        // parsed response body as js object
        console.log(data);
        // raw response
        console.log(response);
        niveauRadiateur=data.data.metrics.level;
        console.log("lecture OK : "+niveauRadiateur);
        res.status(200).send("lecture OK : "+niveauRadiateur+" nom:"+req.params.nom);
    });


});


module.exports = router;
