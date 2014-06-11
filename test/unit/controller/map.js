describe('MapCtrl', function () {

  var scope, ctrl, uppdrag, httpBackend, cities;

  beforeEach(function () {
    module('lab-heatmap');
    inject(function ($rootScope, $controller, $httpBackend, uppdrag) {
      scope = $rootScope.$new();
      httpBackend = $httpBackend;

      uppdrag = uppdrag;

      cities = [
        {
          city: 'Solna'
        }
      ];

      ctrl = $controller('MapCtrl', {
        $scope: scope,
        uppdrag: uppdrag
      });

      httpBackend
        .whenGET(/http:\/\/[a-z.:0-9]*\/location\/[a-zA-Z]*/)
        .respond(200, cities);

      //httpBackend
      //  .whenPOST('http://trr-rest-api/uppdrag')
      //  .respond(200, {success:true});

      var mockUppdrag = [
        {
          'Befattning': 'Kantbockare',
          'Ort': 'Solna',
          'Lan': 'Stockholms Län',
          'Position': {
            Lat: 1.0,
            Lng: 1.0
          },
          'Aktuell': {
            'Skapad': '2014-01-01',
            'Avslutad': '2014-02-01'
          }
        }
      ];

      httpBackend
        .whenPOST('http://trr-rest-api.iteamdev.se/uppdrag')
<<<<<<< HEAD
        .respond(200, {success:true});
=======
        .respond(200, mockUppdrag);
>>>>>>> master
    });
  });

  describe('#ctor', function() {
    it('map should be an object', function () {
      expect(scope.map).to.be.an('object').with.keys(['center', 'heatLayerCallback','showHeat', 'zoom', 'options']);
    });

    it('should be centered on Stockholm', function () {
      expect(scope.map.center.latitude).to.eql(62.3875);
      expect(scope.map.center.longitude).to.eql(16.325556);
    });

    it('should contain styles in the options', function () {
      expect(scope.map.options.styles).to.be.an('array');
      expect(scope.map.options.styles).to.have.length.above(0);
    });

    it('should be zoomed to a certain level', function () {
      expect(scope.map.zoom).to.eql(5);
    });

    it('should have heat layer turned on', function () {
      expect(scope.map.showHeat).to.be.true;
    });

    it('should have a heat layer function', function () {
      expect(scope.map.heatLayerCallback).to.be.a('function');
    });

    it('should get uppdrag from service', function () {
      expect(scope.uppdrag.items).to.be.an('array');
    });

    it('should set years', function () {
      expect(scope.years).to.eql(['2014','2015']);
    });

    it('should add months to years', function () {
      expect(scope.playRange).to.have.length(24);
    });

    /*it('should set a starting heat layer', function () {
      scope.layer = { layer:"layer" };
      scope.heatLayer = sinon.spy();

      scope.$digest();

      expect(scope.heatLayer.calledOnce).to.be.true;
      expect(scope.heatLayer.calledWith({ layer:"layer" })).to.be.true;
    });*/
  });
  
  describe('#setPlayData', function() {
    it('should be a function', function () {
       expect(scope.setPlayData).to.be.a('function');
    });

    /*it('should change data', function () {
      scope.changeData = sinon.spy();

      scope.setPlayData();

      expect(scope.changeData.calledOnce).to.be.true;
    });*/ 
  })

  describe('#pause', function() {
    it('should be a function', function () {
      expect(scope.pause).to.be.a('function');
    });

    it('should set playing to false', function () {
      scope.pause();

      expect(scope.playing).to.be.false;
    });
  })

  describe('#play', function() {
    it('should be a function', function () {
      expect(scope.play).to.be.a('function');
    });

    it('should set playing to true', function () {
      scope.play();

      expect(scope.playing).to.be.true;
    });

    it('should reset scope increment on play', function () {
      scope.i = 1337;
      scope.play();

      expect(scope.i).to.be.null;
    });
  });

  describe('#changeData', function() {
    it('should be a function', function () {
      expect(scope.changeData).to.be.a('function');
    });

    it('should make a new heat layer', function () {
      scope.heatLayer = sinon.spy();
      scope.uppdrag.items = [
        {
          'Befattning': 'Kantbockare',
          'Ort': 'Solna',
          'Lan': 'Stockholms Län',
          'Position': {
            'Lat': 59.369468,
            'Lng': 18.0090972,
          },
          'Aktuell': {
            'Skapad': '2014-01-01',
            'Avslutad': '2014-02-01' 
          }
        },{
          'Befattning': 'Brandman',
          'Ort': 'Husby',
          'Lan': 'Stockholms Län',
          'Position': {
            'Lat': 59.408474,
            'Lng': 17.9246094,
          },
          'Aktuell': {
            'Skapad': '2014-01-01',
            'Avslutad': '2014-02-01' 
          } 
        }];

      scope.changeData('2014-01-01');

      expect(scope.heatLayer.calledOnce).to.be.true;
    });
  });

  describe('#centerOnJob', function() {

    beforeEach(function () {
      scope.heatLayer = sinon.spy();
    });

    it('should be a function', function () {
      expect(scope.centerOnJob).to.be.a('function');
    });

    it('should move the maps center point', function () {
      scope.centerOnJob({Position: {Lat:60,Lng:20}});

      expect(scope.map.center.latitude).to.eql(60);
      expect(scope.map.center.longitude).to.eql(20);
    });

    it('should set the heat layer with the selected point', function () {
      scope.centerOnJob({Position: {Lat:60,Lng:20}});

      expect(scope.heatLayer.calledOnce).to.be.true;
    });
  });

  describe('#reset', function() {
    it('should be a function', function () {
      expect(scope.reset).to.be.a('function');
    });

    it('should reset the heat layer to the initial', function () {
      scope.heatLayer = sinon.spy();
      scope.reset();

      expect(scope.heatLayer.calledOnce).to.be.true;
    });
  })

});