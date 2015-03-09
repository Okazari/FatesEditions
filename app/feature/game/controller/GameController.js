'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameController', function ($scope, $stateParams, GameService, GamePageService) {
    $scope.displayMenu = false;
    $scope.currentGame = GameService.getGame($stateParams.id);
    $scope.currentPage = GamePageService.getPage($scope.currentGame.currentPage);
    
    $scope.changePage = function(newPageId){
      $scope.currentPage = GamePageService.getPage(newPageId);
      $scope.currentGame.currentPage = newPageId;
    }
  });
