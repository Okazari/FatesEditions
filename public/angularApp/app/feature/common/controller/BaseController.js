'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('BaseController', function ($scope, $state, $rootScope, PlayerService, BookService, GameService, MusicPlayerService) {

    $rootScope.sidebar = 'open';

    $scope.music = MusicPlayerService.music;

    $scope.newBook = function(){
      PlayerService.player.createBook().success(function(book){
        $state.go("app.write.book",{id:book._id});
      });
    }
    
    $scope.logout = function(){
      PlayerService.logout().success(function(){
        $state.go('signin');
      });
    };
    
    $scope.toggleSlidebar = function(){
      if($rootScope.sidebar === 'open'){
        $rootScope.sidebar = 'collapse';
      } 
      else{
        $rootScope.sidebar = 'open';
      }
    }
    
    $scope.playerDrafts = PlayerService.player.books;
    $scope.loaders = PlayerService.player.loaders;
    
});
