"use strict";

angular.module('myApp', []);

angular.module('myApp').service('CustomService', function () {

    var _data = 'xyz123';

    this.getData = function () {
        return _data;
    }
});

angular.module('myApp').controller('MainController', ['CustomService', function (CustomService) {


    this.getData = function () {
        this.data = CustomService.getData();
    };

}]);