'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('WritePageController', function ($scope, IntroService, $state, $stateParams, TransitionService, TransitionHelperService, BookService, PageService, MusicPlayerService) {

    $scope.music = MusicPlayerService.music;
    $scope.conditions = TransitionHelperService.conditions;
    $scope.effects = TransitionHelperService.effects;

    $scope.savePage = function(){
      PageService.updatePage($scope.page);
      if(MusicPlayerService.isValidUrl($scope.page.backgroundMusic)){
        MusicPlayerService.load($scope.page.backgroundMusic);
      }else{
        MusicPlayerService.music.unload();
      }
    }
    
    $scope.pageLoading=true;
    $scope.transitionsLoading=true;
    
    PageService.getPage($stateParams.id).success(function(page){
      $scope.page = page;
      $scope.pageLoading=false;
      if(MusicPlayerService.isValidUrl($scope.page.backgroundMusic)){
        MusicPlayerService.load($scope.page.backgroundMusic);
      }else{
        MusicPlayerService.music.unload();
      }
      PageService.getPageTransitions($scope.page).success($scope.updateTransitions);
      BookService.getBookPages($scope.page.bookId).success(function(pages){
        $scope.pages = pages;
        $scope.transitionsLoading=false;
      });
      BookService.getBook($scope.page.bookId).success(function(book){
        $scope.book = book;
      });
    });
    
    $scope.addNewTransition = function(){
      $scope.transitionsLoading=true;
      TransitionService.addNewTransition($scope.page).success(function(){
        PageService.getPageTransitions($scope.page).success($scope.updateTransitions);
      });
    };
    
    $scope.updateTransitions = function(transitions){
      $scope.page.transitions = transitions;
      $scope.transitionsLoading=false;
    }
    
    $scope.deleteTransition = function(transition){
      $scope.transitionsLoading=true;
      TransitionService.deleteTransition(transition).success(function(){
        PageService.getPageTransitions($scope.page).success($scope.updateTransitions);
      });
    };
    
    $scope.saveTransition = function(transition){
      TransitionService.updateTransition(transition);
    }
    
    $scope.addNewPage = function(transition){
      PageService.addBookNewPage($scope.book).success(function(page){
        transition.toPage = page._id;
        TransitionService.updateTransition(transition).success(function(){
          $state.go("app.write.page",{id:page._id});
        });
      });
    }
    
   IntroService.launchTour("writepagetour");
    
  });
