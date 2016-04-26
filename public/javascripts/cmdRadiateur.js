/**
 * Created by sam on 17/04/16.
 */


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"


var niveauRadiateur;
var arret=0;
var horsGel=15;
var eco=25;
var confort2=35;
var confort1=45;
var confort=99;
var myRefresh=setInterval(etatBoutton,1000);
var IP="192.168.1.30"

function etatBoutton(){
    etatRadiateur();
    console.log(" etat bouton niveauradiateur"+niveauRadiateur);
    if (niveauRadiateur==arret){document.getElementById("bArret").className="btn btn-primary";}
    else{document.getElementById("bArret").className="btn btn-defautl";}
    if (niveauRadiateur==confort2){document.getElementById("bConfort2").className="btn btn-primary";}
    else{document.getElementById("bConfort2").className="btn btn-defautl";}
    if (niveauRadiateur==confort){document.getElementById("bConfort").className="btn btn-primary";}
    else{document.getElementById("bConfort").className="btn btn-defautl";}
}

function cmdRadiateur(val){
    jQuery.ajax({
        type:'GET',
        dataType:'json',
        url:"http://"+IP+"/ZAutomation/api/v1/devices/ZWayVDev_zway_6-0-38/command/exact?level="+val,

        success: function (data, status, jqXHR) {
            console.log("ordre : "+val);

        },

        error: function (jqXHR, status) {
            console.log("!____ Ordre KO_____! :"+val);
        }
    });
}

function etatRadiateur(){
    jQuery.ajax({
        type:'GET',
        dataType:'json',
        url:"http://"+IP+"/ZAutomation/api/v1/devices/ZWayVDev_zway_6-0-38",

        success: function (data, status, jqXHR) {
            niveauRadiateur=data.data.metrics.level;
            console.log("lecture OK : "+niveauRadiateur);
        },

        error: function (jqXHR, status) {
            Console.log("!______Lecture KO_______!")
            console.log(status);
            console.log(jqXHR);
        }
    });
}

