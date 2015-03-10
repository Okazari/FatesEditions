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
        $urlRouterProvider.otherwise("/signin");
        
        // /player place seulement le header, on redirige donc vers une page avec un contenu.
        $urlRouterProvider.when("/player","/player/mygames");
        
        //idem
        $urlRouterProvider.when("/author","/author/mybooks");
        
        //idem
        $urlRouterProvider.when("/game","/player/mygames");
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
            .state('player.mygames', {
                url: "/mygames",
                templateUrl: "feature/player/view/MyGames.html",
                controller: "PlayerGamesController"
            })
            .state('player.books', {
                url: "/books",
                templateUrl: "feature/player/view/Books.html",
                controller: "PlayerBooksController"
            })
            .state('player.profile', {
                url: "/profile",
                templateUrl: "feature/common/profile/Profile.html"
            })
            
            
            //Auteur
            .state('author', {
                url: "/author",
                templateUrl: "feature/author/template/Author.template.html",
                abstract: true
            })
            .state('author.mybooks', {
                url: "/mybooks",
                templateUrl: "feature/author/view/MyBooks.html"
            })
            .state('author.profile', {
                url: "/profile",
                templateUrl: "feature/common/profile/Profile.html"
            })
            
            //Jeu
            .state('game', {
                url: "/game/{id}",
                templateUrl: "feature/game/view/CurrentGame.html",
                controller: "GameController"
            })
            .state('game.current', {
            })
    });