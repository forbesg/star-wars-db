'use strict';

describe('Directive: personModal', function () {

  // load the directive's module
  beforeEach(module('starWarsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<person-modal></person-modal>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the personModal directive');
  }));
});
