angular.module('lab-heatmap').service('TRRUppdrag', function ($http) {
'use strict';

  var trrUppdragUrl = 'http://trr-rest-api.iteamdev.se/uppdrag';
  var trrPostdata = {
    "Uppdragsstatus":["Aktiv"],
    "Lan":[],
    "OrderBy":"SenastAndradDatum",
    "Descending":true,  
    "Take":"20000",
    "Skip":"0"
  };

  var TRRUppdrag = {};

  function getUppdragFromTRR() {
    var promise = $http.post(trrUppdragUrl, trrPostdata).
      then(function(data) {
        return data.data.Uppdrag;
    }, function(reason) {
      console.log("Getting TRR Uppdrag failed.", reason);
    });

    return promise;
  }

  TRRUppdrag.GetUppdrag = function () {
    var data = getUppdragFromTRR();

    var mappedUppdrag = [];
    data.then(function(uppdrag) {
      uppdrag.map(function(trrUppdrag) {
        mappedUppdrag.push({
          'Befattning': trrUppdrag.Tjanst,
          'Ort': trrUppdrag.Arbetsort,
          'Lan': '',
          'Position': {
            Lat: 0.0,
            Lng: 0.0
          },
          'Aktuell': {
            'Skapad': trrUppdrag.SkapadDatum,
            'Avslutad': trrUppdrag.TillsattDatum
          }
        });
      });

      return mappedUppdrag;
    },
    function (reason) {
      console.log('Failed ', reason);
    });

  };

  return TRRUppdrag;
});