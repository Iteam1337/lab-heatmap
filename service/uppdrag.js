angular.module('lab-heatmap').service('uppdrag', function () {
  'use strict';

  var uppdrag = 
  [
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
    },{
      'Befattning': 'Projektledare',
      'Ort': 'Huddinge',
      'Lan': 'Stockholms Län',
      'Position': {
        'Lat': 59.2124659,
        'Lng': 18.0216075,
      },
      'Aktuell': {
        'Skapad': '2014-01-01',
        'Avslutad': '2014-02-01' 
      }
    },{
      'Befattning': 'Sekreterare',
      'Ort': 'Lidingö',
      'Lan': 'Stockholms Län',
      'Position': {
        'Lat': 59.365037,
        'Lng': 18.1753876,
      },
      'Aktuell': {
        'Skapad': '2014-01-15',
        'Avslutad': '2014-03-01' 
      }
    },{
      'Befattning': 'Hängmattstestare',
      'Ort': 'Uddevalla',
      'Lan': 'Västra Götalands Län',
      'Position': {
        'Lat': 58.3524955,
        'Lng': 11.9401409,
      },
      'Aktuell': {
        'Skapad': '2014-03-01',
        'Avslutad': '2014-04-20' 
      }
    },
  ];

  return uppdrag;
});