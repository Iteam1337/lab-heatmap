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

});