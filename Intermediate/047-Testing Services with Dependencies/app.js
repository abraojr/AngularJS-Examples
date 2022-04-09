"use strict";

angular.module('myApp', []);

angular.module('myApp').service('RandomNameService', function () {

    var firstNames = ['David', 'John', 'Jane', 'Michael', 'Mary'];
    var lastNames = ['Smith', 'Doe', 'Anderson', 'Johnson', 'Ryan'];

    this.getFirstName = function () {
        var index = Math.floor(Math.random() * firstNames.length);
        return firstNames[index];
    };

    this.getLastName = function () {
        var index = Math.floor(Math.random() * lastNames.length);
        return lastNames[index];
    };

});

angular.module('myApp').service('UserService', function (RandomNameService) {

    this.getFullName = function () {
        return `${RandomNameService.getFirstName()} ${RandomNameService.getLastName()}`;
    };
});

angular.module('myApp').controller('MainController', ['UserService', function (UserService) {

    this.name = '';

    this.getName = function () {
        this.name = UserService.getFullName();
    };

}]);