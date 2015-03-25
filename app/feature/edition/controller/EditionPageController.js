'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('EditionPageController', function ($scope, $state, $stateParams, BookService, PageService, D3Service) {
    /**********************Header control***********************/
    $scope.MenuItems = [];
    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };
    $scope.save = function(){
      PageService.updatePage($scope.page).success(function(){
        alert("Sauvegardé !");
      });
    }
    $scope.saveAndQuit = function(){
      PageService.updatePage($scope.page).success(function(){
        $scope.quit();
      });
    }
    $scope.discardAndQuit = function(){
      $scope.quit();
    }
    $scope.quit = function(){
      $state.go('editionbook',{id:$scope.page.book.id});
    }
    $scope.MenuItems.push({"click":$scope.save, "label":"Sauvegarder"});
    $scope.MenuItems.push({"click":$scope.saveAndQuit, "label":"Sauvegarder et quitter"});
    $scope.MenuItems.push({"click":$scope.discardAndQuit, "label":"Annuler et quitter"});
    
    /**********************Page control************************/
    
    PageService.getPage($stateParams.id).success(function(page){
      $scope.page = page;
      BookService.getBookPages($scope.page.book.id).success(function(pages){
        $scope.pages = pages;
        $scope.buildTransitionsSelects();
      });
    });
    
    $scope.buildTransitionsSelects = function(){
      $scope.page.transitions.forEach(function(transition){
        if(angular.isDefined(transition.to_page)) transition.selectedPage = transition.to_page.id;
      });
    };
    
    $scope.getPageArrayKey = function(pageId){
      for (var i = 0; i < $scope.pages.length; i++){
        if($scope.pages[i].id === pageId) return i;
      };
    };
    
    $scope.addNewTransition = function(){
      PageService.updatePage($scope.page).success(function(){
        PageService.addNewTransition($scope.page).success(function(){
          PageService.getTransitions($scope.page).success($scope.updateTransitions);
        });
      });
    };
    
    $scope.updateTransitions = function(transitions){
      $scope.page.transitions = transitions;
    }
    
    $scope.deleteTransition = function(transition){
      PageService.updatePage($scope.page).success(function(){
        PageService.deleteTransition(transition).success(function(){
          PageService.getTransitions($scope.page).success($scope.updateTransitions);
        });
      })
    };
    
  });
