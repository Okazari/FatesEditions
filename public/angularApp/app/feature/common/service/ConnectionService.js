myVirtualStoryBookApp.service("ConnectionService", ['$http','$window','PlayerService',
    function($http,$window, PlayerService){
        
        var service = {};
        
        service.login = function(credentials){
            credentials.password = CryptoJS.SHA512(credentials.password);
            credentials.password = credentials.password.toString(CryptoJS.enc.Base64);
            return $http.post("/api/login", credentials);
        }
        
        service.subscribe = function(credentials){
            credentials.password = CryptoJS.SHA512(credentials.password);
            credentials.verifyPassword = CryptoJS.SHA512(credentials.verifyPassword);
            credentials.password = credentials.password.toString(CryptoJS.enc.Base64);
            credentials.verifyPassword = credentials.verifyPassword.toString(CryptoJS.enc.Base64);
            return $http.post("/api/subscribe", credentials);
        }
        
        service.recover = function(email){
            return $http.post("/api/recover", {email:email});
        }
        
        service.logout = function(){
            $window.localStorage.removeItem('user');
            $window.localStorage.removeItem('token');
        }
        
        service.changePassword = function(passwords){
            var credentials = {};
            credentials.passwords = {};
            credentials.passwords.new = CryptoJS.SHA512(passwords.new);
            credentials.passwords.confirmation = CryptoJS.SHA512(passwords.confirmation);
            credentials.passwords.old = CryptoJS.SHA512(passwords.old);
            credentials.passwords.new = credentials.passwords.new.toString(CryptoJS.enc.Base64);
            credentials.passwords.confirmation = credentials.passwords.confirmation.toString(CryptoJS.enc.Base64);
            credentials.passwords.old = credentials.passwords.old.toString(CryptoJS.enc.Base64);
            return $http.patch("/api/player/"+PlayerService.player.data._id, credentials);
        }
        
        return service;
    }
]);