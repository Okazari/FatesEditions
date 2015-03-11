'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, $timeout, UserService) {

    $scope.authentify = function(){
        if($scope.loginForm.$valid){
            $scope.displayMessage = true;
            $scope.displayMessageText = "Connexion en cours";
            try{
                UserService.authentify($scope.user.username,$scope.user.password);
                $state.go('player.books')
            }catch (err){
                $scope.displayMessage = true;
                $scope.displayMessageText = "Nom d'utilisateur ou mot de passe incorrect";
            }
        }
    }
    
  });
