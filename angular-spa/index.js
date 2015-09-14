(function() {
    'use strict';

    angular.module('data-spa', [])
        .config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'introduction.html'
            }).
            otherwise({
                redirectTo: '/'
            });
        }])
    ;
})();