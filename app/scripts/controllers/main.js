'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
