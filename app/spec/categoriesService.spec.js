
describe('emoji categories service tests', function () {
    /**
     *
     */


    beforeEach(function (done) {
        var self = this;
        
        module('emoji-support', function ($provide) {
           
          });
        inject(function (_categoriesService_ , _$window_) {
            self.categoriesService = _categoriesService_;
            $window = _$window_;
        });

        done();
    });

    it('should initialise', function(){


   
    })
  
});