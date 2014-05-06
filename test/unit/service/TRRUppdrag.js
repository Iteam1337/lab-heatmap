describe('TRRUppdrag', function () {

  var TRRUppdrag;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_TRRUppdrag_, $httpBackend)) {
      TRRUppdrag = _TRRUppdrag_;
      httpBackend = $httpBackend;

      var mockUppdrag = [
        {
          'Befattning': 'Kantbockare',
          'Ort': 'Solna',
          'Lan': 'Stockholms Län',
          'Position': {
            Lat: 0.0,
            Lng: 0.0
          },
          'Aktuell': {
            'Skapad': '2014-01-01',
            'Avslutad': '2014-02-01'
          }
        }
      ];

      httpBackend
        .whenPost('http://trr-rest-api.iteamdev.se/uppdrag')
        .respond(200, mockUppdrag);
    });
  });

  it('should have a GetUppdrag function', function () {
    expect(TRRUppdrag.GetUppdrag).to.be.a('function');
  });
  
});