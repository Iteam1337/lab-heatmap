describe('staticUppdrag', function () {

  var staticUppdrag;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_staticUppdrag_) {
      staticUppdrag = _staticUppdrag_;
    });
  });

  it('should return an object', function () {
    expect(staticUppdrag).to.be.an('array');
  });

  it('an uppdrag should have certain properties', function () {
    var keys = [
      'Befattning',
      'Ort',
      'Lan',
      'Position',
      'Aktuell'
    ];

    expect(staticUppdrag[0]).to.be.an('object').with.keys(keys);
  });

  it('an uppdrag should contain longitude and latitude', function () {
    expect(staticUppdrag[0].Position).to.be.an('object').with.keys(['Lat','Lng']);
  });

  it('an uppdrag should contain two dates', function () {
    expect(staticUppdrag[0].Aktuell).to.be.an('object').with.keys(['Skapad', 'Avslutad']);
  });

});