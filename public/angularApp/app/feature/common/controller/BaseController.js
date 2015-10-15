'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('BaseController', function ($scope, $window, $state, $rootScope, IntroService, GenreService, ConnectionService, PlayerService, BookService, GameService, MusicPlayerService) {

    $scope.isMobile = $window.matchMedia("(max-width: 767px)").matches;
    if($scope.isMobile){
       $rootScope.sidebar = 'collapse';
    }else{
       $rootScope.sidebar = 'open';
    }

    if(!$window.localStorage.getItem('user')){
      $state.go('signin');
    }

    $scope.music = MusicPlayerService.music;

    $scope.newBook = function(){
      PlayerService.player.createBook().success(function(book){
        $state.go("app.write.book",{id:book._id});
      });
    }
    
    $scope.logout = function(){
        ConnectionService.logout();
        $state.go('signin');
    };
    
    $scope.toggleSlidebar = function(force){
      if(force || $scope.isMobile){
        if($rootScope.sidebar === 'open'){
          $rootScope.sidebar = 'collapse';
        } 
        else{
          $rootScope.sidebar = 'open';
        }
      }
    }
    
    $scope.showSlidebar = function(){
        $rootScope.sidebar = 'open';
    }
    
    $scope.hideSlidebar = function(){
        $rootScope.sidebar = 'collapse';
    }
    
    $scope.playerDrafts = PlayerService.player.books;
    $scope.loaders = PlayerService.player.loaders;
    $scope.genres = GenreService.genres;
    
    IntroService.launchTour("app");
    
});
