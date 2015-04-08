'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, $location, $window, ConnectionService, PlayerService) {

    if ($location.protocol() != 'https'){
            $window.location.href = $location.absUrl().replace('http', 'https');
    };

    $scope.authentify = function(){
        if($scope.loginForm.$valid){
            $scope.displayMessage = true;
            $scope.displayMessageText = "Connexion en cours";
            ConnectionService.login(angular.copy($scope.user)).success(function(player){
                $window.sessionStorage.setItem("playerUsername",$scope.user.username);
                PlayerService.setCurrentPlayerUsername($scope.user.username);
                $state.go('player.myprofile');
            }).error($scope._displayError);
        }
    }
    
    $scope._displayError = function(){
        $scope.displayMessage = true;
        $scope.displayMessageText = "Nom d'utilisateur ou mot de passe incorrect";
    }
    
  });
