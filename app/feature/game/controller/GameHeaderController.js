'use strict';

angular.module('myVirtualStoryBookApp')
    .controller('GameHeaderController', function ($scope) {
        $scope.MenuItems = [];

        $scope._createMenuItem = function(url,label){
            return {"url":url, "label":label};
        };

        $scope.currentMod = $scope._createMenuItem("","Mode Jeu");

        $scope.MenuItems.push($scope._createMenuItem("player","Sauvegarder et quitter"));
        
    });
