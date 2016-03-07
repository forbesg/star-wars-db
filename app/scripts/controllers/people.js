'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:PeopleCtrl
 * @description
 * # PeopleCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('PeopleCtrl', function ($scope, SwapiFactory) {
    $scope.data = [];
    $scope.progress = 0;
    function getPeople(url) {
        SwapiFactory.getAll(url)
            .then(function (res) {
                res.data.results.forEach(function (item) {
                    $scope.data.push(item);
                    $scope.progress = $scope.data.length / res.data.count * 100;
                });
                if (res.data.next) {
                    getPeople(res.data.next);
                }
            }, function (err) {
                console.error(err);
            });
    }

    getPeople('http://swapi.co/api/people');

  });
