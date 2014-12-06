'use strict';

/**
 * @ngdoc function
 * @name myVisualStoryBookApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the myVisualStoryBookApp
 */
angular.module('myVisualStoryBookApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
