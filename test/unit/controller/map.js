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
    it('should set a mock map', function () {
      var map = {
        center: {
          latitude: 45,
          longitude: -73
        },
        heatLayerCallback: sinon.spy(),
        showHeat: true,
        zoom: 8
      };
    });
  })
});