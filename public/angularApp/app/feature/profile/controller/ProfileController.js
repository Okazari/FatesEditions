'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('ProfileController', function ($scope, $state, $location, $window, ConnectionService, PlayerService) {

    if ($location.protocol() != 'https'){
            $window.location.href = $location.absUrl().replace('http', 'https');
    };
    
    $scope.state = 'init';

    $scope.changePassword = function(passwords){
        if($scope.loginForm.$valid){
            $scope.state = 'sending';
            ConnectionService.changePassword(passwords).success(function(player){
                $scope.state = 'success';
            }).error($scope._displayError);
        }
    }
    
    $scope._displayError = function(response){
        $scope.displayMessage = true;
        $scope.state= 'error';
        $scope.displayMessageText = response.message;
    }
    
  });
