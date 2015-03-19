'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('EditionBookController', function ($scope, $state, $stateParams, BookService) {
    /**********************Header control***********************/
    $scope.MenuItems = [];
    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };
    $scope.save = function(){
      BookService.updateBook($scope.book).success(function(){
        alert("Sauvegardé !");
      });
    }
    $scope.saveAndQuit = function(){
      BookService.updateBook($scope.book).success(function(){
        $scope.quit();
      });
    }
    $scope.discardAndQuit = function(){
      $scope.quit();
    }
    $scope.quit = function(){
      $state.go('player.myprofile',{reload:true});
    }
    $scope.MenuItems.push({"click":$scope.save, "label":"Sauvegarder"});
    $scope.MenuItems.push({"click":$scope.saveAndQuit, "label":"Sauvegarder et quitter"});
    $scope.MenuItems.push({"click":$scope.discardAndQuit, "label":"Annuler et quitter"});
    
    /**********************Page control************************/
    $scope.book = BookService.getBook($stateParams.id).success(function(book){
      $scope.book = book;
      $scope.selectedGenre = book.genre.id;
      $scope._release = !book.draft;
    });
    
    $scope.genres = BookService.getAllGenre().success(function(genres){
      $scope.genres = genres;
    });
    
  });
