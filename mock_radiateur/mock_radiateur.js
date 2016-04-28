var express = require('express');
var router = express.Router();
var router_val=express.Router();
var fs = require('fs');

/* GET mock_radiateur listing. */
router.get('/', function(req, res, next) {
  var level=0;
res.json({"data":{"creationTime":1459096747,"creatorId":1,"deviceType":"switchMultilevel","h":1192966520,"hasHistory":false,"id":"ZWayVDev_zway_6-0-38","location":1,"metrics":{"icon":"multilevel","title":"Dimmer (6.0)","level":0},"permanently_hidden":false,"probeType":"dimmer","tags":[],"visibility":true,"updateTime":1461787256},"code":200,"message":"200 OK","error":null});

});

/* GET mock_radiateur vlaue. */
router_val.get('/:level', function(req, res, next) {

  if (level==='etat') {
    res.json({
      "data": {
        "creationTime": 1459096747,
        "creatorId": 1,
        "deviceType": "switchMultilevel",
        "h": 1192966520,
        "hasHistory": false,
        "id": "ZWayVDev_zway_6-0-38",
        "location": 1,
        "metrics": {"icon": "multilevel", "title": "Dimmer (6.0)", "level": 0},
        "permanently_hidden": false,
        "probeType": "dimmer",
        "tags": [],
        "visibility": true,
        "updateTime": 1461787256
      }, "code": 200, "message": "200 OK", "error": null
    });
  }
  });

//module.exports = router;
module.exports = router_val;