'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameController', function ($scope, $state, $stateParams, GameService, PageService) {
    /**********************Header control***********************/
    $scope.MenuItems = [];
    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };
    $scope.saveAndQuit = function(){
      GameService.saveGame($scope.currentGame);
      $state.go('player.myprofile',{reload:true})
    }
    $scope.MenuItems.push({"click":$scope.saveAndQuit, "label":"Sauvegarder et quitter"});
    
    /**********************Page control************************/
    $scope.showRightMenu = false;
    $scope.currentGame = GameService.getGame($stateParams.id);
    $scope.currentPage = PageService.getPage($scope.currentGame.currentPage);
    

    $scope.changePage = function(newPageId){
      $scope.currentPage = PageService.getPage(newPageId);
      $scope.currentGame.currentPage = newPageId;
    }
  });
