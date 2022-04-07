"use strict";

angular.module('myApp', []);

angular.module('myApp').factory('$exceptionHandler', function () {
    return function (exception, cause) {
        alert('Oops, an error ocurred!');
        console.log('Oops an error occurred!');
    };

});

angular.module('myApp').controller('MainController', [function () {

    this.throwError = function () {
        throw new Error('This is a sample exception.');
    }
}]);