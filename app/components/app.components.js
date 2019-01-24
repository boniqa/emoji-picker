angular.module('gitApp')
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
    
    templateUrl: 'components/emojiTemplate.html'
})

.component('emojiauto', {
    bindings: {
        input: '@',
        // model: '<'
     },
    controller: [ "emojiService", "$scope",  
        
        function (emojiService, $scope){
            
            var ctrl = this;
            ctrl.$onInit = function(){
                
                ctrl.myInput = document.getElementById(ctrl.input);
                
                ctrl.myInput.addEventListener("keyup", function($event) {
                    $scope.$apply(function(){
                        searchForEmojis($event);
                    })
                                      
                });

                ctrl.myInput.addEventListener("keydown", function($event){
                    $scope.$apply(function(){ 
                        keyDown($event.keyCode);        
                        stopEvent($event);
                    });
                    
                });
            };

            ctrl.$onDestroy = function(){
            };

            
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
                        $scope.$apply();
                    } else if(value.shortname.includes(myElement[ctrl.elementIndex])){
                        return true;
                    }
                }
            };

            function stopEvent(event){
                var keyPress = event.keyCode;
                if(ctrl.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37 || keyPress == 27)){
                    event.preventDefault();
                    event.stopPropagation();
                }
            };
  
            function checkOffset(){
                var correctPlasement = false;
                if(myElement){
                    var input = document.getElementById(ctrl.input);
                    for(var elementIndex in myElement){
                        var element = myElement[elementIndex];
                        var offset = input.value.indexOf(element);
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
            function searchForEmojis($event){
                    var keyPress = $event.keyCode;
                    if(ctrl.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37)){
                        return;
                    } else if (keyPress == 27){
                        return;
                    }
                    ctrl.focusOffset = $event.target.selectionStart;
                    if(ctrl.myInput.value !== undefined){
                        //match list of elements from input with regex
                        myElement = ctrl.myInput.value.match(re);
                        // console.log(myElement);
                        
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

   function keyDown(keyPress){
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
		var newVal = ctrl.myInput.value.replace(regex, function(match, offset, string){
			
			if(offset + match.length === ctrl.focusOffset){
				return emoji;
			}
			return match;
			});

		ctrl.focusOffset = ctrl.focusOffset - (myElement[ctrl.elementIndex].length - emoji.length);
		myElement[ctrl.elementIndex] = emoji;
		ctrl.myInput.value = newVal;
		ctrl.myInput.selectionStart = ctrl.focusOffset;
		ctrl.myInput.selectionEnd = ctrl.focusOffset;
            
	};

	ctrl.focusOnInput = function(){
        ctrl.currentIndex = 0;
        ctrl.myInput.selectionStart = ctrl.focusOffset;
        ctrl.myInput.selectionEnd = ctrl.focusOffset;
        ctrl.myInput.focus();
	}

	ctrl.pickCurrent = function(emojiIndex){
		ctrl.currentIndex = emojiIndex;
		pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
	}	
	                      
        }
    
    ],
    
    templateUrl: 'components/emojiAutocompleteTemplate.html'
})
.component('emojiTextArea', {
    bindings: {
        useAutocomplete: '<',
        usePicker: '<',
        pickerPlacement: '@',
        onKeydown: '&',
        onKeyup: '&'

     },
    controller: [  
        
        function (){
            
            var ctrl = this;
            ctrl.keydown = function(event){
                ctrl.onKeydown({event: event});
            }
            ctrl.keyup = function(event){
                ctrl.onKeyup({event: event});
            }
            ctrl.$onInit = function(){          
                // console.log(ctrl.useAutocomplete);
                // console.log(ctrl.usePicker);

                
            };

            ctrl.$onDestroy = function(){
            };	

            ctrl.popoverEmoji = {
                templateUrl: 'components/emojiPopover.html',
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

        }
    
    ],
    
    templateUrl: 'components/emojiTextAreaTemplate.html'
})