angular.module('lab-heatmap').service('TRRUppdrag', function ($http) {
'use strict';

  var trrUppdragUrl = 'http://trr-rest-api.iteamdev.se/uppdrag';
  var trrPostdata = {
    "Uppdragsstatus":["Aktiv"],
    "Lan":[],
    "OrderBy":"SenastAndradDatum",
    "Descending":true,  
    "Take":"50",
    "Skip":"0"
  };

  var TRRUppdrag = {};

  function getUppdragFromTRR() {
    var promise = $http.post(trrUppdragUrl, trrPostdata).
      then(function(data) {
        console.log(data);
        if(data.status === 200) {
          return data.data.Uppdrag;
        }
        else {
          console.log('Server returned and error', data);
        }
    }, function(reason) {
      console.log("Getting TRR Uppdrag failed.", reason);
    });

    return promise;
  }

  TRRUppdrag.GetUppdrag = function () {
    var data = getUppdragFromTRR();

    var mappedUppdrag = [];
    data.then(function(uppdrag) {
      if (uppdrag !== undefined) {
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
      }

      return mappedUppdrag;
    },
    function (reason) {
      console.log('Failed ', reason);
    });

  };

  return TRRUppdrag;
});