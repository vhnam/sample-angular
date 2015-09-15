(function() {
    'use strict';

    angular.module('data-spa', ['ngRoute'])

        // Caching template
        .run(['$http', '$templateCache', function($http, $templateCache) {
            $http.get('introduction.html', {
                cache: $templateCache
            });
            $http.get('about.html', {
                cache: $templateCache
            });
        }])

        // Config routing
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'introduction.html'
                }).
                when('/about', {
                    templateUrl: 'about.html'
                }).
                otherwise({
                    redirectTo: '/'
                })
            ;
        }])
    ;
})();