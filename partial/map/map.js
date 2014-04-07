angular.module('lab-heatmap').controller('MapCtrl', function ($scope) {
  
  'use strict';

  $scope.map = {
    center: {
      latitude: 45,
      longitude: -73
    },
    zoom: 8
  };

});