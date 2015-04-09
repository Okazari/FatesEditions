'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('BookListController', function ($scope, $state, PlayerService, BookService, GameService) {

    $scope.booksLoading = true;
    BookService.getPublishedBooks().success(function(books){
      $scope.books = books;
      $scope.booksLoading = false;
    });
    
    $scope.isAuthor = function(book){
      return PlayerService.isCurrentPlayerAuthor(book);
    }
    
    $scope.newGame = function(book){
      PlayerService.newGame(book).success(function(newGame){
        $state.go("app.play.game",{id:newGame.id});
      });
    }
  });
