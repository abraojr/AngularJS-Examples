"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', function () {

    this.user = {
        name: 'John Smith'
    };

    this.sayHello = function () {
        alert('Hello from AngularJS.');
    };

});

angular.module('myApp').service('AppModel', function () {

    this.user = {
        name: 'John Smith'
    };

    this.sayHello = function () {
        alert('Hello from AngularJS.');
    };

});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    this.model = AppModel;
}]);

angular.module('myApp').controller('FirstController', ['AppModel', function (AppModel) {

    this.model = AppModel;

    this.user = {
        name: 'Michael Scott'
    }
}]);

angular.module('myApp').controller('SecondController', ['AppModel', function (AppModel) {

    this.model = AppModel;

    this.user = {
        name: 'Jane Doe'
    }
}]);