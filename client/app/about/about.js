'use strict';

angular.module('sportsApp')
  .config(function($routeProvider) {
    $routeProvider.when('/about', {
      template: '<about></about>'
    });
  });
