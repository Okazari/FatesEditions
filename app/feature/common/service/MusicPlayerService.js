myVirtualStoryBookApp.service("MusicPlayerService", ['$http',
    function($http){
        
        var service = {};
        
        var BASE_URL = "/symfony/web/app_dev.php";
        
        service.music = {};
        
        service.music.song = new Audio();
        
        service.clientid = "a78ddd83fc584d1762a8c3c2f0ed3f01";
        
        service.play = function(trackId){
            return service.load(trackId).success(function(){
                service.music.song.play();
                service.music.playing = true;
            }).error(function(){
                service.music.song.pause();
                service.music.playing = false;
            });
        }
        
        service.load = function(trackId){
            return $http.get("https://api.soundcloud.com/tracks/"+trackId+".json?client_id="+ service.clientid).success(function(data){
                service.music.song.pause();
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
        
        service.music.playPause = function(){
            if(service.music.playing){
                service.music.song.pause();
                service.music.playing = false;
            }else{
                service.music.song.play();
                service.music.playing = true;
            }
        };
        
        return service;
    }
]);
    