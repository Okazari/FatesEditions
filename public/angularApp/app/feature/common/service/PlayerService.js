myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService','$http','$window','$state',
    function(BookService,GameService, $http, $window, $state){
        
        var service = {};
        
        var BASE_URL = "/api/player";
        
        service.player = {};
        
        service.player.data = JSON.parse('{"_id":"5637460ecfef2d4b0ee30772","password":null,"email":"benjamin.plouzennec@zenika.com","username":"Zenika","__v":0}'); 
        if(service.player.data === null){
                $state.go("signin");
        };
        
        service.player.books = {};
        
        service.player.refreshBooks = function(){
            if(service.player.data){
                BookService.getUserBooks(service.player.data._id).success(function(books){
                    service.player.books.list = books;
                });
            }
        }
        
        service.player.createBook = function(){
            return BookService.createBook(service.player.data._id).success(function(book){
               service.player.refreshBooks();
            });
        }
        
        service.player.refreshBooks();
        
        service.player.getGames = function(){
            return GameService.getUserGames(service.player.data._id);
        };
        
        service.player.newGame = function(book){
            return GameService.newGame(service.player.data._id, book);
        }
        
        return service;
    }
]);