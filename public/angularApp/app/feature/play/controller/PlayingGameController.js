'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayingGameController', function ($scope, $state, $stateParams, BookService, GameService, PageService, MusicPlayerService) {

    var isLoading = function(){
      return $scope.gameLoading || $scope.bookLoading;
    }

    var refreshLoader = function(){
        $scope.pageLoading = isLoading();
    }
    
    $scope.showRightMenu = false;
    $scope.gameLoading = true;
    $scope.bookLoading = true;
    refreshLoader();
    $scope.backgroundMusicFirstLoad = true;
    
    GameService.getGame($stateParams.id).success(function(game){
      $scope.currentGame = game;
      PageService.getPage($scope.currentGame.currentPageId).success(function(page){
        $scope.currentPage = page;
        PageService.getPageTransitions(page).success(function(transitions){
          $scope.currentPage.transitions = transitions;
          $scope.gameLoading = false;
          refreshLoader();
          if(angular.isDefined(page.backgroundMusic) && MusicPlayerService.isValidUrl(page.backgroundMusic)){ 
            MusicPlayerService.play(page.backgroundMusic);
            $scope.backgroundMusicFirstLoad = false;
          };
        });
      });
      BookService.getBook($scope.currentGame.bookId).success(function(book){
         $scope.book = book;
         $scope.objects = {};
         $scope.stats = {};
         angular.forEach($scope.book.objects, function(object){
            $scope.objects[object._id] = object; 
         });
         angular.forEach($scope.book.stats, function(stat){
            $scope.stats[stat._id] = stat; 
         });
         $scope.bookLoading = false;
         refreshLoader();
      });
    });
    
    
    $scope.changePage = function(newPageId){
      $scope.pageLoading = true;
      PageService.getPage(newPageId).success(function(page){
        $scope.currentGame.currentPageId = page._id;
        PageService.getPageTransitions(page).success(function(transitions){
          $scope.currentPage = page;
          $scope.currentPage.transitions = transitions;
          $scope.currentGame = GameService.applyEffects($scope.currentGame,page);
          GameService.saveGame($scope.currentGame);
          $scope.pageLoading = false;
          if(angular.isDefined(page.backgroundMusic) 
              && !MusicPlayerService.music.isSame(page.backgroundMusic) 
              && MusicPlayerService.isValidUrl(page.backgroundMusic)){
            if(MusicPlayerService.music.playing || $scope.backgroundMusicFirstLoad){
              MusicPlayerService.play(page.backgroundMusic);
              $scope.backgroundMusicFirstLoad = false;
            }else{
              MusicPlayerService.load(page.backgroundMusic);
            }
          }
        });
      });
    }
    
    $scope.showTransition = GameService.showTransition;
    
    $scope.chooseTransition = function(transition){
      $scope.currentGame = GameService.applyEffects($scope.currentGame,transition);
      $scope.changePage(transition.toPage);
    }
    
  });
