'use strict';

describe('Controller: PlanetsCtrl', function () {

  // load the controller's module
  beforeEach(module('starWarsApp'));

  var PlanetsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlanetsCtrl = $controller('PlanetsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
