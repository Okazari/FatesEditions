'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SignUpController', function ($scope, $state, $location, $window, ConnectionService, PlayerService) {

    if ($location.protocol() != 'https'){
            $window.location.href = $location.absUrl().replace('http', 'https');
    };

    $scope.subscribe = function(){
        if($scope.loginForm.$valid){
            ConnectionService.subscribe(angular.copy($scope.user)).success(function(player){
                PlayerService.player.data = player;
                $window.localStorage.setItem('user',JSON.stringify(player.user));
                $window.localStorage.setItem('token',player.token);
                PlayerService.player.refreshBooks(true);
                $state.go('app.play.books');
            }).error($scope._displayError);
        }
    }
    
    $scope._displayError = function(response){
        $scope.displayMessage = true;
        $scope.displayMessageText = response.message;
    }
    
  });
