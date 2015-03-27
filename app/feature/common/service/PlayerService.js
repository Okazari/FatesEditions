myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService','$http','$window','$state',
    function(BookService,GameService, $http, $window, $state){
        
        var service = {};
        
        var BASE_URL = "/symfony/web/app_dev.php";
        
        service.currentPlayerUsername = $window.sessionStorage.getItem('playerUsername');
        if(service.currentPlayerUsername === null){
            $state.go('signin');
        }
        service.getCurrentPlayer = function(){
            return $http.get(BASE_URL+"/user")
        };
        
        service.setCurrentPlayerUsername = function(username){
            service.currentPlayerUsername = username
        }
        
        service.login = function(credentials){
            return $http.post(BASE_URL+"/login", credentials)
        }
        
        service.logout = function(){
            return $http.post(BASE_URL+"/logout")
        }
        
        service.getPlayerByName = function(name){
            return $http.get(BASE_URL+"/players/"+name);
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
        
        service.newGame = function(book){
            return $http.post(BASE_URL+"/players/"+service.currentPlayerUsername+"/games",{bookId:book.id});
        }
        
        return service;
    }
]);