angular.module('gitApp').controller('gitHubController', ['$scope', 'emojiService', function($scope, emojiService) {

$scope.popoverEmoji = {
	templateUrl: 'components/emojiPopover.html',
	isOpen: false
  };

  $scope.cb = function(emoji){
	    insertText(emoji, "emojiInput");
  }

  $scope.isClosed = true;

  var re = new RegExp(/\:[A-Za-z0-9\_]+/g);
  $scope.emojiList = emojiService.emojiList;
  $scope.emojisToDisplay = [];
  $scope.convert = emojiService.convert;
  $scope.toDisplay = false;

  function filterByShortname(value){
	if(value.shortname.includes($scope.myElement)){
		return true;
	}
  }

  $scope.searchForEmojis = function(){
	
	if($scope.searchingForShortcut !== undefined){
		$scope.myElement = $scope.searchingForShortcut.match(re);
		// console.log($scope.myElement);
		
		$scope.emojisToDisplay = $scope.emojiList.filter(filterByShortname);
		if ($scope.emojisToDisplay.length > 0){
			$scope.toDisplay = true;
		}
		else{
			$scope.toDisplay = false;
		}
		// console.log($scope.emojisToDisplay);	
		
	}
	
  };

  $scope.keyDown = function(keyPress, code){
	  if(keyPress == 13){
		  $scope.pickEmoji(code);
	  }
	  
  }

  $scope.pickEmoji = function(code){
	var emoji = $scope.convert(code);
	
	insertText(emoji, "emojiInput");
	var input = document.getElementById("emojiInput");
	jo = input.value.replace($scope.myElement, '');
	input.value = jo;
	
	$scope.myElement = [];
	$scope.toDisplay = false;
	
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
}]);
