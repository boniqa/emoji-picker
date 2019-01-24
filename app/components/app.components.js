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
                if(ctrl.myElement !== null){
                    if(value.shortname === ctrl.myElement[ctrl.elementIndex]){
                        ctrl.pickEmoji(value.output);
                        ctrl.toDisplay = false;
                        $scope.$apply();
                    } else if(value.shortname.includes(ctrl.myElement[ctrl.elementIndex])){
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
                if(ctrl.myElement){
                    var input = document.getElementById(ctrl.input);
                    for(var elementIndex in ctrl.myElement){
                        var element = ctrl.myElement[elementIndex];
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
                        ctrl.myElement = ctrl.myInput.value.match(re);
                        console.log(ctrl.myElement);
                        
                        //checking if cursor in input is at the end of an element from myElement list
                        if(!checkOffset()){
                            ctrl.myElement = [];
                            ctrl.toDisplay = false;
                            ctrl.currentIndex = 0;
                            return;
                        }
                        
                        ctrl.emojisToDisplay = ctrl.emojiList.filter(filterByShortname);
                        
                        if (ctrl.emojisToDisplay.length > 0){
                            ctrl.toDisplay = true;

                            window.addEventListener("click", function() {
                                ctrl.myElement = [];
                                ctrl.toDisplay = false;
                                ctrl.currentIndex = 0;
                                $scope.$apply();
                                
                            });
                        }
                        else{
                                ctrl.myElement = [];
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
					ctrl.pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
				}
				else{
					ctrl.currentIndex++;
					ctrl.pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
				}
			}
			//left arrow
			else if(keyPress == 37){
				if(ctrl.currentIndex == 0){
					ctrl.currentIndex = ctrl.emojisToDisplay.length > 20 ? 19 : ctrl.emojisToDisplay.length -1;
					ctrl.pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
				}
				else{
					ctrl.currentIndex--;
					ctrl.pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
				}
			}
			//enter
			else if(keyPress == 13){
				ctrl.pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
				ctrl.myElement = [];
				ctrl.toDisplay = false;			
			}
			//escape
			else if(keyPress == 27){		  
				ctrl.myElement = [];
				ctrl.toDisplay = false; 
			}
	  }
	  
  }
  
  ctrl.pickEmoji = function(code){
		var emoji = ctrl.convert(code) + ' ';
		var regex = new RegExp(ctrl.myElement[ctrl.elementIndex], 'g');
		var newVal = ctrl.myInput.value.replace(regex, function(match, offset, string){
			
			if(offset + match.length === ctrl.focusOffset){
				return emoji;
			}
			return match;
			});

		ctrl.focusOffset = ctrl.focusOffset - (ctrl.myElement[ctrl.elementIndex].length - emoji.length);
		ctrl.myElement[ctrl.elementIndex] = emoji;
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
		ctrl.pickEmoji(ctrl.emojisToDisplay[ctrl.currentIndex].output);
	}	
	                      
        }
    
    ],
    
    templateUrl: 'components/emojiAutocompleteTemplate.html'
})