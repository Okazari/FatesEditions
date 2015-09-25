'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PublicationListController', function ($scope, $state,$mdSidenav, $modal, $filter, PlayerService, BookService, GameService) {

    $scope.editBook = function(book){
      $state.go("app.write.book",{id:book.id});
    }
    
    $scope.books = PlayerService.player.books;
    
    $scope.loaders = PlayerService.player.loaders;
    
    $scope.updateBooks = function(){
      PlayerService.player.refreshBooks();
    }
    
    $scope.openToDraftBookModal = function(book){
      $scope.modalYesNo = {
        title:"Demande de confirmation",
        content:"Êtes vous sur de vouloir repasser ce livre en brouillon, cela supprimera toutes les parties en cours sur ce livre : '"+book.name+"' ?",
        yes:{
          label:"Oui",
          action: function(){
            book.draft = true;
            BookService.updateBook(book).success($scope.updateBooks);
            $scope.modal.close();
          }
        },
        no:{
          label:"Non",
          action: function(){
            $scope.modal.dismiss()
          }
        }
      };
      $scope.modal = $modal.open({
        templateUrl: 'app/feature/common/modal/ModalYesNo.template.html',
        scope: $scope
      });
    }
    
  });
