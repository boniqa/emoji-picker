// import { log } from "util";

angular.module('gitApp')
.component('emoji', {
    controller: [ "emojiService", "categoriesService", "localStorageService", "$scope",
        
        function (emojiService, categoriesService, localStorageService, $scope){
            var toSaveEmojis = [];
            var ctrl = this;
            ctrl.recentlyUsedEmojis = [];

            $scope.busy = true;
            $scope.allData =[];
            // $scope.emojiList = emojiService.emojiList;
            var page = 0;
            var step = 8;
            
            ctrl.$onInit = function(){
                
                ctrl.recentlyUsedEmojis = localStorageService.getObject("recent-emojis") || [];
                toSaveEmojis = localStorageService.getObject("recent-emojis") || [];
                // ctrl.recentlyUsedEmojis = [];
                // localStorageService.setObject("recent-emojis", ctrl.recentlyUsedEmojis);
                console.log('resent emojis uploaded', ctrl.recentlyUsedEmojis);
                
            };

            ctrl.$onDestroy = function(){
              
                
                localStorageService.setObject("recent-emojis", toSaveEmojis.slice(0,9));
                console.log('Saved!', toSaveEmojis);           

            };

            ctrl.emojiList = emojiService.emojiList;
            
            ctrl.emojiCategories = categoriesService.emojiCategories;
            
            ctrl.convert= function convert(unicode) {
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
            };

            ctrl.pickEmoji = function(code){
                var emoji = ctrl.convert(code);
                
                if (!toSaveEmojis.includes(code)){
                    toSaveEmojis.unshift(code);
                }
                // console.log(ctrl.recentlyUsedEmojis);
                insertText(emoji, "emojiInput");
                //add to array recently used
                
                
            };

        
            ctrl.images = ctrl.emojiList.slice(0,25);
        
            ctrl.loadMore = function() {
                // var next = $scope.images[$scope.images.length + 1];
                //i ->ile dodaje
                for(var i = 1; i <= 5; i++) {
                    ctrl.images.push(ctrl.emojiList[ctrl.images.length + 1]);
                }
              };
            

         
            function insertText(text, id) {

                var input = document.getElementById(id);
                if (input === undefined) { return; }
            
                var scrollPos = input.scrollTop;
                var pos = 0;
                var browser = ((input.selectionStart || input.selectionStart == "0") ?
                               "ff" : (document.selection ? "ie" : false));
                if (browser == "ie") {
                    input.focus();
                    var range = document.selection.createRange();
                    range.moveStart("character", -input.value.length);
                    pos = range.text.length;
                }
                else if (browser == "ff") {
                    pos = input.selectionStart;
                }
                var front = (input.value).substring(0, pos);
                var back = (input.value).substring(pos, input.value.length);
                input.value = front + text + back;
                pos = pos + text.length;
                if (browser == "ie") {
                    input.focus();
                    var range = document.selection.createRange();
                    range.moveStart("character", -input.value.length);
                    range.moveStart("character", pos);
                    range.moveEnd("character", 0);
                    range.select();
                }
                else if (browser == "ff") {
                    input.selectionStart = pos;
                    input.selectionEnd = pos;
                    input.focus();
                }
                input.scrollTop = scrollPos;
                angular.element(input).trigger('input');
            }

        }
    
    ],
    
    templateUrl: 'components/emojiTemplate.html'
})