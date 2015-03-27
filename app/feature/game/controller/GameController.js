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
    PageService.getPage($scope.currentGame.currentPage).success(function(page){
      $scope.currentPage = page;
    });
    

    $scope.changePage = function(newPageId){
      PageService.getPage(newPageId).success(function(page){
        $scope.currentPage = page;
        $scope.currentGame.currentPage = newPageId;
      });
    }
  });
