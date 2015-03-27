myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService','$http','$window','$state',
    function(BookService,GameService, $http, $window, $state){
        
        var service = {};
        
        service.currentPlayerUsername = $window.sessionStorage.getItem('playerUsername');
        if(service.currentPlayerUsername === null){
            $state.go('signin');
        }
        service.getCurrentPlayer = function(){
            return $http.get("/symfony/web/app_dev.php/user")
        };
        
        service.setCurrentPlayerUsername = function(username){
            service.currentPlayerUsername = username
        }
        
        service.login = function(credentials){
            return $http.post("/symfony/web/app_dev.php/login", credentials)
        }
        
        service.logout = function(){
            return $http.post("/symfony/web/app_dev.php/logout")
        }
        
        service.getPlayerByName = function(name){
            return $http.get("/symfony/web/app_dev.php/players/"+name);
        }
 
        service.getConnectedPlayerBooks = function(){
            return BookService.getPlayerBooks(service.currentPlayerUsername);
        }
 
        service.getConnectedPlayerGames = function(){
            return GameService.getPlayerGames(service.currentPlayerUsername);
        }
 
        service.setCurrentPlayer = function(player){
            service.currentPlayer = player;
        }
        
        service.createBookForCurrentUser = function(){
            return BookService.createPlayerBook(service.currentPlayerUsername);
        }
    
        service.isAuthor = function(username,book){
            return username === book.author.username;
        }
 
        service.isCurrentPlayerAuthor = function(book){
            return service.isAuthor(service.currentPlayerUsername,book);
        }
        
        return service;
    }
]);