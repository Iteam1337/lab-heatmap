describe('geo', function () {

  var geo;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_geo_) {
      geo = _geo_;
    });
  });

  it('should have a Lookup function', function () {
    expect(geo.Lookup).to.be.a('function');
  });

  it('can lookup Umeå', function () {
    var loc = geo.Lookup('Umeå');
    console.log(geo.Lookup('Umeå'));
    //expect(geo.Lookup('Umeå')).to.be.an('object');
  });

});