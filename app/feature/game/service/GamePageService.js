myVirtualStoryBookApp.service("GamePageService", [
    function(){
        
        var service = {};
        
        service.pages = {
            13:{
                pageContent:{
                    text: "Vous voilà devant un sacré choix ...",
                    imageUrl: "http://www.infoconsommation.ca/eic/site/032.nsf/vwimages/question.jpg/$file/question.jpg"
                },
                transitions:[{
                    nextPage : 50,
                    text: "Alors vous pouvez ne rien faire"
                },{
                    nextPage : 50,
                    text: "et ne rien faire"
                },{
                    nextPage : 13,
                    text: "Ou alors prendre votre vie en main !"
                }]
            },
            50:{    
                pageContent:{
                    text: "Vous êtes mort ...",
                    imageUrl: ""
                },
                transitions:[{
                    nextPage : 50,
                    text: "Vous allez rester la ... et réfléchir un peu"
                },{
                    nextPage : 50,
                    text: "Vous suivez les baffes et normalement ils sont au bout."
                },{
                    nextPage : 13,
                    text: "Resurection !"
                }]
            }
        };
 
        service.getPage = function(pageId){
            return service.pages[pageId];
        }
 
        return service;
    }
]);