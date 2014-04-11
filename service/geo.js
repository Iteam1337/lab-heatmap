angular.module('lab-heatmap').service('geo', function ($http, CONFIG) {
  'use strict';

  var locationsUrl;
  locationsUrl = CONFIG.geoApiUrl + 'location/{location}';

  this.Lookup = function (city) {
    var cities = $http.get(locationsUrl.replace('{location}', city))
      .success(function (data) {
        return data[0];
      })
      .error(function (data) {
        console.log('Unable to load location!', data);
        return {};
      });

    return cities;
  };

});