'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameListController', function ($scope, $state, $mdSidenav, $modal, $filter, PlayerService, BookService, GameService) {

    $scope.updateGames = function(){
      $scope.gamesLoading = true;
      PlayerService.getConnectedPlayerGames().success(function(games){
        $scope.games = games;
        $scope.gamesLoading = false;
      });
    }
    
    $scope.openDeleteGameModal = function(game){
      $scope.modalYesNo = {
        title:"Demande de confirmation",
        content:"Voulez vous supprimer definitivement cette partie ?",
        yes:{
          label:"Oui",
          action: function(){
            GameService.deleteGame(game).success($scope.updateGames);
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
    
    $scope.firstLoad = true;
    $scope.updateGames();
    
  });
