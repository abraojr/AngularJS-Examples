"use strict";

angular.module('myApp', []);

angular.module('myApp').controller('MainController', [function () {

    this.inputValue = null;
    this.result = null;

    this.calculateSquare = function (value) {
        this.inputValue = value;
        this.result = value * value;
    };

}]);