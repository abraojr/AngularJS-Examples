"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').config(['$routeProvider', function ($routeProvider) {

    $routeProvider
        .when('/about', {
            templateUrl: './views/about.html',
            controller: 'AboutController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: './views/contact.html',
            controller: 'ContactController',
            controllerAs: 'vm'
        })
        .when('/welcome', {
            templateUrl: './views/welcome.html',
            controller: 'WelcomeController',
            controllerAs: 'vm'
        })
}]);

angular.module('myApp').controller('AboutController', [function () {

    this.details = 'Hello, from AboutController.';
}]);

angular.module('myApp').controller('ContactController', [function () {

    this.details = 'Hello, from ContactController.';
}]);

angular.module('myApp').controller('WelcomeController', [function () {

    this.details = 'Hello, from WelcomeController.';
}]);