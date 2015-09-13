(function() {
    'use strict';

    angular.module('data-directive', [])

        .directive('status', function() {
            return {
                restrict: 'AE',
                scope: {
                    time: '@',
                    paragraph: '@',
                    image: '@'
                },
                templateUrl: 'status.html'
            }
        })

        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        })

        .controller('TimelineController', ['$scope', function($scope) {

            // Autosize - https://github.com/jackmoore/autosize/
            autosize(document.querySelector('#status-content'));

            // Initial
            $scope.timeline = [];

            // Post status
            $scope.postStatus = function() {
                var status = {
                    time: (new Date()).toLocaleString(),
                    paragraph: $scope.paragraph,
                    image: $scope.image
                }
                $scope.timeline.push(status);

                $scope.paragraph = null;
                $scope.image = null;
            }
        }])
    ;
})();