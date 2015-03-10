'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameController', function ($scope, $state, $stateParams, GameService, GamePageService) {
    /**********************Header control***********************/
    $scope.MenuItems = [];
    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };
    $scope.saveAndQuit = function(){
      GameService.saveGame($scope.currentGame);
      $state.go('player.mygames')
    }
    $scope.MenuItems.push({"click":$scope.saveAndQuit, "label":"Sauvegarder et quitter"});
    
    /**********************Page control************************/
    $scope.showRightMenu = false;
    $scope.currentGame = GameService.getGame($stateParams.id);
    $scope.currentPage = GamePageService.getPage($scope.currentGame.currentPage);
    

    $scope.changePage = function(newPageId){
      $scope.currentPage = GamePageService.getPage(newPageId);
      $scope.currentGame.currentPage = newPageId;
    }
  });
