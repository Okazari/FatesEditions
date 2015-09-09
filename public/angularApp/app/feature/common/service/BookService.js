myVirtualStoryBookApp.service("BookService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "/api/book";
        
        service.getUserBooks = function(userId){
            return $http.get(BASE_URL,{params:{userId: userId}});
        }
        
        service.getPublishedBooks = function(){
            return $http.get(BASE_URL,{params:{draft: false}});
        }
        
        service.createBook = function(userId){
            return $http.post(BASE_URL,{"userId":userId});
        }
        
        service.getBook = function(bookId){
            return $http.get(BASE_URL+"/"+bookId);
        }
        
        service.getAllGenre = function(){
            return $http.get("/api/genre");
        }
        
        service.getBookPages = function(bookId){
            return $http.get(BASE_URL+"/"+bookId+"/page");
        }
        
        service.updateBook = function(book){
            return $http.patch(BASE_URL+"/"+book._id, book);
        }
        
        service.deleteBook = function(book){
            return $http.delete(BASE_URL+"/"+book._id);
        }
        
        return service;
    }
]);