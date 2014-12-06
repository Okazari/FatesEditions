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
      $urlRouterProvider.otherwise("/accueil");
      
      $stateProvider
        .state('accueil', {
            url: "/accueil",
            templateUrl: "views/Accueil.template.html"
        })
        .state('meslivres', {
            url: "/meslivres",
            templateUrl: "views/MesLivres.template.html"
        })
        .state('apropros', {
            url: "/apropos",
            templateUrl: "views/APropos.template.html"
        })
    })