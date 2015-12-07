'use strict';

/**
 * @ngdoc overview
 * @name starWarsApp
 * @description
 * # starWarsApp
 *
 * Main module of the application.
 */
angular
  .module('starWarsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/people', {
        templateUrl: 'views/people.html',
        controller: 'PeopleCtrl'
      })
      .when('/people/:id', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl'
      })
      .when('/films', {
        templateUrl: 'views/films.html',
        controller: 'FilmsCtrl'
      })
      .when('/films/:id', {
        templateUrl: 'views/film.html',
        controller: 'FilmCtrl'
      })
      .when('/planets', {
        templateUrl: 'views/planets.html',
        controller: 'PlanetsCtrl'
      })
      .when('/planets/:id', {
        templateUrl: 'views/planet.html',
        controller: 'PlanetCtrl'
      })
      .when('/starships', {
        templateUrl: 'views/starships.html',
        controller: 'StarshipsCtrl'
      })
      .when('/starships/:id', {
        templateUrl: 'views/starship.html',
        controller: 'StarshipCtrl'
      })
      .when('/vehicles', {
        templateUrl: 'views/vehicles.html',
        controller: 'VehiclesCtrl'
      })
      .when('/vehicles/:id', {
        templateUrl: 'views/vehicle.html',
        controller: 'VehicleCtrl'
      })
      .when('/species', {
        templateUrl: 'views/species.html',
        controller: 'SpeciesCtrl'
      })
      .when('/species/:id', {
        templateUrl: 'views/spec.html',
        controller: 'SpecCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
