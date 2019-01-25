angular.module('emoji-support')
.component('emojiTextArea', {
    bindings: {
        useAutocomplete: '<',
        usePicker: '<',
        pickerPlacement: '@',
        onKeydown: '&',
        onKeyup: '&',
        model: '='

     },
    controller: [  "emojiService", "$scope", 
        
        function (emojiService, $scope){
            
            var ctrl = this;
            var input;
            
            ctrl.keydown = function(event){
                ctrl.onKeydown({event: event});
            }
            ctrl.keyup = function(event){
                ctrl.onKeyup({event: event});
            }
            ctrl.$onInit = function(){          
                
                input = document.getElementById('emojiInput');
                // console.log(ctrl.useAutocomplete);
                // console.log(ctrl.usePicker);                
            };

            ctrl.$onDestroy = function(){
            };	

            ctrl.popoverEmoji = {
                templateUrl: 'components/emoji/templates/emojiPopover.html',
                isOpen: false
            };                 

            ctrl.cb = function(emoji){
                insertText(emoji, "emojiInput");
            }

          
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

            var re = new RegExp(/\:[A-Za-z0-9\_\:]+/g);
            ctrl.emojiList = emojiService.emojiList;
            ctrl.emojisToDisplay = [];
            ctrl.convert = emojiService.convert;
            ctrl.toDisplay = false;

            function filterByShortname(value){	  
                if(myElement !== null){
                    if(value.shortname === myElement[ctrl.elementIndex]){
                        pickEmoji(value.output);
                        ctrl.toDisplay = false;
                        // $scope.$apply();
                    } else if(value.shortname.includes(myElement[ctrl.elementIndex])){
                        return true;
                    }
                }
            };

            ctrl.stopEvent = function (event){
                var keyPress = event.keyCode;
                if(ctrl.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37 || keyPress == 27)){
                    event.preventDefault();
                    event.stopPropagation();
                }
            };

            ctrl.preventEnterOnOpen = function(event){
                if(!event.shiftKey && event.keyCode == 13){
                    event.preventDefault();
                }
            }

            function checkOffset(){
                var correctPlasement = false;
                if(myElement){
                    // var input = document.getElementById(ctrl.input);
                    for(var elementIndex in myElement){
                        var element = myElement[elementIndex];
                        var offset = ctrl.model.indexOf(element);
                        if(ctrl.focusOffset == offset + element.length){
                            ctrl.elementIndex = elementIndex;
                            correctPlasement = true;
                            break;
                        }
                    }
                }
                return correctPlasement;
            }

            var myElement =[];
            ctrl.searchForEmojis = function($event){
                var keyPress = $event.keyCode;
                if(ctrl.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37)){
                    return;
                } else if (keyPress == 27 || (!$event.shiftKey && keyPress == 13)){
                    return;
                }
                ctrl.focusOffset = $event.target.selectionStart;
                if(ctrl.model !== undefined){
                    //match list of elements from input with regex
                    myElement = ctrl.model.match(re);
                    
                    //checking if cursor in input is at the end of an element from myElement list
                    if(!checkOffset()){
                        myElement = [];
                        ctrl.toDisplay = false;
                        ctrl.currentIndex = 0;
                        return;
                    }
                    
                    ctrl.emojisToDisplay = ctrl.emojiList.filter(filterByShortname);
                    
                    if (ctrl.emojisToDisplay.length > 0){

                        ctrl.toDisplay = true;
                        
                        var pickerHeight = input.style.height;
                        var picker = document.getElementsByClassName('picking-emojis')[0];
                        picker.style.bottom = pickerHeight;
                        
                        // dock
                        window.addEventListener("click", function() {
                            myElement = [];
                            ctrl.toDisplay = false;
                            ctrl.currentIndex = 0;
                            $scope.$apply();
                            
                        });
                    }
                    else{
                        myElement = [];
                        ctrl.toDisplay = false;
                        ctrl.currentIndex = 0;
                    }

                    

                    
                }
            };

            ctrl.currentIndex = 0;

            ctrl.keyDown = function(keyPress){
                if(ctrl.toDisplay === true){
                    //tab and right-arrow
                    if(keyPress == 9 || keyPress == 39){
                        if(ctrl.currentIndex == ctrl.emojisToDisplay.length -1 || ctrl.currentIndex == 19){
                            ctrl.currentIndex = 0;
                            pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
                        }
                        else{
                            ctrl.currentIndex++;
                            pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
                        }
                    }
                    //left arrow
                    else if(keyPress == 37){
                        if(ctrl.currentIndex == 0){
                            ctrl.currentIndex = ctrl.emojisToDisplay.length > 20 ? 19 : ctrl.emojisToDisplay.length -1;
                            pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
                        }
                        else{
                            ctrl.currentIndex--;
                            pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
                        }
                    }
                    //enter
                    else if(keyPress == 13){
                        pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
                        myElement = [];
                        ctrl.toDisplay = false;			
                    }
                    //escape
                    else if(keyPress == 27){		  
                        myElement = [];
                        ctrl.toDisplay = false; 
                    }
                }
            
            }

            function pickEmoji(code){
                var emoji = ctrl.convert(code) + ' ';
                var regex = new RegExp(myElement[ctrl.elementIndex], 'g');
                var newVal = input.value.replace(regex, function(match, offset, string){
                    
                    if(offset + match.length === ctrl.focusOffset){
                        return emoji;
                    }
                    return match;
                    });

                ctrl.focusOffset = ctrl.focusOffset - (myElement[ctrl.elementIndex].length - emoji.length);
                myElement[ctrl.elementIndex] = emoji;
                input.value = newVal;
                input.selectionStart = ctrl.focusOffset;
                input.selectionEnd = ctrl.focusOffset;
                    
            };

            ctrl.focusOnInput = function(){
                ctrl.currentIndex = 0;
                input.selectionStart = ctrl.focusOffset;
                input.selectionEnd = ctrl.focusOffset;
                input.focus();
            }

            ctrl.pickCurrent = function(emojiIndex){
                ctrl.currentIndex = emojiIndex;
                pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
            }	
                      
        }   
    
    ],
    
    templateUrl: 'components/emoji/templates/emojiTextAreaTemplate.html'
})


    