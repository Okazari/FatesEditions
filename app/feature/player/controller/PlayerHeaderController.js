'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerHeaderController', function ($scope, $state, PlayerService) {
    $scope.MenuItems = [];

    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };

    $scope.logout = function(){
      PlayerService.logout().success(function(){
        $state.go('signin');
      });
    };

    $scope.MenuItems.push($scope._createMenuItem("player.books","Les livres"));
    $scope.MenuItems.push($scope._createMenuItem("player.myprofile","Mon profil"));
    $scope.MenuItems.push({"click":$scope.logout, "label":"Se déconnecter"});
                
  });
