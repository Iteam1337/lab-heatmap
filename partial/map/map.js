angular.module('lab-heatmap').controller('MapCtrl', function ($scope, uppdrag) {
  'use strict';

  var MockHeatLayer = function (heatLayer) {
    var pointArray;
    var data = [];

    uppdrag.map(function (upp) {
      data.push(new google.maps.LatLng(upp.Position.Lat, upp.Position.Lng));
    });

    pointArray = new google.maps.MVCArray(data);
    heatLayer.setData(pointArray);
  };

  $scope.map = {
    center: {
      latitude: 59.32893,
      longitude: 18.06491
    },
    heatLayerCallback: function (layer) {
      var mockHeatLayer = new MockHeatLayer(layer);
    },
    showHeat: true,
    zoom: 8,
    options: {
      styles: [
        {
          "featureType": "road",
          "stylers": [
            { "color": "#808080" },
            { "lightness": 51 }
          ]
        },
        {
          "stylers": [
            { "saturation": -100 }
          ]
        },
        {
          "featureType": "water",
          "stylers": [
            { "hue": "#0077ff" },
            { "saturation": 48 }
          ]
        }
      ]
    }
  };

  $scope.uppdrag = uppdrag;

  $scope.centerOnJob = function (position) {
    $scope.map.center = { latitude: position.Lat, longitude: position.Lng };
  };

});