'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayingGameController', function ($scope, $state, $stateParams, GameService, PageService, MusicPlayerService) {

    $scope.showRightMenu = false;
    $scope.pageLoading = true;
    
    GameService.getGame($stateParams.id).success(function(game){
      $scope.currentGame = game;
      PageService.getPage($scope.currentGame.current_page.id).success(function(page){
        $scope.currentPage = page;
        $scope.pageLoading = false;
        MusicPlayerService.play(page.background_music);
      });
    });
    
    $scope.changePage = function(newPageId){
      $scope.pageLoading = true;
      PageService.getPage(newPageId).success(function(page){
        $scope.currentPage = page;
        $scope.currentGame.current_page = page;
        $scope.pageLoading = false;
        GameService.saveGame($scope.currentGame);
        if(angular.isDefined(page.background_music) && MusicPlayerService.music.title !== page.background_music && MusicPlayerService.music.playing){
          MusicPlayerService.play(page.background_music);
        }
      });
    }
    
  });
