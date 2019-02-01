describe('emoji popover component', function () {

    var categoriesService = {
        emojiCategories :
        [{"order":1,"category":"people","category_label":"Smileys & People", "icon": "1f603"},
        {"order":2,"category":"nature","category_label":"Animals & Nature", "icon": "1f435"},
        {"order":3,"category":"food","category_label":"Food & Drink", "icon": "1f354"},
        {"order":4,"category":"activity","category_label":"Activity", "icon": "1f3c8"},
        {"order":5,"category":"travel","category_label":"Travel & Places", "icon": "1f697"},
        {"order":6,"category":"objects","category_label":"Objects", "icon": "1f4a1"},
        {"order":7,"category":"symbols","category_label":"Symbols", "icon": "1f9e1"},
        {"order":8,"category":"flags","category_label":"Flags", "icon": "1f3f4" }]
    };

    var localStorageService= {
        getObject: function(){},
        setObject: function(){}
    };

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

   

    beforeEach(module('emoji-support', function ($provide) {
        $provide.value('emojiService', emojiService);
        $provide.value('categoriesService', categoriesService);
        $provide.value('localStorageService', localStorageService);

    }));

    var controller;
    beforeEach(inject(function ($componentController, _$rootScope_) {
        $rootScope = _$rootScope_;
        // this.$scope = this.$rootScope.$new();
        controller = $componentController('emoji',{
            categoriesService: categoriesService,
            emojiService: emojiService,
            localStorageService: localStorageService
            
        }, {
            callback: function(){}
        });
        // controller.$onInit();
    }));

    it("Should initialise and return empty array", function () {
         
        controller.$onInit();
        
        expect(controller.recentlyUsedEmojis.length).toBe(0);
        expect(controller.recently).toBeFalsy;
      

    })

    it('should pick emoji when click on it and save to recently used', function(){
        controller.$onInit();
        var code = '1f4a1'
        controller.pickEmoji(code);

        expect(controller.recentlyUsedEmojis.length).toBe(1);

    
        var code = '1f98b';
        controller.pickEmoji(code);
        expect(controller.recentlyUsedEmojis.length).toBe(2);

    });

    it('should change categories when click', function(){
        controller.$onInit();
        category = 'nature';

        controller.pickCategory(category);

        expect(controller.searchText.category).toBe('nature');
        expect(controller.searchText.keyWords).toBe('');  
        expect(controller.searchText.shortname).toBe('');  
            
        category = 'people';

        controller.pickCategory(category);

        expect(controller.searchText.category).toBe('people');
        expect(controller.searchText.keyWords).toBe('');  
        expect(controller.searchText.shortname).toBe('');  
    });

    it('should load more emojis', function(){
       controller.$onInit();
       controller.emojiToDisplay = 4;
       controller.loadMore();

       expect(controller.emojiToDisplay).toBe(13);
        
    })
   


});