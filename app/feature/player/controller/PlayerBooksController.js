'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerBooksController', function ($scope, $state, PlayerService, BookService, GameService) {

    BookService.getPublishedBooks().success(function(books){
      $scope.books = books;
    });
    
    //a externaliser dans un filtre
    $scope.genreIconMap = {"romance" : "glyphicon-heart",
                           "rpg": "glyphicon-tower",
                           "aventure": "glyphicon-road",
                           "action": "glyphicon-fire"
                          };
    $scope.getGenreIcon = function(genre){
      return $scope.genreIconMap[genre.toLowerCase()];
    }
    
    $scope.isAuthor = function(book){
      return PlayerService.isCurrentPlayerAuthor(book);
    }
    
    $scope.newGame = function(book){
      var newGame = GameService.newGame("Stub",book);
      $state.go("game",{id:newGame.id});
    }
  });
