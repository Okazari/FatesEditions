myVirtualStoryBookApp.service("GenreService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "/api/genre";
        
        service.genres = {};
        
        service.genres.list = {};
        
        $http.get(BASE_URL).success(function(genres){
            angular.forEach(genres,function(genre){
               service.genres.list[genre._id] = genre;
            });
               console.log(service.genres);
           //service.genres.list = genres;
        });
        
        return service;
    }
]);