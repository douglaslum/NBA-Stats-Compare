'use strict';

angular.module('sportsApp')
  .config(function($routeProvider) {
    $routeProvider.when('/nba', {
      template: '<nba></nba>'
    });
  });
