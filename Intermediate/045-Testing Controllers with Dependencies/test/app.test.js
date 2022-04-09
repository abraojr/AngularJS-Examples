describe('TestMainController', function () {

    var $controller;
    var mockCalculatorService;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_$controller_) {
        $controller = _$controller_
        mockCalculatorService = jasmine.createSpyObj('mySpy', ['add', 'subtract', 'divide', 'multiply']);
        mockCalculatorService.add.and.returnValue(5);
        mockCalculatorService.subtract.and.returnValue(1);
        mockCalculatorService.divide.and.returnValue(1.5);
        mockCalculatorService.multiply.and.returnValue(6);
    }));

    it('should add 3 and 2 and get 5', function () {
        var controller = $controller('MainController', { $scope: {}, CalculatorService: mockCalculatorService });
        controller.add(3, 2);
        expect(controller.result).toEqual(5);
    });

    it('should subtract 3 and 2 and get 1', function () {
        var controller = $controller('MainController', { $scope: {}, CalculatorService: mockCalculatorService });
        controller.subtract(3, 2);
        expect(controller.result).toEqual(1);
    });

    it('should divide 3 and 2 and get 1.5', function () {
        var controller = $controller('MainController', { $scope: {}, CalculatorService: mockCalculatorService });
        controller.divide(3, 2);
        expect(controller.result).toEqual(1.5);
    });

    it('should multiply 3 and 2 and get 6', function () {
        var controller = $controller('MainController', { $scope: {}, CalculatorService: mockCalculatorService });
        controller.multiply(3, 2);
        expect(controller.result).toEqual(6);
    });
});