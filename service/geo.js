angular.module('lab-heatmap').service('geo', function ($http, CONFIG) {
  'use strict';

  var locationsUrl;
  locationsUrl = CONFIG.geoApiUrl + 'location/{location}';

  this.Lookup = function (city) {
    var promise = $http
      .get(locationsUrl.replace('{location}', city))
      .then(function (res) {
        return res.data[0];
      }, function (err) {
        console.log('Unable to load location!', err);
        return { success:false };
      });

    return promise;
  };

  this.PositionUppdrag = function (uppdrag) {
    var position;
    position = {
      Lat: 0.0,
      Lng: 0.0
    };
    $http.get(locationsUrl.replace('{location}', uppdrag.Ort))
      .success(function (data, status, headers, config) {
        data.map(function(d) {
           if (d.city === uppdrag.Ort) {
             position.Lat = data[0].latitude;
             position.Lng = data[0].longitude;
             uppdrag.Position = position;
           }
        });
      })
      .error(function (data, status, headers, config) {
        console.log('Unable to load location!', data);
        return {};
      });
  };

});