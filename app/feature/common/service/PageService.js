myVirtualStoryBookApp.service("PageService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "/symfony/web/app_dev.php";
 
        service.deletePage = function(page){
            return $http.delete(BASE_URL+"/pages/"+page.id);
        }
        
        service.getPage = function(pageId){
            return $http.get(BASE_URL+"/pages/"+pageId);
        }
        
        service.updatePage = function(page){
            return $http.patch(BASE_URL+"/pages/"+page.id,page);
        }
        
        service.addNewTransition = function(page){
            return $http.post(BASE_URL+"/pages/"+page.id+"/transitions");
        }
        
        service.deleteTransition = function(transition){
            return $http.delete(BASE_URL+"/transitions/"+transition.id);
        }
        
        service.getTransitions = function(page){
            return $http.get(BASE_URL+"/pages/"+page.id+"/transitions");
        }
        
        return service;
    }
]);