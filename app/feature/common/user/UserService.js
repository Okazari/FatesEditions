myVirtualStoryBookApp.service("UserService", [
    function(){
        
        var service = {};
        
        service.users = [{
            userName: "Okazari",
            password: "***",
            playerProfile: "Oka",
            authorProfile: "Teijiro"
        }];
 
        service.authentify = function(userName, password) {
            if(angular.isUndefined(userName) || angular.isUndefined(password)
                                             || userName === ""
                                             || password === ""){
                throw 400;
            }
            var user = angular.forEach(service.users, function(user, key, userName, password){
               if (userName === user.userName && password === user.password){
                   return user;
               }
            });
            return user;
        };
 
        return service;
    }
]);