myVirtualStoryBookApp.service("TransitionService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "/api/transition";
        
        service.addNewTransition = function(page){
            return $http.post(BASE_URL,{fromPage:page._id});
        }
        
        service.updateTransition = function(transition){
            return $http.patch(BASE_URL+"/"+transition._id, transition);
        }
        
        service.deleteTransition = function(transition){
            return $http.delete(BASE_URL+"/"+transition._id);
        }
        
        service.getTransitionsLinks = function(book){
            return $http.get(BASE_URL+"/links",{params:{bookId:book._id}});
        }
        
        return service;
    }
]);