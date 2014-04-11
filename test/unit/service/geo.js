describe('geo', function () {

  var geo;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_geo_) {
      geo = _geo_;
    });
  });

  xit('should have tests', function () {
    //expect(geo.doSomething()).to.equal('something');
  });

});