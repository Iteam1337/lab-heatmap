angular.module('lab-heatmap').service('uppdrag', function (staticUppdrag, geo) {
  
  'use strict';

  var uppdrag = staticUppdrag;

  function setCoordinates() {
    uppdrag.map(function (u){
      geo.PositionUppdrag(u);
    });
  }

  setCoordinates();

  return uppdrag;

});