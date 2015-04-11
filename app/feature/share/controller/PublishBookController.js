'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PublishBookController', function ($scope, $interval, $state, PlayerService, BookService, GameService) {

    $scope.books = PlayerService.player.books;
    $scope.init = function(){
      $scope.progressBarStyle = "primary";
      $scope.loading = 0;
      $scope.publishedOnce = false;
    }
    
    $scope.publishBook = function(book){
      $scope.publishedOnce = true;
      $scope.progressBarStyle = "primary";
      $scope.loading = 0;
      $interval(function(){
        $scope.loading += 25;
      }, 500, 4).then(function(){
        BookService.publishBook(book.id).success(function(){
          PlayerService.player.refreshBooks(false);
          $scope.progressBarStyle = "success";
        });
      });
    };
    
    $scope.init();
});