"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', ['$scope', '$interval', function ($scope, $interval) {

    $scope.randomValue = -999;

    $scope.names = ['David', 'Tim', 'Joe'];

    $scope.qty = 20;
    $scope.cost = 1.99;

    $scope.pWidth = 100;

    $interval(function () {
        $scope.randomValue = Math.round(Math.random() * 1000000);
    }, 2000);
}]);