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
    $scope.pageLoading = true;
    GameService.getGame($stateParams.id).success(function(game){
      $scope.currentGame = game;
      PageService.getPage($scope.currentGame.current_page.id).success(function(page){
        $scope.currentPage = page;
        $scope.pageLoading = false;
      });
    });
    
    $scope.changePage = function(newPageId){
      $scope.pageLoading = true;
      PageService.getPage(newPageId).success(function(page){
        $scope.currentPage = page;
        $scope.currentGame.current_page = page;
        $scope.pageLoading = false;
      });
    }
  });
