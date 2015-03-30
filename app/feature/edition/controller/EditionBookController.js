'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('EditionBookController', function ($scope, $state, $stateParams, BookService, PageService, D3Service, $timeout) {
    /**********************Header control***********************/
    $scope.MenuItems = [];
    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };
    $scope.save = function(){
      BookService.updateBook($scope.book).success(function(){
        $scope.addAlert('success','Livre sauvegardé');
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
    
    BookService.getBook($stateParams.id).success(function(book){
      $scope.book = book;
      if(angular.isDefined(book.genre))$scope.selectedGenre = book.genre.id;
      $scope._release = !book.draft;
      $scope.init = true;
      //if(angular.isDefined(book.to_page)) transition.selectedPage = transition.to_page.id;
      BookService.getBookPages($stateParams.id).success($scope.updatePages);
    });

    $scope.updatePages = function(pages){
      $scope.pages = pages;
      $scope._buildD3Graph();
    };
    
    
    
    $scope._buildD3Graph = function(){
      D3Service.clear();
      D3Service.buildLinksFromBookPages($scope.pages);
      D3Service.init("#pageGraph",500,400);
    };
    
    $scope.genres = BookService.getAllGenre().success(function(genres){
      $scope.genres = genres;
    });
    
    $scope.addNewPage = function(){
      BookService.addNewPage($scope.book).success(function(page){
        $state.go("editionpage",{id:page.id});
      });
    }
    
    $scope.deletePage = function(page){
      PageService.deletePage(page).success(function(){
        BookService.getBookPages($stateParams.id).success($scope.updatePages)
      });
    }
    
    $scope.editPage = function(page){
      $state.go("editionpage",{id:page.id});
    }
    
    $scope.alerts = [
      { type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];
    
    $scope.addAlert = function(type, message) {
      $scope.alerts.push({type:type, msg:message});
      $timeout(function(){
        $scope.alerts.pop();
      },2000);
    };
  
    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };
});
