describe('uppdrag', function () {

  var uppdrag;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_uppdrag_) {
      uppdrag = _uppdrag_;
    });
  });

  it('should return an object', function () {
    expect(uppdrag.items).to.be.an('array');
  });

  it('an uppdrag should have certain properties', function () {
    var keys = [
      'Befattning',
      'Ort',
      'Lan',
      'Position',
      'Aktuell'
    ];

    expect(uppdrag.sourceItems[0]).to.be.an('object').with.keys(keys);
  });

  it('an uppdrag should contain longitude and latitude', function () {
    expect(uppdrag.sourceItems[0].Position).to.be.an('object').with.keys(['Lat','Lng']);
  });

  it('an uppdrag should contain two dates', function () {
    expect(uppdrag.sourceItems[0].Aktuell).to.be.an('object').with.keys(['Skapad', 'Avslutad']);
  });

  /*it('should have a get trr uppdrag function', function () {
    expect(uppdrag.GetTRRUppdrag).to.be.a('function');
  });
*/
  /*it('get trr uppdrag function returns an array', function () {
    var trrUppdrag = uppdrag.GetTRRUppdrag();
    expect(trrUppdrag).to.be.an('array');
  });*/


});