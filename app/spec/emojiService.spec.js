
describe('emoji categories service tests', function () {
    /**
     *
     */


    beforeEach(function (done) {
        var self = this;
        
        module('emoji-support', function ($provide) {
           
          });
        inject(function (_emojiService_ , _$window_) {
            self.emojiService = _emojiService_;
            $window = _$window_;
        });

        done();
    });

    it('should initialise', function(){


   
    })
  
    it('should convert code to emoji', function(){
        
        var code = '1f463' 
        var emoji = this.emojiService.convert(code);

        expect(emoji).toBe('👣');

        var code = '1f469-1f3ff-200d-1f692' 
        var emoji = this.emojiService.convert(code);

        expect(emoji).toBe('👩🏿‍🚒');
    })
});