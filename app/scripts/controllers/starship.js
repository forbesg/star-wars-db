'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
      .controller('StarshipCtrl', function ($scope, $routeParams, SwapiFactory) {
        $scope.finished = false;
        var id = $routeParams.id;
        //$http.get('http://swapi.co/api/starships/' + id, {cache: true})
        SwapiFactory.getOne('http://swapi.co/api/starships/', id)
            .then(function (response) {
                $scope.starship = response.data;
                $scope.starship.id = response.data.url.match(/\d+/)[0];
                $scope.films = [];
                $scope.pilots = [];
                //get names of films
                response.data.films.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                episode_id: res.data.episode_id,
                                title: res.data.title,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            console.log(obj);
                            $scope.films.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                response.data.pilots.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                name: res.data.name,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            $scope.pilots.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                $scope.finished = true;
            }, function (error) {
                console.log(error);
            });
    });