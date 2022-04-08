"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', function ($q, $timeout) {

    var usersSync = [
        { name: 'John Smith', id: 12543 },
        { name: 'Jane Doe', id: 45546 },
        { name: 'Bob Johnson', id: 78659 }
    ];


    var usersAsync = [
        { name: 'Bill Anderson', id: 434 },
        { name: 'Mary Poe', id: 5554 },
        { name: 'Michael Scott', id: 756659 }
    ];

    this.getUsersAsyncBad = function () {
        $timeout(function () {
            return usersAsync;
        }, 3000);
    };

    this.getUsersAsync = function (success) {

        var deferred = $q.defer();

        $timeout(function () {
            if (success) {
                deferred.resolve(usersAsync);
            } else {
                deferred.reject(new Error('Some error occurred!'));
            }
        }, 3000);

        return deferred.promise;
    };

    this.getUsersSync = function () {
        return usersSync;
    };

});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    var vm = this;
    vm.model = AppModel;
    vm.users = [];

    vm.getUsersSync = function () {
        vm.users = vm.model.getUsersSync();
    };

    vm.getUsersAsyncBad = function () {
        vm.users = vm.model.getUsersAsyncBad();
    };

    vm.getUsersAsync = function (success) {
        vm.model.getUsersAsync(success)
            .then(function (result) {
                vm.users = result;
            },
                function (error) {
                    console.log(error);
                });
    };

}]);