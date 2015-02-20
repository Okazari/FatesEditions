myVirtualStoryBookApp.service("PlayerBooksService", [
    function(){
        
        var service = {};
        
        service.books = [{
            id: 1,
            name:"Histoire n°1",
            genre: "Aventure",
            tags: ['Canards','aventure','pomme'],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !",
            cover: "http://dn.world.free.fr/Images%20site%20death%20note/couverture_6.jpg"
        },{
            id: 2,
            name:"Histoire n°2",
            genre: "Romance",
            tags: ["Aventure","Canards","Romance"],
            synopsis: "<3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 ",
            cover: "https://33.media.tumblr.com/24235545361e25bbf7744978b75da378/tumblr_nb1304i4Ko1s9wr0do1_500.gif"
        },{
            id: 3,
            name:"Histoire n°3",
            genre: "Action",
            tags: ["Canards","aventure","pomme"],
            synopsis: "ça fait bim bam boum ! More explosions !",
            cover: "http://cdn.marketplaceimages.windowsphone.com/v8/images/f760c7bc-c594-4a8c-9b6d-10976f6a061b?imageType=ws_icon_large"
        },{
            id: 4,
            name:"Histoire n°4",
            genre: "RPG",
            tags: ["aventure","Canards","pomme"],
            synopsis: "San goku powa.",
            cover: "http://www.techartgeek.com/images/2014/11/saintseiya.jpg"
        },{
            id: 5,
            name:"Histoire n°5",
            genre: "Aventure",
            tags: ["Canards","aventure","pomme"],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !",
            cover: "http://dn.world.free.fr/Images%20site%20death%20note/couverture_6.jpg"
        },{
            id: 6,
            name:"Histoire n°2",
            genre: "Romance",
            tags: ["Aventure","Canards","Romance"],
            synopsis: "<3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 ",
            cover: "https://33.media.tumblr.com/24235545361e25bbf7744978b75da378/tumblr_nb1304i4Ko1s9wr0do1_500.gif"
        },{
            id: 7,
            name:"Histoire n°3",
            genre: "Action",
            tags: ["Canards","aventure","pomme"],
            synopsis: "ça fait bim bam boum ! More explosions !",
            cover: "http://cdn.marketplaceimages.windowsphone.com/v8/images/f760c7bc-c594-4a8c-9b6d-10976f6a061b?imageType=ws_icon_large"
        },{
            id: 8,
            name:"Histoire n°4",
            genre: "RPG",
            tags: ["aventure","Canards","pomme"],
            synopsis: "San goku powa.",
            cover: "http://www.techartgeek.com/images/2014/11/saintseiya.jpg"
        },{
            id: 9,
            name:"Histoire n°5",
            genre: "Aventure",
            tags: ["Canards","aventure","pomme"],
            synopsis: "C'est l'histoire d'un canard qui volle un tarte au pomme ... vous devez vous cacher !",
            cover: "http://dn.world.free.fr/Images%20site%20death%20note/couverture_6.jpg"
        }];
 
        service.getPublishedBook = function(){
            return service.books;
        }
 
        return service;
    }
]);