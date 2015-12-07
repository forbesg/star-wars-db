'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
      .controller('PersonCtrl', function ($scope, $routeParams, SwapiFactory) {
        var id = $routeParams.id;
        $scope.finished = false;
        SwapiFactory.getOne('http://swapi.co/api/people/', id)
            .then(function (response) {
                $scope.person = response.data;
                $scope.person.id = response.data.url.match(/\d+/)[0];
                $scope.films = [];
                $scope.starships = [];
                $scope.vehicles = [];
                $scope.spec = {};
                SwapiFactory.getAll(response.data.species)
                    .then(function (res) {
                        $scope.spec.name = res.data.name;
                        $scope.spec.id = res.data.url.match(/\d+/)[0];
                    }, function (error) {
                        console.log(error);
                    });
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
                response.data.starships.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                name: res.data.name,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            $scope.starships.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                response.data.vehicles.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                name: res.data.name,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            $scope.vehicles.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                $scope.finished = true;
            }, function (error) {
                console.log(error);
            });
    });