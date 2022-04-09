"use strict";

angular.module('myApp', []);

angular.module('myApp').service('CalculatorService', function () {

    this.add = function (value1, value2) { return parseInt(value1) + parseInt(value2) }
    this.subtract = function (value1, value2) { return parseInt(value1) - parseInt(value2) }
    this.divide = function (value1, value2) { return parseInt(value1) / parseInt(value2) }
    this.multiply = function (value1, value2) { return parseInt(value1) * parseInt(value2) }
});

angular.module('myApp').controller('MainController', ['CalculatorService', function (CalculatorService) {

    this.value1 = 0;
    this.value2 = 0;

    this.add = function (v1, v2) {
        this.result = CalculatorService.add(v1, v2);
    };

    this.subtract = function (v1, v2) {
        this.result = CalculatorService.subtract(v1, v2);
    };

    this.divide = function (v1, v2) {
        this.result = CalculatorService.divide(v1, v2);
    };

    this.multiply = function (v1, v2) {
        this.result = CalculatorService.multiply(v1, v2);
    };

}]);