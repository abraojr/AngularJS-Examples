"use strict";

angular.module('myApp', []);


angular.module('myApp').controller('MainController', [function () {

    this.users = [
        {
            firstName: 'John',
            lastName: 'Smith',
            accountType: 'cheking',
            balance: 1349.2,
            birthday: 257925600000
        },
        {
            firstName: 'Mary',
            lastName: 'Jones',
            accountType: 'cheking',
            balance: 1245.33,
            birthday: 488264400000
        },
        {
            firstName: 'Barry',
            lastName: 'Gold',
            accountType: 'savings',
            balance: 4788.89,
            birthday: -135802800000
        },
        {
            firstName: 'Martha ',
            lastName: 'Anderson',
            accountType: 'cheking',
            balance: 2587.38,
            birthday: 247212000000
        },
        {
            firstName: 'Michael',
            lastName: 'Tom',
            accountType: 'savings',
            balance: 3209.7,
            birthday: 460098000000
        },
    ]

}]);

angular.module('myApp').filter('capitalize', function () {
    return function (value) {
        var result = null;
        var words = value.split(' ');
        words.forEach(function (item) {
            if (result) {
                result += ' ';
            } else {
                result = '';
            }
            result += item.substring(0, 1).toUpperCase() + item.substring(1).toLowerCase();
        });
        return result
    };
});