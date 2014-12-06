'use strict';

/**
 * @ngdoc function
 * @name myVisualStoryBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myVisualStoryBookApp
 */
angular.module('myVisualStoryBookApp')
  .controller('HeaderController', function ($scope) {
    $scope.MenuItems = ['Accueil','Mes livres','A propos'];
  });
