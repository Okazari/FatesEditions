'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerHeaderController', function ($scope) {
    $scope.MenuItems = [];

    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };

    $scope.currentMod = $scope._createMenuItem("","Mode Joueur");

    $scope.MenuItems.push($scope._createMenuItem("player/books","Les livres"));
    $scope.MenuItems.push($scope._createMenuItem("player/mygames","Mes Parties"));
    $scope.MenuItems.push($scope._createMenuItem("author","Changer de mode"));

  });
