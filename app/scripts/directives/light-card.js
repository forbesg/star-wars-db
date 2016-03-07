angular.module('starWarsApp')
    .directive('lightCard', function () {
      'use strict';
        return {
            restrict: 'E',
            scope: {
                data: '=',
                category: '@',
                url: '@'
                   },
            templateUrl: 'views/templates/light-card.tpl.html'
        };
    });
