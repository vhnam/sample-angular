(function() {
    'use strict';

    angular.module('data-directive', ['monospaced.elastic'])

        // Reverse timeline when insert a status
        .filter('reverse', function() {
            return function(items) {
                return items.slice().reverse();
            };
        })

        // Process paragraph
        .filter('paragraph', function() {
            return function(content) {
                var paragraph = content.split('\n'),
                    newContent  = '';

                paragraph.forEach(function(text) {
                    newContent += '<p>' + text + '</p>';
                })

                return newContent;
            }
        })

        /**
         * Binding unsafe HTML
         *
         * @author wickY26
         * @link http://stackoverflow.com/users/3324474/wicky26
         */
        .directive('bindUnsafeHtml', ['$compile', function ($compile) {
            return function(scope, element, attrs) {
                scope.$watch(
                    function(scope) {
                        // watch the 'bindUnsafeHtml' expression for changes
                        return scope.$eval(attrs.bindUnsafeHtml);
                    },
                    function(value) {
                        // when the 'bindUnsafeHtml' expression changes
                        // assign it into the current DOM
                        element.html(value);

                        // compile the new DOM and link it to the current
                        // scope.
                        // NOTE: we only compile .childNodes so that
                        // we don't get into infinite loop compiling ourselves
                        $compile(element.contents())(scope);
                    }
                );
            };
        }])

        // Status template
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

        // Timeline Controller
        .controller('TimelineController', ['$scope', function($scope) {

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