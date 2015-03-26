myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService','$http',
    function(BookService,GameService, $http){
        
        var service = {};
        
        service.getCurrentPlayer = function(){
            return $http.get("/symfony/web/app_dev.php/user")
        };
        
        service.promise = service.getCurrentPlayer().success(function(player){
            service.currentPlayer = player;
        });
        
        service.login = function(){
            return $http.post("/symfony/web/app_dev.php/login")
        }
        
        service.getPlayerByName = function(name){
            return $http.get("/symfony/web/app_dev.php/players/"+name);
        }
 
        service.getConnectedPlayerBooks = function(){
            return BookService.getPlayerBooks(service.currentPlayer.username);
        }
 
        service.getConnectedPlayerGames = function(){
            return GameService.getPlayerGames(service.currentPlayer.username);
        }
 
        service.setCurrentPlayer = function(player){
            service.currentPlayer = player;
        }
        
        service.createBookForCurrentUser = function(){
            return BookService.createPlayerBook(service.currentPlayer.username);
        }
    
        service.isAuthor = function(author,book){
            return author.username === book.author.username;
        }
 
        service.isCurrentPlayerAuthor = function(book){
            return service.isAuthor(service.currentPlayer,book);
        }
        
        return service;
    }
]);