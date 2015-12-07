'use-strict';

angular.module('starWarsApp')
    .directive('lightCard', function () {
        return {
            restrict: 'E',
            scope: { 
                data: "=",
                category: "@",
                url: "@"
                   },
            templateUrl: 'views/templates/light-card.tpl.html'
        }
    });