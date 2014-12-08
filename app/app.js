'use strict';

/**
 * @ngdoc overview
 * @name myVisualStoryBookApp
 * @description
 * # myVisualStoryBookApp
 *
 * Main module of the application.
 */
var myapp = angular
  .module('myVirtualStoryBookApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.utils',
    'ui.router',
    'ui.bootstrap'
  ]).config(function($stateProvider, $urlRouterProvider){

        // For any unmatched url, send to /signup
        //TODO: à changer plus tard.
        $urlRouterProvider.otherwise("/signup");
        
        // /player place seulement le header, on redirige donc vers une page avec un contenu.
        $urlRouterProvider.when("/player","/player/mygames");
        
        //idem
        $urlRouterProvider.when("/author","/author/mybooks");
        
        //idem
        $urlRouterProvider.when("/game","/game/current");
        $stateProvider
            .state('signup', {
                url: "/signup",
                templateUrl: "feature/portal/view/Signup.html"
            })
            .state('signin', {
                url: "/signin",
                templateUrl: "feature/portal/view/Signin.html"
            })
            .state('player', {
                url: "/player",
                templateUrl: "feature/player/template/Player.template.html"
            })
            .state('player.mygames', {
                url: "/mygames",
                templateUrl: "feature/player/view/MyGames.html"
            })
            .state('player.profile', {
                url: "/profile",
                templateUrl: "feature/common/profile/Profile.html"
            })
            .state('author', {
                url: "/author",
                templateUrl: "feature/author/template/Author.template.html"
            })
            .state('author.mybooks', {
                url: "/mybooks",
                templateUrl: "feature/author/view/MyBooks.html"
            })
            .state('author.profile', {
                url: "/profile",
                templateUrl: "feature/common/profile/Profile.html"
            })
            .state('game', {
                url: "/game",
                templateUrl: "feature/game/template/Game.template.html"
            })
            .state('game.current', {
                url: "/current",
                templateUrl: "feature/game/view/CurrentGame.html"
            })
    });