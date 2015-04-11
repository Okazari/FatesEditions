myVirtualStoryBookApp.directive('commonCarousel', function() {
  return {
    restrict: 'E',
    templateUrl: '/app/feature/common/template/CommonCarousel.template.html',
    scope: {
        list:'='
    }
  };
});