'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerProfileController', function ($scope, $state, $modal, D3Service, PlayerService, BookService, GameService) {

    $scope.playGame = function(game){
      $state.go("game",{id:game.id});
    }
    $scope.editBook = function(book){
      $state.go("editionbook",{id:book.id});
    }
    $scope.updateBooks = function(){
      PlayerService.getConnectedPlayerBooks().success(function(books){
        $scope.books = books;  
      });
    }
    $scope.openDeleteBookModal = function(book){
      $scope.modalYesNo = {
        title:"Demande de confirmation",
        content:"Voulez vous supprimer definitivement le brouillon '"+book.name+"' ?",
        yes:{
          label:"Oui",
          action: function(){
            BookService.deleteBook(book).success($scope.updateBooks);
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
        templateUrl: 'feature/common/modal/ModalYesNo.template.html',
        scope: $scope
      });
    }
    
    $scope.newBook = function(){
      PlayerService.createBookForCurrentUser().success($scope.updateBooks);
    }

    $scope.updateBooks();
    $scope.games = PlayerService.getConnectedPlayerGames();
    
    D3Service.addLink("Coco","Titi");
    D3Service.init(".svg-container",200,200);
  });
