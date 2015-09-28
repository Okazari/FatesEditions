'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('SandboxController', function ($scope) {
    
    var standardStep = 10;
    var borderBot = 500;
    var borderRight = 500;
    var guyWidth = 10;
    var guyHeight = 10;
    
    $scope.left = 0;
    $scope.top = 0;
    $scope.default = {
      "width" : guyWidth+"px",
      "height": guyHeight+"px",
      "background-color": "blue",
      "position": "absolute",
    }
    
    $scope.default.left = $scope.left+"px";
    $scope.myStyle = $scope.default;
    
    $scope.guys = []
    
    $scope.generateGuy = function(left,top,color){
      $scope.default["background-color"] = color;
      left = left + (guyWidth - left%guyWidth);
      top = top + (guyHeight - top%guyHeight);
      $scope.default.left = left+"px";
      $scope.default.top = top+"px";
      $scope.guys.push(JSON.parse(JSON.stringify({
        default:$scope.default,
        left: left,
        top: top,
        style:$scope.default
      })));
    }
    
    $scope.move = function(event,guy){
      
      if(event.keyCode === 113){
        $scope.moveLeft(guy);
      }
      else if(event.keyCode === 100){
        $scope.moveRight(guy);
      }
      else if(event.keyCode === 115){
        $scope.moveDown(guy);
      }
      else if(event.keyCode === 122){
        $scope.moveUp(guy);
      }
      console.log(guy);
    }
    
    $scope.moveRight = function(guy){
      if(guy.left + standardStep <= borderBot - guyWidth){
        guy.left += standardStep;
        guy.default.left = guy.left+"px";
        guy.style = guy.default;
      }
    }
    
    $scope.moveLeft = function(guy){
      if(guy.left - standardStep >= 0){
        guy.left -= standardStep;
        guy.default.left = guy.left+"px";
        guy.myStyle = guy.default;
      }
    }
    
    $scope.moveDown = function(guy){
      if(guy.top + standardStep <= borderBot - guyHeight){
        guy.top += standardStep;
        guy.default.top = guy.top+"px";
        guy.myStyle = guy.default;
      }
    }
    
    $scope.moveUp = function(guy){
      if(guy.top - standardStep >= 0){
        guy.top -= standardStep;
        guy.default.top = guy.top+"px";
        guy.myStyle = guy.default;
      }
    }
    
    
    
  });
