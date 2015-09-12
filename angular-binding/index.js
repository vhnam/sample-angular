(function() {
    'use strict';

    angular.module('data-binding', [])

        // Management Controller
        .controller('ManagementController', ['$scope', function ($scope) {

            // Initial
            $scope.artists = [
                { 'name': 'Louis Armstrong', 'instrument': 'Trumpet' },
                { 'name': 'Kenny G', 'instrument': 'Saxophone' },
                { 'name': 'Lucia Micarelli', 'instrument': 'Violin' }
            ];
        }])

        // Form Controller
        .controller('FormController', ['$scope', function($scope) {

            // Insert an artist
            $scope.insertArtist = function() {
                // create new artist
                var artist = {
                    'name': $scope.artist,
                    'instrument': $scope.instrument
                }

                // Push into list
                $scope.artists.push(artist);

                // Clear content
                $scope.artist = '';
                $scope.instrument = '';
            };
        }])

        // List Controller
        .controller('ListController', ['$scope', function ($scope) {

            // Remove an artist
            $scope.removeArtist = function(index) {
                $scope.artists.splice(index, 1);
            }
        }])
    ;
})();