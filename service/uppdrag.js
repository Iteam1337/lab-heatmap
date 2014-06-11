angular.module('lab-heatmap').service('uppdrag', function (TRRUppdrag, geo, $q, $http) {
  
  'use strict';



  var uppdrag = {
    items: []
  };
  //uppdrag.items = [];

  var trrUppdragUrl = 'http://trr-rest-api.iteamdev.se/uppdrag';
  var trrPostdata = {
    "Uppdragsstatus":["Redigering", "Aktiv", "Avslutad"],
    "Lan":[],
    "OrderBy":"SenastAndradDatum",
    "Descending":true,  
    "Take":"700",
    "Skip":"0"
  };


  function getUppdragFromTRR() {
    var promise = $http.post(trrUppdragUrl, trrPostdata).
      then(function(data) {
        if(data.status === 200) {
          return data.data.Uppdrag;
        }
        else {
          console.log('Server returned and error', data);
        }
    },
      function(reason) {
      console.log("Getting TRR Uppdrag failed.", reason);
    });

    return promise;
  }

  uppdrag.GetUppdrag = function () {
    var promise = getUppdragFromTRR().then(function(trrUppdrags) {
      if (trrUppdrags !== undefined) {
        console.log(trrUppdrags.length + " uppdrag was returned");
        trrUppdrags.map(function(trrUppdrag) {

          //Geo
          var position = geo.Lookup(trrUppdrag.Arbetsort).then(function (data) {

            if (!!data) {
              //Done and positioned. Push...
            //console.log('Pushing', data);
            //console.log('Items', uppdrag.items);
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
            console.log('Unable to lookup ', trrUppdrag.Arbetsort);
          }
          });
        });
      }
    },
    function (reason) {
      console.log('Failed ', reason);
    });

    return promise;

  };

  /*function getUppdragFromService() {
    var deferred = $q.defer();

    deferred.resolve(TRRUppdrag.GetUppdrag());
   
    return deferred.promise;
  } 

  function loadUppdrag() {
    var uppdragPromise = getUppdragFromService();

    uppdragPromise.then(function(uppdrags) {
      uppdrag.sourceItems = uppdrags;
      uppdrag.sourceItems.map(function (uppdragItem){
        geo.Lookup(uppdragItem.Ort).then(function (data) {
          uppdragItem.Position.Lat = data.latitude;
          uppdragItem.Position.Lng = data.longitude;  
          uppdrag.items.push(uppdragItem);
        });
      });  
    }, function (reason) {
      console.log(reason);
    }, function (notification) {
      console.log(notification);
    }
    ) ;
    
  }

  loadUppdrag();*/

  return uppdrag;

});