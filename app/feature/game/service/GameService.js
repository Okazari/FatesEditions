myVirtualStoryBookApp.service("GameService", [
    function(){
        
        var service = {};
        
        service.game = [{
            id : 1,
            currentPage: 50,
            release : {
                id : 1,
                name:"Histoire n°1",
                genre: "Aventure",
                tags: ['Canards','aventure','pomme'],
                synopsis: "C'est l'histoire d'un canard qui vole une tarte au pomme ... vous devez vous cacher !",
                cover: "http://dn.world.free.fr/Images%20site%20death%20note/couverture_6.jpg"
            },
            character : {
                name:"Okazari",
                objects:[{
                            name:"Canne à sucre",
                            description:"Le terme canne à sucre désigne un ensemble d'espèces de plantes de la famille des Poaceae et du genre Saccharum. Elles sont cultivées pour leurs tiges, dont on extrait du sucre. "
                        },{
                            name:"Noeud papillon",
                            description:"A qui peut il bien appartenir ?"
                        }],
                stats:[{
                            name:"Chance",
                            value:777,
                            description:"Lucky boy"
                      },{
                            name:"Geekeness",
                            value:9001,
                            description:"It's over 9000 !"
                      }]
            }
        },
        {
            id : 2,
            currentPage: 13,
            release : {
                id : 1,
                name:"Histoire n°1",
                genre: "Aventure",
                tags: ['Canards','aventure','pomme'],
                synopsis: "C'est l'histoire d'un canard qui vole une tarte au pomme ... vous devez vous cacher !",
                cover: "http://dn.world.free.fr/Images%20site%20death%20note/couverture_6.jpg"
            },
            character : {
                name:"Teijiro",
                objects:[{
                            name:"Noeud papillon",
                            description:"A qui peut il bien appartenir ?"
                        }],
                stats:[{
                            name:"Chance",
                            value:666,
                            description:"Bad news ..."
                      },{
                            name:"Geekeness",
                            value:0,
                            description:"Crap"
                      }]
            }
        }];
 
        service.getGame = function(gameId){
            return service.game[gameId-1];
        }
 
        return service;
    }
]);