/**
 * Created by sam on 18/04/16.
 */
var express = require('express');
var router = express.Router();
var fs=require('fs');


var prog ={};
var plage=[];

prog.label='normal';
//plage[0].jour="lundi";
//plage[0].debut='8:30';
//plage[0].fin='9:00';
//plage[0].type='confort';
//prog.plage=plage;

chaine=JSON.stringify(prog);
fs.writeFileSync("./json/prog",chaine,'UTF-8');

/* GET mock_radiateur listing. */
router.get('/', function(req, res, next) {
    res.send('OK');
});

module.exports = router;