'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerBooksController', function ($scope, PlayerBooksService) {
    $scope.books = PlayerBooksService.getPublishedBook();
    $scope.displayedBook = $scope.books[0];
    $scope.selectBook = function(book){
      $scope.displayedBook = book;
    }
    
  });
