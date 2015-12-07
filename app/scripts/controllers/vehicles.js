'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:VehiclesCtrl
 * @description
 * # VehiclesCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('VehiclesCtrl', function ($scope, SwapiFactory) {
    $scope.vehicles = [];
    $scope.progress = 0;
    function getVehicles(url) {
        SwapiFactory.getAll(url)
            .then(function (res) {
                var counter = res.data.count;
                res.data.results.forEach(function (item) {
                    item.id = item.url.match(/\d+/)[0];
                    $scope.vehicles.push(item);
                    $scope.progress = $scope.vehicles.length / counter * 100;
                });
                if (res.data.next) {
                    getVehicles(res.data.next);
                }
            }, function (err) {
                console.error(err);
            });
    }
    getVehicles('http://swapi.co/api/vehicles');
  });
