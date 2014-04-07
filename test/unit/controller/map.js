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
    it('should set a map centered on Stockholm', function () {
      expect(scope.map).to.be.an('object').with.keys(['center', 'heatLayerCallback','showHeat', 'zoom', 'options']);
    });
  })
});