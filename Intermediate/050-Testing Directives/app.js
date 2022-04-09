"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstSimpleDirective', function () {

    return {
        restrict: 'E',
        replace: true,
        template: '<p>My simple directive</p>'
    }

});