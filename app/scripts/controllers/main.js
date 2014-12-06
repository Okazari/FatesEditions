'use strict';

/**
 * @ngdoc function
 * @name myVisualStoryBookApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myVisualStoryBookApp
 */
angular.module('myVisualStoryBookApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
