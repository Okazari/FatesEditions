'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerProfileController', function ($scope, $state, PlayerService, GameService) {
    $scope.books = PlayerService.getConnectedPlayerDrafts();
    $scope.games = PlayerService.getConnectedPlayerGames();
    //a externaliser dans un filtre
    $scope.genreIconMap = {"romance" : "glyphicon-heart",
                           "rpg": "glyphicon-tower",
                           "aventure": "glyphicon-road",
                           "action": "glyphicon-fire"
                          };
    $scope.getGenreIcon = function(genre){
      return $scope.genreIconMap[genre.toLowerCase()];
    }
    $scope.playGame = function(id){
      $state.go("game",{id:id});
    }
  });
