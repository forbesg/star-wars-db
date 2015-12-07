'use strict';

angular.module('starWarsApp')
    .factory('SwapiFactory', function ($http) {
        return {
            getAll: function (url) {
                return $http.get(url, {cache: true});
            },
            getOne: function (url, id) {
                var fullUrl = url + id;
                return $http.get(fullUrl, {cache: true});
            }
        };    
    });