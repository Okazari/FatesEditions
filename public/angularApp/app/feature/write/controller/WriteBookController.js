'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('WriteBookController', function ($scope, $state, $stateParams, GenreService, PlayerService, BookService, PageService, D3Service) {
    
    $scope.bookLoading=true;
    $scope.pagesLoading=true;

    BookService.getBook($stateParams.id).success(function(book){
      $scope.book = book;
      if(angular.isDefined(book.genre))$scope.selectedGenre = book.genre.id;
      $scope._release = !book.draft;
      $scope.init = true;    
      $scope.bookLoading=false;
      BookService.getBookPages($stateParams.id).success($scope.updatePages);
    });

    $scope.updatePages = function(pages){
      $scope.pages = pages;
      $scope._buildD3Graph();
      $scope.pagesLoading=false;
    };
    
    $scope.saveBook = function(){
      BookService.updateBook($scope.book).success(function(){
        PlayerService.player.refreshBooks(false);
      });
    }
    
    $scope._buildD3Graph = function(){
      D3Service.clear();
      D3Service.buildLinksForBook($scope.book);
      D3Service.init("#pageGraph",500,400);
    };
    
    $scope.genres = GenreService.genres;
    
    $scope.addNewPage = function(){
      PageService.addBookNewPage($scope.book).success(function(page){
        $state.go("app.write.page",{id:page._id});
      });
    }
    
    $scope.deletePage = function(page){
      PageService.deletePage(page).success(function(){
        BookService.getBookPages($stateParams.id).success($scope.updatePages)
      });
    }
});
