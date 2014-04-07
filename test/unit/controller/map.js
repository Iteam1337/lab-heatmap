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
    it('map should be an object', function () {
      expect(scope.map).to.be.an('object').with.keys(['center', 'heatLayerCallback','showHeat', 'zoom', 'options']);
    });

    it('should be centered on Stockholm', function () {
      expect(scope.map.center.latitude).to.eql(59.32893);
      expect(scope.map.center.longitude).to.eql(18.06491);
    });

    it('should be zoomed to a certain level', function () {
      expect(scope.map.zoom).to.eql(8);
    });

    it('should have heat layer turned on', function () {
      expect(scope.map.showHeat).to.be.true;
    });
  });

});