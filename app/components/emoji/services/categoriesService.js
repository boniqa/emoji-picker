angular.module('emoji-support').factory('categoriesService', [function(){

var emojiCategories = 
[{"order":1,"category":"people","category_label":"Smileys & People", "icon": "1f603"},
{"order":2,"category":"nature","category_label":"Animals & Nature", "icon": "1f435"},
{"order":3,"category":"food","category_label":"Food & Drink", "icon": "1f354"},
{"order":4,"category":"activity","category_label":"Activity", "icon": "1f3c8"},
{"order":5,"category":"travel","category_label":"Travel & Places", "icon": "1f697"},
{"order":6,"category":"objects","category_label":"Objects", "icon": "1f4a1"},
{"order":7,"category":"symbols","category_label":"Symbols", "icon": "1f9e1"},
{"order":8,"category":"flags","category_label":"Flags", "icon": "1f3f4" }];


var tonesCategories = 
[
    {name: "tone1", icon: "1f3fb"},
    {name: "tone2", icon: "1f3fc"},
    {name: "tone3", icon: "1f3fd"},
    {name: "tone4", icon: "1f3fe"},
    {name: "tone5", icon: "1f3ff"}
];

var factory = {
    emojiCategories: emojiCategories,
    tonesCategories: tonesCategories

};

return factory;

}]);
