'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('HeaderController', function ($scope, $state) {
    $scope.MenuItems = [];
    
    $scope._createMenuItem = function(url,label,isActive){
        return {"url":url, "label":label};
    };
    
    $scope.MenuItems.push($scope._createMenuItem("accueil","Accueil"));
    $scope.MenuItems.push($scope._createMenuItem("meslivres","Mes Livres"));
    $scope.MenuItems.push($scope._createMenuItem("apropos","A propos"));
    
  });
