"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('ParentController', ['$scope', function ($scope) {

    // $scope.name = 'John Smith';

    $scope.model = {
        name: 'John Smith'
    };

}]);

angular.module('myApp').controller('ChildController', ['$scope', function ($scope) {

}]);