'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerProfileController', function ($scope, $state, PlayerService, GameService) {
    PlayerService.getConnectedPlayerBooks().success(function(books){
      $scope.books = books;  
    });
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
