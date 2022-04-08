"use strict";

angular.module('myApp', []);


angular.module('myApp').service('AppModel', function ($http) {

    this.users = [];

    this.addUser = function (user) {

        $http.post('pathAPi...', user)
            .then(function (response) {
                this.users.push(response.data);
            }.bind(this),
                function (response) {
                    console.log('Error occurred');
                })
    }

});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    this.model = AppModel;
}]);