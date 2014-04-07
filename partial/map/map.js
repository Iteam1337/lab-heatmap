angular.module('lab-heatmap').controller('MapCtrl', function ($scope, uppdrag) {
  'use strict';

  console.log(uppdrag);

  $scope.map = {
    center: {
      latitude: 45,
      longitude: -73
    },
    zoom: 8
  };

});