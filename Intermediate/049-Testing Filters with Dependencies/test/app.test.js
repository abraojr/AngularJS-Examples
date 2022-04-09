describe('TransformFilter', function () {

    var mockTransformService;
    var transformFilter;

    beforeEach(module('myApp'));

    beforeEach(function () {
        mockTransformService = jasmine.createSpyObj('mySpy', ['transform']);
        mockTransformService.transform.and.returnValue('transformed value');

        module(function ($provide) {
            $provide.value('TransformService', mockTransformService);
        });
    });

    it('should transform the value', function () {
        inject(function (transformFilter) {
            expect(transformFilter('This is a test')).toEqual('transformed value');
        });
    });
});