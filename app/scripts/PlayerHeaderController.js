'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('PlayerHeaderController', function ($scope) {
    $scope.MenuItems = [];



    $scope._createMenuItem = function(url,label){
        return {"url":url, "label":label};
    };

    $scope.changeMod = $scope._createMenuItem("author","Mode Auteur");

    $scope.MenuItems.push($scope._createMenuItem("player/mygames","Mes Parties"));
  });
