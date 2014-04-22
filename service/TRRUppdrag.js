angular.module('lab-heatmap').service('TRRUppdrag', function ($http) {
'use strict';

  var trrUppdragUrl = 'http://trr-rest-api/uppdrag';
  var trrPostdata = {
    "Uppdragsstatus":["Aktiv"],
    "Lan":[],
    "AnsvarigKontaktPersonAnstalldId":"",
    "OrderBy":"SenastAndradDatum",
    "Descending":true,  
    "Take":"20000",
    "Skip":"0"
  };

  var TRRUppdrag = {};

  TRRUppdrag.GetUppdrag = function () {
    console.log('Starting');
    console.log(trrUppdragUrl);
    console.log(trrPostdata);
    $http.post(trrUppdragUrl, trrPostdata).
      success(function(data, status, headers, config) {
      //Skapa lista med uppdrag och returnera  
      console.log("Antal uppdrag " + data.length);
    }).
      error(function(data, status, headers, config) {
      console.log("Getting TRR Uppdrag failed.");
    });
    /*$http({method: 'POST', url: trrUppdragUrl, data: trrPostdata}).
      success(function(data, status, headers, config) {
      //Skapa lista med uppdrag och returnera  
      console.log("Antal uppdrag " + data.length);
    }).
      error(function(data, status, headers, config) {
      console.log("Getting TRR Uppdrag failed.");
    });*/
  };

  return TRRUppdrag;
});