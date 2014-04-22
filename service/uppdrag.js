angular.module('lab-heatmap').service('uppdrag', function (staticUppdrag, geo) {
  
  'use strict';

  var uppdrag = {};

  uppdrag.items = [];
  uppdrag.sourceItems = staticUppdrag;

  function loadUppdrag() {
    uppdrag.sourceItems.map(function (uppdragItem){
      geo.Lookup(uppdragItem.Ort).then(function (data) {
        uppdragItem.Position.Lat = data.latitude;
        uppdragItem.Position.Lng = data.longitude;
        uppdrag.items.push(uppdragItem);
      });
    });
  }

  loadUppdrag();

  return uppdrag;

});