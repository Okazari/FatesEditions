'use strict';

angular.module('myVirtualStoryBookApp')
    .controller('AuthorHeaderController', function ($scope) {
        $scope.MenuItems = [];



        $scope._createMenuItem = function(url,label){
            return {"url":url, "label":label};
        };

        $scope.changeMod = $scope._createMenuItem("player","Mode Joueur");

        $scope.MenuItems.push($scope._createMenuItem("author/mybooks","Mes Livres"));
    });
