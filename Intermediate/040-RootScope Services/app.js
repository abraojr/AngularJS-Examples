"use strict";

angular.module('myApp', []);

angular.module('myApp').run(function ($rootScope) {

    $rootScope.baseValue = 'This is saved on the top-level root scope.';
    $rootScope.sayHello = function () {
        alert('Hello, from AngularJS.');
    };
});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

}]);