angular.module('gitApp').controller('gitHubController', ['$scope', function($scope) {

$scope.popoverEmoji = {
	templateUrl: 'components/emojiPopover.html',
	isOpen: false
  };

  $scope.cb = function(emoji){
	console.log(emoji)
  }

}]);
