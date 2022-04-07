"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.now = new Date();

    this.user = {
        name: 'John Doe',
        birthday: 257925600000,
        lastLogin: 1437705300000
    };

}]);