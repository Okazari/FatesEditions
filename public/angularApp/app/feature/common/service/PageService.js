myVirtualStoryBookApp.service("PageService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "/api/page";
        
        service.addBookNewPage = function(book){
            return $http.post(BASE_URL,{bookId:book._id});
        }
        
        service.getPage = function(pageId){
            return $http.get(BASE_URL+"/"+pageId);
        }
        
        service.updatePage = function(page){
            return $http.patch(BASE_URL+"/"+page._id, page);
        }
        
        service.deletePage = function(page){
            return $http.delete(BASE_URL+"/"+page._id);
        }
        
        return service;
    }
]);