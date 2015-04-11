'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PublishBookController', function ($scope, $interval, $state, PlayerService, BookService, GameService) {

    $scope.books = PlayerService.player.books;
    $scope.loading = 0;
    $scope.publishBook = function(book){
      $scope.loading = 0;
      $interval(function(){
        $scope.loading += 50;
      }, 50, 100);
      
      BookService.publishBook(book.id).success(function(){
        PlayerService.player.refreshBooks(false);
      });
    };
    
});
