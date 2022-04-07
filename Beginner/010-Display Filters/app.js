"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.user = {
        firstName: 'John',
        lastName: 'Smith',
        accountType: 'CHEKING',
        balance: 1349.2
    };

}]);