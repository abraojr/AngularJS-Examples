var $controller;

describe('TestMainController', function () {

    beforeEach(module('myApp'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_
    }));

    it('should return the square of the value provided', function () {
        var controller = $controller('MainController', { $scope: {} });
        controller.calculateSquare(8);
        expect(controller.result).toEqual(64);
    });
});