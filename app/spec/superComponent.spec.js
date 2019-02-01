describe('emoji text area component', function () {

    var emojiService = {
        emojiList: [{
            "name": "ear: dark skin tone",
            "category": "people",
            "shortname": ":ear_tone5:",
            "keyWords": [
              "body",
              "dark skin tone"
            ],
            "output": "1f442-1f3ff"
          },
          {
            "name": "nose",
            "category": "people",
            "shortname": ":nose:",
            "keyWords": [
              "body"
            ],
            "output": "1f443"
          },
          {
            "name": "nose: light skin tone",
            "category": "people",
            "shortname": ":nose_tone1:",
            "keyWords": [
              "body",
              "light skin tone"
            ],
            "output": "1f443-1f3fb"
          },
          {
            "name": "nose: medium-light skin tone",
            "category": "people",
            "shortname": ":nose_tone2:",
            "keyWords": [
              "body",
              "medium-light skin tone"
            ],
            "output": "1f443-1f3fc"
          },
          {
            "name": "nose: medium skin tone",
            "category": "people",
            "shortname": ":nose_tone3:",
            "keyWords": [
              "body",
              "medium skin tone"
            ],
            "output": "1f443-1f3fd"
          },
          {
            "name": "nose: medium-dark skin tone",
            "category": "people",
            "shortname": ":nose_tone4:",
            "keyWords": [
              "body",
              "medium-dark skin tone"
            ],
            "output": "1f443-1f3fe"
          },
          {
            "name": "nose: dark skin tone",
            "category": "people",
            "shortname": ":nose_tone5:",
            "keyWords": [
              "body",
              "dark skin tone"
            ],
            "output": "1f443-1f3ff"
          },
          {
            "name": "footprints",
            "category": "people",
            "shortname": ":footprints:",
            "keyWords": [
              "clothing",
              "footprint",
              "print"
            ],
            "output": "1f463"
          },
          {
            "name": "eye",
            "category": "people",
            "shortname": ":eye:",
            "keyWords": [
              "body"
            ],
            "output": "1f441"
          },
          {
            "name": "light bulb",
            "category": "objects",
            "shortname": ":bulb:",
            "keyWords": [
              "bulb",
              "comic",
              "electric",
              "idea",
              "light"
            ],
            "output": "1f4a1"
          },{
            "name": "bug",
            "category": "nature",
            "shortname": ":bug:",
            "keyWords": [
              "insect"
            ],
            "output": "1f41b"
          },{
            "name": "butterfly",
            "category": "nature",
            "shortname": ":butterfly:",
            "keyWords": [
              "butterfly",
              "insect",
              "pretty"
            ],
            "output": "1f98b"
          },{
            "name": "burrito",
            "category": "food",
            "shortname": ":burrito:",
            "keyWords": [
              "mexican",
              "wrap"
            ],
            "output": "1f32f"
          },],
        convert: function (unicode) {
            if(unicode.indexOf("-") > -1) {
                var parts = [];
                var s = unicode.split('-');
                for(var i = 0; i < s.length; i++) {
                    var part = parseInt(s[i], 16);
                    if (part >= 0x10000 && part <= 0x10FFFF) {
                        var hi = Math.floor((part - 0x10000) / 0x400) + 0xD800;
                        var lo = ((part - 0x10000) % 0x400) + 0xDC00;
                        part = (String.fromCharCode(hi) + String.fromCharCode(lo));
                    }
                    else {
                        part = String.fromCharCode(part);
                    }
                    parts.push(part);
                }
                return parts.join('');
            }
            else {
                var s = parseInt(unicode, 16);
                if (s >= 0x10000 && s <= 0x10FFFF) {
                    var hi = Math.floor((s - 0x10000) / 0x400) + 0xD800;
                    var lo = ((s - 0x10000) % 0x400) + 0xDC00;
                    return (String.fromCharCode(hi) + String.fromCharCode(lo));
                }
                else {
                    return String.fromCharCode(s);
                }
            }
        }
    };

   

    var $element = {
        find: function(){
           
            return {
                get: function(){
                    return input;
                
                }
            }
        },
        
    }

    var picker = {
        style: {bottom: 34}
    }

    var input = {
        style: {height : 54},
        value: '',
        focus: function(){

        },
        scrollTop : 0
    }

    beforeEach(module('emoji-support', function ($provide) {
        $provide.value('emojiService', emojiService);

    }));

    var controller;
    beforeEach(inject(function ($componentController, _$rootScope_) {
        $rootScope = _$rootScope_;
        // this.$scope = this.$rootScope.$new();
        controller = $componentController('emojiTextArea',{
            $element: $element,
            emojiService: emojiService,
            // $scope: $scope
        }, {
            useAutocomplete: true,
            usePicker: true,
            pickerPlacement: 'top',
            onKeydown: function () { },
            onKeyup: function () { },
            onKeypress: function () { },
            model: 'test :nose'
        });
        // controller.$onInit();
    }));


    beforeEach(function(){

        jasmine.getFixtures().fixturesPath = 'base/app/spec/javascripts/fixtures/';
        loadFixtures('fixture.html');
        
    })

    it("Should initialise", function () {
        // controller.$onInit();
        expect(controller.model).toBeDefined();
        expect(controller.model).toBe('test :nose');
        expect(controller.useAutocomplete).toBeTruthy();
        expect(controller.usePicker).toBeTruthy();
        
        controller.$onInit();
        expect($('textarea')).toExist();
        expect($('div.picking-emojis')).toExist();
        // expect(controller.input).toBeDefined();
        // expect($controller.picker).toBeDefined();

    })

    it('should searching for element when start typing', function(){
        controller.$onInit();

        // spyOn(controller, "searchForEmojis" ).and.callThrough();

        var spyEvent = spyOnEvent('textarea', 'keyup');
        $('textarea').keyup();
        expect('keyup').toHaveBeenTriggeredOn('textarea');
        expect(spyEvent).toHaveBeenTriggered();
        $rootScope.$digest();

        // expect(controller.searchForEmojis).toHaveBeenCalled();
        // done();
    });

    it('should match regex', function(){
        var re = new RegExp(/\:[A-Za-z0-9\_\:]+/g);
        controller.model = "test :nose message :bug";
        var myElement = controller.model.match(re);
        expect(controller.model).toMatch(re);
        expect(myElement.length).toBe(2);

        controller.model = "test : nose message";
        expect(controller.model).not.toMatch(re);


        controller.model = "test :m nose message";
        expect(controller.model).toMatch(re);
    });

    it('should search for good emojis', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 10}
        }

        controller.$onInit();

        controller.model = "test :nose";

        controller.searchForEmojis(event);

        expect(controller.emojisToDisplay.length).toBe(6);
        expect(controller.toDisplay).toBeTruthy();
        
    })
    it('should false while searching', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 9}
        }

        controller.$onInit();
        controller.model = "test :nose";
        controller.searchForEmojis(event);
        expect(controller.toDisplay).toBeFalsy();
    })

    it('should display emoji when is matched with the whole shortcut', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 11}
        }
        controller.$onInit();
        controller.model = "test :nose:";
        input.value = "test :nose:";
        controller.searchForEmojis(event);
        
        expect(controller.toDisplay).toBeFalsy();
        expect(controller.model).toBe('test 👃 ');

    })
    it('should pick emoji when hit enter', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 10},
            shiftKey: false,
            preventDefault : function(){}
        }
        var keyPress = 13;
        controller.$onInit();
        controller.model = "test :nose";
        controller.searchForEmojis(event);
        expect(controller.emojisToDisplay.length).toBe(6);
        expect(controller.toDisplay).toBeTruthy();

        controller.keyDown(keyPress);
        event.keyCode = 13;
        controller.preventEnterOnOpen(event);
        expect(controller.toDisplay).toBeFalsy();
        expect(controller.model).toBe('test 👃 ');

    })
    it('should change current emoji when tab or arrows and display current one', function(){
        var event = {
            keyCode: 9,
            target: {selectionStart : 8},
            preventDefault : function(){},
            stopPropagation : function(){}
        }
        var keyPress = 9;
        controller.$onInit();
        controller.model = "test :bu";
        input.value = "test :bu";
        controller.searchForEmojis(event);
        expect(controller.emojisToDisplay.length).toBe(4);
        expect(controller.toDisplay).toBeTruthy();

        controller.keyDown(keyPress);
        controller.stopEvent(event);
        expect(controller.toDisplay).toBeTruthy();
        expect(controller.model).toBe('test 🐛 ');
    })
    it('should change current emoji when hit arrows and display current one', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 8}
        }
        
        controller.$onInit();
        controller.model = "test :bu";
        input.value = "test :bu";
        controller.searchForEmojis(event);
        expect(controller.emojisToDisplay.length).toBe(4);
        expect(controller.toDisplay).toBeTruthy();

        var keyPress = 39;
        controller.keyDown(keyPress);
        controller.keyDown(keyPress);
        controller.keyDown(keyPress);
        expect(controller.toDisplay).toBeTruthy();
        expect(controller.model).toBe('test 🌯 ');

        var keyPress = 37;
        controller.keyDown(keyPress);
        expect(controller.toDisplay).toBeTruthy();
        expect(controller.model).toBe('test 🦋 ');
    })
    
    it('should close the window when escape', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 10}
        }
        var keyPress = 27;
        controller.$onInit();
        controller.model = "test :nose";
        controller.searchForEmojis(event);
        expect(controller.emojisToDisplay.length).toBe(6);
        expect(controller.toDisplay).toBeTruthy();

        controller.keyDown(keyPress);
        expect(controller.toDisplay).toBeFalsy();
        expect(controller.model).toBe('test :nose');
    })
    it('should pick emoji when mouseenter', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 8}
        }
        
        controller.$onInit();
        controller.model = "test :bu";
        input.value = "test :bu";
        controller.searchForEmojis(event);
        expect(controller.emojisToDisplay.length).toBe(4);
        expect(controller.toDisplay).toBeTruthy();

        var emojiIndex = 2;
        controller.pickCurrent(emojiIndex);
        expect(controller.toDisplay).toBeTruthy();
        expect(controller.model).toBe('test 🦋 ');

        controller.focusOnInput();
        expect(controller.currentIndex).toBe(0);
    })    

    it('should insert emoji to input', function(){
        controller.$onInit();
        input.selectionStart = 6;
        
        input.value = "tesst ";
        emoji = '🦋';
        controller.cb(emoji);

        expect(input.value).toBe('tesst 🦋');

    })

    it('should close window when click outside', function(){
        var event = {
            keyCode: 69,
            target: {selectionStart : 10}
        }
        var spyEvent = spyOnEvent(window, 'click');
        controller.$onInit();
        controller.model = "test :nose";
        controller.searchForEmojis(event);

        expect(controller.emojisToDisplay.length).toBe(6);
        expect(controller.toDisplay).toBeTruthy();
        
        $(window).click();
        expect('click').toHaveBeenTriggeredOn(window);
        expect(spyEvent).toHaveBeenTriggered();
        // expect(controller.toDisplay).toBeFalsy();

    })
});