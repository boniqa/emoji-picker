angular.module('gitApp').controller('gitHubController', ['$scope', 'emojiService', function($scope, emojiService) {

$scope.popoverEmoji = {
	templateUrl: 'components/emojiPopover.html',
	isOpen: false
  };

  $scope.cb = function(emoji){
	    insertText(emoji, "emojiInput");
  }
	

  // var re = new RegExp(/\:[A-Za-z0-9\_\:]+/g);
  // $scope.emojiList = emojiService.emojiList;
  // $scope.emojisToDisplay = [];
  // $scope.convert = emojiService.convert;
  // $scope.toDisplay = false;

  // function filterByShortname(value){	  
	// if($scope.myElement !== null){
	// 	if(value.shortname === $scope.myElement[$scope.elementIndex]){
	// 		$scope.pickEmoji(value.output);
	// 		$scope.toDisplay = false;
	// 		$scope.$apply();
	// 	} else if(value.shortname.includes($scope.myElement[$scope.elementIndex])){
	// 		return true;
	// 	}
	// }
  // };

  // $scope.stopEvent = function(event){
	// var keyPress = event.keyCode;
	// if($scope.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37 || keyPress == 27)){
	// 	event.preventDefault();
	// 	event.stopPropagation();
	// }
  // };
  
  // function checkOffset(){
	// var correctPlasement = false;
	// if($scope.myElement){
	// 	var input = document.getElementById("emojiInput");
	// 	for(var elementIndex in $scope.myElement){
	// 		var element = $scope.myElement[elementIndex];
	// 		var offset = input.value.indexOf(element);
	// 		if($scope.focusOffset == offset + element.length){
	// 			$scope.elementIndex = elementIndex;
	// 			correctPlasement = true;
	// 			break;
	// 		}
	// 	}
	// }
	// return correctPlasement;
  // }

  // $scope.searchForEmojis = function($event){
	// 	var keyPress = $event.keyCode;
	// 	if($scope.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37)){
	// 		return;
	// 	} else if (keyPress == 27){
	// 		return;
	// 	}
	// 	$scope.focusOffset = $event.target.selectionStart;
	// 	if($scope.searchingForShortcut !== undefined){
	// 		//match list of elements from input with regex
	// 		$scope.myElement = $scope.searchingForShortcut.match(re);
			
	// 		//checking if cursor in input is at the end of an element from myElement list
	// 		if(!checkOffset()){
	// 			$scope.myElement = [];
	// 			$scope.toDisplay = false;
	// 			$scope.currentIndex = 0;
	// 			return;
	// 		}
			
	// 		$scope.emojisToDisplay = $scope.emojiList.filter(filterByShortname);
			
	// 		if ($scope.emojisToDisplay.length > 0){
	// 			$scope.toDisplay = true;

	// 			window.addEventListener("click", function() {
	// 				$scope.myElement = [];
	// 				$scope.toDisplay = false;
	// 				$scope.currentIndex = 0;
	// 				$scope.$apply();
					
	// 			});
	// 		}
	// 		else{
	// 				$scope.myElement = [];
	// 				$scope.toDisplay = false;
	// 				$scope.currentIndex = 0;
	// 		}
	// 	}
  // };

  // $scope.currentIndex = 0;

  // $scope.keyDown = function(keyPress){
	//   if($scope.toDisplay === true){
	// 	  //enter and right-arrow
	// 		if(keyPress == 9 || keyPress == 39){
	// 			if($scope.currentIndex == $scope.emojisToDisplay.length -1 || $scope.currentIndex == 19){
	// 				$scope.currentIndex = 0;
	// 				$scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
	// 			}
	// 			else{
	// 				$scope.currentIndex++;
	// 				$scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
	// 			}
	// 		}
	// 		//left arrow
	// 		else if(keyPress == 37){
	// 			if($scope.currentIndex == 0){
	// 				$scope.currentIndex = $scope.emojisToDisplay.length > 20 ? 19 : $scope.emojisToDisplay.length -1;
	// 				$scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
	// 			}
	// 			else{
	// 				$scope.currentIndex--;
	// 				$scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
	// 			}
	// 		}
	// 		//enter
	// 		else if(keyPress == 13){
	// 			$scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
	// 			$scope.myElement = [];
	// 			$scope.toDisplay = false;			
	// 		}
	// 		//escape
	// 		else if(keyPress == 27){		  
	// 			$scope.myElement = [];
	// 			$scope.toDisplay = false; 
	// 		}
	//   }
	  
  // }
  
  // $scope.pickEmoji = function(code){
	// 	var emoji = $scope.convert(code) + ' ';
	// 	var input = document.getElementById("emojiInput");
	// 	var regex = new RegExp($scope.myElement[$scope.elementIndex], 'g');

	// 	var newVal = input.value.replace(regex, function(match, offset, string){
			
	// 		if(offset + match.length === $scope.focusOffset){
	// 			return emoji;
	// 		}
	// 		return match;
	// 		});

	// 	$scope.focusOffset = $scope.focusOffset - ($scope.myElement[$scope.elementIndex].length - emoji.length);
	// 	$scope.myElement[$scope.elementIndex] = emoji;
	// 	input.value = newVal;
	// 	input.selectionStart = $scope.focusOffset;
	// 	input.selectionEnd = $scope.focusOffset;
	
	// };

	// $scope.focusOnInput = function(){
	// 	$scope.currentIndex = 0;
	// 	insertText('', "emojiInput");
	// }

	// $scope.pickCurrent = function(emojiIndex){
	// 	$scope.currentIndex = emojiIndex;
	// 	$scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
	// }	
	  
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
}]);
