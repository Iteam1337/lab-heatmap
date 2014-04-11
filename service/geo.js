angular.module('lab-heatmap').service('geo', function ($http, CONFIG) {
  'use strict';

  var locationsUrl;
  locationsUrl = CONFIG.geoApiUrl + 'location/{location}';

  var geo = {};

  geo.Lookup = function (city) {
    $http({method: 'GET', url: locationsUrl.replace('{location}', city)}).
      success(function(data, status, headers, config) {
        return data[0];
      }).
      error(function(data, status, headers, config) {
        console.log('Unable to load location!', data);
        return {};
      });
  };

  return geo;
});