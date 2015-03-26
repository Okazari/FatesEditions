myVirtualStoryBookApp.service("ConnectionService", ['$http',
    function($http){
        
        var service = {};
        
        service.login = function(credentials){
            return $http.post("/symfony/web/app_dev.php/login", credentials)
        }
        
        return service;
    }
]);