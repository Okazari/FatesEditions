'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerProfileController', function ($scope, $state, $modal, $filter, PlayerService, BookService, GameService) {

    $scope.playGame = function(game){
      $state.go("game",{id:game.id});
    }
    $scope.editBook = function(book){
      $state.go("editionbook",{id:book.id});
    }
    $scope.updateBooks = function(){
      $scope.booksLoading = true;
      PlayerService.getConnectedPlayerBooks().success(function(books){
        $scope.books = books;
        $scope.booksLoading = false;
        $scope.firstLoad = false;
      });
    }
    $scope.openDeleteBookModal = function(book){
      $scope.modalYesNo = {
        title:"Demande de confirmation",
        content:"Voulez vous supprimer definitivement le livre '"+book.name+"' ?",
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
    
    $scope.openChooseBookModal = function(){
      $scope.modalPickOne = {
        title:"Publier un brouillon",
        content:"Choisissez un brouillon à publier",
        choice: {
          items : $filter('filter')($scope.books,{draft:true})
        },
        validate:{
          label:"Valider",
          action: function(){
            BookService.publishBook($scope.modalPickOne.choice.result).success($scope.updateBooks);
            $scope.modal.close();
          }
        },
        cancel:{
          label:"Annuler",
          action: function(){
            $scope.modal.dismiss();
          }
        }
      }
      $scope.modal = $modal.open({
        templateUrl: 'feature/common/modal/ModalPickOne.template.html',
        scope: $scope
      });
    }
    
    $scope.newBook = function(){
      PlayerService.createBookForCurrentUser().success($scope.updateBooks);
    }

    $scope.newGame = function(book){
      var newGame = GameService.newGame("Stub",book);
      $state.go("game",{id:newGame.id});
    }

    $scope.firstLoad = true;
    $scope.updateBooks();
    $scope.games = PlayerService.getConnectedPlayerGames();
    
  });
