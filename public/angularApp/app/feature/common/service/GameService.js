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
        
        service.hasObject = function(game,key){
            return game.objects.indexOf(key) >= 0;
        }
        
        service.showTransition = function(game, transition){
          var show = true;
          angular.forEach(transition.conditions,function(condition){
            if(condition.type === "objects"){
              switch (condition.operator) {
                case 'own':
                  if(!service.hasObject(game,condition.subject)){
                    show = false
                  }
                  break;
                case 'doNotOwn':
                  if(service.hasObject(game,condition.subject)){
                    show = false
                  }
                  break;
                
                default:
                  break;
              }
            }
          });
          return show;
        }
        
        service.applyEffects = function(game,transition){
          angular.forEach(transition.effects,function(effect){
            if(effect.type === "objects"){
              switch (effect.operator) {
                case 'add':
                    if(!service.hasObject(game,effect.subject)){
                        game.objects.push(effect.subject);
                    };
                  break;
                case 'remove':
                    if(service.hasObject(game,effect.subject)){
                        game.objects.splice(game.objects.indexOf(game,effect.subject),1);
                    };
                  break;
                
                default:
                  break;
              }
            }
          })
          return game;
        }
        
        return service;
    }
]);