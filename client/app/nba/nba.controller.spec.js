'use strict';

describe('Component: nbaComponent', function() {

  // load the controller's module
  beforeEach(module('sportsApp'));
  beforeEach(module('socketMock'));

  var scope;
  var nbaComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, socket) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    nbaComponent = $componentController('nba', {
      $http: $http,
      $scope: scope,
      socket: socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    nbaComponent.$onInit();
    $httpBackend.flush();
    expect(nbaComponent.awesomeThings.length)
      .toBe(4);
  });
});
