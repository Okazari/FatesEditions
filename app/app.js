'use strict';

/**
 * @ngdoc overview
 * @name myVisualStoryBookApp
 * @description
 * # myVisualStoryBookApp
 *
 * Main module of the application.
 */
var myVirtualStoryBookApp = angular
  .module('myVirtualStoryBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.utils',
    'ui.router',
    'ui.bootstrap',
    'angular.layout'
  ]).config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, send to /signup
        //TODO: à changer plus tard.
        //$urlRouterProvider.otherwise("/signin");
        
        // /player place seulement le header, on redirige donc vers une page avec un contenu.
        $urlRouterProvider.when("/player","/player/myprofile");
        $stateProvider
            //Portail
            .state('signup', {
                url: "/signup",
                templateUrl: "feature/portal/view/Signup.html"
            })
            .state('signin', {
                url: "/signin",
                templateUrl: "feature/portal/view/Signin.html",
                controller: "SignInController"
            })
            
            //Joueur
            .state('player', {
                url: "/player",
                templateUrl: "feature/player/template/Player.template.html"
            })
            .state('player.books', {
                url: "/books",
                templateUrl: "feature/player/view/Books.html",
                controller: "PlayerBooksController"
            })
            .state('player.myprofile', {
                url: "/myprofile",
                templateUrl: "feature/player/view/MyProfile.html",
                controller: "PlayerProfileController"
            })
            
            //Edition
            .state('editionbook', {
                url: "/edition/book/{id}",
                templateUrl: "feature/edition/view/EditionBook.html",
                controller: "EditionBookController"
            })
            
            .state('editionpage', {
                url: "/edition/page/{id}",
                templateUrl: "feature/edition/view/EditionPage.html",
                controller: "EditionPageController"
            })
            
            //Jeu
            .state('game', {
                url: "/game/{id}",
                templateUrl: "feature/game/view/CurrentGame.html",
                controller: "GameController"
            })
}); 

myVirtualStoryBookApp.factory('httpErrorInterceptor', ['$q', '$injector', '$window', '$location',
    function ($q, $injector, $window, $location) {
        var myInterceptor = {
            'response': function (response) {
                return response;
            },
            'responseError': function (rejection) {
                if (rejection.status === 401) {
                    $injector.get('$state').go('signin');
                return $q.reject(rejection);
                }
            }
        };
        return myInterceptor;
}]);

myVirtualStoryBookApp.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('httpErrorInterceptor');
}]);