angular.module('gitApp')
.component('emoji', {
    controller: [ "emojiService",
        
        function (emojiService){
            var ctrl = this;

            ctrl.emojiList = emojiService.emojiList;
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
                insertText(emoji, "emojiInput");
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