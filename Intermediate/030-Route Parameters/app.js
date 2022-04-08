"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/product/:productId', {
            templateUrl: './views/product.html',
            controller: 'ProductController',
            controllerAs: 'vm'
        })
        .when('/welcome', {
            templateUrl: '../029-Routing/views/welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'vm'
        });
}]);

angular.module('myApp').controller('ProductController', ['$routeParams', function ($routeParams) {

    this.productId = $routeParams.productId;
    this.details = 'Hello, from ProductController.';
}]);

angular.module('myApp').controller('WelcomeController', [function () {

    this.details = 'Hello, from WelcomeController.';
}]);