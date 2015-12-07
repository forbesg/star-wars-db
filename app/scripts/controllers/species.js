'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:SpeciesCtrl
 * @description
 * # SpeciesCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('SpeciesCtrl', function ($scope, SwapiFactory) {
    $scope.species = [];
    $scope.progress = 0;
    function getSpecies(url) {
        SwapiFactory.getAll(url)
            .then(function (res) {
                res.data.results.forEach(function (item) {
                    item.id = item.url.match(/\d+/)[0];
                    item.imageId = item.people[0].match(/\d+/)[0];
                    $scope.species.push(item);
                    $scope.progress = $scope.species.length / res.data.count * 100;
                });
                if (res.data.next) {
                    getSpecies(res.data.next);
                }
            }, function (err) {
                console.error(err);
            });
    }
    getSpecies('http://swapi.co/api/species');
  });
