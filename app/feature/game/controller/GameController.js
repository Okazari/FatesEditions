'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameController', function ($scope, $stateParams, GameService) {
    $scope.displayMenu = false;
    $scope.currentGame = GameService.getGame($stateParams.id);
  });
