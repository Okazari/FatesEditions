myVirtualStoryBookApp.directive('commonCarousel', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/feature/common/template/CommonCarousel.template.html',
    scope: {
        list:'=',
        carouselIndex:'=carouselIndex'
    },
    controller: function($scope) {
      $scope.changeCarouselIndex = function(index) {
        $scope.carouselIndex = index;
      }
    }
  };
});