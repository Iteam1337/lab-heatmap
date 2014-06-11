angular.module('lab-heatmap').service('uppdrag', function (geo, $q, $http) {
  
  'use strict';

  var uppdrag = {
    items: []
  };

  var trrUppdragUrl = 'http://trr-rest-api.iteamdev.se/uppdrag';
  var trrPostdata = {
    "Uppdragsstatus":["Redigering", "Aktiv", "Avslutad"],
    "Lan":[],
    "OrderBy":"SenastAndradDatum",
    "Descending":true,  
    "Take":"500",
    "Skip":"0"
  };

  function getUppdragFromTRR() {
    var promise = $http
      .post(trrUppdragUrl, trrPostdata)
      .then(function(data) {
        if(data.status === 200) {
          return data.data.Uppdrag;
        } else {
          //console.log('Server returned and error', data);
        }
    },
      function(reason) {
      //console.log("Getting TRR Uppdrag failed.", reason);
    });

    return promise;
  }

  uppdrag.GetUppdrag = function () {
    var promise = getUppdragFromTRR().then(function(trrUppdrags) {
      if (trrUppdrags === undefined) { return; }

      trrUppdrags.map(function(trrUppdrag) {
        var position = geo.Lookup(trrUppdrag.Arbetsort).then(function (data) {
          if (!!data) {
            uppdrag.items.push({
              'Befattning': trrUppdrag.Tjanst,
              'Ort': trrUppdrag.Arbetsort,
              'Lan': '',
              'Position': {
                Lat: data.latitude,
                Lng: data.longitude
              },
              'Aktuell': {
                'Skapad': trrUppdrag.SkapadDatum,
                'Avslutad': trrUppdrag.TillsattDatum
              }
            });
          } else {
          }
        });
      });
    },
    function (reason) {
      //console.log('Failed ', reason);
    });

    return promise;

  };

  return uppdrag;

});