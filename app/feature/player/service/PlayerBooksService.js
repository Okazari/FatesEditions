myVirtualStoryBookApp.service("PlayerBooksService", [
    function(){
        
        var service = {};
        
        service.books = [{
            name:"Histoire n°1",
            genre: "Aventure",
            tags: ['Canards','aventure','pomme'],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !"
        },{
            name:"L'aventure des canards",
            genre: "Aventure",
            tags: ["Canards","aventure","pomme"],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !"
        },{
            name:"L'aventure des canards",
            genre: "Aventure",
            tags: ["Canards","aventure","pomme"],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !"
        },{
            name:"L'aventure des canards",
            genre: "Aventure",
            tags: ["Canards","aventure","pomme"],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !"
        },{
            name:"L'aventure des canards",
            genre: "Aventure",
            tags: ["Canards","aventure","pomme"],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !"
        }];
 
        service.getPublishedBook = function(){
            return service.books;
        }
 
        return service;
    }
]);