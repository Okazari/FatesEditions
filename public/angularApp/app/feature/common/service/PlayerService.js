myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService','$http','$window','$state',
    function(BookService,GameService, $http, $window, $state){
        
        var service = {};
        
        var BASE_URL = "/api/player";
        
        service.player = {};
        
        service.player.data = JSON.parse($window.localStorage.getItem('user')); 
        
        service.player.books = {};
        
        service.player.refreshBooks = function(){
            BookService.getUserBooks(service.player.data.userId).success(function(books){
                service.player.books.list = books;
            });
        }
        
        service.player.createBook = function(){
            return BookService.createBook(service.player.data.userId).success(function(book){
               service.player.refreshBooks();
            });
        }
        
        service.player.refreshBooks();
        
        return service;
    }
]);