'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, $timeout, PlayerService) {

    $scope.authentify = function(){
        if($scope.loginForm.$valid){
            $scope.displayMessage = true;
            $scope.displayMessageText = "Connexion en cours";
            PlayerService.getPlayerByName($scope.user.username).success($scope._tryAuthenticate).error($scope._displayError);
        }
    }
    
    $scope._tryAuthenticate = function(player){
        if(player.password !== $scope.user.password){
            $scope._displayError();
        } 
        else{
            PlayerService.setCurrentPlayer(player);
            $state.go('player.myprofile');
        }
    }
    
    $scope._displayError = function(){
        $scope.displayMessage = true;
        $scope.displayMessageText = "Nom d'utilisateur ou mot de passe incorrect";
    }
  });
