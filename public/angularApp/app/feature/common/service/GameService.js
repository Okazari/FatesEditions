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
        
        service.getStat = function(game,key){
          var result = null;
          angular.forEach(game.stats, function(statValue,statKey){
            if(statKey == key){
              result = statValue;
            }
          })
          return result;
        }
        
        service.setStat = function(game, key, newValue){
          angular.forEach(game.stats, function(statValue, statKey){
            if(statKey == key){
              game.stats[statKey] = newValue;
              return game;
            }
          })
          return game;
        }
        
        service.showTransition = function(game, transition){
          if(transition.conditionOperator === 'or'){
            return service.showTransitionWithOrOperator(game,transition);
          }else{
            return service.showTransitionWithAndOperator(game,transition);
          }
        }
        
        service.showTransitionWithOrOperator = function(game, transition){
          var show = false;
          angular.forEach(transition.conditions,function(condition){
            if(condition.type === "objects"){
              switch (condition.operator) {
                case 'own':
                  if(service.hasObject(game,condition.subject)){
                    show = true
                  }
                  break;
                case 'doNotOwn':
                  if(!service.hasObject(game,condition.subject)){
                    show = true
                  }
                  break;
                
                default:
                  break;
              }
            }else if(condition.type ==="stats"){
              switch (condition.operator) {
                case 'equal':
                  if(service.getStat(game,condition.subject) == condition.value){
                    show = true
                  }
                  break;
                case 'notEqual':
                  if(service.getStat(game,condition.subject) != condition.value){
                    show = true
                  }
                  break;
                case 'less':
                  if(service.getStat(game,condition.subject) < condition.value){
                    show = true
                  }
                  break;
                case 'lessOrEqual':
                  if(service.getStat(game,condition.subject) <= condition.value){
                    show = true
                  }
                  break;
                case 'more':
                  if(service.getStat(game,condition.subject) > condition.value){
                    show = true
                  }
                  break;
                case 'moreOrEqual':
                  if(service.getStat(game,condition.subject) >= condition.value){
                    show = true
                  }
                  break;
                default:
                  break;
              }
            }
          });
          return show;
        }
        
        service.showTransitionWithAndOperator = function(game, transition){
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
            }else if(condition.type ==="stats"){
              switch (condition.operator) {
                case 'equal':
                  if(!(service.getStat(game,condition.subject) == condition.value)){
                    show = false
                  }
                  break;
                case 'notEqual':
                  if(!(service.getStat(game,condition.subject) != condition.value)){
                    show = false
                  }
                  break;
                case 'less':
                  if(!(service.getStat(game,condition.subject) < condition.value)){
                    show = false
                  }
                  break;
                case 'lessOrEqual':
                  if(!(service.getStat(game,condition.subject) <= condition.value)){
                    show = false
                  }
                  break;
                case 'more':
                  if(!(service.getStat(game,condition.subject) > condition.value)){
                    show = false
                  }
                  break;
                case 'moreOrEqual':
                  if(!(service.getStat(game,condition.subject) >= condition.value)){
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
        
        service.applyEffects = function(game,source){
          angular.forEach(source.effects,function(effect){
            if(effect.type === "objects"){
              switch (effect.operator) {
                case 'add':
                    if(!service.hasObject(game,effect.subject)){
                        game.objects.push(effect.subject);
                    };
                  break;
                case 'remove':
                    if(service.hasObject(game,effect.subject)){
                        game.objects.splice(game.objects.indexOf(effect.subject),1);
                    };
                  break;
                
                default:
                  break;
              }
            }else if (effect.type === "stats"){
              switch (effect.operator) {
                case 'inc':
                  var newValue = service.getStat(game,effect.subject) + effect.value;
                  game = service.setStat(game,effect.subject,newValue);
                  break;
                case 'dec':
                  var newValue = service.getStat(game,effect.subject) - effect.value;
                  game = service.setStat(game,effect.subject,newValue);
                  break;
                case 'aff':
                  var newValue = effect.value;
                  game = service.setStat(game,effect.subject,newValue);
                  break;
                case 'mul':
                  var newValue = service.getStat(game,effect.subject) * effect.value;
                  game = service.setStat(game,effect.subject,newValue);
                  break;
                case 'div':
                  if(effect.value != 0){
                    var newValue = service.getStat(game,effect.subject) / effect.value;
                    game = service.setStat(game,effect.subject,newValue);
                  }
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