"use strict";

angular.module('myApp', []);

angular.module('myApp').run(function ($rootScope) {

    $rootScope.userModel = {
        name: 'John Smith',
        age: 33
    };

    $rootScope.sayHello = function () {
        return 'Hello from AngularJS root scope.';
    }
});

angular.module('myApp').controller('MainController', ['$scope', function ($scope) {

    $scope.userModel = {
        name: 'Jane Doe',
        age: 22
    };

    $scope.sayHello = function () {
        return 'Hello from AngularJS child scope.';
    }

}]);