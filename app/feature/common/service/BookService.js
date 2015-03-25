myVirtualStoryBookApp.service("BookService", ["$http",
    function($http){
        
        var service = {};
 
        var BASE_URL = "/symfony/web/app_dev.php";
 
        service.getPublishedBooks = function(){
            return $http.get(BASE_URL+"/books");
        }
 
        service.getPlayerBooks = function(playerId){
            return $http.get(BASE_URL+"/players/"+playerId+"/books");
        }
 
        service.createPlayerBook = function(playerId){
            return $http.post(BASE_URL+"/players/"+playerId+"/books");
        }
 
        service.deleteBook = function(book){
            return $http.delete(BASE_URL+"/books/"+book.id);
        }
 
        service.getBook = function(bookId){
            return $http.get(BASE_URL+"/books/"+bookId);
        }
 
        service.getAllGenre = function(){
            return $http.get(BASE_URL+"/genres");
        }
 
        service.updateBook = function(book){
            return $http.patch(BASE_URL+"/books/"+book.id, book);
        }
 
        service.getBookPages = function(bookId){
            return $http.get(BASE_URL+"/books/"+bookId+"/pages");
        }
        
        service.publishBook = function(bookId){
            return $http.post(BASE_URL+"/books/"+bookId+"/publish");
        }
 
        service.addNewPage = function(book){
            return $http.post(BASE_URL+"/books/"+book.id+"/pages");
        }
        
        return service;
    }
]);