myVirtualStoryBookApp.service("IntroService", 
    function($rootScope, $window, $timeout, PlayerService){
      
        var completeKey = "_completed";
        var stepKey = "_step";
        var service = {};
        var top = "top";
        var bottom = "bottom";
        var left = "left";
        var right = "right"
        var isMobile = $window.matchMedia("(max-width: 767px)").matches;
        if(isMobile){
          left = "top";
          right = "top";
        }
        
        service.tour = introJs();
        service.tour.name = "none";
        service.nextTour = [];
        service.precallback = [];
        
        service.introOptionsSteps = {
            "writebooktour":[
                {
                  element: "#book-title",
                  intro: "Entre ici le titre de ton livre",
                  position: top,
                },
                {
                  element: "#book-genre",
                  intro: "Selectionne ici un genre pour aider les joueurs à trouver ton livre",
                  position: top,
                },
                {
                  element: "#book-synopsis",
                  intro: "Résume ici rapidement ton livre et donne envie aux joueurs de le lire",
                  position: top,
                },
                {
                  element: "#book-cover",
                  intro: "<p>Ajoute ici une image qui servira de couverture à ton live.</p> Copie colle simplement le lien vers l'image",
                  position: right,
                },
                {
                  element: "#book-starting-page",
                  intro: "Précise ici la page de départ de ton livre",
                  position: top,
                },
                {
                  element: "#book-stats",
                  intro: "Ajoute ici autant de statistiques que tu veux à ton livre, elle te permetrons de conditionner l'affichage des choix du joueur",
                  position: top,
                },
                {
                  element: "#book-objects",
                  intro: "Ajoute ici tous les objets que le joueur pourra obtenir au cours de son aventure",
                  position: top,
                },
                {
                  element: "#book-graph",
                  intro: "Ce graph illustrera les différents chemins de ton livre lorsque tu aura lié des pages via des transitions",
                  position: right,
                },
                {
                  element: "#book-pages",
                  intro: "Ajoute ici de nouvelles pages à ton livre",
                  position: left,
                },
            ],
            "writepagetour":[
                {
                  element: "#page-title",
                  intro: "<p>Entre ici le titre de la page, attention ce titre sera visible des joueurs à certains endroit</p>",
                  position: top,
                },
                {
                  element: "#page-memo",
                  intro: "<p>Ecris ici un rapide mémo pour te souvenir de ce qu'il se passe dans la page, ce mémo n'est jamais visible des joueurs.</p> Le mémo t'aidera à retrouver ta page dans la liste des pages du livre",
                  position: left,
                },
                {
                  element: "#page-effects",
                  intro: "Tu peux ajouter des effets qui modifierons l'inventaire ou les statistiques du joueurs lorsqu'il tombera sur cette page",
                  position: top,
                },
                {
                  element: "#page-background-music",
                  intro: "<p>Vous pouvez rajouter une musique de fond qui se lancera à l'arrivée sur la page et continuera jusqu'à ce qu'une autre page change la musique de fond</p> Direction <a href='https://soundcloud.com/'>https://soundcloud.com/</a>, recherchez et choisissez une musique puis copiez-collez l'url dans le champ ci-dessous.",
                  position: top,
                },
                {
                  element: "#page-content",
                  intro: "<p>Ecrivez ici le texte de votre page. N'hésitez pas à utiliser l'éditeur pour formater votre texte à votre guise.</p> Vous pouvez aussi ajouter des images ou vidéos youtubes",
                  position: top,
                },
                {
                  element: "#page-transitions",
                  intro: "<p>Vous pouvez ici définir les transitions de votre page. Ces transitions représente les choix qui seront proposé aux joueurs.</p><p>Vous pouvez leur définir des conditions d'affichages (en fonction des objets et statistiques du joueurs à son arrivée sur la page</p><p>Vous pouvez définir des effets qui s'appliquerons si le joueur choisit la transition</p>",
                  position: top,
                }
            ],
            "app":[
                {
                  intro: "<p style='width:100%;text-align:center'><b>MyVirtualStoryBook</b></p>"+
                         "<p>Bienvenue sur la version Béta de MyVirtualStoryBook</p>"+
                         "<p>Cette application te permet de jouer et d'écrire des livres-jeux</p>",
                         position: top,
                },
                {
                  intro: "<p>Différents tutoriels t'accompagnerons dans la compréhension de l'application, il est recommandé de les suivre jusqu'au bout.</p>"+
                         "<p>Dans le cas ou tu préfère découvrir par toi même, tu peux directement cliquer sur passer. Sinon clique sur suivant pour continuer</p>",
                         position: top,
                },
                {
                  element: "#menu-choosebook",
                  intro: "<p>Clique ici pour trouver un livre et commencer une partie</p>",
                  position: right,
                },
                {
                  element: "#menu-choosegame",
                  intro: "<p>Clique ici pour reprendre une partie que tu as laissé en pause</p>",
                  position: right,
                },
                {
                  element: "#menu-createbook",
                  intro: "<p>Clique ici pour commencer la création d'un nouveau livre </p>",
                  position: right,
                },
                {
                  element: "#menu-choosedraft",
                  intro: "<p>Clique ici pour aller à la liste de tes brouillons</p>",
                  position: right,
                },
                {
                  element: "#menu-sharebook",
                  intro: "<p>Clique ici pour publier un brouillon</p>",
                  position: right,
                },
                {
                  element: "#menu-sharedbook",
                  intro: "<p>Clique ici pour aller à la liste de tes livres publiés</p>",
                  position: right,
                },
            ],
        }
        
        service.globalConfig = {
              showStepNumbers: false,
              showProgress: false,
              nextLabel:"Suivant &rarr;",
              prevLabel:"&larr; Précédent",
              skipLabel:"Passer",
              doneLabel:"Fin",
              showBullets:true,
              disableInteraction:true,
              exitOnOverlayClick:false,
              exitOnEsc:false
        }
              
        service.launchTour = function(tourName, force){
            if(service.tour.running){
                service.registerTour(tourName);
            }else{
                if(PlayerService.player.data && (force || $window.localStorage.getItem(tourName+completeKey) !== "true")){
                    if(tourName === "app"){
                      $rootScope.sidebar = 'open';
                    }else if(isMobile && (tourName === "writepagetour" || tourName === "writebooktour")){
                      $rootScope.sidebar = 'collapse';
                    }
                    
                    service.tour.name = tourName;
                    service.tour.running = true;
                    service.tour.setOptions(service.globalConfig);
                    service.tour.setOption("steps", service.introOptionsSteps[tourName]);
                    var step = 0
                    if($window.localStorage.getItem(service.tour.name+stepKey)){
                        step = $window.localStorage.getItem(service.tour.name+stepKey);
                    }
                    service.stopWatch = $rootScope.$watch(function(){
                        service.tour.refresh();
                    });
                    $timeout(function(){
                      service.tour.start();
                      step++;
                      service.tour.goToStep(step);
                    },200);
                }
            }
        }
        
        service.registerTour = function(tourName){
           service.nextTour.push(tourName);
        }
        
        service.registerPreCallback = function(callback){
           service.precallback.push(callback);
        }
        
        service.tour.onafterchange(function(){
            $window.localStorage.setItem(service.tour.name+stepKey,service.tour._currentStep);
        })
        
        service.stepEnd = function(){
            service.stopWatch();
            $window.localStorage.setItem(service.tour.name+completeKey,true);
            service.tour.running = false;
            service.tour.exit();
            if(service.nextTour){
              var nextTour = service.nextTour.shift();
              if(nextTour){
                service.launchTour(nextTour);
              }
            }
        }
        
        service.tour.onexit(service.stepEnd)
        
        service.tour.oncomplete(service.stepEnd)
        
        return service;
    }
);