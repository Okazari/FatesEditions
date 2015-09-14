'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('GameListController', function ($scope, $state, $mdSidenav, $modal, $filter, PlayerService, PageService, BookService, GameService) {

    $scope.updateGames = function(){
      $scope.gamesLoading = true;
      PlayerService.player.getGames().success(function(games){
        $scope.games = games;
        angular.forEach($scope.games,function(game){
          PageService.getPage(game.currentPageId).success(function(page){
            game.currentPage = page;
          })
        })
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
        templateUrl: 'app/feature/common/modal/ModalYesNo.template.html',
        scope: $scope
      });
    }
    
    $scope.firstLoad = true;
    $scope.updateGames();
    
  });
