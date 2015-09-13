(function() {
    'use strict';

    angular.module('data-directive', [])

        .directive('status', function() {
            return {
                restrict: 'E',
                templateURL: 'status.html'
            }
        })

        .controller('TimelineController', ['$scope', function($scope) {
            // Autosize - https://github.com/jackmoore/autosize/
            autosize(document.querySelector('#status-content'));
        }])
    ;
})();