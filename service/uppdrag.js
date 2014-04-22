angular.module('lab-heatmap').service('uppdrag', function ($http, CONFIG) {
  
  'use strict';

  var trrUppdragUrl = 'http://trr-rest-api/uppdrag';
  var trrPostdata = {
    "Uppdragsstatus":["Aktiv"],
    "Lan":[],
    "AnsvarigKontaktPersonAnstalldId":"",
    "OrderBy":"SenastAndradDatum",
    "Descending":true,  
    "Take":"20000",
    "Skip":"0"
  };

  var uppdrag = [
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
        'Skapad': '2015-03-01',
        'Avslutad': '2015-04-20' 
      }
    },{
      'Befattning': 'Programmerare',
      'Ort': 'Gävle',
      'Lan': 'Gävleborgs Län',
      'Position': {
        'Lat': 60.6667,
        'Lng': 17.1667,
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
        'Lat': 59.8667,
        'Lng': 17.6333,
      },
      'Aktuell': {
        'Skapad': '2014-08-01',
        'Avslutad': '2014-10-01' 
      }
    }
  ];

  uppdrag.GetTRRUppdrag = function () {

	$http({method: 'POST', url: trrUppdragUrl, data: trrPostdata}).
		success(function(data, status, headers, config) {
		console.log("Antal uppdrag " + data.length);
	}).
		error(function(data, status, headers, config) {
		console.log("Getting TRR Uppdrag failed.");
	});
  };

  return uppdrag;

});