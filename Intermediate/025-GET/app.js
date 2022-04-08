"use strict";

angular.module('myApp', []);


angular.module('myApp').service('AppModel', function ($http) {

    this.states = [{ name: 'Minnesota', abbreviation: 'MN' }, { name: 'Wisconsin', abbreviation: 'WI' }];

    this.getStates = function () {

        $http.get('https://gist.githubusercontent.com/abraojr/a0feb9b10a64be90776d99d5b024b602/raw/27dfc4c679625711f548f25a94327d7af1a2bed2/statesUS.json')
            .then(function (response) {
                this.states = response.data;
            }.bind(this),
                function (response) {
                    console.log(response.data);
                });
    }
});

angular.module('myApp').controller('MainController', ['AppModel', function (AppModel) {

    this.model = AppModel;
}]);