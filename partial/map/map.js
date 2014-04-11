angular.module('lab-heatmap').controller('MapCtrl', function ($scope, uppdrag, geo) {
  'use strict';

  $scope.heatLayer = function (heatLayer, newData) {
    var pointArray;
    var data = [];

    if (!newData) {
      uppdrag.map(function (upp) {
        data.push(new google.maps.LatLng(upp.Position.Lat, upp.Position.Lng));
      });
    } else {
      newData.map(function (upp) {
        data.push(new google.maps.LatLng(upp.Position.Lat, upp.Position.Lng));
      });
    }

    pointArray = new google.maps.MVCArray(data);
    heatLayer.setData(pointArray);
  };

  $scope.map = {
    center: {
      latitude: 59.32893,
      longitude: 18.06491
    },
    heatLayerCallback: function (layer) {
      $scope.layer = layer;
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

  $scope.$watch('layer', function (layer) {
    if (!layer) { return; }
    $scope.heatLayer(layer);
  });

  $scope.uppdrag = uppdrag;
  $scope.years = ['2014','2015'];
  $scope.playRange = [];

  var range, i, interval;

  $scope.years.map(function (year) {
    for (var i = 1; i < 13; i++) {
      if (i < 10) { i = '0' + i; }
      $scope.playRange.push(year + '-' + i + '-01');
    }
  });

  $scope.setPlayData = function () {
    i++;

    $scope.currentMonth = moment($scope.playRange[i]).format('MMMM YYYY');
    $scope.$apply();
    $scope.changeData($scope.playRange[i]);

    if (i === $scope.playRange.length) {
      clearInterval(interval);
      i = -1;

      $scope.currentMonth = null;
      $scope.playing = false;
      $scope.i = null;
      
      $scope.$apply();
    }
  };

  $scope.pause = function () {
    $scope.i = i;
    $scope.playing = false;
    clearInterval(interval);
  };

  $scope.play = function () {
    if ($scope.i) {
      i = $scope.i;
      $scope.i = null;
    } else {
      i = -1;
    }

    $scope.playing = true;

    interval = setInterval($scope.setPlayData, 1000);
  };

  $scope.changeData = function (date) {
    var filtered = uppdrag.filter(function (a) {
      range = moment().range(a.Aktuell.Skapad, a.Aktuell.Avslutad);
      return range.contains(moment(date));
    });

    $scope.heatLayer($scope.layer, filtered);
  };

  $scope.centerOnJob = function (position) {
    $scope.map.center = { latitude: position.Lat, longitude: position.Lng };
  };

});