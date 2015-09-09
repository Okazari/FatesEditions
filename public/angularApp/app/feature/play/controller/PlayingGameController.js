'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayingGameController', function ($scope, $state, $stateParams, GameService, PageService, MusicPlayerService) {

    $scope.showRightMenu = false;
    $scope.pageLoading = true;
    $scope.backgroundMusicFirstLoad = true;
    
    GameService.getGame($stateParams.id).success(function(game){
      $scope.currentGame = game;
      PageService.getPage($scope.currentGame.current_page.id).success(function(page){
        $scope.currentPage = page;
        $scope.pageLoading = false;
        if(angular.isDefined(page.background_music) && MusicPlayerService.isValidUrl(page.background_music)){ 
          MusicPlayerService.play(page.background_music);
          $scope.backgroundMusicFirstLoad = false;
        };
      });
    });
    
    $scope.changePage = function(newPageId){
      $scope.pageLoading = true;
      PageService.getPage(newPageId).success(function(page){
        $scope.currentPage = page;
        $scope.currentGame.current_page = page;
        $scope.pageLoading = false;
        GameService.saveGame($scope.currentGame);
        if(angular.isDefined(page.background_music) 
            && !MusicPlayerService.music.isSame(page.background_music) 
            && MusicPlayerService.isValidUrl(page.background_music)){
          if(MusicPlayerService.music.playing || $scope.backgroundMusicFirstLoad){
            MusicPlayerService.play(page.background_music);
            $scope.backgroundMusicFirstLoad = false;
          }else{
            MusicPlayerService.load(page.background_music);
          }
        }
      });
    }
    
  });
