'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerBooksController', function ($scope, $state, BookService, GameService) {
    $scope.books = BookService.getPublishedBooks();
    $scope.displayedBook = $scope.books[0];
    
    //a externaliser dans un filtre
    $scope.genreIconMap = {"romance" : "glyphicon-heart",
                           "rpg": "glyphicon-tower",
                           "aventure": "glyphicon-road",
                           "action": "glyphicon-fire"
                          };
    $scope.selectBook = function(book){
      $scope.displayedBook = book;
    }
    $scope.getGenreIcon = function(genre){
      return $scope.genreIconMap[genre.toLowerCase()];
    }
    $scope.newGame = function(book){
      var newGame = GameService.newGame("Stub",book);
      $state.go("game",{id:newGame.id});
    }
  });
