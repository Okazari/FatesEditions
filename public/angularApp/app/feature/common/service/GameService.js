myVirtualStoryBookApp.service("GameService", [ "$http",
    function($http){
        
        var service = {};
        
        var BASE_URL = "/api/game";
        
        service.getUserGames = function(userId){
            return $http.get(BASE_URL,{params:{playerId:userId}});
        }
        
        service.newGame = function(userId, book){
            return $http.post(BASE_URL,{playerId:userId, currentPageId:book.startingPageId, bookId:book._id});
        }
        
        service.deleteGame = function(game){
            return $http.delete(BASE_URL+'/'+game._id);
        }
        
        service.getGame = function(gameId){
            return $http.get(BASE_URL+'/'+gameId);
        }
        
        service.saveGame = function(game){
            return $http.patch(BASE_URL+'/'+game._id, game);
        }
        
        return service;
    }
]);