myVirtualStoryBookApp.service("TransitionHelperService", 
    function(){
        
        var service = {};
        
        service.conditions = {
            stats : {
                label : "La statistique",
                collection : "stats",
                operators : {
                    equal : "est égale à",
                    notEqual : "est différent de",
                    less : "est inférieure à",
                    lessOrEqual : "est inférieure ou égale à",
                    more : "est supérieure à",
                    moreOrEqual : "est supérieure ou égale à",
                }
            },
            objects : {
                label : "L'objet",
                collection : "objects",
                operators : {
                    own : "est possédé",
                    doNotOwn : "n'est pas possédé",
                }
            }
        }
        
        service.effects = {
            stats : {
                label : "La statistique",
                collection : "stats",
                operators : {
                    inc : "augmente de",
                    dec : "diminue de",
                    aff : "prends la valeur",
                    mul : "est multiplié par",
                    div : "est divisé par",
                }
            },
            objects : {
                label : "L'objet",
                collection : "objects",
                operators : {
                    add : "est ajouté",
                    remove : "est retiré",
                }
            }
            
        }
        
        return service;
    }
);