'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerHeaderController', function ($scope, $state) {
    $scope.MenuItems = [];
    
    $scope._createMenuItem = function(url,label,isActive){
        return {"url":url, "label":label};
    };
    
    $scope.MenuItems.push($scope._createMenuItem("player/home","Accueil"));
    $scope.MenuItems.push($scope._createMenuItem("player/mybooks","Mes Livres"));
    $scope.MenuItems.push($scope._createMenuItem("player/about","A propos"));
    
  });
