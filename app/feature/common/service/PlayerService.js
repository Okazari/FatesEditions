myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService','$http','$window','$state',
    function(BookService,GameService, $http, $window, $state){
        
        var service = {};
        
        var BASE_URL = "/symfony/web/app_dev.php";
        
        service.player = {};
        
        service.player.books = [];
        
        service.player.loaders = {
            books:true
        };

        service.player.username = $window.sessionStorage.getItem('playerUsername');
        if(service.player.username === null){
            $state.go('signin');
        }
        
        service.player.isAuthor = function(book){
            return service.isAuthor(service.player.username,book);
        }
        
        service.player.createBook = function(){
            return BookService.createPlayerBook(service.player.username).success(service.player.refreshBooks);
        }
        
        service.player.getBooks = function(){
            service.player.refreshBooks;
        }
        
        service.player.setUsername = function(username){
            service.player.username = username
        }
        
        service.player.refreshBooks = function(displayLoader){
            if(angular.isUndefined(displayLoader) || displayLoader) service.player.loaders.books = true;
            BookService.getPlayerBooks(service.player.username).success(function(books){
                angular.copy(books, service.player.books);
                service.player.loaders.books = false;
            });
        }
        
        service.player.getGames = function(){
            return GameService.getPlayerGames(service.player.username);
        }
        
        service.player.newGame = function(book){
            return $http.post(BASE_URL+"/players/"+service.player.username+"/games",{bookId:book.id});
        }
        
        service.getCurrentPlayer = function(){
            return $http.get(BASE_URL+"/user")
        };
        
        service.login = function(credentials){
            return $http.post(BASE_URL+"/login", credentials)
        }
        
        service.logout = function(){
            return $http.post(BASE_URL+"/logout")
        }
        
        service.getPlayerByName = function(name){
            return $http.get(BASE_URL+"/players/"+name);
        }
        
        service.isAuthor = function(username,book){
            return username === book.author.username;
        }
        
        service.player.refreshBooks();
        
        return service;
    }
]);