myVirtualStoryBookApp.service("ConnectionService", ['$http',
    function($http){
        
        var service = {};
        
        service.login = function(credentials){
            credentials.password = CryptoJS.SHA512(credentials.password);
            credentials.password = credentials.password.toString(CryptoJS.enc.Base64);
            return $http.post("/api/login", credentials);
        }
        
        return service;
    }
]);