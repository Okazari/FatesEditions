'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameController', function ($scope, GameService) {
    $scope.displayMenu = false;
    $scope.currentGame = GameService.getGame(1);
  });
