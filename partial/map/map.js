angular.module('lab-heatmap').controller('MapCtrl', function ($scope, uppdrag, geo) {
  'use strict';

  var center = {
     latitude: 62.3875,
    longitude: 16.325556 
  };

  $scope.heatLayer = function (heatLayer, newData) {
    var pointArray;
    var data = [];

    if (!newData) {
      uppdrag.GetUppdrag().then(function () {
      uppdrag.items.map(function (upp) {
        if (!!upp.Position.Lng) {
          data.push(new google.maps.LatLng(upp.Position.Lat, upp.Position.Lng));
        }
      });
    }, function(reason) {
      console.log("uppdrag.GetUppdrag failed", reason);
    });
    } else {
      uppdrag.items.map(function (upp) {
        if (!!upp.Position.Lng) {
          data.push(new google.maps.LatLng(upp.Position.Lat, upp.Position.Lng));
        }
      });
    }

    pointArray = new google.maps.MVCArray(data);

    var gradient = [
        'rgba(0, 255, 255, 0)',
        'rgba(0, 255, 255, 1)',
        'rgba(0, 191, 255, 1)',
        'rgba(0, 127, 255, 1)',
        'rgba(0, 63, 255, 1)',
        'rgba(0, 0, 255, 1)',
        'rgba(0, 0, 223, 1)',
        'rgba(0, 0, 191, 1)',
        'rgba(0, 0, 159, 1)',
        'rgba(0, 0, 127, 1)',
        'rgba(63, 0, 91, 1)',
        'rgba(127, 0, 63, 1)',
        'rgba(191, 0, 31, 1)',
        'rgba(255, 0, 0, 1)'
      ];

      heatLayer.set('gradient', gradient);
      heatLayer.set('radius', 25);

    heatLayer.setData(pointArray);
  };

  $scope.map = {
    center: center,
    heatLayerCallback: function (layer) {
      $scope.layer = layer;
    },
    showHeat: true,
    zoom: 5,
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
    var filtered = uppdrag.items.filter(function (a) {
      range = moment().range(a.Aktuell.Skapad, a.Aktuell.Avslutad);
      return range.contains(moment(date));
    });

    $scope.heatLayer($scope.layer, filtered);
  };

  $scope.reset = function () {
    $scope.heatLayer($scope.layer);
    $scope.map.center = center;

    // TODO: Also reset play timer?
  };

  $scope.centerOnJob = function (job) {
    $scope.map.center = { latitude: job.Position.Lat, longitude: job.Position.Lng };

    var jobs = [];

    jobs.push(job);

    $scope.heatLayer($scope.layer, jobs);
  };
});