"use strict";

angular.module('myApp', []);

angular.module('myApp').service('AppModel', function ($http, $q) {

    this.getState = function (abbreviation) {

        var defer = $q.defer();

        $http.get(`https://gist.githubusercontent.com/abraojr/a0feb9b10a64be90776d99d5b024b602/raw/27dfc4c679625711f548f25a94327d7af1a2bed2/statesUS.json//api/users/${abbreviation}`)
            .then(function (response) {
                defer.resolve(response.data);
            }.bind(this),
                function (response) {
                    defer.reject({ error: response.data, status: response.status });
                });

        return defer.promise;
    };

    this.getSomeStatesAtOnce = function (states) {

        var promises = [];
        states.forEach(function (state) {
            var promise = this.getState(state);
            promises.push(promise);
        }.bind(this));

        return $q.all(promises);
    }
});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    var vm = this;

    vm.model = AppModel;
    vm.states = [];

    vm.getState = function (abbreviation) {
        vm.model.getState(abbreviation)
            .then(function (data) {
                vm.states.push(data);
            });
    };

    vm.getSomeStates = function () {
        vm.getState('SD');
        vm.getState('NY');
        vm.getState('CA');
        vm.getState('NJ');
    };

    vm.getSomeStatesAtOnce = function () {
        vm.model.getSomeStatesAtOnce(['TX', 'MD', 'GA', 'ND'])
            .then(function (results) {
                vm.states = vm.states.concat(results);
            });
    };

}]);