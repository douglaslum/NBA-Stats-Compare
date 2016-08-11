'use strict';

angular.module('sportsApp', ['sportsApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ngRoute', 'btford.socket-io', 'ui.bootstrap'
  ])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
  });
