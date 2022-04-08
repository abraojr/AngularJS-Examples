var CustomService;

describe('CustomService', function () {

    beforeEach(module('myApp'));

    beforeEach(inject(function (_CustomService_) {
        CustomService = _CustomService_

    }));

    it('should return test data', function () {
        expect(CustomService.getData()).toEqual('xyz123');
    });
});