myVirtualStoryBookApp.directive('bookListCarousel', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/feature/common/template/BookListCarousel.template.html',
    scope: {
        list:"=",
        carouselIndex:'=carouselIndex'
    },
    controller: function($scope) {
      $scope.changeCarouselIndex = function(index) {
        $scope.carouselIndex = index;
      }
      
      $scope.newGame = function(book){
        $scope.$parent.newGame(book);
      }
    }
  };
});