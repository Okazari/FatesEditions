'use strict';

angular.module('myVirtualStoryBookApp')
    .controller('AuthorHeaderController', function ($scope) {
        $scope.MenuItems = [];

        $scope._createMenuItem = function(url,label){
            return {"url":url, "label":label};
        };

        $scope.currentMod = $scope._createMenuItem("","Mode Auteur");

        $scope.MenuItems.push($scope._createMenuItem("author/profile","Mon profil"));
        $scope.MenuItems.push($scope._createMenuItem("author/mybooks","Mes Livres"));
        $scope.MenuItems.push($scope._createMenuItem("player","Changer de mode"));
        
    });
