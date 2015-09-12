(function() {
    'use strict';

    angular.module('data-filter', [])

        // Filter
        .filter('greeting', function() {
            return function(input) {
                var output = '';

                if (input !== undefined && input !== '') {
                    output = 'Hello, ' + input;
                }

                return output;
            };
        })

        // Form Controller
        .controller('FormController', ['$scope', function($scope) {
            $scope.user = '';
        }])

        // List Controller
        .controller('ListController', ['$scope', function($scope) {
            // Initial
            $scope.artists = [
                { 'name': 'Louis Armstrong', 'instrument': 'Trumpet' },
                { 'name': 'Kenny G', 'instrument': 'Saxophone' },
                { 'name': 'Lucia Micarelli', 'instrument': 'Violin' },
                { 'name': 'Richard Clayderman', 'instrument': 'Piano' },
                { 'name': 'Harry James', 'instrument': 'Trumpet' },
                { 'name': 'Benny Goodman', 'instrument': 'Clarinet' },
                { 'name': 'Buddy Rich', 'instrument': 'Drum' },
                { 'name': 'Stevie Wonder', 'instrument': 'Harmonica' },
                { 'name': 'Wycliffe Gordon', 'instrument': 'Trombone' },
                { 'name': 'Yo-Yo Ma', 'instrument': 'Cello' },
                { 'name': 'Chris Botti', 'instrument': 'Trumpet' },
                { 'name': 'Artie Shaw', 'instrument': 'Clarinet' },
                { 'name': 'Fionnuala Sherry', 'instrument': 'Violin' },
                { 'name': 'Alison Balsom', 'instrument': 'Trumpet' },
                { 'name': 'Gene Krupa', 'instrument': 'Drum' },
                { 'name': 'Benny Golson', 'instrument': 'Saxophone' },
                { 'name': 'Sonny Boy Williamson', 'instrument': 'Harmonica' },
                { 'name': 'John Coltrane', 'instrument': 'Saxophone' },
                { 'name': 'Rolf Løvland', 'instrument': 'Piano' }
            ];
        }])
    ;
})();