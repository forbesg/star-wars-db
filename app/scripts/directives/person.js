'use strict';

/**
 * @ngdoc directive
 * @name starWarsApp.directive:person
 * @description
 * # person
 */
angular.module('starWarsApp')
  .directive('swPerson', function () {
    return {
      templateUrl: 'views/templates/people.tpl.html',
      restrict: 'E',
      link: function postLink(scope) {
          scope.id = scope.person.url.match(/\d+/)[0];
      }
    };
  });
