'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('RecoverController', function ($scope, $state, $location, $window, ConnectionService, PlayerService) {

    if ($location.protocol() != 'https'){
            $window.location.href = $location.absUrl().replace('http', 'https');
    };
    
    $scope.state = 'init';

    $scope.recover = function(){
        if($scope.loginForm.$valid){
            $scope.state = 'sending';
            ConnectionService.recover($scope.email).success(function(player){
                $scope.state = 'success';
            }).error(function(){
                $scope.state = 'error';
            });
        }
    }
    
  });
