describe('DashesFilter', function () {

    var dashesFilter;

    beforeEach(module('myApp'));

    beforeEach(inject(function (_dashesFilter_) {
        dashesFilter = _dashesFilter_;
    }));

    it('should replace spaces with dashes', function () {
        expect(dashesFilter('This is a test')).toEqual('This-is-a-test');
    });
});