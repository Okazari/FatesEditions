'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('EditionPageController', function ($scope, $state, $stateParams, BookService, D3Service) {
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
    
    BookService.getPage($stateParams.id).success(function(page){
      $scope.page = page;
    });
    
  });
