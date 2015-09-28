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
                  intro: "Ajoute un titre",
                  position: top,
                },
                {
                  element: "#book-genre",
                  intro: "Selectionne un genre",
                  position: top,
                },
                {
                  element: "#book-synopsis",
                  intro: "Résume rapidement ton livre",
                  position: top,
                },
                {
                  element: "#book-cover",
                  intro: "<p>Ajoute une image qui servira de couverture à ton live.</p> Copie colle simplement le lien vers l'image",
                  position: right,
                },
                {
                  element: "#book-starting-page",
                  intro: "Précise la page de départ",
                  position: top,
                },
                {
                  element: "#book-stats",
                  intro: "<p>Ajoute des statistiques de personnages, elles te permetront de conditionner l'affichage des choix proposés au joueur</p> A la création du livre, les statistiques du joueur sont initialisées à la valeur saisie dans le champ 'Valeur initiale'",
                  position: top,
                },
                {
                  element: "#book-objects",
                  intro: "<p>Ajoute des objets que le joueur pourra obtenir au cours de son aventure</p><p>Si l'objet doit être présent dans l'inventaire dès le début de l'aventure, coche la case 'début' de l'objet en question.</p>",
                  position: top,
                },
                {
                  element: "#book-graph",
                  intro: "Ce graphique illustrera les différents chemins de ton livre",
                  position: right,
                },
                {
                  element: "#book-pages",
                  intro: "Ajoute de nouvelles pages à ton livre",
                  position: left,
                },
            ],
            "writepagetour":[
                {
                  element: "#page-title",
                  intro: "<p>Ajoute un titre à ta page, attention il sera visible des joueurs</p>",
                  position: top,
                },
                {
                  element: "#page-memo",
                  intro: "<p>Résume en quelques mots le déroulement de la page, ce mémo n'est jamais visible des joueurs.</p> Le mémo t'aidera à retrouver ta page dans la liste des pages du livre",
                  position: left,
                },
                {
                  element: "#page-effects",
                  intro: "Tu peux ajouter des effets qui modifieront l'inventaire et/ou les statistiques du joueur lorsqu'il atteindra cette page",
                  position: top,
                },
                {
                  element: "#page-background-music",
                  intro: "<p>Tu peux ajouter une musique de fond qui se lancera à l'arrivée sur la page et continuera jusqu'à ce qu'une autre page la change</p> Direction <a href='https://soundcloud.com/'>https://soundcloud.com/</a>, recherche et choisis une musique puis copie-colle l'url dans le champ ci-dessous.",
                  position: top,
                },
                {
                  element: "#page-content",
                  intro: "<p>Ajoute le texte de ta page. N'hésitez pas à utiliser l'éditeur pour formater ton texte à ta guise.</p> Tu peux aussi ajouter des images ou des vidéos youtube",
                  position: top,
                },
                {
                  element: "#page-transitions",
                  intro: "<p>Ajoute des transitions à ta page. Ces transitions représentent les choix qui seront proposés aux joueurs.</p><p>Tu peux définir des conditions d'affichages (en fonction des objets et statistiques du joueurs à son arrivée sur la page)</p><p>Tu peux aussi définir des effets qui s'appliqueront si le joueur choisit la transition</p>",
                  position: top,
                }
            ],
            "app":[
                {
                  intro: "<p style='width:100%;text-align:center'><b>MyVirtualStoryBook</b></p>"+
                         "<p>Bienvenue sur la version Béta de MyVirtualStoryBook</p>"+
                         "<p>Cette application te permets de jouer et d'écrire des livres-jeux</p>",
                         position: top,
                },
                {
                  intro: "<p>Différents tutoriels t'accompagneront dans la compréhension de l'application, il est recommandé de les suivre jusqu'au bout.</p>"+
                         "<p>Dans le cas ou tu préfère découvrir par toi même, tu peux directement cliquer sur passer. Sinon clique sur suivant pour continuer.</p>",
                         position: top,
                },
                {
                  element: "#menu-choosebook",
                  intro: "<p>Clique ici pour trouver un livre et commencer une partie</p>",
                  position: right,
                },
                {
                  element: "#menu-choosegame",
                  intro: "<p>Clique ici pour reprendre une partie laissée en pause</p>",
                  position: right,
                },
                {
                  element: "#menu-createbook",
                  intro: "<p>Clique ici pour commencer la création d'un nouveau livre</p>",
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