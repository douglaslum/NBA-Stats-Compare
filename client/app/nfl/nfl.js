'use strict';

angular.module('sportsApp')
  .config(function($routeProvider) {
    $routeProvider.when('/nfl', {
      template: '<nfl></nfl>'
    });
  });
