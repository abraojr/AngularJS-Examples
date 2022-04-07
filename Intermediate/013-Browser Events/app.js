"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstRollover', function () {

    return {
        scope: {
            label: '@'
        },
        templateUrl: './templates/test-rollover.html',
        replace: true,
        link: function (scope, elem, attrs) {

            var originalColor = elem.css('background-color');

            elem.bind('mouseover', function () {
                elem.css('background-color', attrs.activeColor);
            });

            elem.bind('mouseout', function () {
                elem.css('background-color', originalColor)
            });
        }
    };
});

angular.module('myApp').controller('MainController', [function () {

}]);