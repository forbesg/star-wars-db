'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
      .controller('PlanetCtrl', function ($scope, $routeParams, SwapiFactory) {
        $scope.finished = false;
        var id = $routeParams.id;
        SwapiFactory.getOne('http://swapi.co/api/planets/', id)
            .then(function (response) {
                $scope.planet = response.data;
                $scope.planet.id = response.data.url.match(/\d+/)[0];
                $scope.films = [];
                $scope.residents = [];
                //get names of films
                response.data.films.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                episode_id: res.data.episode_id,
                                title: res.data.title,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            $scope.films.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                response.data.residents.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                name: res.data.name,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            $scope.residents.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                $scope.finished = true;
            }, function (error) {
                console.log(error);
            });
    });