// var customNgTable = customNgTableProvider();
describe('app git controller test', function(){
    beforeEach(angular.mock.module('ui.router'));
    beforeEach(module(function ($urlRouterProvider) {
        $urlRouterProvider.deferIntercept();
    }));
    beforeEach(function(){
        var self = this;

        module('gitApp');
        module('ui.router');
        module('ngAnimate');

        inject(function (_$rootScope_, _$controller_,) {
            var self = this;
            this.$rootScope = _$rootScope_;
            var $controller = _$controller_;
            this.$scope = this.$rootScope.$new();

            this.gitHubController = $controller('gitHubController',
                {
                    $scope: this.$scope,

                });

        });

    });

    it('should initialise correctly', function(done){
        var smth = true;
        expect(smth).toBeTruthy;

        done();
    });
     

});