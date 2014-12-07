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
        .state('player.home', {
            url: "/home",
            templateUrl: "views/player/Home.template.html"
        })
        .state('player.mybooks', {
            url: "/mybooks",
            templateUrl: "views/player/MyBooks.template.html"
        })
        .state('player.about', {
            url: "/about",
            templateUrl: "views/player/About.template.html"
        })
    })