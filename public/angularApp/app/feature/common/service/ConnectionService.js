myVirtualStoryBookApp.service("ConnectionService", ['$http','$window',
    function($http,$window){
        
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
        
        service.logout = function(){
            $window.localStorage.removeItem('user');
        }
        
        return service;
    }
]);