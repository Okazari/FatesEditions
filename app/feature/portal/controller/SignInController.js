'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, UserService) {

    $scope.experience = "player";

    $scope.userNameInputClass = "has-error";
    $scope.passwordInputClass = "danger";
    $scope.userName = "";
    $scope.password = "";

    $scope.signIn = function(){
        try{
            var connectedUser = UserService.authentify($scope.userName, $scope.password);
        }catch(err){
            console.log(err);
        }
        console.log(connectedUser);
        if (connectedUser !== undefined){
            $state.go($scope.experience);
        }
    }

  });
