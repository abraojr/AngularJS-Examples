describe('SimpleDirective', function () {

    var myElement;

    beforeEach(module('myApp'));

    beforeEach(inject(function ($compile) {

        myElement = angular.element('<tst-simple-directive></tst-simple-directive>');
        $compile(myElement);
    }));

    it('should create a DOM node with template text correctly', function () {
        expect(myElement.text()).toContain('My simple directive');
    });
});