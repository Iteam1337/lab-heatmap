describe('geo', function () {

  var geo, httpBackend, cities;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_geo_, $httpBackend) {
      geo = _geo_;
      httpBackend = $httpBackend;

      cities = [
        {
          name: 'Stockholm'
        }
      ];

      httpBackend
        .whenGET('http://ilix.se:1337/location/Stockholm')
        .respond(200, cities);
    });
  });

  it('should have a Lookup function', function () {
    expect(geo.Lookup).to.be.a('function');
  });

  it('can lookup Umeå', function () {
    var loc = geo.Lookup('Stockholm');

    httpBackend.flush();

    expect(loc).to.be.an('object');
  });

});