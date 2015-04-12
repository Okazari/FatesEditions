myVirtualStoryBookApp.directive('gameListCarousel', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/feature/common/template/GameListCarousel.template.html',
    scope: {
        list:"=",
        carouselIndex:'=carouselIndex'
    },
    controller: function($scope) {
      $scope.changeCarouselIndex = function(index) {
        $scope.carouselIndex = index;
      }
    }
  };
});