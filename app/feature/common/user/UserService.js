myVirtualStoryBookApp.service("UserService", [
    function(){
        
        var service = {};
        
        service.users = [{
            userName: "Okazari",
            password: "1",
            playerProfile: "Oka",
            authorProfile: "Teijiro"
        },{
            userName: "Redeamon",
            password: "1",
            playerProfile: "Red",
            authorProfile: "Redmamon"
        },{
            userName: "Nexus",
            password: "1",
            playerProfile: "Nex",
            authorProfile: "DevilNexus"
        },{
            userName: "Darkdeuss",
            password: "1",
            playerProfile: "Dark",
            authorProfile: "Deuss"
        },{
            userName: "1",
            password: "1",
            playerProfile: "TestPlayerName",
            authorProfile: "TestAuthorName"
        }];
 
        service.authentify = function(userName, password) {
            if(angular.isUndefined(userName) || angular.isUndefined(password)
                                             || userName === ""
                                             || password === ""){
                throw 400;
            }
            var authorizedUser;
            angular.forEach(service.users, function(user){
               if (userName === user.userName && password === user.password){
                   authorizedUser = user
               }
            });
            if(authorizedUser === undefined) throw 403;
            return authorizedUser;
        };
 
        return service;
    }
]);