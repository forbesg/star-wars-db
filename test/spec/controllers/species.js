'use strict';

describe('Controller: SpeciesCtrl', function () {

  // load the controller's module
  beforeEach(module('starWarsApp'));

  var SpeciesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SpeciesCtrl = $controller('SpeciesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
