'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:PlanetsCtrl
 * @description
 * # PlanetsCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('PlanetsCtrl', function ($scope, SwapiFactory) {
    $scope.planets = [];
    $scope.progress = 0;
    function getPlanets(url) {
        SwapiFactory.getAll(url)
            .then(function (res) {
                res.data.results.forEach(function (item) {
                    item.id = item.url.match(/\d+/)[0];
                    $scope.planets.push(item);
                    $scope.progress = $scope.planets.length / res.data.count * 100;
                });
                if (res.data.next) {
                    getPlanets(res.data.next);
                }
            }, function (err) {
                console.error(err);
            });
    }
    getPlanets('http://swapi.co/api/planets');
  });
