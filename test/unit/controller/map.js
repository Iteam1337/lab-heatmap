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

    it('should contain styles in the options', function () {
      expect(scope.map.options.styles).to.be.an('array');
      expect(scope.map.options.styles).to.have.length.above(0);
    });

    it('should be zoomed to a certain level', function () {
      expect(scope.map.zoom).to.eql(8);
    });

    it('should have heat layer turned on', function () {
      expect(scope.map.showHeat).to.be.true;
    });

    it('should have a heat layer function', function () {
      expect(scope.map.heatLayerCallback).to.be.a('function');
    });

    it('should get uppdrag from service', function () {
      expect(scope.uppdrag).to.be.an('array');
    });
  });

  describe('#centerOnJob', function() {
    it('should be a function', function () {
      expect(scope.centerOnJob).to.be.a('function');
    });

    it('should move the maps center point', function () {
      scope.centerOnJob({Lat:60,Lng:20});

      expect(scope.map.center.latitude).to.eql(60);
      expect(scope.map.center.longitude).to.eql(20);
    });
  });

});