'use strict';

angular.module('myVirtualStoryBookApp')
  .controller('BaseController', function ($scope, $state, PlayerService, BookService, GameService) {

    $scope.newBook = function(){
      PlayerService.createBookForCurrentUser().success(function(book){
        $state.go("app.write.book",{id:book.id});
      });
    }
    
});
