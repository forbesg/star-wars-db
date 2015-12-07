'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
