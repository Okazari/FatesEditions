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
    'ui.router'
  ]).config(function($stateProvider, $urlRouterProvider){
      
      // For any unmatched url, send to /route1
      $urlRouterProvider.otherwise("/portal");
      
      $stateProvider
        .state('portal', {
            url: "/portal",
            templateUrl: "views/Portal.template.html"
        })
        .state('player', {
            url: "/player",
            templateUrl: "views/Player.template.html"
        })
        .state('player.home', {
            url: "/home",
            templateUrl: "views/Home.template.html"
        })
        .state('player.mybooks', {
            url: "/mybooks",
            templateUrl: "views/MyBooks.template.html"
        })
        .state('player.about', {
            url: "/about",
            templateUrl: "views/About.template.html"
        })
    })