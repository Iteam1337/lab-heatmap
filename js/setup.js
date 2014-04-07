angular.module('lab-heatmap', ['ui.router', 'ngResource']);

angular.module('lab-heatmap').config(function ($stateProvider, $urlRouterProvider) {
  'use strict';

  $stateProvider.state('map', {
	/* Add New Routes Above */
  
  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

});

angular.module('lab-heatmap').run(function ($rootScope) {
  'use strict';

  $rootScope.safeApply = function (fn) {
    var phase = $rootScope.$$phase;
    if (phase === '$apply' || phase === '$digest') {
      if (fn && (typeof(fn) === 'function')) {
        fn();
      }
    } else {
      this.$apply(fn);
    }
  };

});