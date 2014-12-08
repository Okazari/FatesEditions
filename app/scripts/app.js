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

        // For any unmatched url, send to /route1
        $urlRouterProvider.otherwise("/signup");
        $urlRouterProvider.when("/player","/player/mygames");
        $urlRouterProvider.when("/author","/author/mybooks");
        $stateProvider
            .state('signup', {
                url: "/signup",
                templateUrl: "views/portal/Portal.template.html"
            })
            .state('signin', {
                url: "/signin",
                templateUrl: "views/portal/Signin.template.html"
            })
            .state('player', {
                url: "/player",
                templateUrl: "views/player/Player.template.html"
            })
            .state('player.mygames', {
                url: "/mygames",
                templateUrl: "views/player/MyGames.template.html"
            })
            .state('author', {
                url: "/author",
                templateUrl: "views/author/Author.template.html"
            })
            .state('author.mybooks', {
                url: "/mybooks",
                templateUrl: "views/author/MyBooks.template.html"
            })
    });