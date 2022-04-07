"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstUserView', function () {

    return {
        scope: {
            item: '='
        },
        transclude: true,
        templateUrl: './templates/user.html',
        restrict: 'AE'
    };

});

angular.module('myApp').controller('MainController', [function () {

    this.user = {
        firstName: 'Jane',
        lastName: 'Smith'
    }

    this.helloMessage = 'Hello, from Angular.js.';
}]);