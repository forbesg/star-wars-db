'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:StarshipsCtrl
 * @description
 * # StarshipsCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('StarshipsCtrl', function ($scope, SwapiFactory) {
    $scope.starships = [];
    $scope.progress = 0;
    function getStarships(url) {
        SwapiFactory.getAll(url)
            .then(function (res) {
                var counter = res.data.count;
                res.data.results.forEach(function (item) {
                    item.id = item.url.match(/\d+/)[0];
                    $scope.starships.push(item);
                    $scope.progress = $scope.starships.length / counter * 100;
                });
                if (res.data.next) {
                    getStarships(res.data.next);
                }
            }, function (err) {
                console.error(err);
            });
        }
    getStarships('http://swapi.co/api/starships');
  });
