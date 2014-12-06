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
  .module('myVisualStoryBookApp', [
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
      $urlRouterProvider.otherwise("/");
      
      $stateProvider
        .state('accueil', {
            url: "/",
            templateUrl: "views/accueil/Accueil.template.html"
        })
    })