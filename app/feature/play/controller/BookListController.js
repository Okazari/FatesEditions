'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('BookListController', function ($scope, $state, PlayerService, BookService, GameService) {
    
    $scope.bookListIndex = 2;
    $scope.booksLoading = true;
    $scope.carouselIndex = 0;
    BookService.getPublishedBooks().success(function(books){
      $scope.books = books;
      $scope.booksLoading = false;
    });
    
    $scope.isAuthor = function(book){
      return PlayerService.player.isAuthor(book);
    }
    
    $scope.newGame = function(book){
      PlayerService.player.newGame(book).success(function(newGame){
        $state.go("app.play.playing",{id:newGame.id});
      });
    }
    
});
