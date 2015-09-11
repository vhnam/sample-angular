(function() {
    'use strict';

    // ***** Declare modules *****
    angular.module('data-binding', [])
        .controller('ManagementController', ManagementController)
        .controller('FormController', FormController);

    // ***** Declare injections *****
    ManagementController.$inject = ['$scope'];
    FormController.$inject = ['$scope', '$controller'];

    // Define Management controller
    function ManagementController($scope) {
        // Initial
        $scope.artists = [
            { 'name': 'Louis Armstrong', 'instrument': 'Trumpet' },
            { 'name': 'Kenny G', 'instrument': 'Saxophone' },
            { 'name': 'Lucia Micarelli', 'instrument': 'Violin' }
        ];
    }

    // Define Form controller
    function FormController($scope, $controller) {
        // Declare prototype
        $scope.insertArtist = insertArtist;

        function insertArtist() {
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
    }
})();