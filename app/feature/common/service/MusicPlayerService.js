myVirtualStoryBookApp.service("MusicPlayerService", ['$http',
    function($http){
        
        var service = {};
        
        var BASE_URL = "/symfony/web/app_dev.php";
        
        service.music = {};
        
        service.music.mute = false;
        
        service.music.song = new Audio();
        
        service.clientid = "a78ddd83fc584d1762a8c3c2f0ed3f01";
        
        service.play = function(trackUrl, force){
            return service.load(trackUrl).success(function(){
                service.music.play();
                service.music.playing = true;
            }).error(function(){
                service.music.song.pause();
                service.music.playing = false;
            });
        }
        
        service.load = function(trackUrl){
            var splittedUrl = trackUrl.split("/");
            return $http.get("https://api.soundcloud.com/users/"+splittedUrl[3]+"/tracks/"+splittedUrl[4]+".json?client_id="+ service.clientid).success(function(data){
                service.music.song.pause();
                service.music.id = data.id;
                service.music.band = data.user.username;
                service.music.bandUrl = data.user.permalink_url;
                service.music.title = data.title;
                service.music.trackUrl = data.permalink_url;
                service.music.song.src = data.stream_url + '?client_id=' + service.clientid;
                service.music.valid = true;
                service.music.playing = false;
            }).error(function(){
                service.music.valid = false;
                service.music.playing = false;
            });
        }
        
        service.music.unload = function(){
            service.music.song.pause();
            service.music.id = "";
            service.music.band = "";
            service.music.bandUrl = "";
            service.music.title = "";
            service.music.trackUrl = "";
            service.music.song.src = "";
            service.music.valid = false;
            service.music.playing = false;
        }
        
        service.music.playPause = function(){
            if(service.music.playing){
                service.music.song.pause();
                service.music.playing = false;
            }else{
                service.music.play();
                service.music.playing = true;
            }
        };
        
        service.music.isSame = function(string){
            return (string.split("//")[1] === (service.music.trackUrl.split("//")[1]) || string == service.music.id);
        }
        
        service.music.play = function(force){
            if(force || !service.music.song.mute){
                service.music.song.play(); 
            }
        }
        
        service.isValidUrl = function(url){
            if(angular.isDefined(url)){
                return (url.split("/").length >=5);
            }
            return false;
        }
        
        return service;
    }
]);
    