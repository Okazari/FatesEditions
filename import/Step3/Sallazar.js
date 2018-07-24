module.exports = [
  {
    "_id": {
      "$oid": "568a4d5e399d7d0c030b7909"
    },
    "authorId": "5677fbaa399d7d0c030b78ef",
    "authorName": "Sallazar",
    "draft": false,
    "objects": [
      {
        "name": "Dague",
        "description": "Ornée d'un saphir finement taillé.",
        "atStart": true,
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a84"
        },
        "visible": true
      },
      {
        "name": "Friandises",
        "description": "Vous en gardez toujours sur vous pour faire plaisir aux enfants que vous rencontrez, ou pour vous-même.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a83"
        },
        "atStart": true,
        "visible": true
      },
      {
        "name": "Epée",
        "description": "Prudent, une épée courte pend toujours à vos côtés, au cas où vous seriez victime d'un attentat.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a82"
        },
        "atStart": true,
        "visible": true
      },
      {
        "name": "Or",
        "description": "Vous gardez toujours dans votre poche une deuxième bourse bien arrondie pour ne pas rester démuni en cas de vol. Vous possédez donc 12 pièces d'or supplémentaires.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a81"
        },
        "visible": false
      },
      {
        "name": "Maître d'armes",
        "description": "Durant votre jeunesse, vous avez été entraîné au maniement des armes, principalement à l'épée, domaine où vous avez excellé. Pendant cet entraînement, vous avez aussi développé votre physique : ajoutez 1 point à votre total de constitution.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a80"
        },
        "visible": false
      },
      {
        "name": "Éloquence",
        "description": "S'il le faut, vous savez vous montrer très persuasif et grâce à ce talent, vous pouvez manipuler les naïfs.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a7f"
        },
        "visible": false
      },
      {
        "name": "Acrobate",
        "description": "Si l'occasion se présente, vous pouvez facilement grimper à un arbre, un mur… ou alors faire un saut périlleux pour vous retrouver dans le dos d'un ennemi et pouvoir l'attaquer par surprise.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a7e"
        },
        "visible": false
      },
      {
        "name": "Connaissance",
        "description": "Vous avez reçu pendant votre jeunesse une éducation érudite et vous possédez maintenant une grande connaissance du monde qui vous entoure.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a7d"
        },
        "atStart": true,
        "visible": false
      },
      {
        "name": "Robustesse",
        "description": "Vous avez la capacité innée d'être plus robuste et plus fort que la moyenne des hommes. Ajoutez par conséquent 3 points à votre total de constitution. Vous êtes aussi d'une puissance exceptionnelle.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a7c"
        },
        "visible": false
      },
      {
        "name": "Bague de Linda",
        "description": "Tressée avec des lianes, des tiges et des cheveux, qui forment un enchevêtrement tout à fait magnifique",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a7b"
        },
        "visible": true
      },
      {
        "name": "Herbes Cura",
        "description": "Antidote contre le poison",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a7a"
        },
        "visible": true
      },
      {
        "name": "Marrons",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a79"
        },
        "visible": true
      },
      {
        "name": "Poison",
        "description": "Enlève un point de constitution tous les trois paragraphes.",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a78"
        },
        "visible": false
      },
      {
        "name": "Quatrième syllabe",
        "description": "\"tion\"",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a77"
        },
        "visible": false
      },
      {
        "name": "Troisième syllabe",
        "description": "\"la\"",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a76"
        },
        "visible": false
      },
      {
        "description": "\"nu\"",
        "name": "Deuxième syllabe",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a75"
        },
        "visible": false
      },
      {
        "description": "\"an\"",
        "name": "Première syllabe",
        "_id": {
          "$oid": "568a4f54399d7d0c030b7a74"
        },
        "visible": true
      }
    ],
    "stats": [
      {
        "name": "Constitution",
        "description": "Cette caractéristique détermine votre capacité à résister aux coups, aux maladies, au poison…Vous débutez cette quête avec 6 points de constitution, mais qui peuvent être modifiés par certains talents proposés ci-dessous. Mis à part les changements dus aux talents, vous ne pouvez en aucun cas dépasser votre total de départ de constitution ; sauf si cela est spécifié dans le texte. Sachez aussi que si, à un moment ou un autre de votre aventure, votre total de constitution tombe à zéro, cela signifiera que vous êtes mort et que vous devez recommencer l'aventure.",
        "initValue": 6,
        "min": 0,
        "max": 10,
        "_id": {
          "$oid": "568a4fab399d7d0c030b7abf"
        },
        "visible": true
      },
      {
        "name": "Temps écoulé",
        "description": "Durant cette aventure, le temps vous est compté : lorsque l'on vous demandera d'ajouter un point au temps écoulé, vous devrez tracer un bâton dans la case «temps écoulé» de votre feuille d'aventure.",
        "initValue": 0,
        "min": -2,
        "max": 10,
        "_id": {
          "$oid": "568a4fab399d7d0c030b7abe"
        },
        "visible": true
      },
      {
        "name": "Capacités à choisir",
        "description": "Cette caractéristique servira de compteur.",
        "initValue": 0,
        "min": 0,
        "max": 2,
        "_id": {
          "$oid": "568a4fab399d7d0c030b7abd"
        },
        "visible": false
      },
      {
        "name": "Or",
        "description": "Vous possédez 10 pièces d'or au début de cette aventure",
        "initValue": 10,
        "min": 0,
        "max": 70,
        "_id": {
          "$oid": "568a4fab399d7d0c030b7abc"
        },
        "visible": true
      }
    ],
    "tags": [],
    "__v": 68,
    "name": "Interlude",
    "cover": "http://www.litteraction.fr/sites/default/files/image003.png",
    "synopsis": "En tant que noble, rien n'a jamais troublé votre petite vie paisible si ce n'est les quelques larcins commis sur votre personne. Vous parcourez souvent le pays pour des rencontres importantes. Aujourd'hui, vous partez en voyage pour avoir une audience auprès du roi pour lui quémander des parcelles de terres. Par la fenêtre de votre voiture, vous repérez une magnifique forêt bordée par un océan de blé. Vous décidez donc de vous accorder une courte pause dans ce lieu paradisiaque. Vous ordonnez au cocher d'arrêter le carrosse et vous entrez dans cette forêt qui vous ouvre les bras. Vous vous allongez sur une souche et vous profitez du chant des oiseaux sous le soleil éclatant. Une fois l'heure venue de rejoindre votre carrosse, vous vous cognez contre une sorte de barrière invisible. Un vieil homme apparaît et vous indique que la forêt est soumise à une illusion qui la rend jolie de l'extérieur, qu'on peut y entrer mais pas en ressortir, et qu'on y a jeté un maléfice de vieillissement. Un seul moyen pour vous de vous échapper de cette forêt maudite : trouver les quatre syllabes d'un mot de pouvoir permettant d'annuler le maléfice. Comble de malchance, les dépositaires des syllabes sont éparpillés aux quatre coins du bois. Comment allez-vous faire, VOUS, noble perdu peu habitué à combattre ou à souffrir de douleur cuisantes ?",
    "genreId": "566ece4e2565ceee03741000",
    "startingPageId": "568a5ba6399d7d0c030b7ac5"
  },
  {
    "_id": {
      "$oid": "568a4fba399d7d0c030b7ac0"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "1",
    "description": "Présentation",
    "text": "{\"blocks\":[{\"key\":\"613kk\",\"text\":\"Bien que tout à l'heure vous étiez en colère contre le vieillard à cause du sort qu'il avait jeté, vous commencez maintenant à ressentir de l'inquiétude et vous vous sentez démuni de vos moyens. Vous n'avez jamais été confronté à des problèmes de cette envergure. Des gouttes de sueur perlent sur votre front. Vos membres commencent à trembler, et vous n'osez regarder en direction de la forêt, de peur qu'il n'en surgisse quelque bête immonde. Mais progressivement, un sentiment d'empressement submerge votre esprit : le roi va vous attendre ! A partir de ce moment, tenez compte de votre temps, qui est des plus limités ! Si, à un moment ou un autre de votre aventure, votre total de temps écoulé tombe a 10, vous vous rendrez dans ce cas immédiatement au 38. Par contre, si vous réussissez à trouver les quatre syllabes du mot de pouvoir avant ce délai écoulé, utilisez le code : A=1, B=2… Z=26, et convertissez en chiffres toutes les lettres du mot de pouvoir, peu importe leur ordre, enlevez 100 au résultat et rendez-vous au paragraphe correspondant. Ensuite, vous tournez lentement votre tête vers la forêt, respirez profondément, et réalisez l'ampleur de la tâche que vous devez accomplir. Des arbres desséchés, tels une armée de guerriers immobiles, délimitent l'entrée du bois, et semblent ne laisser aucun passage, comme pour signifier que cette forêt va être votre tombeau. Une forme sombre se dessine derrière un arbre aux branches nues, et grandit peu à peu. Terrorisé, vous laissez échapper un cri, déchirant le silence de mort du lieu, et vous dégainez votre dague, la main tremblante. Quand enfin vous parvenez à distinguer la véritable origine de la forme, vous poussez un long soupir de soulagement. Ce qui vous a paniqué n'était qu'un inoffensif canard déplumé, qui de plus, avait la démarche gauche ! Vous promettant de ne plus jamais vous laisser surprendre, vous rengainez votre arme, et vous vous mettez en route sur l'unique chemin possible. La végétation alentour ne vous rassure point. Les branches des arbres et les tiges des plantes se plient sous leur poids, et les fleurs jaunes qui bordaient la souche où vous vous étiez reposé ont perdu leur couleur et se sont fanées. Plus loin, vous parvenez à une bifurcation. Un sentier se dirige vers le nord-ouest, et s'annonce long et tortueux. L'autre va vers le nord-est, et semble être un agréable chemin de cueillette, bien qu'il n'y ait guère de fleurs à récolter.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5ba6399d7d0c030b7ac5"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "Les règles",
    "description": "Choix d'objets",
    "text": "{\"blocks\":[{\"key\":\"acrbi\",\"text\":\"Les règles \\nCette aventure ne nécessite pas de dés. La réussite ne sera donc pas le fruit du hasard mais celui de votre sagacité.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"ag41s\",\"text\":\"Équipement\\nAu départ de cette quête vous vous êtes vêtu de riches habits de soie et vous possédez une bourse de 10 pièces d'or ainsi qu'une dague richement ornée. Vous possédez aussi l'un des objets suivants, au choix : \\n• Friandises : vous en gardez toujours sur vous pour faire plaisir aux enfants que vous rencontrez, ou pour vous-même. \\n• Arme : prudent, une épée courte pend toujours à vos côtés, au cas où vous seriez victime d'un attentat. \\n• Or : vous gardez toujours dans votre poche une deuxième bourse bien arrondie pour ne pas rester démuni en cas de vol. Vous possédez donc 12 pièces d'or supplémentaires. \\nVous pourrez bien entendu trouver d'autres accessoires durant cette aventure, mais comme vous n'avez pas de sac à dos, il ne devront pas être trop encombrants. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5c5a399d7d0c030b7ac9"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "18",
    "description": "tristesse",
    "text": "{\"blocks\":[{\"key\":\"3m2sm\",\"text\":\"﻿﻿Errant comme une âme en peine, vous retournez à la clairière, et vous vous laissez tomber sur la souche, abattu. La végétation luxuriante que vous aviez découverte n'est plus que poussière, le ciel est dissimulé derrière des nuages livides, les oiseaux essayent vainement de trouver de quoi se nourrir dans ce bois mort. Découragé, vous vous demandez comment vous allez bien pouvoir sortir de cette forêt horrible. Vous n'êtes pas taillé dans le même bois qu'un aventurier. D'innocentes larmes viennent couler le long de votre joue. Vous voilà confronté à un destin que vous n'aviez point désiré. Mais le roi vous attend ! Cette pensée vous redonne un peu d'énergie, juste assez pour accepter votre triste sort. Ajoutez un point au temps écoulé pour marquer ce temps perdu à pleurer sur votre funeste destinée. Ensuite, vous reprenez votre chemin. Plus loin, vous parvenez à une bifurcation. Un sentier se dirige vers le nord-ouest, et s'annonce long et tortueux. L'autre va vers le nord-est, et semble être un chemin de cueillette, bien qu'il n'y ait guère de fleurs à récolter.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5c91399d7d0c030b7acc"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "27",
    "description": "Brigands",
    "text": "{\"blocks\":[{\"key\":\"cuqse\",\"text\":\"Le sentier serpente le long de la forêt, et un bref rayon de soleil vous permet de voir les ombres - peut-être les esprits défunts - des arbres condamnés au funeste sort qui ne leur était pas réservé. Au bout d'un certain temps, vous remarquez, parmi les ronces, une clairière constellée d'hommes qui semblent être des brigands. L'un d'entre eux, le plus grand et le plus musclé, fouette à l'aide d'une liane une pauvre fille sans défense. Vous vous rapprochez, petit à petit en prenant bien garde de ne pas être vu, et vous distinguez mieux la scène. Un géant d'environ deux mètres frappe la fille, au milieu de ses compagnons qui regardent la scène en se gaussant. Quant à la fille, elle est habillée de loques, et quand elle vous aperçoit, vous voyez à en juger par son œil qu'elle vous supplie de lui venir en aide.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5cdb399d7d0c030b7ad3"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "dec",
        "value": 2
      }
    ],
    "__v": 4,
    "title": "3",
    "description": "corruption brigands",
    "text": "{\"blocks\":[{\"key\":\"afa0d\",\"text\":\"Dès l'instant où ils vous remarquent, les brigands se jettent sur vous en sortant… des épées de bois. Vous vous retenez d'éclater de rire car leur mine n'est pas du genre à plaisanter. Ces épées de bois peuvent tout de même vous arracher des cris de douleur. Vous levez aussitôt les mains en l'air, et vous déclarez avoir l'intention de parlementer. L'un d'eux, légèrement mieux habillé que les autres, et portant un foulard rouge sort du groupe et vous dit : \\n- Je me nomme Hedum, et si tu veux parler, c'est à moi qu'il faut s'adresser. \\nMettant alors vos années d'enseignement en négociation à profits, vous tentez de convaincre leur chef de ne pas frapper la jeune fille, que cela ne leur apporterait rien, et que vous leur promettez une récompense s'ils la laissent. Vous leur donnez, pour prouver votre bonne foi, 2 pièces d'or. Le chef empoche votre don et se retourne alors vers ses compagnons, et une brève conversation s'ensuit. Avez-vous réussi à convaincre les brigands ?\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5d3a399d7d0c030b7ad6"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "34",
    "description": "Négociation brigands",
    "text": "{\"blocks\":[{\"key\":\"6tsq5\",\"text\":\"Dès l'instant où ils vous remarquent, les brigands se jettent sur vous en sortant… des épées de bois. Vous vous retenez d'éclater de rire car leur mine n'est pas du genre à plaisanter. Ces épées de bois peuvent tout de même vous arracher des cris de douleur. Vous levez aussitôt les mains en l'air, et vous déclarez avoir l'intention de parlementer. L'un d'eux, légèrement mieux habillé que les autres, et portant un foulard rouge, sort du groupe et vous dit : \\n- Je me nomme Hedum, et si tu veux parler, c'est à moi qu'il faut s'adresser. \\nMettant alors vos années d'enseignement en négociation à profits, vous tentez de convaincre leur chef de ne pas frapper la jeune fille, que cela ne leur apporterait rien, et que c'était déloyal car elle n'était pas du même sexe, qu'elle était sans défense et qu'elle était seule. Le chef se retourne alors vers ses compagnons, et un bref bavardage s'ensuit. Avez-vous réussi à convaincre les brigands ?\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5d83399d7d0c030b7ad9"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "Choix de capacités",
    "description": "Choix de capacités",
    "text": "{\"blocks\":[{\"key\":\"12jah\",\"text\":\"Les talents spéciaux \\nAu cours des années, vous avez acquis certains talents particuliers. Vous ne pouvez en choisir que DEUX et seulement deux parmi les cinq qui vous sont proposés. Le choix de ces deux talents sera déterminant pour la réussite de l'aventure. Les voici : \\nMaître d'armes : Durant votre jeunesse, vous avez été entraîné au maniement des armes, principalement à l'épée, domaine où vous avez excellé. Pendant cet entraînement, vous avez aussi développé votre physique : ajoutez 1 point à votre total de constitution. \\nÉloquence : S'il le faut, vous savez vous montrer très persuasif et grâce à ce talent, vous pouvez manipuler les naïfs. \\nAcrobate : Si l'occasion se présente, vous pouvez facilement grimper à un arbre, un mur… ou alors faire un saut périlleux pour vous retrouver dans le  dos d'un ennemi et pouvoir l'attaquer par surprise. \\nConnaissance : Vous avez reçu pendant votre jeunesse une éducation érudite et vous possédez maintenant une grande connaissance du monde qui vous entoure. \\nRobustesse : Vous avez la capacité innée d'être plus robuste et plus fort que la moyenne des hommes. Ajoutez par conséquent 3 points à votre total de constitution. Vous êtes aussi d'une puissance exceptionnelle.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[{\"offset\":0,\"length\":20,\"style\":\"UNDERLINE\"},{\"offset\":274,\"length\":14,\"style\":\"UNDERLINE\"},{\"offset\":533,\"length\":9,\"style\":\"UNDERLINE\"},{\"offset\":654,\"length\":8,\"style\":\"UNDERLINE\"},{\"offset\":858,\"length\":12,\"style\":\"UNDERLINE\"},{\"offset\":1013,\"length\":10,\"style\":\"UNDERLINE\"},{\"offset\":0,\"length\":20,\"style\":\"BOLD\"},{\"offset\":274,\"length\":14,\"style\":\"BOLD\"},{\"offset\":533,\"length\":9,\"style\":\"BOLD\"},{\"offset\":654,\"length\":8,\"style\":\"BOLD\"},{\"offset\":858,\"length\":12,\"style\":\"BOLD\"},{\"offset\":1013,\"length\":10,\"style\":\"BOLD\"}],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5f1e399d7d0c030b7ae0"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "0",
    "description": "Intro",
    "text": "{\"blocks\":[{\"key\":\"dl89a\",\"text\":\"En tant que membre de la noblesse, rien n'a jamais troublé votre petite vie paisible si ce n'est les quelques larcins commis sur votre personne. Vous parcourez souvent le pays pour des rencontres importantes. Aujourd'hui, vous partez en voyage pour avoir une audience auprès du roi pour lui quémander d'importantes parcelles de terres. Pour parer à un éventuel danger, vous êtes parti avec un jour d'avance. Ainsi, votre carrosse avance, et vos gardes ne rencontrent pas le moindre problème. Par la fenêtre de votre voiture, vous repérez une magnifique forêt bordée par un océan de blé. Vous décidez donc de vous accorder une courte pause dans ce lieu paradisiaque. Vous ordonnez au cocher d'arrêter le carrosse et vous vous dirigez d'un pas leste vers la forêt en laissant sur place vos serviteurs et vos gardes du corps. Après avoir parcouru les champs de blé, vous entrez dans cette forêt qui vous ouvre les bras. Vous vous allongez sur une souche bordée de fleurs jaunes et vous profitez du chant des oiseaux sous le soleil éclatant. Une fois l'heure venue de rejoindre votre carrosse, vous reprenez le même chemin qu'à l'aller mais une fois rendu à l'orée du bois, vous vous cognez contre une sorte de barrière invisible. Vous donnez un puissant coup d'épaule sur celle-ci mais cela ne fait qu'augmenter votre douleur. Après un nouvel essai infructueux, vous apercevez un vieillard encore ingambe sortant du néant. Ce dernier vous indique : \\n- Ça ne sert à rien d'essayer de ressortir, vous n'y parviendrez jamais. \\n- Que se passe-t-il ? demandez-vous affolé. \\n- Vous n'allez sûrement pas me croire mais ce que je vais vous dire est la pure vérité, annonça l'inconnu. Sur cette forêt plane un puissant maléfice ainsi qu'une illusion : celle-ci rend le bois éblouissant de l'extérieur et on peut y entrer facilement. L'illusion dure encore quelques temps avant de s'estomper et de laisser place à la vraie nature de la forêt. \\nVous regardez autour de vous et vous vous apercevez avec effroi que cette si belle forêt où vous étiez arrivé s'est transformée en un bois dépéri et lugubre, dont tous les arbres se ploient sous le poids de leurs branches. \\n- Comme vous pouvez l'observer, reprit l'ancien, on a jeté sur cette futaie un maléfice de vieillissement, tous les êtres vivants qui y habitaient ont vieilli d'un seul coup. De plus, une fois à l'intérieur de la forêt, on ne peut en ressortir : un champ de force invisible et infranchissable bloque le passage. \\n- M…mais j'ai un…une rencontre impor…portante, balbutiez-vous éberlué. \\n- Vous pourriez bien annuler le maléfice, mais cela ne sera pas une tâche aisée. \\n- Comment puis-je repartir ? le suppliez-vous. \\n- Pour annuler le sort, il faut réunir les quatre syllabes du mot de pouvoir grâce auquel on l'a lancé. Je ne sais pas où elles se trouvent exactement mais je sais qu'elles sont éparpillées dans la forêt, gardées précieusement par ceux qui les connaissent. Chacun n'en connaît qu'une seule et je ne peux malheureusement pas vous aider. \\n- Mais qui donc a pu lancer ce sort ? \\n- C'est moi, j'ai récité une formule pour laver mes bottes mais je me suis trompé à un moment et l'effet en a été complètement modifié. \\nVous vous demandez comment cet homme peut faire un tel aveu d'une manière aussi désinvolte. Cache-t-il quelque secret ? Il vaut mieux partir loin de lui le plus vite possible.\\n- Par où dois-je aller ? vous enquérez-vous. \\n- Suivez la direction qui vous semble la meilleure. Et méfiez-vous, ce bois regorge de végétaux agressifs et des bandits y sévissent. \\nVous ragez intérieurement : tout cela serait donc de la faute du vieillard ! Sur ces mots, le vieillard repart comme il est venu. Vous voici maintenant perdu dans une forêt dont vous ne pouvez ressortir à moins de découvrir les quatre syllabes d'un mot de pouvoir, tout cela à cause d'un court interlude ! Rendez-vous au 1.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a5f4c399d7d0c030b7ae2"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "remove"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7b",
        "operator": "add"
      }
    ],
    "__v": 10,
    "title": "16",
    "description": "Linda",
    "text": "{\"blocks\":[{\"key\":\"3ulk1\",\"text\":\"Le brigand au foulard rouge vient vers vous et vous déclare : \\n- Nous avons décidé de te remettre la jeune fille et de te laisser partir, mais à une seule condition. \\n- Vous êtes bien honorable, lui assurez-vous sans vraiment le penser. \\n- Vous devez nous donner cette dague magnifiquement ornée que vous avez là, ordonne-t-il en montrant le fourreau de votre arme. \\nAussitôt, vous acceptez. Le chef s'empare de votre arme et se tourne vers ses compagnons pour montrer son nouveau trésor. Vous feriez n'importe quoi pour sauver cette jeune fille en détresse. Mais ce n'est qu'après, quand la victime des brigands est libérée, que vous vous rendez compte à quel point une arme vous serait utile pour votre tâche. La cible des crapules, aussitôt délivrée, vient vers vous et vous remercie : \\n- Je me nomme Linda, et… \\nDégoûté par l'haleine fétide de la femme, vous tournez aussitôt la tête, ne lui laissant pas le temps de finir sa phrase. \\n- Qu'il y a-t-il ? \\n- Je suis désolé, répondez-vous avec difficulté, je vis dans la haute société et ...\\n- Moi, je ne connais guère la haute société. Je suis une fillette du village de Bellus. Il y a deux jours, j'ai senti un bourdonnement dans mes oreilles et je me suis mise à grandir subitement. Je suis alors sortie pour prévenir ma famille, mais tout le monde avait subi le même sortilège. Mes parents sont devenus vieux, mon grand-père est mort de vieillesse, ma sœur est devenue adulte, comme moi. Maintenant, j'essaie de fuir les brigands - les violents enfants du village qui ont vieilli - mais ils sont partout. J'essaie aussi de retrouver ma sœur. Je vous remercie de m'avoir tirée de ce mauvais pas. En gage de reconnaissance, je suis prête à tout faire pour toi. \\nVous lui expliquez alors votre rendez-vous avec le roi, votre pause dans ce bois, la rencontre avec le vieillard et votre seule chance de quitter la forêt : trouver les quatre syllabes du mot de pouvoir. Elle vous indique alors que pour trouver des érudits, il faut se rendre dans son village qui se trouve à l'ouest de la forêt. Elle vous supplie aussi, une fois arrivé au village, de remettre à son père sa bague. Elle vous tend alors une bague tressée avec des lianes, des tiges et des cheveux, qui forment un enchevêtrement tout à fait magnifique. Puis, après un long adieu, elle vous quitte, en vous indiquant qu'elle va essayer de trouver sa sœur. Ajoutez un point au temps écoulé. Puis, vous avez le choix entre deux pistes pour poursuivre votre route. L'une mène au nord vers des arbres épineux et l'autre se dirige vers l'est où vous percevez un faible bruit.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a82c3399d7d0c030b7ae5"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "48",
    "description": "Négociation ratée",
    "text": "{\"blocks\":[{\"key\":\"3bbt2\",\"text\":\"Les brigands rejettent votre proposition et vous demandent des friandises si vous voulez qu'ils laissent la jeune fille en paix. Voilà des brigands peu ordinaires !  \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8331399d7d0c030b7ae8"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "22",
    "description": "Spinulas",
    "text": "{\"blocks\":[{\"key\":\"kuv1\",\"text\":\"Vous progressez dans le bois, mais la végétation morte disparaît et est remplacée par d'épais SPINULAS, grands arbres épineux ayant le pouvoir de déplacer leurs racines. Vous vous déplacez du plus vite que vos jambes peu entraînées le peuvent, mais les épines agrippent vos riches vêtements et des estafilades courent le long des endroits où votre peau est nue. Vous perdez un point de constitution. Quand enfin vous pensiez réussir à échapper aux Spinulas, l'un d'entre eux, le plus grand, étend ses branches pour vous bloquer le passage. Comment allez-vous franchir cet obstacle inattendu ?  \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a842a399d7d0c030b7aed"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "7",
    "description": "Acrobatie spinulas",
    "text": "{\"blocks\":[{\"key\":\"b08cf\",\"text\":\"Vous remarquez un arbre mort sur votre droite, et une idée de génie vous vient en tête. Vous courez vers celui-ci, Vous sautez sur une branche, puis sur une autre encore plus élevée, et vous effectuez un saut périlleux au-dessus du végétal pour vous retrouver derrière lui. Après l'atterrissage, vous courez le plus vite que vous pouvez en sens inverse des Spinulas. Ceux-ci, désorientés et peu rapides, tentent vainement d'agiter leurs branches au loin. Comme votre corps n'est pas adapté à la course, vous vous affalez sur un énième arbre pourrissant, épuisé. Une goutte de sueur perle sur votre front. Ajoutez un point au temps écoulé. Le sentier se termine par un embranchement. Un chemin part vers l'ouest, un autre s'enfonce dans les profondeurs de la forêt vers le nord, et le dernier se dirige vers l'est.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8483399d7d0c030b7af1"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "32",
    "text": "{\"blocks\":[{\"key\":\"ashbn\",\"text\":\"Vous sortez votre arme de son fourreau et vous tranchez l'une des branches du Spinulas. Le végétal agite alors ses autres membres pour vous frapper mais dès que l'un d'entre eux vient à votre portée, vous le tranchez net. Enfin, le Spinulas arrête de bouger définitivement. Sûrement effrayés par votre victoire sur l'un d'entre eux, les autres Spinulas arrêtent de vous attaquer. Une goutte de sueur perle sur votre front. Ajoutez un point au temps écoulé. Le sentier se termine par un embranchement. Un chemin part vers l'ouest, un autre s'enfonce dans les profondeurs de la forêt vers le nord, et le dernier se dirige vers l'est. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a84b2399d7d0c030b7af5"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "42",
    "text": "{\"blocks\":[{\"key\":\"a8ieo\",\"text\":\"Vous poursuivez votre progression dans la forêt et peu après, vous remarquez un carré d'herbes à la couleur turquoise qui borde le sentier.  \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a84f5399d7d0c030b7af8"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "12",
    "description": "Herbes",
    "text": "{\"blocks\":[{\"key\":\"4b2tf\",\"text\":\"Vous reconnaissez ces herbes. Vous les avez étudiées en cours de biologie dans votre jeunesse. Ce sont des herbes Cura qui, mélangées à de l'eau, permettent de constituer un antidote à n'importe quel poison. Bien sûr, si vous n'êtes pas empoisonné, cette découverte n'a aucun intérêt (sauf si vous veniez à vous faire empoisonner d'ici la fin de votre aventure). Si vous êtes empoisonné, vous vous mettez en quête d'un petit cours d'eau que vous trouvez non loin de là. Vous mélangez les herbes avec l'eau et vous obtenez un liquide turquoise que vous buvez avec empressement. Stoppez immédiatement tous les effets que vous auriez pu subir à cause de l'empoisonnement. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a852a399d7d0c030b7afa"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 5,
    "title": "28",
    "description": "Carrefour",
    "text": "{\"blocks\":[{\"key\":\"46g3a\",\"text\":\"Après une longue randonnée peu reposante (ajoutez un point au temps écoulé), vous atteignez un croisement entre quatre chemins. Celui de nord mène à l'autre côté de la forêt où il vous semble apercevoir un bâtiment de bois. La piste ouest serpente le long de la forêt et vous ne parvenez pas à en voir le bout. Le sentier de l'est se dirige vers une vieille bâtisse en bois. Enfin, le chemin du sud aboutit au cœur de la forêt, vers des arbres épineux. Quelle direction allez-vous emprunter ?\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8579399d7d0c030b7aff"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a79",
        "operator": "add"
      }
    ],
    "__v": 3,
    "title": "46",
    "description": "sanglier",
    "text": "{\"blocks\":[{\"key\":\"7fakd\",\"text\":\"Le sol meuble s'enfonce sous vos pieds et la boue encrasse vos bottes éreintées par cette promenade. Un son lugubre parvient à vos oreilles. Vous vous éloignez du chemin pour mieux entendre ce son. C'est alors que vous découvrez, auprès d'une tanière, une vieille laie désespérée émettant une longue plainte. Alors que vous vous approchez encore plus, vous découvrez que ses marcassins ont été déchiquetés par des bêtes sans pitié. «Sûrement des loups», vous dit une petite voix dans votre tête. Vous constatez que le lieu regorge de marrons et au cas où vous rencontreriez le mâle de cette laie, vous en prenez donc une bonne poignée que vous insérez dans une de vos poches. Ensuite, vous reprenez le sentier et vous aboutissez à un embranchement. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8642399d7d0c030b7b03"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "6",
    "description": "lutin",
    "text": "{\"blocks\":[{\"key\":\"e18tc\",\"text\":\"La végétation, bien qu'en piètre état, est assez dégagée pour vous permettre de vous frayer un passage. Vous pouvez donc vous faufiler entre les branches figées à jamais pour rejoindre un sentier relativement praticable. Une forte brise agite les branches des arbres et transforme la sueur qui perle sur votre nuque en gouttelettes glacées. Les effluves sordides qui parviennent à vos narines vous mettent le cœur au bord des lèvres. Prêt à défaillir, vous secouez votre tête pour vous changer les idées. Voilà un bout de temps que vous errez dans cette forêt sinistre sans rencontrer une âme qui vive.  Sinon, poursuivez votre lecture. Soudain, vous entendez des appels à l'aide. Le son provient de votre droite. Vous cherchez l'origine de ce son et vous découvrez, au beau milieu d'une clairière, un lutin emprisonné dans une cage en bois. Dans votre enfance, vous n'aviez jamais cru à ces créatures féériques. Voilà une preuve vivante qui contredit cette ancienne pensée. Dès qu'elle vous aperçoit la petite créature cesse aussitôt de hurler et d'une voix douce, elle vous demande : \\n- Noble seigneur, vous, phare de la bonté, incarnation de la générosité, auriez-vous la gentillesse de me délivrer ? Cette cage est faite dans un bois qui annihile mes pouvoirs magiques et je ne peux donc pas me libérer à l'aide d'un sortilège. Je vous en supplie, libérez-moi de ce piège diabolique et je vous accorderai une récompense au-delà de vos rêves les plus fous. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8726399d7d0c030b7b0d"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "24",
    "text": "{\"blocks\":[{\"key\":\"e5p2v\",\"text\":\"D'un coup bien placé, vous réussissez à abîmer l'un des barreaux de la cage. Vous répétez l'opération plusieurs fois jusqu'à ce que le barreau se casse entièrement. Le lutin, tout joyeux, sort alors de sa cage et exécute une petite danse de victoire. \\n- Je vous remercie de m'avoir tiré des griffes de la personne qui avait placé cette cage. Comme promis, vous aurez le droit à une récompense digne de votre effort. Que désirez-vous ? Du temps, de la force ou des richesses ? \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8751399d7d0c030b7b11"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "25",
    "text": "{\"blocks\":[{\"key\":\"f6tgt\",\"text\":\"Vous faites quelques mouvements de vos bras pour vous échauffer, puis saisissez fermement deux des barreaux de la cage. Ensuite, vous les écartez de toutes vos forces jusqu'à ce qu'ils se rompent. Le lutin, tout joyeux, sort alors de sa cage et exécute une petite danse de victoire. \\n- Je vous remercie de m'avoir tiré des griffes de la personne qui avait placé cette cage. Comme promis, vous aurez le droit à une récompense digne de votre effort. Que désirez-vous ? Du temps, de la force ou des richesses ? \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8784399d7d0c030b7b15"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "dec",
        "value": 2
      }
    ],
    "__v": 4,
    "title": "31",
    "description": "lutin-temps",
    "text": "{\"blocks\":[{\"key\":\"83iq\",\"text\":\"Vous demandez au lutin d'acquérir du temps : \\n- Les humains disent que le temps passe. Le Temps dit que les humains passent, vous répond-il. \\nSur ce, il claque des doigts et vous vous sentez aspiré par un tourbillon d'étoiles. Quand vos pieds retouchent le sol, vous constatez que vous êtes revenu en arrière. Grâce à ce sort, diminuez de deux points le temps écoulé. Ensuite, le lutin ayant disparu, vous poursuivez votre chemin. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a87cd399d7d0c030b7b19"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "aff",
        "value": 7
      }
    ],
    "__v": 4,
    "title": "10",
    "description": "lutin-force",
    "text": "{\"blocks\":[{\"key\":\"8tjvc\",\"text\":\"Vous demandez au lutin d'obtenir de la force. À ces mots, il souffle dans votre direction et un tourbillon de flammes vous recouvre. Mais les flammes ne vous brûlent pas : elles vous renforcent. Le brasier vous charge d'une énergie nouvelle. Vous pouvez choisir cet effet : soit vous remontez votre total de constitution à votre total de départ, soit vous acquérez une des compétences suivantes, au choix : Robustesse ou épéiste chevronné. Ensuite, le lutin vous quitte, et vous poursuivez votre chemin. Vous pouvez alors vous rendre au nord-ouest au 46, au nord au 35 ou au nord-est au 9. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a87f5399d7d0c030b7b1a"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "9",
    "description": "Araignées",
    "text": "{\"blocks\":[{\"key\":\"s14i\",\"text\":\"Vous vous dirigez vers l'est, là où le temps s'assombrit. Une brume flotte dans l'air, nappe ondoyante parmi les arbres figés dans leur mort, on aurait dit un océan agité par la houle. Le lieu vers lequel vous vous dirigez est infesté de toiles d'araignées qui s'accrochent à vos vêtements, et vous immobilisent peu à peu, jusqu'à ce que vous soyez prisonnier dans un cocon de toile. Comment allez-vous vous dégager de ces fils insupportables ? \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a88a9399d7d0c030b7b21"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "33",
    "text": "{\"blocks\":[{\"key\":\"6bihi\",\"text\":\"Vous vous dépêtrez tant bien que mal de ces toiles d'araignées en les tranchant une à une à l'aide de votre arme. Ajoutez un point au temps écoulé. Vous retirez les derniers fils de vos riches habits à la main. Vous reprenez ensuite votre chemin, l'arme à la main, de peur de rencontrer quelque bête nuisible. Peu après, le chemin débouche sur une vaste clairière sombre. Peu après, le chemin débouche sur une vaste clairière sombre. La brume opaque rampe au ras du sol telle un énorme reptile laiteux. Quand vous distinguez enfin ce que recèle la clairière, un frisson d'horreur vous envahit et vous vous glacez d'effroi. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a88cd399d7d0c030b7b23"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "41",
    "text": "{\"blocks\":[{\"key\":\"avreg\",\"text\":\"Vous vous contorsionnez du maximum que vous le pouvez et vous réussissez à vous libérer tant bien que mal de vos liens. Ajoutez un point au temps écoulé. Vous retirez les derniers fils de vos riches habits à la main. Vous reprenez ensuite votre chemin, l'arme à la main, de peur de rencontrer quelque bête nuisible. Peu après, le chemin débouche sur une vaste clairière sombre. Peu après, le chemin débouche sur une vaste clairière sombre. La brume opaque rampe au ras du sol telle un énorme reptile laiteux. Quand vous distinguez enfin ce que recèle la clairière, un frisson d'horreur vous envahit et vous vous glacez d'effroi. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a88f0399d7d0c030b7b25"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "4",
    "text": "{\"blocks\":[{\"key\":\"aiusf\",\"text\":\"Au prix d'un effort surhumain, vous réussissez à écarter vos bras et à vous débarrasser tant bien que mal de vos liens. Ajoutez un point au temps écoulé. Vous retirez les derniers fils de vos riches habits à la main. Vous reprenez ensuite votre route, l'arme à la main, de peur de rencontrer quelque bête nuisible. Peu après, le chemin débouche sur une vaste clairière sombre. La brume opaque rampe au ras du sol telle un énorme reptile laiteux. Quand vous distinguez enfin ce que recèle la clairière, un frisson d'horreur vous envahit et vous vous glacez d'effroi. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8910399d7d0c030b7b27"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "description": "Mort",
    "title": "38",
    "text": "{\"blocks\":[{\"key\":\"40d73\",\"text\":\"Vous avez été trop long ! Le roi, furieux que vous n'ayez pas été à son audience et qu'il ait perdu du temps pour rien, va sûrement vous renvoyer, vous défaire de votre titre d'aristocrate, et vous allez commencer une vie misérable. Autant rester dans cette forêt pour essayer d'en percer le mystère plutôt que d'être condamné à cette vie peu envieuse. Vous décidez donc de rester dans la forêt, à braver les dangers qui viendront à vous, et à chercher vainement les syllabes du mot de pouvoir. Vous demeurerez ainsi, et vos titres et terres seront délaissés. Ne pleurez pas : un héros est celui qui fait tout ce qu'il peut ! Et puis, comme disait Socrate : «La chute n'est pas un échec. L'échec est de rester là où l'on est tombé.» Recommencez l'aventure ! \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a892d399d7d0c030b7b28"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "text": "{\"blocks\":[{\"key\":\"b3gh1\",\"text\":\"Des araignées. Non, pas de petites araignées semblables à celles qui se réfugient habituellement dans les recoins des châteaux, mais d'énormes monstres de la taille d'un cheval pourvus de quatre paires d'yeux et de huit pattes gigantesques, noires et couvertes de poils. Vous percevez des cliquetis sonores indiquant que ces longues «choses» hérissées de poils se rapprochent de vous. Toutes se précipitent alors de tous côtés pour mieux vous observer en agitant frénétiquement leurs pinces à votre vue. Ces monstres ne vous ont pas encore atteint, et il vous reste un peu de temps pour réfléchir comment vous allez vous sortir de ce mauvais pas.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "title": "23"
  },
  {
    "_id": {
      "$oid": "568a898b399d7d0c030b7b2c"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "14",
    "description": "Araignées_marrons",
    "text": "{\"blocks\":[{\"key\":\"dbojn\",\"text\":\"Vous vous souvenez que les araignées détestent les marrons. Vous farfouillez en toute hâte dans vos poches et vous poussez un long soupir de soulagement quand vos mains sont enfin au contact des marrons. Priant pour que votre intuition soit bonne, vous projetez les fruits vers les araignées géantes, ce qui les fait aussitôt reculer. Vous délimitez un périmètre de sécurité entre ces membres de la famille des arachnides et vous, puis vous courez vers un sentier proche, lançant de temps à autre un marron pour être sûr que les araignées ne vous suivent pas. Enfin, vous vous arrêtez et titubez vers un rocher couvert de mousse verdâtre. Là, vous reprenez votre souffle, puis vous vous remettez en chemin. Aucune toile d'araignée ne vient troubler votre avancée et c'est avec un soupir de soulagement que vous atteignez un embranchement. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a89b9399d7d0c030b7b2f"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "29",
    "text": "{\"blocks\":[{\"key\":\"60im9\",\"text\":\"Réagissant au quart de tour, vous grimpez aussitôt à un arbre dépéri, priant pour que ses branches ne cassent pas et vous sautez d'arbres en arbres (ne vous prenez quand même pas pour Tarzan), si bien que les araignées ne parviennent point à vous suivre. Puis, vous vous arrêtez, et vous tendez l'oreille. Plus aucun cliquetis d'araignée ! Vous descendez de l'arbre sur lequel vous venez de sauter et vous titubez vers un rocher couvert de mousse verdâtre. Là, vous reprenez votre souffle, puis vous vous remettez en chemin. Aucune toile d'araignée ne vient troubler votre avancée et c'est avec un soupir de soulagement que vous atteignez un embranchement.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "description": "Araignées_acrobate"
  },
  {
    "_id": {
      "$oid": "568a89df399d7d0c030b7b32"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a78",
        "operator": "add"
      }
    ],
    "__v": 9,
    "title": "8",
    "text": "{\"blocks\":[{\"key\":\"7pqkc\",\"text\":\"Vous courez à en perdre haleine vers le sentier le plus proche et les araignées, surprises par votre réaction, vous laissent de précieuses secondes avant de vous poursuivre. Durant votre course effrénée, vous remarquez une rivière que vos poursuivantes ne pourraient pas franchir. Vous vous élancez vers ce cours d'eau mais une araignée plus rapide que les autres parviennent à vous rattraper et à vous mordre à la cuisse. Vous perdez un point de constitution. Enfin, vous distancez les arachnides et vous sautez dans la rivière. Vous nagez en vitesse et vous gagnez l'autre rive. Enfin, vous vous arrêtez et titubez vers un rocher couvert de mousse verdâtre. Là, vous reprenez votre souffle, et vous inspectez votre blessure. Malheureusement, elle s'est infectée et l'araignée a eu le temps de vous injecter du poison. Dorénavant, tous les trois paragraphes que vous parcourrez, vous perdrez un point de constitution (cet effet ne s'arrêtera que si vous trouvez un moyen de vous guérir ou si vous atteignez le paragraphe de victoire : dans ce cas, vos médecins vous procureront un antidote). Puis vous vous remettez en chemin. Aucune toile d'araignée ne vient troubler votre avancée et c'est avec un soupir de soulagement que vous atteignez un embranchement. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8a10399d7d0c030b7b35"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "49",
    "description": "Sage",
    "text": "{\"blocks\":[{\"key\":\"3mm64\",\"text\":\"Après une longue marche, vous atteignez une clairière qui comporte en son milieu une vieille bâtisse en bois vermoulu. Bizarrement, ce bâtiment est entouré par une sorte de neige blanche. Pourtant, le temps n'est pas propice à une telle intempérie. Dubitatif, vous vous demandez si cette «neige» ne recèle pas un quelconque piège.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8a41399d7d0c030b7b3a"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "20",
    "description": "\"Neige\"",
    "text": "{\"blocks\":[{\"key\":\"6ftc3\",\"text\":\"Avec précaution, vous posez votre pied sur la «neige». À votre grand soulagement, il ne se passe rien, si ce n'est un cri étouffé provenant de l'édifice. Vous continuez à marcher et une voix bourrue vous ordonne : \\n- Arrêtez, vous ne voyez donc pas que vous êtes en train de piétiner ma barbe ! \\nStupéfait, vous touchez la matière sur laquelle vous marchiez. Il s'agit en effet d'une géante barbe ! Vous parcourez rapidement le reste du chemin vous menant à la bâtisse et vous ouvrez la porte. Dans le bâtiment se trouve un vieil homme dont la gigantesque barbe blanche recouvre le sol invisible. Le vieillard grogne : \\n- Vous auriez pu faire attention ! Sortez de ma maison avant que je ne perde patience ! \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8aa1399d7d0c030b7b3f"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "37",
    "text": "{\"blocks\":[{\"key\":\"o3qt\",\"text\":\"Comment allez-vous bien pouvoir entrer dans cette masure ? À votre droite, vous remarquez un arbre au bois vermoulu dont les branches semblent assez solides pour que vous puissiez y grimper. C'est ce que vous vous empressez de faire, et une fois parvenu à une hauteur convenable, vous remarquez sur le toit de la cabane une lucarne par laquelle vous pourriez passer. Il ne vous reste plus qu'à atteindre cet objectif. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8af8399d7d0c030b7b46"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "43",
    "description": "Tarzan",
    "text": "{\"blocks\":[{\"key\":\"1or3e\",\"text\":\"Vous utilisez tous vos talents en acrobatie pour effectuer un magnifique saut se terminant par une roulade sur vous-même pour atténuer le choc. Finalement, vous ne ressortez de ce numéro d'acrobate qu'avec quelques ecchymoses. Ensuite, vous cherchez la lucarne et vous vous contorsionnez pour y entrer. Dans le bâtiment se trouve un vieil homme dont la gigantesque barbe blanche recouvre le sol invisible. La «neige» était donc la barbe de cet homme !\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8b1f399d7d0c030b7b4b"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "26",
    "text": "{\"blocks\":[{\"key\":\"ftd9v\",\"text\":\"Du coin de l'œil, vous remarquez que sur une des branches de l'arbre se trouve une liane. Vous l'atteignez et vous effectuez quelques gestes de vos mains afin de pouvoir vous en servir convenablement sans tomber lourdement. Ensuite, vous reculez sur la branche pour prendre de l'élan et vous vous élancez (un peu comme Tarzan) sur la liane et vous vous balancez avec jusqu'à atteindre la lucarne (OOHHIOOHHIO). Vous atterrissez sur le toit en faisant une roulade et vous vous y arrêtez un moment pour faire le bilan de vos blessures. La liane, sèche, vous a brûlé les mains vous enlevant un point de constitution. Ensuite, vous ouvrez la lucarne afin de vous y glisser. Dans le bâtiment se trouve un vieil homme dont la gigantesque barbe blanche recouvre le sol invisible. La «neige» était donc la barbe de cet homme !\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8ba0399d7d0c030b7b4f"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 2
      }
    ],
    "__v": 4,
    "title": "50",
    "text": "{\"blocks\":[{\"key\":\"3mll3\",\"text\":\"Vous reculez sur la branche pour prendre de l'élan et vous vous élancez, sautez et tombez lourdement sur le toit de la cabane. Vous perdez deux points de constitution. Ensuite, vous cherchez la lucarne et vous vous contorsionnez y entrer. Dans le bâtiment se trouve un vieil homme dont la gigantesque barbe blanche recouvre le sol invisible. La «neige» était donc la barbe de cet homme !\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8bce399d7d0c030b7b53"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a77",
        "operator": "add"
      }
    ],
    "__v": 7,
    "title": "13",
    "text": "{\"blocks\":[{\"key\":\"taf1\",\"text\":\"Le vieillard se présente comme étant Berus, le doyen du village Bellus. \\n- Pourquoi vivez-vous à l'écart du village ? le questionnez-vous. \\n- Je préfère vivre loin de la bêtise des hommes pour me développer et devenir maître de moi-même : «Celui qui est maître de lui-même est plus grand que celui qui est maître du monde», récite-t-il. \\n- Et si vous connaissez les réponses aux questions, pouvez-vous répondre aux miennes ? \\n- Mais bien entendu ! Vous avez raison de poser des questions ! «Le sage est celui qui s'étonne de tout», vous indique-t-il. \\nVous lui racontez alors votre parcours et vous lui demandez s'il connaît l'une des syllabes du mot de pouvoir. Visiblement amusé par cette question, il vous apprend que l'une des syllabes du mot de pouvoir est «tion». Enfin, vous le quittez, enrichi par sa réponse et vous retournez à l'embranchement. Ajoutez un point au temps écoulé.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8bf8399d7d0c030b7b56"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 1
      }
    ],
    "__v": 4,
    "title": "30",
    "description": "Géant",
    "text": "{\"blocks\":[{\"key\":\"pno8\",\"text\":\"La piste que vous prenez est en montée, et son ascension est des plus ardues. À plusieurs reprises, votre pied dérape sur une pierre plus traître que les autres et vous tombez lamentablement. Toutes ces chutes vous ont coûtées un point de constitution. Des relents néfastes envahissent vos narines et vous forcent à vous mettre le nez sous vos riches habits. Alors que vous alliez encore trébucher, vous vous raccrochez de justesse à une branche, mais une fois stable, vous constatez qu'elle était toute vermoulue et que si vous la teniez encore, elle se serait brisée et vous seriez encore tombé. Il s'en est fallut d'un cheveu ! Lorsqu'enfin, le chemin redevient plat, vous vous retrouvez nez à nez avec un géant d'au moins trois mètres de haut, possédant une massue dont la taille est égale à la vôtre ! Il bloque l'entrée d'un sentier sinueux menant à une sorte de village.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8c25399d7d0c030b7b5a"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 4,
    "description": "Massage géant",
    "title": "2",
    "text": "{\"blocks\":[{\"key\":\"8tjte\",\"text\":\"Vous inspirez profondément, puis adressez la parole au géant : \\n- Y a-t-il un moyen d'emprunter l'un des deux passages qui se trouve derrière vous ? \\n- Moi… Azog, tuer… humains ! rugit-il. \\nPas de chance, vous êtes un humain ! Il entame un cri de guerre, brandit sa massue, et se jette sur vous. Le seul problème (pour lui), c'est qu'il s'est manifestement arrêté au milieu de son parcours pour pousser un cri de douleur : \\n- Aaahh… mon dos ! Encore… bloqué ! \\nVous comprenez alors que sous le sortilège de vieillesse, le géant a vieilli et qu'il souffre de rhumatismes. Vous lui proposez alors de lui faire un massage au dos, à condition qu'il ne vous tue pas. Il accepte, et vous vous mettez au travail. N'ayant jamais fait un massage de votre vie, vous essayez de reproduire les gestes que font vos servantes. Le dos du géant ne facilite pas la tâche : il est si encrassé que vous avez l'impression de mettre vos mains dans la boue. Ajoutez un point au temps écoulé. Un peu plus tard, le géant vous remercie et vous propose de prendre un des deux chemins derrière lui en échange de seulement 5 pièces d'or.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8c68399d7d0c030b7b5e"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "description": "Village",
    "title": "15",
    "text": "{\"blocks\":[{\"key\":\"a33s4\",\"text\":\"Le chemin débouche sur un petit hameau. Une pancarte vermoulue indique : BELLUS. Des colonnes de fumée s'élèvent dans les airs sans que le moindre souffle ne dévie jamais leur trajectoire rectiligne. Vous n'êtes pas surpris lorsque, en entrant au village, vous ne voyez aucun enfant. Les rues sont désertes, tout le monde semble être resté chez soi. Vous ne voulez point rentrer dans les chaumières, de peur de déranger l'intimité des gens. Vous vous apprêtiez à repartir lorsque vous entendez un sanglot étouffé. Vous en cherchez l'origine et vous trouvez, près d'une fontaine aux eaux usées, un vieil homme assis sur un banc en se prenant la tête dans les mains. Vous vous en approchez et vous lui demandez ce qui le fait pleurer ainsi : \\n- C'est ma fille Linda, elle est partie après avoir subit le sortilège de vieillissement et je ne sais pas où elle est ! Je l'ai laissée ! Je n'ai pas fait mon devoir de père ! Où est-elle maintenant, ma pauvre petite chérie, où est-elle ? se lamente-t-il. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8ccc399d7d0c030b7b62"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a76",
        "operator": "add"
      }
    ],
    "__v": 8,
    "title": "40",
    "description": "Erudit village",
    "text": "{\"blocks\":[{\"key\":\"1ab6e\",\"text\":\"Quand vous lui montrez la bague tressée, le visage du vieil homme s'éclaircit. \\n- Vous l'avez trouvée ? Vous avez trouvé ma petite fille ! Dieu soit loué ! Moi qui la croyais perdue à tout jamais. Où l'avez-vous rencontrée ? \\nVous lui racontez alors toute l'histoire, comment vous l'avez sauvée des brigands, son récit… L'homme vous remercie, se présente comme Venos le père de Linda et vous demande ce qui pourrait vous aider en récompense. Vous lui racontez votre mission et il vous indique : \\n- Allons chez Arcânus, le vieil érudit. Il connaît sûrement une des syllabes de ce mot ! \\nSur ce, il vous emmène jusqu'à une vieille bâtisse délabrée dont les murs semblent sur le point de s'effondrer. Il toque doucement, et un vieillard chenu lui ouvre la porte. \\n- C'est pour quoi ? demande-t-il d'un ton bourru. \\nVenos lui expose alors la situation et l'érudit vous invite à entrer chez lui. Dans sa maison (si l'on peut employer ce terme), règne un capharnaüm indescriptible. Des parchemins se cachent dans les moindres recoins, des fioles sont entreposées dans le désordre, des livres traînent par terre… Arcânus débute : \\n- Je ne connais qu'une seule syllabe de ce mot mais si cela peut vous aider, la voici : LA. \\nVous gravez cette information dans votre tête, puis le sage vous invite à manger. Pressé mais de peur de l'offenser, vous acceptez le repas et vous reprenez un point de constitution. Ensuite, Arcânus et Venos vous souhaitent bonne chance et vous reprenez votre chemin, particulièrement confiant car vous avez trouvé une syllabe. Ajoutez un point au temps écoulé.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8cf8399d7d0c030b7b64"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "36",
    "text": "{\"blocks\":[{\"key\":\"8uf6j\",\"text\":\"Fatigué par tout votre parcours mais pressé de retrouver les quatre syllabes à temps, vous marchez à pas vifs vers le bâtiment en bois. Quand vous vous en approchez suffisamment, vous distinguez une enseigne indiquant : « La chope mousseuse ». Vous comprenez donc bien vite qu'il s'agit là d'une taverne.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8d1c399d7d0c030b7b67"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "dec",
        "value": 3
      }
    ],
    "__v": 8,
    "title": "11",
    "text": "{\"blocks\":[{\"key\":\"82gat\",\"text\":\"Vous entrez dans la taverne. Celle-ci est éclairée par un lustre prêt à se rompre dont les bougies ont subi les assauts du temps. Dans les recoins sombres sont plantés des couteaux et les toiles d'araignées marquent leur vieillesse. Le tenancier de la taverne a une barbe hirsute, et vous regarde d'un air dédaigneux tout en continuant à essuyer sa chope avec un chiffon crasseux. Si vous êtes déjà venu ici, les nains sont repartis et vos seules possibilités sont de prendre une chope de bière ou de repartir. Si vous n'avez jamais été dans ce lieu, poursuivez votre lecture. Vous remarquez qu'il n'a pour seuls clients que trois nains aux allures joueuses et un homme à la mine patibulaire qui vous fixe avec un sourire déplaisant. D'habitude peu enclin à vous promener dans des endroits aussi mal famés que celui-ci, vous vous demandez ce qui a bien pu vous amener à venir ici. Si vous désirez prendre une chope de bière, elle coûte trois pièces d'or (un prix exorbitant !) et vous revigorera de un point de constitution. L'homme seul ne vous attirant pas trop, seuls les nains semblent dignes d'un intérêt quelconque (et encore !).\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8d4c399d7d0c030b7b6a"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "45",
    "text": "{\"blocks\":[{\"key\":\"8ja4v\",\"text\":\"Vous venez près des nains et vous leur demandez si vous pouvez vous joindre à eux. Ils acceptent avec un enthousiasme manifeste, se présentent comme étant les trois frères Biföm, Bifäm et Bifüm et vous demandent ce que vous venez faire ici. Vous leur racontez alors toute votre histoire et vous les interrogez sur les syllabes. Le plus vieux d'entre eux, Bifüm, vous répond : \\n- Ah ça oui que j'en connais une des syllabes de ce stupide mot ! Je ne suis pas très enclin à la dévoiler aux inconnus mais je suis d'humeur joueuse aujourd'hui et je veux bien vous dire l'objet de votre quête si vous trouvez la carte que j'ai en main. Ce défi vous demandera sûrement beaucoup de logique et du temps de réflexion. \\nSur ce, il sort comme par enchantement une carte de sa manche et la garde précieusement cachée. Il vous donne alors une liste de dix cartes possibles : \\n- Le 10 de cœur \\n- Le valet de cœur \\n- L'as  de cœur \\n- La dame de pique \\n- Le roi de pique \\n- Le 9 de carreau \\n- Le valet de carreau \\n- Le 9 de trèfle \\n- Le 10 de trèfle \\n- La dame de trèfle \\n- Maintenant, je vais dire séparément et respectivement à Biföm et à Bifäm le symbole et la valeur de cette carte, vous indique Bifüm. \\nIl se retourne alors vers ses deux compagnons et les prend un par un pour leur chuchoter quelque chose à l'oreille. \\n- Je ne sais pas la carte que cache Bifüm mais je sais que Bifäm ne la sait pas non plus, vous révèle Biföm. \\n- Au début, je ne savais pas quelle était la carte que cache Bifüm mais maintenant, je le sais, vous dit Bifäm. \\n- Dans ce cas, je sais aussi la carte que cache Bifüm, termine Biföm. \\nLe vieux nain vous laisse le temps de digérer ces informations et vous demande : \\n- Quelle est la carte que j'ai en main ? \\nPrenez bien le temps de réfléchir.  Si vous ne trouvez pas ou si votre réponse est fausse, les nains vous rejettent et vous quittez la taverne, démoralisé. Ajoutez un point au temps écoulé et rendez-vous au 42. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8db8399d7d0c030b7b76"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 5,
    "title": "Défaite énigme",
    "text": "{\"blocks\":[{\"key\":\"3i4oq\",\"text\":\"Vous n'avez pas trouvé la bonne réponse ! Les nains vous rejettent et c'est dépité que vous quittez la taverne. Ajoutez un point au temps écoulé.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8dd8399d7d0c030b7b78"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a75",
        "operator": "add"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 7,
    "title": "47",
    "text": "{\"blocks\":[{\"key\":\"76eum\",\"text\":\"- Félicitations ! explose le nain. J'ai rarement vu quelqu'un d'aussi intelligent que vous ! Vous avez largement mérité votre syllabe : «NU». \\nSur ce, les nains vous offrent une bière et vous regagnez un point de constitution. Ensuite, vous les quittez et vous reprenez votre route, galvanisé par votre réussite. Ajoutez un point au temps écoulé. \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8e03399d7d0c030b7b7a"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "title": "35",
    "description": "orques",
    "text": "{\"blocks\":[{\"key\":\"8prvh\",\"text\":\"Au fur et à mesure que vous avancez dans la pénombre angoissante, l'obscurité devient de plus en plus forte, l'atmosphère de plus en plus froide, les arbres de plus en plus rares, comme s'ils avaient été tous coupés. Une odeur malsaine envahit votre nez et un silence de mort pèse sur la futaie. Les sombres nuages annoncent les pleurs imminents du ciel. Vous commencez à claquer des dents et votre esprit oscille entre crier un bon coup pour vous relâcher ou ne rien faire pour garder la dignité de votre rang. C'est finalement la première solution qui l'emporte car vous pensez que personne ne pourrait vous voir dans cette nébulosité. Mais vous ne criez pas. Non. Vous hurlez. Votre cri déchire le silence pesant qui régnait en maître dans la forêt. Soulagé, vous respirez un bon coup et entreprenez de trouver un petit coin pour y faire vos besoins. Un poids immense commence à quitter votre vessie. Pendant ce temps, vous vous félicitez vous-même pour avoir pris la décision de crier. Mais le doute s'insinue furtivement dans votre esprit, tel un assassin dans la chambre de sa victime. Et si un ennemi vous avait entendu et se serait mis à votre recherche ? Vous vous écartez ensuite du lieu de soulagement et vous repartez sur la piste. Soudain, vous vous stoppez net. Vous avez entendu des grognements. Sûrement des ennemis à votre recherche. Vous vous cachez et vous distinguez trois orques traînant d'énormes haches à double tranchant qui se disputent pour une raison inconnue. Si vous désirez en savoir plus, vous restez là pour écouter. Apparemment, ils se chamaillent car l'un d'eux a entendu votre cri mais les autres ne le croient pas. Subitement, la dispute cesse et les orques se dévisagent. Puis, qui ils sont, d'où ils viennent… comme s'ils ne s'étaient jamais connus auparavant. C'est alors que vous comprenez pourquoi. La conséquence du sort de vieillesse a été la perte de mémoire, et ils ne savent plus où ils sont, qui ils sont… Soudain, l'un d'eux vous remarque et pousse un grognement pour alerter ses compagnons. Un combat s'annonce imminent.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8e6b399d7d0c030b7b82"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "inc",
        "value": 2
      }
    ],
    "__v": 10,
    "title": "17",
    "text": "{\"blocks\":[{\"key\":\"3ien2\",\"text\":\"Vous essayez de mettre à profit leur maladie de vieillesse pour les monter les uns contre les autres. Vous leur expliquez calmement, avec une superbe assurance, que le premier a cassé le casque du deuxième, que le deuxième a blessé le troisième et que le troisième a insulté le premier, et qu'ils se recherchaient depuis longtemps afin de se battre. Les orques boivent vos paroles comme du petit lait et commencent à s'entretuer. Vous fermez les yeux, écœuré par le sang et la rage des orques. Un instant plus tard, il ne reste que trois cadavres couverts de sang. Ensuite, vous commencez à les fouiller. Ils ne possédaient pas grand chose qui ait de la valeur, si ce n'est deux misérables pièces d'or. Ajoutez un point au temps écoulé.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8ea3399d7d0c030b7b84"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 4
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "__v": 9,
    "description": "fuite orque",
    "title": "5",
    "text": "{\"blocks\":[{\"key\":\"8emoh\",\"text\":\"Les orques réalisent que vous êtes un humain et vous prennent en chasse. Vous prenez alors vos jambes à votre cou et vous courez aussi vite que vos frêles jambes d'aristocrate le peuvent. Les orques, habitués à courir en toutes circonstances, vous rattrapent et l'un d'eux vous frappe de sa hache et vous enlève quatre points de constitution. Une douleur lancinante élance votre épaule et vous manquez de trébucher. Heureusement (peut-être est-ce dû à votre chance insolente ?), vous sautez par dessus une racine égarée mais l'orque qui vous talonnait n'a pas eu cette chance et est tombé la tête la première. Vous sautez sur l'occasion pour stopper votre course, prendre la hache de l'orque et lui enfoncer en pleine poitrine, si bien qu'il pousse un long hurlement d'agonie. Effrayés par votre démonstration, les deux autres orques abandonnent la poursuite et regagnent leur territoire. La douleur aigüe qui vous fait souffrir fait couler des larmes sur vos joues et vous poussez un hurlement de souffrance. Une fois remis de vos émotions, vous commencez à fouiller votre victime. Il ne possédait pas grand chose qui ait de la valeur, et vous roulez son corps vers un buisson d'orties pour le dissimuler. Ajoutez un point au temps écoulé.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a8ed1399d7d0c030b7b86"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a74",
        "operator": "add"
      }
    ],
    "__v": 3,
    "text": "{\"blocks\":[{\"key\":\"52ba\",\"text\":\"Vous reprenez votre chemin et la végétation s'intensifie, vous remarquez même quelques feuilles sur certains des arbres. C'est alors que d'un arbre sort une silhouette dont le corps est entièrement fait de bois. C'est une nymphe des bois. Elle se rapproche de vous et vous adresse la parole : \\n- Je me nomme Orma et je te remercie d'avoir tué ces orques. Avec leurs haches dévastatrices, ils ont rasé une partie de cette forêt et ont tué plusieurs de mes consœurs sans aucune pitié. Et si tu ne les avais pas attirés au moment où ils allaient trancher mon arbre, un orme, je serais morte à l'heure qu'il est. Comment puis-je te récompenser ? \\nVous expliquez alors à Orma votre parcours et vous lui demandez si elle connaît l'une des syllabes du mot de pouvoir. Visiblement amusée par cette question, elle vous apprend que l'une des syllabes du mot de pouvoir est «AN». Ensuite, elle reprend sa place dans son orme et d'une voix caverneuse, elle vous souhaite bonne chance.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "title": "39"
  },
  {
    "_id": {
      "$oid": "568a8f16399d7d0c030b7b8a"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "inc",
        "value": 50
      }
    ],
    "__v": 5,
    "text": "{\"blocks\":[{\"key\":\"1j53e\",\"text\":\"Vous demandez au lutin d'obtenir des richesses : \\n- L'argent ne fait pas le bonheur, vous répond-il d'un ton froid, visiblement déçu de votre souhait. \\nPuis, il tape dans ses mains et une bourse bien ronde apparaît à vos pieds. Vous constatez avec satisfaction qu'elle contient cinquante pièces d'or. Ensuite, le lutin vous quitte, et vous poursuivez votre chemin.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "title": "19",
    "description": "lutin_argent"
  },
  {
    "_id": {
      "$oid": "568a8f9e399d7d0c030b7b8e"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [],
    "__v": 0,
    "text": "{\"blocks\":[{\"key\":\"2s0j2\",\"text\":\"Vous prenez une profonde inspiration et vous prononcez le mot de pouvoir en espérant que ce soit le bon. Soudain, la forêt entière se recouvre d'un halo bleuté et la barrière invisible qui vous empêchait de sortir disparaît. Tandis que vous vous rapprochez de l'orée de la forêt, vous entendez les oiseaux chanter à nouveaux, les fleurs fanées refleurissent, les arbres se parent de couleurs magnifiques… Une fois rendu à l'orée de la forêt, vous croisez un jeune homme qui vous dit : \\n- Salut à toi, courageux aventurier ! Je voulais juste t'expliquer la situation. Je suis le vieillard que tu as rencontré au départ. Je me nomme Baratîs, premier magicien au service du roi et je sais que tu es noble. Sache qu'en fait, tout ce que tu as vécu dans la forêt n'était qu'une puissante illusion. En vérité, la forêt a toujours été verdoyante et souriante. J'ai juste lancé un sort d'illusion ainsi qu'un sort de barrière. Tout ce que tu as pu voir : les araignées, les orques, Linda… n'était qu'un pur fruit de mon imagination. Tu dois sûrement te demander pourquoi je t'ai fait souffrir, toi, noble de ce royaume plutôt que quelqu'un d'autre. Le souverain voulait te tester pour savoir si tu étais digne de confiance et s'il pouvait t'accorder des terres. Je t'ai suivi pendant tout ton parcours pour voir comment tu affrontais les dangers et à la fin, lorsque tu as prononcé le mot, ce n'était qu'un mot comme les autres, il n'avait aucun pouvoir particulier, j'ai levé les sortilèges. Tout le monde était au courant : tes gardes, tes servantes… sauf toi ! Tu as plutôt bien réussi le test et je pense que le roi va t'accorder les terres que tu lui demandes. Si tu n'avais pas trouvé toutes les syllabes du mot avant un certain temps, le roi t'aurait trouvé trop lent et je n'aurais par conséquent jamais levé le sortilège ! \\nSur ce, Baratîs vous raccompagne à votre voiture. Enfin, vous reprenez la route et vous atteignez le château du roi qui, appréciant les remarques de son magicien concernant votre réussite du test, vous accorde sans hésitation les terres que vous lui demandiez et même plus ! \\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}},{\"key\":\"3njiu\",\"text\":\"FIN\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}",
    "title": "21",
    "description": "Victoire"
  },
  {
    "_id": {
      "$oid": "568a8fbf399d7d0c030b7b8f"
    },
    "bookId": "568a4d5e399d7d0c030b7909",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "inc",
        "value": 2
      }
    ],
    "__v": 8,
    "title": "44",
    "text": "{\"blocks\":[{\"key\":\"elspl\",\"text\":\"D'un mouvement digne des plus grands épéistes, vous sortez votre arme du fourreau et transpercez le cœur du premier orque. Décontenancés, les deux autres orques mettent du temps à réagir et vous en profitez pour trancher net la gorge du second. Enfin, après un bref duel face au troisième, vous lui plantez votre dague entre les deux yeux. Ceux-ci roulent sur leurs orbites et après un long râle d'agonie, votre dernier adversaire meurt. Puis, d'un geste hautain, vous repoussez les gouttes de sang qui ont tâché votre tenue et vous fouillez les orques. Ils ne possédaient pas grand chose qui ait de la valeur, si ce n'est deux misérables pièces d'or. Ajoutez un point au temps écoulé.\\n\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
  },
  {
    "_id": {
      "$oid": "568a4fcf399d7d0c030b7ac1"
    },
    "conditionOperator": "and",
    "fromPage": "568a4fba399d7d0c030b7ac0",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si, à un moment ou un autre de votre aventure, votre total de temps écoulé tombe a 10, vous vous rendrez dans ce cas immédiatement au 38.",
    "toPage": "568a8910399d7d0c030b7b27"
  },
  {
    "_id": {
      "$oid": "568a5b81399d7d0c030b7ac2"
    },
    "conditionOperator": "and",
    "fromPage": "568a4fba399d7d0c030b7ac0",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous prenez le chemin menant au nord-ouest, rendez-vous au 27.",
    "toPage": "568a5c91399d7d0c030b7acc"
  },
  {
    "_id": {
      "$oid": "568a5b87399d7d0c030b7ac3"
    },
    "conditionOperator": "and",
    "fromPage": "568a4fba399d7d0c030b7ac0",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous optez pour celui menant au nord-est, rendez-vous au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a5b8b399d7d0c030b7ac4"
    },
    "conditionOperator": "and",
    "fromPage": "568a4fba399d7d0c030b7ac0",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si, désespéré, vous revenez à la clairière où vous vous êtes arrêté, rendez-vous au 18.",
    "toPage": "568a5c5a399d7d0c030b7ac9"
  },
  {
    "_id": {
      "$oid": "568a5bb9399d7d0c030b7ac6"
    },
    "conditionOperator": "and",
    "fromPage": "568a5ba6399d7d0c030b7ac5",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a83",
        "operator": "add"
      }
    ],
    "conditions": [],
    "__v": 3,
    "text": "Si vous choisissez les friandises, notez-les sur votre feuille d'aventure et rendez-vous à la page choix de capacités.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5bd1399d7d0c030b7ac7"
    },
    "conditionOperator": "and",
    "fromPage": "568a5ba6399d7d0c030b7ac5",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "add"
      }
    ],
    "conditions": [],
    "__v": 3,
    "text": "Si vous choisissez l'arme, notez-la sur votre feuille d'aventure et rendez-vous à la page choix de capacités.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5c25399d7d0c030b7ac8"
    },
    "conditionOperator": "and",
    "fromPage": "568a5ba6399d7d0c030b7ac5",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a81",
        "operator": "add"
      }
    ],
    "conditions": [],
    "__v": 3,
    "text": "Si vous choisissez l'or, notez-le sur votre feuille d'aventure et rendez-vous à la page choix de capacités.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5c72399d7d0c030b7aca"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c5a399d7d0c030b7ac9",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous optez pour celui menant au nord-est, rendez-vous au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a5c7a399d7d0c030b7acb"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c5a399d7d0c030b7ac9",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous prenez le chemin menant au nord-ouest, rendez-vous au 27.",
    "toPage": "568a5c91399d7d0c030b7acc"
  },
  {
    "_id": {
      "$oid": "568a5ca0399d7d0c030b7acd"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c91399d7d0c030b7acc",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez partir et vous rendre vers l'est au 46",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a5ca7399d7d0c030b7ace"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c91399d7d0c030b7acc",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez vous rendre vers le nord au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a5caf399d7d0c030b7acf"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c91399d7d0c030b7acc",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous tentez de parlementer avec les brigands, rendez-vous au 34.",
    "toPage": "568a5d3a399d7d0c030b7ad6"
  },
  {
    "_id": {
      "$oid": "568a5cbb399d7d0c030b7ad0"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c91399d7d0c030b7acc",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous souhaitez corrompre ces êtres infâmes, rendez-vous au 3.",
    "toPage": "568a5cdb399d7d0c030b7ad3"
  },
  {
    "_id": {
      "$oid": "568a5cc1399d7d0c030b7ad1"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c91399d7d0c030b7acc",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si enfin, vous ne voulez pas vous préoccuper de cette affaire, vous pouvez vous rendre au 46, d'où vous entendez un faible son.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a5cc6399d7d0c030b7ad2"
    },
    "conditionOperator": "and",
    "fromPage": "568a5c91399d7d0c030b7acc",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si enfin, vous ne voulez pas vous préoccuper de cette affaire, vous pouvez vous rendre au 22, vers des buissons épineux.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a5cfa399d7d0c030b7ad4"
    },
    "conditionOperator": "and",
    "fromPage": "568a5cdb399d7d0c030b7ad3",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous maîtrisez le talent d'éloquence, rendez-vous au 16.",
    "toPage": "568a5f4c399d7d0c030b7ae2"
  },
  {
    "_id": {
      "$oid": "568a5d11399d7d0c030b7ad5"
    },
    "conditionOperator": "and",
    "fromPage": "568a5cdb399d7d0c030b7ad3",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Sinon, rendez-vous au 48.",
    "toPage": "568a82c3399d7d0c030b7ae5"
  },
  {
    "_id": {
      "$oid": "568a5d4e399d7d0c030b7ad7"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d3a399d7d0c030b7ad6",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous maîtrisez le talent d'éloquence, rendez-vous au 16.",
    "toPage": "568a5f4c399d7d0c030b7ae2"
  },
  {
    "_id": {
      "$oid": "568a5d65399d7d0c030b7ad8"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d3a399d7d0c030b7ad6",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Rendez-vous au 48.",
    "toPage": "568a82c3399d7d0c030b7ae5"
  },
  {
    "_id": {
      "$oid": "568a5d8e399d7d0c030b7ada"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d83399d7d0c030b7ad9",
    "effects": [],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "equal",
        "value": 2
      }
    ],
    "__v": 4,
    "text": "Si vous avez choisi toutes vos capacités, rendez-vous au 0.",
    "toPage": "568a5f1e399d7d0c030b7ae0"
  },
  {
    "_id": {
      "$oid": "568a5d9f399d7d0c030b7adb"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d83399d7d0c030b7ad9",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a80",
        "operator": "add"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "inc",
        "value": 1
      }
    ],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "lessOrEqual",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a80",
        "operator": "doNotOwn"
      }
    ],
    "__v": 20,
    "text": "Si vous choisissez la capacités maîtres d'armes, cliquez ici.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5dff399d7d0c030b7adc"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d83399d7d0c030b7ad9",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "add"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "inc",
        "value": 1
      }
    ],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "lessOrEqual",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 19,
    "text": "Si vous choisissez la capacité Éloquence, cliquez ici.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5e68399d7d0c030b7add"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d83399d7d0c030b7ad9",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "add"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "inc",
        "value": 1
      }
    ],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "lessOrEqual",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "doNotOwn"
      }
    ],
    "__v": 14,
    "text": "Si vous choisissez la capacité Acrobate, cliquez ici.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5e98399d7d0c030b7ade"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d83399d7d0c030b7ad9",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "add"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "inc",
        "value": 1
      }
    ],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "lessOrEqual",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "doNotOwn"
      }
    ],
    "__v": 15,
    "text": "Si vous choisissez la capacité Connaissance, cliquez ici.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5ecd399d7d0c030b7adf"
    },
    "conditionOperator": "and",
    "fromPage": "568a5d83399d7d0c030b7ad9",
    "effects": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7c",
        "operator": "add"
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "inc",
        "value": 1
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "inc",
        "value": 3
      }
    ],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abd",
        "operator": "lessOrEqual",
        "value": 1
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7c",
        "operator": "doNotOwn"
      }
    ],
    "__v": 19,
    "text": "Si vous choisissez la capacité Robustesse, cliquez ici.",
    "toPage": "568a5d83399d7d0c030b7ad9"
  },
  {
    "_id": {
      "$oid": "568a5f2e399d7d0c030b7ae1"
    },
    "conditionOperator": "and",
    "fromPage": "568a5f1e399d7d0c030b7ae0",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Rendez-vous au 1.",
    "toPage": "568a4fba399d7d0c030b7ac0"
  },
  {
    "_id": {
      "$oid": "568a5f85399d7d0c030b7ae3"
    },
    "conditionOperator": "and",
    "fromPage": "568a5f4c399d7d0c030b7ae2",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous choisissez le nord, rendez-vous au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a5f88399d7d0c030b7ae4"
    },
    "conditionOperator": "and",
    "fromPage": "568a5f4c399d7d0c030b7ae2",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si c'est l'est votre prochaine destination, rendez-vous au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a82d3399d7d0c030b7ae6"
    },
    "conditionOperator": "and",
    "fromPage": "568a82c3399d7d0c030b7ae5",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a83",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si, par une chance extraordinaire, vous en possédez, les goinfres s'empressent de les finir et vous vous rendez au 16.",
    "toPage": "568a5f4c399d7d0c030b7ae2"
  },
  {
    "_id": {
      "$oid": "568a82de399d7d0c030b7ae7"
    },
    "conditionOperator": "and",
    "fromPage": "568a82c3399d7d0c030b7ae5",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 2
      }
    ],
    "conditions": [],
    "__v": 4,
    "text": "Si vous n'en avez pas, ils vous rejettent et vous perdez deux points de constitution car ils vous frappent de leurs épées de bois en profitant de leur surnombre. Rendez-vous au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a8351399d7d0c030b7ae9"
    },
    "conditionOperator": "and",
    "fromPage": "568a8331399d7d0c030b7ae8",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent Acrobate, rendez-vous au 7.",
    "toPage": "568a842a399d7d0c030b7aed"
  },
  {
    "_id": {
      "$oid": "568a8357399d7d0c030b7aea"
    },
    "conditionOperator": "and",
    "fromPage": "568a8331399d7d0c030b7ae8",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez une dague, après maints efforts, rendez-vous au 32.",
    "toPage": "568a8483399d7d0c030b7af1"
  },
  {
    "_id": {
      "$oid": "568a8376399d7d0c030b7aeb"
    },
    "conditionOperator": "and",
    "fromPage": "568a8331399d7d0c030b7ae8",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abf",
        "operator": "dec",
        "value": 2
      },
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "inc",
        "value": 1
      }
    ],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "doNotOwn"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "doNotOwn"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "doNotOwn"
      }
    ],
    "__v": 17,
    "text": "Si vous ne possédez ni d'arme, ni le talent, les Spinulas vous prennent en chasse et ce n'est qu'avec l'aide de Dieu que vous parvenez à leur échapper, en y laissant tout de même 2 points de constitution et de précieux instants. Ajoutez un point au temps écoulé, et rendez-vous au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a83c2399d7d0c030b7aec"
    },
    "conditionOperator": "and",
    "fromPage": "568a8331399d7d0c030b7ae8",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez une épée, après maints efforts, rendez-vous au 32.",
    "toPage": "568a8483399d7d0c030b7af1"
  },
  {
    "_id": {
      "$oid": "568a8456399d7d0c030b7aee"
    },
    "conditionOperator": "and",
    "fromPage": "568a842a399d7d0c030b7aed",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si, enfin, c'est la troisième que vous choisissez, rendez-vous au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a8463399d7d0c030b7aef"
    },
    "conditionOperator": "and",
    "fromPage": "568a842a399d7d0c030b7aed",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous choisissez la première option, rendez-vous au 30.",
    "toPage": "568a8bf8399d7d0c030b7b56"
  },
  {
    "_id": {
      "$oid": "568a8469399d7d0c030b7af0"
    },
    "conditionOperator": "and",
    "fromPage": "568a842a399d7d0c030b7aed",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si la deuxième vous tente plus, rendez-vous au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8498399d7d0c030b7af2"
    },
    "conditionOperator": "and",
    "fromPage": "568a8483399d7d0c030b7af1",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous choisissez la première option, rendez-vous au 30.",
    "toPage": "568a8bf8399d7d0c030b7b56"
  },
  {
    "_id": {
      "$oid": "568a849d399d7d0c030b7af3"
    },
    "conditionOperator": "and",
    "fromPage": "568a8483399d7d0c030b7af1",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si la deuxième vous tente plus, rendez-vous au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a84a7399d7d0c030b7af4"
    },
    "conditionOperator": "and",
    "fromPage": "568a8483399d7d0c030b7af1",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si, enfin, c'est la troisième que vous choisissez, rendez-vous au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a84c5399d7d0c030b7af6"
    },
    "conditionOperator": "and",
    "fromPage": "568a84b2399d7d0c030b7af5",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent connaissance, rendez-vous au 12.",
    "toPage": "568a84f5399d7d0c030b7af8"
  },
  {
    "_id": {
      "$oid": "568a84dc399d7d0c030b7af7"
    },
    "conditionOperator": "and",
    "fromPage": "568a84b2399d7d0c030b7af5",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Sinon, ces herbes sont dénuées de toute signification pour vous et elles ne vous sont donc d'aucune utilité. Vous continuez votre route au 28.",
    "toPage": "568a852a399d7d0c030b7afa"
  },
  {
    "_id": {
      "$oid": "568a8506399d7d0c030b7af9"
    },
    "conditionOperator": "and",
    "fromPage": "568a84f5399d7d0c030b7af8",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Ensuite, rendez-vous au 28.",
    "toPage": "568a852a399d7d0c030b7afa"
  },
  {
    "_id": {
      "$oid": "568a8544399d7d0c030b7afb"
    },
    "conditionOperator": "and",
    "fromPage": "568a852a399d7d0c030b7afa",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous prenez le nord, rendez-vous au 36.",
    "toPage": "568a8cf8399d7d0c030b7b64"
  },
  {
    "_id": {
      "$oid": "568a854b399d7d0c030b7afc"
    },
    "conditionOperator": "and",
    "fromPage": "568a852a399d7d0c030b7afa",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous choisissez l'ouest, rendez-vous au 30.",
    "toPage": "568a8bf8399d7d0c030b7b56"
  },
  {
    "_id": {
      "$oid": "568a8553399d7d0c030b7afd"
    },
    "conditionOperator": "and",
    "fromPage": "568a852a399d7d0c030b7afa",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous préférez l'est, rendez-vous au 49.",
    "toPage": "568a8a10399d7d0c030b7b35"
  },
  {
    "_id": {
      "$oid": "568a855e399d7d0c030b7afe"
    },
    "conditionOperator": "and",
    "fromPage": "568a852a399d7d0c030b7afa",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Enfin, si le sud est votre prochaine destination, rendez-vous au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a861f399d7d0c030b7b00"
    },
    "conditionOperator": "and",
    "fromPage": "568a8579399d7d0c030b7aff",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Enfin, le chemin se trouvant derrière vous se dirige vers l'orée du bois et vous emmènera au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a8625399d7d0c030b7b01"
    },
    "conditionOperator": "and",
    "fromPage": "568a8579399d7d0c030b7aff",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez prendre le chemin de gauche qui s'enfonce dans la forêt en vous rendant au 27.",
    "toPage": "568a5c91399d7d0c030b7acc"
  },
  {
    "_id": {
      "$oid": "568a862e399d7d0c030b7b02"
    },
    "conditionOperator": "and",
    "fromPage": "568a8579399d7d0c030b7aff",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez aussi prendre le sentier en face de vous qui vous mènera au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a865f399d7d0c030b7b04"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous souhaitez libérer la créature et que vous possédez une épée, rendez-vous au 24.",
    "toPage": "568a8726399d7d0c030b7b0d"
  },
  {
    "_id": {
      "$oid": "568a8673399d7d0c030b7b05"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7c",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous désirez fracasser la cage de ce petit être (en ayant le talent Robustesse), rendez-vous au 25.",
    "toPage": "568a8751399d7d0c030b7b11"
  },
  {
    "_id": {
      "$oid": "568a8686399d7d0c030b7b06"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Sinon, vous pouvez alors vous rendre au nord-ouest au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a868c399d7d0c030b7b07"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Sinon, vous pouvez alors vous rendre au nord au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a8693399d7d0c030b7b08"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Sinon, vous pouvez alors vous rendre au nord-est au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a869b399d7d0c030b7b09"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez repartir et vous rendre au 46 d'où vous entendez une longue plainte.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a86a3399d7d0c030b7b0a"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez aller au nord au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a86ad399d7d0c030b7b0b"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez aller vers une partie ancienne de la forêt, à en juger les toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a86b5399d7d0c030b7b0c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8642399d7d0c030b7b03",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous souhaitez libérer la créature et que vous possédez une dague, rendez-vous au 24.",
    "toPage": "568a8726399d7d0c030b7b0d"
  },
  {
    "_id": {
      "$oid": "568a8738399d7d0c030b7b0e"
    },
    "conditionOperator": "and",
    "fromPage": "568a8726399d7d0c030b7b0d",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous choisissez d'acquérir du temps pour finir votre aventure, rendez-vous au 31.",
    "toPage": "568a8784399d7d0c030b7b15"
  },
  {
    "_id": {
      "$oid": "568a873f399d7d0c030b7b0f"
    },
    "conditionOperator": "and",
    "fromPage": "568a8726399d7d0c030b7b0d",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous préférez reprendre des forces, rendez-vous au 10.",
    "toPage": "568a87cd399d7d0c030b7b19"
  },
  {
    "_id": {
      "$oid": "568a8746399d7d0c030b7b10"
    },
    "conditionOperator": "and",
    "fromPage": "568a8726399d7d0c030b7b0d",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Enfin, si vous voulez des richesses, rendez-vous au 19.",
    "toPage": "568a8f16399d7d0c030b7b8a"
  },
  {
    "_id": {
      "$oid": "568a8769399d7d0c030b7b12"
    },
    "conditionOperator": "and",
    "fromPage": "568a8751399d7d0c030b7b11",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous choisissez d'acquérir du temps pour finir votre aventure, rendez-vous au 31.",
    "toPage": "568a8784399d7d0c030b7b15"
  },
  {
    "_id": {
      "$oid": "568a8772399d7d0c030b7b13"
    },
    "conditionOperator": "and",
    "fromPage": "568a8751399d7d0c030b7b11",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous préférez reprendre des forces, rendez-vous au 10.",
    "toPage": "568a87cd399d7d0c030b7b19"
  },
  {
    "_id": {
      "$oid": "568a8778399d7d0c030b7b14"
    },
    "conditionOperator": "and",
    "fromPage": "568a8751399d7d0c030b7b11",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Enfin, si vous voulez des richesses, rendez-vous au 19.",
    "toPage": "568a8f16399d7d0c030b7b8a"
  },
  {
    "_id": {
      "$oid": "568a879f399d7d0c030b7b16"
    },
    "conditionOperator": "and",
    "fromPage": "568a8784399d7d0c030b7b15",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre au nord-ouest au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a87a7399d7d0c030b7b17"
    },
    "conditionOperator": "and",
    "fromPage": "568a8784399d7d0c030b7b15",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre au nord au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a87af399d7d0c030b7b18"
    },
    "conditionOperator": "and",
    "fromPage": "568a8784399d7d0c030b7b15",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre au nord-est au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8800399d7d0c030b7b1b"
    },
    "conditionOperator": "and",
    "fromPage": "568a87f5399d7d0c030b7b1a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez vous rendre vers le sud-ouest au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a8805399d7d0c030b7b1c"
    },
    "conditionOperator": "and",
    "fromPage": "568a87f5399d7d0c030b7b1a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, vous pouvez vous rendre vers un vieil édifice en bois au nord-est au 49.",
    "toPage": "568a8a10399d7d0c030b7b35"
  },
  {
    "_id": {
      "$oid": "568a8809399d7d0c030b7b1d"
    },
    "conditionOperator": "or",
    "fromPage": "568a87f5399d7d0c030b7b1a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "own"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "own"
      }
    ],
    "__v": 6,
    "text": "Si vous possédez une arme, rendez-vous au 33.",
    "toPage": "568a88a9399d7d0c030b7b21"
  },
  {
    "_id": {
      "$oid": "568a8828399d7d0c030b7b1e"
    },
    "conditionOperator": "and",
    "fromPage": "568a87f5399d7d0c030b7b1a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent acrobate, rendez-vous au 41.",
    "toPage": "568a88cd399d7d0c030b7b23"
  },
  {
    "_id": {
      "$oid": "568a8834399d7d0c030b7b1f"
    },
    "conditionOperator": "and",
    "fromPage": "568a87f5399d7d0c030b7b1a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7c",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent robustesse, rendez-vous au 4.",
    "toPage": "568a88f0399d7d0c030b7b25"
  },
  {
    "_id": {
      "$oid": "568a8844399d7d0c030b7b20"
    },
    "conditionOperator": "and",
    "fromPage": "568a87f5399d7d0c030b7b1a",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abe",
        "operator": "aff",
        "value": 10
      }
    ],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "doNotOwn"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "doNotOwn"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "doNotOwn"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7c",
        "operator": "doNotOwn"
      }
    ],
    "__v": 16,
    "text": "Sinon, vous restez prisonnier de ces toiles et quand vous réussissez enfin à vous en débarrasser, le temps que vous avez mis est tel que vous vous rendez directement au 38.",
    "toPage": "568a8910399d7d0c030b7b27"
  },
  {
    "_id": {
      "$oid": "568a88be399d7d0c030b7b22"
    },
    "conditionOperator": "and",
    "fromPage": "568a88a9399d7d0c030b7b21",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Rendez-vous au 23.",
    "toPage": "568a892d399d7d0c030b7b28"
  },
  {
    "_id": {
      "$oid": "568a88e3399d7d0c030b7b24"
    },
    "conditionOperator": "and",
    "fromPage": "568a88cd399d7d0c030b7b23",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Rendez-vous au 23.",
    "toPage": "568a892d399d7d0c030b7b28"
  },
  {
    "_id": {
      "$oid": "568a88ff399d7d0c030b7b26"
    },
    "conditionOperator": "and",
    "fromPage": "568a88f0399d7d0c030b7b25",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Rendez-vous au 23.",
    "toPage": "568a892d399d7d0c030b7b28"
  },
  {
    "_id": {
      "$oid": "568a8939399d7d0c030b7b29"
    },
    "conditionOperator": "and",
    "fromPage": "568a892d399d7d0c030b7b28",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "own"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a79",
        "operator": "own"
      }
    ],
    "__v": 6,
    "text": "Si vous possédez le talent Connaissance et des marrons, rendez-vous au 14.",
    "toPage": "568a898b399d7d0c030b7b2c"
  },
  {
    "_id": {
      "$oid": "568a8953399d7d0c030b7b2a"
    },
    "conditionOperator": "and",
    "fromPage": "568a892d399d7d0c030b7b28",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent acrobate, rendez-vous au 29.",
    "toPage": "568a89b9399d7d0c030b7b2f"
  },
  {
    "_id": {
      "$oid": "568a8970399d7d0c030b7b2b"
    },
    "conditionOperator": "and",
    "fromPage": "568a892d399d7d0c030b7b28",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Si vous désirez fuir, rendez-vous au 8.",
    "toPage": "568a89df399d7d0c030b7b32"
  },
  {
    "_id": {
      "$oid": "568a899d399d7d0c030b7b2d"
    },
    "conditionOperator": "and",
    "fromPage": "568a898b399d7d0c030b7b2c",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers le sud-ouest au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a89a6399d7d0c030b7b2e"
    },
    "conditionOperator": "and",
    "fromPage": "568a898b399d7d0c030b7b2c",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers un vieil édifice en bois au nord-est au 49.",
    "toPage": "568a8a10399d7d0c030b7b35"
  },
  {
    "_id": {
      "$oid": "568a89c7399d7d0c030b7b30"
    },
    "conditionOperator": "and",
    "fromPage": "568a89b9399d7d0c030b7b2f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers le sud-ouest au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a89cb399d7d0c030b7b31"
    },
    "conditionOperator": "and",
    "fromPage": "568a89b9399d7d0c030b7b2f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers un vieil édifice en bois au nord-est au 49.",
    "toPage": "568a8a10399d7d0c030b7b35"
  },
  {
    "_id": {
      "$oid": "568a89fd399d7d0c030b7b33"
    },
    "conditionOperator": "and",
    "fromPage": "568a89df399d7d0c030b7b32",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers le sud-ouest au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a8a02399d7d0c030b7b34"
    },
    "conditionOperator": "and",
    "fromPage": "568a89df399d7d0c030b7b32",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers un vieil édifice en bois au nord-est au 49.",
    "toPage": "568a8a10399d7d0c030b7b35"
  },
  {
    "_id": {
      "$oid": "568a8a1b399d7d0c030b7b36"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a10399d7d0c030b7b35",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici ou si vous renoncez à entrer dans cet abri, vous pouvez aller vers une partie obscure de la forêt et très ancienne si l'on en croit les toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8a1e399d7d0c030b7b37"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a10399d7d0c030b7b35",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous souhaitez marcher sur la neige pour entrer dans la bâtisse, rendez-vous au 20.",
    "toPage": "568a8a41399d7d0c030b7b3a"
  },
  {
    "_id": {
      "$oid": "568a8a23399d7d0c030b7b38"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a10399d7d0c030b7b35",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous cherchez un autre moyen d'atteindre le bâtiment, rendez-vous au 37.",
    "toPage": "568a8aa1399d7d0c030b7b3f"
  },
  {
    "_id": {
      "$oid": "568a8a2c399d7d0c030b7b39"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a10399d7d0c030b7b35",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici ou si vous renoncez à entrer dans cet abri, vous pouvez aller vers l'ouest au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8a4c399d7d0c030b7b3b"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a41399d7d0c030b7b3a",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "dec",
        "value": 3
      }
    ],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 7,
    "text": "Si vous désirez l'amadouer, donnez-lui 3 pièces d'or afin de le calmer et rendez-vous au 13.",
    "toPage": "568a8bce399d7d0c030b7b53"
  },
  {
    "_id": {
      "$oid": "568a8a67399d7d0c030b7b3c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a41399d7d0c030b7b3a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "own"
      }
    ],
    "__v": 4,
    "text": "Si vous possédez le talent éloquence, rendez-vous au 13.",
    "toPage": "568a8bce399d7d0c030b7b53"
  },
  {
    "_id": {
      "$oid": "568a8a74399d7d0c030b7b3d"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a41399d7d0c030b7b3a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Si vous sortez de chez lui, vous pouvez vous rendre à l'intersection principale au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8a89399d7d0c030b7b3e"
    },
    "conditionOperator": "and",
    "fromPage": "568a8a41399d7d0c030b7b3a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Si vous sortez de chez lui, vous pouvez vous rendre vers une partie ancienne de la forêt, à en juger les nombreuses toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8aaa399d7d0c030b7b40"
    },
    "conditionOperator": "and",
    "fromPage": "568a8aa1399d7d0c030b7b3f",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent Acrobate, rendez-vous au 43.",
    "toPage": "568a8af8399d7d0c030b7b46"
  },
  {
    "_id": {
      "$oid": "568a8ab8399d7d0c030b7b41"
    },
    "conditionOperator": "and",
    "fromPage": "568a8aa1399d7d0c030b7b3f",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent Connaissance, rendez-vous au 26.",
    "toPage": "568a8b1f399d7d0c030b7b4b"
  },
  {
    "_id": {
      "$oid": "568a8ac9399d7d0c030b7b42"
    },
    "conditionOperator": "and",
    "fromPage": "568a8aa1399d7d0c030b7b3f",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7e",
        "operator": "doNotOwn"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7d",
        "operator": "doNotOwn"
      }
    ],
    "__v": 6,
    "text": "Si vous sautez en priant pour que vous ne vous fassiez pas mal, rendez-vous au 50.",
    "toPage": "568a8ba0399d7d0c030b7b4f"
  },
  {
    "_id": {
      "$oid": "568a8adc399d7d0c030b7b43"
    },
    "conditionOperator": "and",
    "fromPage": "568a8aa1399d7d0c030b7b3f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous trouvez cette opération trop risquée, vous pouvez marcher sur la neige pour entrer dans la bâtisse, rendez-vous au 20.",
    "toPage": "568a8a41399d7d0c030b7b3a"
  },
  {
    "_id": {
      "$oid": "568a8ae0399d7d0c030b7b44"
    },
    "conditionOperator": "and",
    "fromPage": "568a8aa1399d7d0c030b7b3f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Enfin, si vous renoncez à entrer dans cet abri, vous pouvez retourner au croisement principal au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8ae8399d7d0c030b7b45"
    },
    "conditionOperator": "and",
    "fromPage": "568a8aa1399d7d0c030b7b3f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous ne voulez pas entrer dans cet abri, vous pouvez vous rendre vers une partie ancienne de la forêt, à en juger les toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8b05399d7d0c030b7b47"
    },
    "conditionOperator": "and",
    "fromPage": "568a8af8399d7d0c030b7b46",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous décidez de l'aborder, rendez-vous au 13.",
    "toPage": "568a8bce399d7d0c030b7b53"
  },
  {
    "_id": {
      "$oid": "568a8b09399d7d0c030b7b48"
    },
    "conditionOperator": "and",
    "fromPage": "568a8af8399d7d0c030b7b46",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si aborder le vieil ne vous tente guère, vous pouvez vous rendre vers une partie ancienne de la forêt, à en juger les nombreuses toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8b0d399d7d0c030b7b49"
    },
    "conditionOperator": "and",
    "fromPage": "568a8af8399d7d0c030b7b46",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous renoncez à entrer dans cet abri, vous pouvez vous rendre à l'intersection principale au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8b2e399d7d0c030b7b4c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8b1f399d7d0c030b7b4b",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous désirez aborder le vieil homme, rendez-vous au 13.",
    "toPage": "568a8bce399d7d0c030b7b53"
  },
  {
    "_id": {
      "$oid": "568a8b32399d7d0c030b7b4d"
    },
    "conditionOperator": "and",
    "fromPage": "568a8b1f399d7d0c030b7b4b",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous renoncez à entrer dans cet abri, vous pouvez vous rendre à l'intersection principale au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8b39399d7d0c030b7b4e"
    },
    "conditionOperator": "and",
    "fromPage": "568a8b1f399d7d0c030b7b4b",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si aborder le vieil ne vous tente guère, vous pouvez vous rendre vers une partie ancienne de la forêt, à en juger les nombreuses toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8bb5399d7d0c030b7b50"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ba0399d7d0c030b7b4f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous sortez de chez lui, vous pouvez vous rendre au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8bb9399d7d0c030b7b51"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ba0399d7d0c030b7b4f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si aborder le vieil ne vous tente guère, vous pouvez vous rendre vers une partie ancienne de la forêt, à en juger les nombreuses toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8bbc399d7d0c030b7b52"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ba0399d7d0c030b7b4f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous décidez de l'aborder, rendez-vous au 13.",
    "toPage": "568a8bce399d7d0c030b7b53"
  },
  {
    "_id": {
      "$oid": "568a8be6399d7d0c030b7b54"
    },
    "conditionOperator": "and",
    "fromPage": "568a8bce399d7d0c030b7b53",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez ensuite vous rendre à l'intersection principale au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8beb399d7d0c030b7b55"
    },
    "conditionOperator": "and",
    "fromPage": "568a8bce399d7d0c030b7b53",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez aussi aller vers une partie ancienne de la forêt, à en juger les nombreuses toiles d'araignées au 9.",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8c0c399d7d0c030b7b57"
    },
    "conditionOperator": "and",
    "fromPage": "568a8bf8399d7d0c030b7b56",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous fuyez, vous pouvez aussi vous rendre vers l'intersection principale au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8c12399d7d0c030b7b58"
    },
    "conditionOperator": "and",
    "fromPage": "568a8bf8399d7d0c030b7b56",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous prenez vos jambes à votre cou, vous pouvez aller vers des arbres épineux au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a8c15399d7d0c030b7b59"
    },
    "conditionOperator": "and",
    "fromPage": "568a8bf8399d7d0c030b7b56",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous voulez prendre le sentier se trouvant derrière la créature, rendez-vous au 2.",
    "toPage": "568a8c25399d7d0c030b7b5a"
  },
  {
    "_id": {
      "$oid": "568a8c39399d7d0c030b7b5b"
    },
    "conditionOperator": "and",
    "fromPage": "568a8c25399d7d0c030b7b5a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez aussi aller près de buissons épineux au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a8c3e399d7d0c030b7b5c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8c25399d7d0c030b7b5a",
    "effects": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "dec",
        "value": 5
      }
    ],
    "conditions": [
      {
        "type": "stats",
        "subject": "568a4fab399d7d0c030b7abc",
        "operator": "moreOrEqual",
        "value": 5
      }
    ],
    "__v": 9,
    "text": "Si vous possédez cette somme et que vous désirez passer, donnez l'argent au géant et rendez-vous au 15.",
    "toPage": "568a8c68399d7d0c030b7b5e"
  },
  {
    "_id": {
      "$oid": "568a8c5c399d7d0c030b7b5d"
    },
    "conditionOperator": "and",
    "fromPage": "568a8c25399d7d0c030b7b5a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Sinon, vous pouvez aller au 42, vers un embranchement,.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8c7a399d7d0c030b7b5f"
    },
    "conditionOperator": "and",
    "fromPage": "568a8c68399d7d0c030b7b5e",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici, le père de Linda est parti et votre seule solution est de quitter le village. Rendez-vous alors au 30.",
    "toPage": "568a8bf8399d7d0c030b7b56"
  },
  {
    "_id": {
      "$oid": "568a8c7d399d7d0c030b7b60"
    },
    "conditionOperator": "and",
    "fromPage": "568a8c68399d7d0c030b7b5e",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7b",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez la bague tressée de Linda, vous pouvez la montrer au vieil homme en vous rendant au 40.",
    "toPage": "568a8ccc399d7d0c030b7b62"
  },
  {
    "_id": {
      "$oid": "568a8c83399d7d0c030b7b61"
    },
    "conditionOperator": "and",
    "fromPage": "568a8c68399d7d0c030b7b5e",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7b",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Si vous n'avez jamais vu Linda, laissez le vieillard et rendez-vous au 30 pour quitter le village.",
    "toPage": "568a8bf8399d7d0c030b7b56"
  },
  {
    "_id": {
      "$oid": "568a8cea399d7d0c030b7b63"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ccc399d7d0c030b7b62",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Retournez à la colline du géant rendez-vous au 30.",
    "toPage": "568a8bf8399d7d0c030b7b56"
  },
  {
    "_id": {
      "$oid": "568a8d00399d7d0c030b7b65"
    },
    "conditionOperator": "and",
    "fromPage": "568a8cf8399d7d0c030b7b64",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous souhaitez vous reposer à la taverne, rendez-vous au 11.",
    "toPage": "568a8d1c399d7d0c030b7b67"
  },
  {
    "_id": {
      "$oid": "568a8d04399d7d0c030b7b66"
    },
    "conditionOperator": "and",
    "fromPage": "568a8cf8399d7d0c030b7b64",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si cette solution ne vous enchante guère, vous ne voyez aucun autre sentier menant à autre part et vous êtes donc obligé de revenir au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8d3f399d7d0c030b7b68"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d1c399d7d0c030b7b67",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous désirez les aborder, rendez-vous au 45.",
    "toPage": "568a8d4c399d7d0c030b7b6a"
  },
  {
    "_id": {
      "$oid": "568a8d42399d7d0c030b7b69"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d1c399d7d0c030b7b67",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Sinon, vous n'avez plus rien à faire ici et vous revenez à l'embranchement au 42, faute d'autre chemin possible.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8d74399d7d0c030b7b6b"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que la dame de trèfle est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d77399d7d0c030b7b6c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous ne trouvez pas de réponse, les nains vous rejettent et vous quittez la taverne, démoralisé.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8d7b399d7d0c030b7b6d"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le 10 de cœur est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d80399d7d0c030b7b6e"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le valet de cœur est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d85399d7d0c030b7b6f"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que l'as de cœur est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d8c399d7d0c030b7b70"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que la dame de pique est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d91399d7d0c030b7b71"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le roi de pique est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d96399d7d0c030b7b72"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le 9 de carreau est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8d9b399d7d0c030b7b73"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le valet de carreau est la bonne carte, cliquez ici.",
    "toPage": "568a8dd8399d7d0c030b7b78"
  },
  {
    "_id": {
      "$oid": "568a8da0399d7d0c030b7b74"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le 9 de trèfle est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8da4399d7d0c030b7b75"
    },
    "conditionOperator": "and",
    "fromPage": "568a8d4c399d7d0c030b7b6a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous pensez que le 10 de trèfle est la bonne carte, cliquez ici.",
    "toPage": "568a8db8399d7d0c030b7b76"
  },
  {
    "_id": {
      "$oid": "568a8dc8399d7d0c030b7b77"
    },
    "conditionOperator": "and",
    "fromPage": "568a8db8399d7d0c030b7b76",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Rendez-vous ensuite au carrefour, au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8df4399d7d0c030b7b79"
    },
    "conditionOperator": "and",
    "fromPage": "568a8dd8399d7d0c030b7b78",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Ensuite, vous reprenez votre chemin en sifflotant gaiement (enfin, si vous savez siffler), et vous vous rendez au 42.",
    "toPage": "568a84b2399d7d0c030b7af5"
  },
  {
    "_id": {
      "$oid": "568a8e0f399d7d0c030b7b7b"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a82",
        "operator": "own"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a80",
        "operator": "own"
      }
    ],
    "__v": 6,
    "text": "Si vous possédez le talent Épéiste chevronné et que vous possédez une dague, rendez-vous au 44.",
    "toPage": "568a8fbf399d7d0c030b7b8f"
  },
  {
    "_id": {
      "$oid": "568a8e2b399d7d0c030b7b7c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici ou si vous souhaitez vous éclipser, vous pouvez repartir et vous rendre au 46 d'où vous entendez une longue plainte.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a8e2f399d7d0c030b7b7d"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici ou si vous souhaitez vous éclipser, vous pouvez repartir et vous rendre à l'ouest au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a8e33399d7d0c030b7b7e"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Si vous êtes déjà venu ici ou si vous souhaitez vous éclipser, vous pouvez repartir et vous rendre vers le sud au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a8e37399d7d0c030b7b7f"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a80",
        "operator": "own"
      },
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a84",
        "operator": "own"
      }
    ],
    "__v": 7,
    "text": "Si vous possédez le talent Épéiste chevronné et que vous possédez une dague, rendez-vous au 44.",
    "toPage": "568a8fbf399d7d0c030b7b8f"
  },
  {
    "_id": {
      "$oid": "568a8e48399d7d0c030b7b80"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "own"
      }
    ],
    "__v": 3,
    "text": "Si vous possédez le talent Éloquence, rendez-vous au 17.",
    "toPage": "568a8e6b399d7d0c030b7b82"
  },
  {
    "_id": {
      "$oid": "568a8e54399d7d0c030b7b81"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e03399d7d0c030b7b7a",
    "effects": [],
    "conditions": [
      {
        "type": "objects",
        "subject": "568a4f54399d7d0c030b7a7f",
        "operator": "doNotOwn"
      }
    ],
    "__v": 3,
    "text": "Sinon, la fuite s'impose. Rendez-vous dans ce cas au 5.",
    "toPage": "568a8ea3399d7d0c030b7b84"
  },
  {
    "_id": {
      "$oid": "568a8e88399d7d0c030b7b83"
    },
    "conditionOperator": "and",
    "fromPage": "568a8e6b399d7d0c030b7b82",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Ensuite, rendez-vous au 39.",
    "toPage": "568a8ed1399d7d0c030b7b86"
  },
  {
    "_id": {
      "$oid": "568a8ec2399d7d0c030b7b85"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ea3399d7d0c030b7b84",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Ensuite, rendez-vous au 39.",
    "toPage": "568a8ed1399d7d0c030b7b86"
  },
  {
    "_id": {
      "$oid": "568a8ee4399d7d0c030b7b87"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ed1399d7d0c030b7b86",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers le sud-ouest au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a8ee9399d7d0c030b7b88"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ed1399d7d0c030b7b86",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers des arbres à épines au 22.",
    "toPage": "568a8331399d7d0c030b7ae8"
  },
  {
    "_id": {
      "$oid": "568a8eec399d7d0c030b7b89"
    },
    "conditionOperator": "and",
    "fromPage": "568a8ed1399d7d0c030b7b86",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez vous rendre vers le sud, près d'une clairière au 6.",
    "toPage": "568a8642399d7d0c030b7b03"
  },
  {
    "_id": {
      "$oid": "568a8f82399d7d0c030b7b8b"
    },
    "conditionOperator": "and",
    "fromPage": "568a8f16399d7d0c030b7b8a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez alors vous rendre au nord-ouest au 46.",
    "toPage": "568a8579399d7d0c030b7aff"
  },
  {
    "_id": {
      "$oid": "568a8f87399d7d0c030b7b8c"
    },
    "conditionOperator": "and",
    "fromPage": "568a8f16399d7d0c030b7b8a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez alors vous rendre au nord au 35.",
    "toPage": "568a8e03399d7d0c030b7b7a"
  },
  {
    "_id": {
      "$oid": "568a8f91399d7d0c030b7b8d"
    },
    "conditionOperator": "and",
    "fromPage": "568a8f16399d7d0c030b7b8a",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Vous pouvez aussi vous rendre au nord-est au 9",
    "toPage": "568a87f5399d7d0c030b7b1a"
  },
  {
    "_id": {
      "$oid": "568a8fdc399d7d0c030b7b90"
    },
    "conditionOperator": "and",
    "fromPage": "568a8fbf399d7d0c030b7b8f",
    "effects": [],
    "conditions": [],
    "__v": 0,
    "text": "Ensuite, rendez-vous au 39.",
    "toPage": "568a8ed1399d7d0c030b7b86"
  },
  {
    "_id": {
      "$oid": "5677fbaa399d7d0c030b78ef"
    },
    "password": "0a6f0d45b8f30962071a2a19316dd83702c92910be30de63a01e5a43a3017c1d697e9e38292ba1c333fa5e2fc631f43be001fcfd3634ae85ecc33ad961091597",
    "email": "valentin.pontiggia@free.fr",
    "username": "Sallazar",
    "__v": 0
  }
]