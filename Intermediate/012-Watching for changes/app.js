"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstThermometer', function () {

    return {
        scope: {
            temperature: '@'
        },
        templateUrl: './templates/thermometer.html',
        link: function (scope, elem, attrs) {
            attrs.$observe('temperature', function (newValue) {
                var temp = attrs.temperature;

                if (temp < 45) {
                    elem.addClass('freezing');
                    elem.removeClass('normal');
                    elem.removeClass('hot');
                } else if (temp >= 45 && temp <= 85) {
                    elem.removeClass('freezing');
                    elem.addClass('normal');
                    elem.removeClass('hot');
                } else {
                    elem.removeClass('freezing');
                    elem.removeClass('normal');
                    elem.addClass('hot');
                }
            });
        }
    };
});

angular.module('myApp').controller('MainController', [function () {

    this.currentTemperature = 78;
}]);