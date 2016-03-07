'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:FilmsCtrl
 * @description
 * # FilmsCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
  .controller('FilmsCtrl', function ($scope, SwapiFactory) {
    $scope.films = [];
    //$http.get('http://swapi.co/api/films')
    SwapiFactory.getAll('http://swapi.co/api/films')
        .then(function (res) {
            res.data.results.forEach(function (item) {
                item.id = item.url.match(/\d+/)[0];
                $scope.films.push(item);
            });
        }, function (err) {
            console.log(err);
        });
  });
