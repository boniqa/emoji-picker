angular.module('emoji-support')
.component('emoji', {
    bindings: {
        callback: '&'
     },
    controller: [ "emojiService", "categoriesService", "localStorageService", 
        
        function (emojiService, categoriesService, localStorageService){
            
            var ctrl = this;
            ctrl.recentlyUsedEmojis = [];
            ctrl.recently = true;
            ctrl.toggle = {};
            ctrl.searchText = {};
            ctrl.$onInit = function(){
                
                ctrl.recentlyUsedEmojis = localStorageService.getObject("recent-emojis") || [];

                if (ctrl.recentlyUsedEmojis < 1 || ctrl.recentlyUsedEmojis == undefined){
                    ctrl.recently = false;
                }
                // toSaveEmojis = localStorageService.getObject("recent-emojis") || [];
                
                // console.log('resent emojis uploaded', ctrl.recentlyUsedEmojis);
            };

            ctrl.$onDestroy = function(){
              
                localStorageService.setObject("recent-emojis", ctrl.recentlyUsedEmojis.slice(0,9));
                // console.log('Saved!', toSaveEmojis);           

            };

            ctrl.emojiList = emojiService.emojiList;
            
            ctrl.emojiCategories = categoriesService.emojiCategories;
            // ctrl.tonesCategories = categoriesService.tonesCategories;
           
            ctrl.convert = function(code){
                return emojiService.convert(code);
            }

            ctrl.unPick = function(){
                for(var key in ctrl.toggle){
                    ctrl.toggle[key] = false;
                }
            }

            ctrl.pickCategory = function(category){
                ctrl.searchText.category = category; 
                ctrl.searchText.keyWords ='' ;  
                ctrl.searchText.shortname ='';
                ctrl.unPick();
                ctrl.toggle[category] = true;
            }

            ctrl.pickEmoji = function(code){
                var emoji = ctrl.convert(code);
                
                if (!ctrl.recentlyUsedEmojis.includes(code)){
                    ctrl.recentlyUsedEmojis.unshift(code);
                }
                
                    ctrl.callback({value: emoji});   
                
            };

            ctrl.emojiToDisplay = 200;       

            ctrl.loadMore = function() {
                if (ctrl.emojiToDisplay + 100 < ctrl.emojiList.length) {
                    ctrl.emojiToDisplay += 100;
                } else {
                    ctrl.emojiToDisplay = ctrl.emojiList.length;
                }
            };

        }
    
    ],
    
    templateUrl: 'components/emoji/templates/emojiTemplate.html'
})