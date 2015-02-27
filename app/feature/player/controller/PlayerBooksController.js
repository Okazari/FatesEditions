'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerBooksController', function ($scope, PlayerBooksService) {
    $scope.books = PlayerBooksService.getPublishedBook();
    $scope.displayedBook = $scope.books[0];
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
  });
