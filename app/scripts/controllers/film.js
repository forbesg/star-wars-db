'use strict';
angular.module('starWarsApp')
.controller('FilmCtrl', function ($scope, $routeParams, SwapiFactory) {
    var filmId = $routeParams.id;
    $scope.finished = false;
    $scope.characters = [];
    $scope.planets = [];
    $scope.starships = [];
    $scope.vehicles = [];
    SwapiFactory.getOne('http://swapi.co/api/films/', filmId)
        .then(function (res) {
            $scope.film = res.data;
            res.data.characters.forEach(function (item) {
                SwapiFactory.getAll(item)
                    .then(function (res) {
                        res.data.id = res.data.url.match(/\d+/)[0];
                        $scope.characters.push(res.data);
                    }, function (err) {
                        console.error(err);
                    });
            });
            res.data.planets.forEach(function (item) {
                SwapiFactory.getAll(item)
                    .then(function (res) {
                        res.data.id = res.data.url.match(/\d+/)[0];
                        $scope.planets.push(res.data);
                    }, function (err) {
                        console.error(err);
                    });
            });

            $scope.finished = true;
        }, function (err) {
            console.error(err);
        });
});
