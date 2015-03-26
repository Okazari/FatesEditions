'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, $timeout, ConnectionService) {

    $scope.authentify = function(){
        if($scope.loginForm.$valid){
            $scope.displayMessage = true;
            $scope.displayMessageText = "Connexion en cours";
            ConnectionService.login($scope.user).success(function(){
                $state.go('player.myprofile');
            }).error($scope._displayError);
        }
    }
    
    $scope._displayError = function(){
        $scope.displayMessage = true;
        $scope.displayMessageText = "Nom d'utilisateur ou mot de passe incorrect";
    }
  });
