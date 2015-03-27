myVirtualStoryBookApp.service("GameService", [ "$http",
    function($http){
        
        var service = {};
        
        var BASE_URL = "/symfony/web/app_dev.php";
        
        service.getGame = function(gameId){
            return $http.get(BASE_URL+"/games/"+gameId);
        }
 
        service.deleteGame = function(game){
            return $http.delete(BASE_URL+"/games/"+game.id);
        }
 
        service.getPlayerGames = function(playerId){
            return $http.get(BASE_URL+"/players/"+playerId+"/games");
        }
 
        service.saveGame = function(game){
            return $http.patch(BASE_URL+"/games/"+game.id,game);
        }
        
        return service;
    }
]);