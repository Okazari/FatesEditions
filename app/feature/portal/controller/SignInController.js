'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignInController', function ($scope, $state, UserService) {

    var ERROR_CLASS = "has-error";
    var ERROR_MESSAGE_CANNOT_BE_EMPTY = "Tout les champs doivent être remplis";
    var ERROR_MESSAGE_BAD_AUTHENTICATION = "Nom d'utilisateur/Mot de passe incorrect.";
    var INPUT_USERNAME_ORDER = 0;
    var INPUT_PASSWORD_ORDER = 1;
    $scope.showErrorMessage = false;
    $scope.experience = "player.mygames";
    
    
    $scope.inputs = [{
                      label : "Nom d'utilisateur",
                      class : "",
                      placeholder : "Nom d'utilisateur",
                      var : "",
                      type : "text",
                      id : "username"
                    },
                    {
                      label : "Mot de passe",
                      class : "",
                      placeholder : "*********",
                      var : "",
                      type : "password",
                      id : "password"
                    }
    ];

    $scope.signIn = function(){
        try{
            var connectedUser = UserService.authentify($scope.inputs[INPUT_USERNAME_ORDER].var, $scope.inputs[INPUT_PASSWORD_ORDER].var);
        }catch(err){
            if(err === 400){
                $scope.showErrorMessage = true;
                $scope.errorMessage = ERROR_MESSAGE_CANNOT_BE_EMPTY;
            }else if(err === 403){
                $scope.showErrorMessage = true;
                $scope.errorMessage = ERROR_MESSAGE_BAD_AUTHENTICATION;
            }
        }
        console.log(connectedUser);
        if (connectedUser !== undefined){
            $state.go($scope.experience);
        }
    }

    $scope.errorInputIfEmptyVar = function(input){
        if(input.var === ""){
            input.class = ERROR_CLASS;
        }else{
            input.class = "";
        }
        $scope.checkDisplayErrorMessage(ERROR_MESSAGE_CANNOT_BE_EMPTY);
    }

    $scope.checkDisplayErrorMessage = function(message){
        var show = false;
        angular.forEach($scope.inputs,function(input){
           if(input.class === ERROR_CLASS)
             show = true;
        });
        $scope.showErrorMessage = show;
        $scope.errorMessage = message;
    }

  });
