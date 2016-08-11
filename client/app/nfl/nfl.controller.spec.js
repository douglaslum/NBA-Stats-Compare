'use strict';

describe('Component: nflComponent', function() {

  // load the controller's module
  beforeEach(module('sportsApp'));
  beforeEach(module('socketMock'));

  var scope;
  var nflComponent;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function(_$httpBackend_, $http, $componentController, $rootScope, socket) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    nflComponent = $componentController('nfl', {
      $http: $http,
      $scope: scope,
      socket: socket
    });
  }));

  it('should attach a list of things to the controller', function() {
    nflComponent.$onInit();
    $httpBackend.flush();
    expect(nflComponent.awesomeThings.length)
      .toBe(4);
  });
});
