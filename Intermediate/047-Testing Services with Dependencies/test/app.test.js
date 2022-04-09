describe('UserService', function () {

    var UserService;
    var MockRandomNameService;

    beforeEach(module('myApp'));

    beforeEach(function () {
        MockRandomNameService = jasmine.createSpyObj('mySpy', ['getFirstName', 'getLastName']);
        MockRandomNameService.getFirstName.and.returnValue('Jane');
        MockRandomNameService.getLastName.and.returnValue('Doe');

        module(function ($provide) {
            $provide.value('RandomNameService', MockRandomNameService);
        });
    });

    beforeEach(inject(function (_UserService_) {
        UserService = _UserService_;
    }));

    it('should return a full name', function () {
        expect(UserService.getFullName()).toEqual('Jane Doe');
    });
});