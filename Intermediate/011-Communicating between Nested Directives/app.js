"use strict";

angular.module('myApp', []);

angular.module('myApp').directive('tstSchoolView', function () {

    return {
        templateUrl: './templates/school.html',
        restrict: 'E',
        transclude: true,
        controller: function ($scope) {

            $scope.students = [];

            this.register = function (name, studentNumber) {
                $scope.students.push({ name: name, studentNumber: studentNumber });
            }
        }
    };

});

angular.module('myApp').directive('tstStudent', function () {

    return {
        restrict: 'E',
        require: '^tstSchoolView',
        templateUrl: './templates/student.html',
        scope: {
            name: '@',
            studentNumber: '@'
        },
        link: function (scope, elem, attrs, schoolController) {
            schoolController.register(scope.name, scope.studentNumber);
        }
    };
});

angular.module('myApp').controller('MainController', [function () {


}]);