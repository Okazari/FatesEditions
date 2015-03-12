myVirtualStoryBookApp.service("PlayerService", ['BookService','GameService',
    function(BookService,GameService){
        
        var service = {};
        
        service.players = [{
            id: 1,
            userName: "Okazari",
            password: "1",
            playerProfile: "Oka",
            authorProfile: "Teijiro"
        },{
            id: 2,
            userName: "Redeamon",
            password: "1",
            playerProfile: "Red",
            authorProfile: "Redmamon"
        },{
            id: 3,
            userName: "Nexus",
            password: "1",
            playerProfile: "Nex",
            authorProfile: "DevilNexus"
        },{
            id: 4,
            userName: "Darkdeuss",
            password: "1",
            playerProfile: "Dark",
            authorProfile: "Deuss"
        },{
            id: 5,
            userName: "1",
            password: "1",
            playerProfile: "TestPlayerName",
            authorProfile: "TestAuthorName"
        }];

        service.connectedUser = service.players[0];
        
        service.authentify = function(userName, password) {
            var authorizedUser;
            angular.forEach(service.players, function(user){
               if (userName === user.userName && password === user.password){
                   authorizedUser = user
               }
            });
            if(authorizedUser === undefined) throw 403;
            service.connectedUser = authorizedUser;
            return true;
        };
 
        service.getConnectedPlayerDrafts = function(){
            return BookService.getPlayerDraft(service.connectedUser.id);
        }
 
        service.getConnectedPlayerGames = function(){
            return GameService.getPlayerGames(service.connectedUser.id);
        }
 
        return service;
    }
]);