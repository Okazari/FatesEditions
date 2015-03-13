myVirtualStoryBookApp.service("BookService", ["$http",
    function($http){
        
        var service = {};
 
        service.getPublishedBooks = function(){
            return $http.get("http://myvirtualstorybook-okazari-4.c9.io/symfony/web/app_dev.php/books");
        }
 
        service.getPlayerBooks =function(playerId){
            return $http.get("http://myvirtualstorybook-okazari-4.c9.io/symfony/web/app_dev.php/players/"+playerId+"/books");
        }
 
        return service;
    }
]);