"use strict";

angular.module('myApp', ['ngResource']);

angular.module('myApp').factory('User', function ($resource) {

    return $resource('pathAPI/:id', { id: '@id' });
});

angular.module('myApp').controller('MainController', ['User', function (User) {

    var vm = this;
    vm.users = [];
    vm.selectedUser = null;

    this.getUsers = function () {
        vm.users = User.query();
    };

    this.getUser = function (id) {
        vm.selectedUser = User.get({ id: id });
    };

    this.addUser = function (name) {
        var user = new User({ name: name });
        user.$save(function (newUser, putResponseHeader) {
            vm.selectedUser = newUser;
        });
    };

    this.deleteUser = function (id) {
        vm.selectedUser = User.delete({ id: id });
    };

}]);