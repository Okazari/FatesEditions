'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('WriteController', function ($scope, $state, $stateParams, GenreService, PlayerService, BookService, D3Service) {
    
    $scope.genres = GenreService.genres;
    
    $scope.refreshCurrentBook = function(){
      BookService.getBook($stateParams.bookId).success(function(book){
        $scope.currentBook = book;
      })
    }
    
    $scope.refreshCurrentBook();
    
    $scope.saveBook = function(){
      BookService.updateBook($scope.book).success(function(){
        PlayerService.player.refreshBooks(false);
      });
    }
    
    $scope._buildD3Graph = function(){
      D3Service.clear();
      D3Service.buildLinksForBook($scope.book).then(function(){
        D3Service.init("#pageGraph",500,400);
      });
    };
    
    $scope.addNewPage = function(){
      BookService.addNewPage($scope.book).success($scope.refreshCurrentBook());
    }
    
    $scope.deletePage = function(page){
      PageService.deletePage(page).success(function(){
        BookService.getBookPages($stateParams.id).success($scope.updatePages)
      });
    }
});
