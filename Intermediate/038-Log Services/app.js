"use strict";

angular.module('myApp', ['ngRoute']);

angular.module('myApp').controller('MainController', ['$log', function ($log) {

    this.logClicked = function (data) {
        $log.log(data);
    };

    this.infoClicked = function (data) {
        $log.info(data);
    };

    this.warnClicked = function (data) {
        $log.warn(data);
    };

    this.errorClicked = function (data) {
        $log.error(data);
    };

    this.debugClicked = function (data) {
        $log.debug(data);
    };

}]);