angular.module( 'gitApp', ['ui.router', 'ngAnimate', 'ui.bootstrap','infinite-scroll', 'emoji-support']);

angular.module('gitApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'gitHubController',
      templateUrl: 'templates/home.html'
     
     });
     
  }]);

  angular.module('emoji-support',['monospaced.elastic']);