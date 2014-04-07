angular.module('lab-heatmap').controller('MapCtrl', function ($scope, uppdrag) {
  'use strict';

  var MockHeatLayer = function (heatLayer) {
    var map, pointArray, heatmap;

    var data = [
      new google.maps.LatLng(59.2124659, 18.0216075),
    ];

    pointArray = new google.maps.MVCArray(data);
    heatLayer.setData(pointArray);
  };
  
  $scope.map = {
    center: {
      latitude: 59.2124659,
      longitude: 18.0216075
    },
    heatLayerCallback: function (layer) {
      //set the heat layers backend data
      var mockHeatLayer = new MockHeatLayer(layer);
    },
    showHeat: true,
    zoom: 8
  };

});