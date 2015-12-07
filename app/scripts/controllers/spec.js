'use strict';

/**
 * @ngdoc function
 * @name starWarsApp.controller:PersonCtrl
 * @description
 * # PersonCtrl
 * Controller of the starWarsApp
 */
angular.module('starWarsApp')
      .controller('SpecCtrl', function ($scope, $routeParams, SwapiFactory) {
        $scope.finished = false;
        var id = $routeParams.id;
        SwapiFactory.getOne('http://swapi.co/api/species/', id)
            .then(function (response) {
                $scope.spec = response.data;
                $scope.spec.id = response.data.url.match(/\d+/)[0];
                $scope.films = [];
                $scope.people = [];
                $scope.homeworld = {};
                SwapiFactory.getAll(response.data.homeworld)
                    .then(function(res) {
                        $scope.homeworld.name = res.data.name;
                        $scope.homeworld.id = res.data.url.match(/\d+/)[0];
                    }, function (err) {
                        console.error(err);
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
            // get names and urls of people
                response.data.people.forEach(function (url) {
                    SwapiFactory.getAll(url)
                        .then(function (res) {
                            var obj = {
                                name: res.data.name,
                                id: res.data.url.match(/\d+/)[0]
                            };
                            $scope.people.push(obj);
                        }, function (error) {
                            console.log(error);
                        });
                });
                $scope.finished = true;
            }, function (error) {
                console.log(error);
            });
    });