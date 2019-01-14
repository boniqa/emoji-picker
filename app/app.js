angular.module( 'gitApp', ['ui.router', 'ngAnimate', 'ui.bootstrap','infinite-scroll']);

angular.module('gitApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      controller: 'gitHubController',
      templateUrl: 'templates/home.html'
     
     });
     
  }]);