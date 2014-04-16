angular.module('lab-heatmap').service('staticUppdrag', function () {
  'use strict';

  var staticUppdrag = [
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
    },{
      'Befattning': 'Brandman',
      'Ort': 'Umeå',
      'Lan': 'Stockholms Län',
      'Position': {
        Lat: 0.0,
        Lng: 0.0
      },
      'Aktuell': {}
    },{
      'Befattning': 'Projektledare',
      'Ort': 'Huddinge',
      'Lan': 'Stockholms Län',
      'Position': {
        Lat: 0.0,
        Lng: 0.0
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
        Lat: 0.0,
        Lng: 0.0
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
        Lat: 0.0,
        Lng: 0.0
      },
      'Aktuell': {
        'Skapad': '2015-03-01',
        'Avslutad': '2015-04-20'
      }
    },{
      'Befattning': 'Programmerare',
      'Ort': 'Gävle',
      'Lan': 'Gävleborgs Län',
      'Position': {
        Lat: 0.0,
        Lng: 0.0
      },
      'Aktuell': {
        'Skapad': '2014-05-15',
        'Avslutad': '2014-06-30'
      }
    },{
      'Befattning': 'Studentsamordnare',
      'Ort': 'Uppsala',
      'Lan': 'Uppsala Län',
      'Position': {
        Lat: 0.0,
        Lng: 0.0
      },
      'Aktuell': {
        'Skapad': '2014-08-01',
        'Avslutad': '2014-10-01'
      }
    }
  ];

  return staticUppdrag;
});