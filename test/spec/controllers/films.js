'use strict';

describe('Controller: FilmsCtrl', function () {

  // load the controller's module
  beforeEach(module('starWarsApp'));

  var FilmsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $http) {
    scope = $rootScope.$new();
    FilmsCtrl = $controller('FilmsCtrl', {
      $scope: scope
    });
  }));

  it('return an array of film objects', function () {
    expect(scope.films.length).toBe(7);
  });
});
