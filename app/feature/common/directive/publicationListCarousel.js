myVirtualStoryBookApp.directive('publicationListCarousel', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/feature/common/template/PublicationListCarousel.template.html',
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