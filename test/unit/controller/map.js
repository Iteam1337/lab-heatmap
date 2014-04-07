describe('MapCtrl', function () {

  var scope, ctrl;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('MapCtrl', {$scope: scope});
    });
  });

  describe('#ctor', function() {
    xit('should set a mock map', function () {
      var map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        heatLayerCallback: function (layer) {
          var mockHeatLayer = new MockHeatLayer(layer);
        },
        showHeat: true,
        zoom: 8
      };

      console.log(map);
      console.log(scope.map);

      expect(scope.map).to.equal(map);
    });
  })
});