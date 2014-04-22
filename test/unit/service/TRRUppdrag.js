describe('TRRUppdrag', function () {

  var TRRUppdrag;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function (_TRRUppdrag_, $http) {
      TRRUppdrag = _TRRUppdrag_;
    });
  });

  it('should have a GetUppdrag function', function () {
    expect(TRRUppdrag.GetUppdrag).to.be.a('function');
  });
  
});