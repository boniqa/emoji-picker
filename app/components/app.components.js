angular.module('gitApp')
    .component('emoji', {
        bindings: {
            callback: '&'
        },
        controller: ["emojiService", "categoriesService", "localStorageService",

            function (emojiService, categoriesService, localStorageService) {

                var ctrl = this;
                ctrl.recentlyUsedEmojis = [];
                ctrl.recently = true;
                ctrl.toggle = {};
                ctrl.searchText = {};
                ctrl.$onInit = function () {

                    ctrl.recentlyUsedEmojis = localStorageService.getObject("recent-emojis") || [];

                    if (ctrl.recentlyUsedEmojis < 1 || ctrl.recentlyUsedEmojis == undefined) {
                        ctrl.recently = false;
                    }
                    // toSaveEmojis = localStorageService.getObject("recent-emojis") || [];

                    // console.log('resent emojis uploaded', ctrl.recentlyUsedEmojis);
                };

                ctrl.$onDestroy = function () {

                    localStorageService.setObject("recent-emojis", ctrl.recentlyUsedEmojis.slice(0, 9));
                    // console.log('Saved!', toSaveEmojis);           

                };

                ctrl.emojiList = emojiService.emojiList;

                ctrl.emojiCategories = categoriesService.emojiCategories;
                // ctrl.tonesCategories = categoriesService.tonesCategories;

                ctrl.convert = function (code) {
                    return emojiService.convert(code);
                }

                ctrl.unPick = function () {
                    for (var key in ctrl.toggle) {
                        ctrl.toggle[key] = false;
                    }
                }

                ctrl.pickCategory = function (category) {
                    ctrl.searchText.category = category;
                    ctrl.searchText.keyWords = '';
                    ctrl.searchText.shortname = '';
                    ctrl.unPick();
                    ctrl.toggle[category] = true;
                }

                ctrl.pickEmoji = function (code) {
                    var emoji = ctrl.convert(code);

                    if (!ctrl.recentlyUsedEmojis.includes(code)) {
                        ctrl.recentlyUsedEmojis.unshift(code);
                    }

                    ctrl.callback({ value: emoji });

                };

                ctrl.emojiToDisplay = 200;

                ctrl.loadMore = function () {
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


    .directive('tabby', function () {

        var controller = ['$scope', '$element', '$templateRequest', '$compile', "emojiService", 
            function ($scope, $element, $templateRequest, $compile, emojiService) {

            var templateUrl = "components/emojiAutocompleteTemplate.html";

            $templateRequest(templateUrl).then(function (html) {
                var el = $compile(html)($scope);
                $element.before(el);
            });


            $element.bind("keydown", function ($event) {
                $scope.$apply(function(){
                    keyDown($event.keyCode);
                    $scope.stopEvent($event);    
                });
            });

            $element.bind("keyup", function ($event) {
                $scope.$apply(function(){
                    $scope.searchForEmojis($event);
                });
            });

            $scope.myInput = $element[0];

            var re = new RegExp(/\:[A-Za-z0-9\_\:]+/g);
            $scope.emojiList = emojiService.emojiList;
            $scope.emojisToDisplay = [];
            $scope.convert = emojiService.convert;
            $scope.toDisplay = false;

            function filterByShortname(value) {
                if ($scope.myElement !== null) {
                    if (value.shortname === $scope.myElement[$scope.elementIndex]) {
                        $scope.pickEmoji(value.output);
                        $scope.toDisplay = false;
                        /// ???
                        // $scope.$apply();
                    } else if (value.shortname.includes($scope.myElement[$scope.elementIndex])) {
                        return true;
                    }
                }
            };

            $scope.stopEvent = function (event) {
                var keyPress = event.keyCode;
                if ($scope.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37 || keyPress == 27)) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            };

            function checkOffset() {
                var correctPlasement = false;
                if ($scope.myElement) {
                    for (var elementIndex in $scope.myElement) {
                        var element = $scope.myElement[elementIndex];
                        var offset = $scope.myInput.value.indexOf(element);
                        if ($scope.focusOffset == offset + element.length) {
                            $scope.elementIndex = elementIndex;
                            correctPlasement = true;
                            break;
                        }
                    }
                }
                return correctPlasement;
            }

            $scope.searchForEmojis = function ($event) {
                var keyPress = $event.keyCode;
                if ($scope.toDisplay === true && (keyPress == 9 || keyPress == 39 || keyPress == 37)) {
                    return;
                } else if (keyPress == 27) {
                    return;
                }
                $scope.focusOffset = $event.target.selectionStart;
                if ($scope.myInput.value !== undefined) {
                    //match list of elements from input with regex
                    $scope.myElement = $scope.myInput.value.match(re);
                    console.log($scope.myElement);

                    //checking if cursor in input is at the end of an element from myElement list
                    if (!checkOffset()) {
                        $scope.myElement = [];
                        $scope.toDisplay = false;
                        $scope.currentIndex = 0;
                        return;
                    }

                    $scope.emojisToDisplay = $scope.emojiList.filter(filterByShortname);

                    if ($scope.emojisToDisplay.length > 0) {
                        $scope.toDisplay = true;

                        window.addEventListener("click", function () {
                            $scope.myElement = [];
                            $scope.toDisplay = false;
                            $scope.currentIndex = 0;
                            // $scope.$apply();

                        });
                    }
                    else {
                        $scope.myElement = [];
                        $scope.toDisplay = false;
                        $scope.currentIndex = 0;
                    }
                }
            };

            $scope.currentIndex = 0;

            function keyDown(keyPress) {
                if ($scope.toDisplay === true) {
                    //enter and right-arrow
                    if (keyPress == 9 || keyPress == 39) {
                        if ($scope.currentIndex == $scope.emojisToDisplay.length - 1 || $scope.currentIndex == 19) {
                            $scope.currentIndex = 0;
                            $scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
                        }
                        else {
                            $scope.currentIndex++;
                            console.log("$scope.currentIndex: ", $scope.currentIndex);
                            $scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
                        }
                    }
                    //left arrow
                    else if (keyPress == 37) {
                        if ($scope.currentIndex == 0) {
                            $scope.currentIndex = $scope.emojisToDisplay.length > 20 ? 19 : $scope.emojisToDisplay.length - 1;
                            $scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
                        }
                        else {
                            $scope.currentIndex--;
                            console.log("$scope.currentIndex: ", $scope.currentIndex);
                            $scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
                        }
                    }
                    //enter
                    else if (keyPress == 13) {
                        $scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
                        $scope.myElement = [];
                        $scope.toDisplay = false;
                    }
                    //escape
                    else if (keyPress == 27) {
                        $scope.myElement = [];
                        $scope.toDisplay = false;
                    }
                }

            }

            $scope.pickEmoji = function (code) {
                var emoji = $scope.convert(code) + ' ';
                var regex = new RegExp($scope.myElement[$scope.elementIndex], 'g');

                var newVal = $scope.myInput.value.replace(regex, function (match, offset, string) {

                    if (offset + match.length === $scope.focusOffset) {
                        return emoji;
                    }
                    return match;
                });

                $scope.focusOffset = $scope.focusOffset - ($scope.myElement[$scope.elementIndex].length - emoji.length);
                $scope.myElement[$scope.elementIndex] = emoji;
                $scope.myInput.value = newVal;
                $scope.myInput.selectionStart = $scope.focusOffset;
                $scope.myInput.selectionEnd = $scope.focusOffset;

            };

            $scope.focusOnInput = function () {
                $scope.currentIndex = 0;
                insertText('', $scope.input);
            }

            $scope.pickCurrent = function (emojiIndex) {
                $scope.currentIndex = emojiIndex;
                $scope.pickEmoji($scope.emojisToDisplay[$scope.currentIndex].output);
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


        }];



        return {
            restrict: 'EA',
            //   scope: {
            //   },
            controller: controller,
            // template: template
        };
    })


