// ============================================================
//  QUESTIONS.JS — Modifiez ce fichier avant chaque soirée
//  Ne touchez pas à index.html !
// ============================================================
//
//  SETS PAR JOUEUR :
//  game1Sets et game3Sets contiennent un set par nom.
//  Au début de la partie, l'hôte assigne un set à chaque joueur.
//  Un joueur ne verra jamais les questions de son propre set.
//
//  FORMATS PAR QUESTION (game1) :
//    text, media_url, media_type, image_only, answers, correct
//
// ============================================================

const AVATARS = [
  { name: "Mystère", url: null },
  { name: "Nico",   url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Avatars%2Fnico.png?alt=media&token=8cdbb989-2e94-40f7-b809-5d4e18eb598d" },
  { name: "Toto",     url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Avatars%2Ftoto.png?alt=media&token=d6e1bc15-9a3c-4ec9-a3b8-7bba6cc4f9c2" },
  { name: "Guigui",    url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Avatars%2Fguigui.png?alt=media&token=a784a4ba-6195-4cb8-9fc3-6ba7f5a438a4" },
  { name: "Dan",     url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Avatars%2Fbrave_XGG8JTPUZP.png?alt=media&token=380c4c01-a934-47fd-b804-736d961250a3" }
];

const QUESTIONS = {

  // ══════════════════════════════════════════════════════════
  // JEU 1 — SETS PAR JOUEUR
  // Chaque clé = un nom de set que l'hôte pourra assigner.
  // ══════════════════════════════════════════════════════════
  game1Sets: {

    "Set Nico": [
      {
        text: "Quelle année est sortie Dofus 2.0",
        media_url: null, media_type: null, image_only: false,
        answers: ["2009", "2004", "2008", "2012"],
        correct: 1
      },
      {
        text: "Quel est le pokemon n°143",
        media_url: null, media_type: null, image_only: false,
        answers: ["Ronflex", "Artikodin", "Alakazam", "Kabutops"],
        correct: 1
      },
      {
        text: "Quel est le niveau max dans Diablo 3 (hors extension)",
        media_url: null, media_type: null, image_only: false,
        answers: ["70", "60", "50", "100"],
        correct: 2
      },
      {
        text: "Qui est ce personnage ?",
        media_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%201%2Fnico%20p1.png?alt=media&token=caaf6a2c-ec74-4410-aa57-68cd697538d2", media_type: "image", image_only: false,
        answers: ["Mussolini", "Resetti", "Taup Nook", "Keke"],
        correct: 2
      },
      {
        text: "D'où vient ce son ?",
        media_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%201%2FQuizz%20Nico.wav?alt=media&token=7ba6b581-78c2-4d9d-9039-648e9abc8f93", media_type: "audio", image_only: false,
        answers: ["Animal Crossing", "Pokemon Ranger", "Neverwinter", "Diablo 3"],
        correct: 2
      },
      {
        text: "Quel est le nom de scène de Jean-Chrysostome Dolto  ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["Coluche", "Danny Boon", "Carlos", "Patrick Sébastien"],
        correct: 3
      }
    ],

    "Set Toto": [
      {
        text: "Comment s'appelle ce personnage ?",
        media_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%201%2Ftoto%20p1.webp?alt=media&token=f0be6a20-7b6f-4c6a-8586-9fd4bd7d7d97", media_type: "image", image_only: false,
        answers: ["Oleg", "Pierce", "Shaundi", "Josh"],
        correct: 1
      },
      {
        text: "D'où vient ce son ?",
        media_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%201%2FQuizz%20Toto.wav?alt=media&token=857a9069-45c5-4c42-9837-8bd52b880776", media_type: "audio", image_only: false,
        answers: ["Overwatch", "Doom", "Helldivers 2", "Spiderman"],
        correct: 1
      },
      {
        text: "Dans Baldur's Gate 3, Quelle est le bonus de race des humains ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["Avantage de sagesse", "Vision Nocturne", "Avantage au charme", "+25% de limite de poids"],
        correct: 4
      },
      {
        text: "Comment s'appelle le personnage principal de Shadow Warrior ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["Yu Ping", "Lo Wang", "Ho Lee Fuk", "Fang Chu"],
        correct: 2
      },
      {
        text: "Combien de Go faisait Skyrim à sa sortie sur xbox 360 ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["7,5", "4,8", "12", "9,2"],
        correct: 2
      },
      {
        text: "En quelle année est sorti le film Comment c'est loin ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["2014", "2017", "2015", "2016"],
        correct: 3
      }
    ],

    "Set Guigui": [
      {
        text: "En quelle année est sorti le premier album de Sabaton ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["2005", "2003", "2008", "2007"],
        correct: 1
      },
      {
        text: "Quel est le nom complet d'Oceiros (Dark souls 3)",
        media_url: null, media_type: null, image_only: false,
        answers: ["Le Roi Illuminé", "Le Gardien de l'Enfant", "Le Roi Lion", "Le Roi Maudit"],
        correct: 1
      },
      {
        text: "Qui est ce personnage ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["Rondine", "Fiorayne", "Chichae", "Minayle"],
        correct: 2
      },
      {
        text: "Quel est ce son",
        media_url: null, media_type: null, image_only: false,
        answers: ["Feu de Dark souls 1", "Lieu découvert Elden Ring", "Attribut dans Skyrim", "Pouvoir God of War"],
        correct: 1
      },
      {
        text: "Quelle est la fiche d'une Modification de formule tarifaire d’acheminement ou de puissance souscrite [BT ≤ 36 kVA",
        media_url: null, media_type: null, image_only: false,
        answers: ["F120", "F170", "F180", "F800"],
        correct: 3
      },
      {
        text: "Dans Pokemon, le type Glace ne résiste qu'a un seul type, lequel ?",
        media_url: null, media_type: null, image_only: false,
        answers: ["Feu", "Plante", "Roche", "Glace"],
        correct: 4
      }
    ]
  },
    
  // ══════════════════════════════════════════════════════════
  // JEU 2 — L'INTRUS (collectif, pas de sets)
  // ══════════════════════════════════════════════════════════
  game2: [
    {
      question: "Qui est un champion d'arène de Pokemon ?",
      media_url: null, media_type: null,
      answers: ["Aldo","Flo","Kiméra","Rachid","Jasmine","Alizée","Jeannine","Charles","Amana"],
      wrong_index: 0
    },
    {
      question: "Quel jeu est sorti en 2018 ?",
      media_url: null, media_type: null,
      answers: ["AC Odyssey","DragonBall FighterZ","Days Gone","MH World","Sea of Thieves","Warhammer : Vermintide 2","Super Smash Bros. Ultimate","Stardew Valley","Dead Cells"],
      wrong_index: 3
    },
    {
      question: "Quel film vient du studio Pixar ?",
      media_url: null, media_type: null,
      answers: ["Toy Story","Cars","Ratatouille","Wall-E","Là-haut","Shrek","Monstres & compagnie","Vice-Versa","Coco"],
      wrong_index: 6
    },
    {
      question: "Quelle association est correcte ?",
      media_url: null, media_type: null,
      answers: ["Nevermind - Nirvana","Rust in Peace - Megadeth","Powerage - AC/DC","Mutter - Rammstein","Blackout - Scorpion","The Wall - Pink Floyd","Shenanigans - Blink182","The Game - Queen","Achtung Baby - U2"],
      wrong_index: 6
    },
    {
  question: "Quelle recette de Minecraft existe vraiment ?",
  media_url: null,
  media_type: null,
  answers: [
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft1.png?alt=media&token=ca27409b-2ec6-4f19-ba93-b9081a8143df" },  // ← INTRUS (wrong_index: 0)
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft2.png?alt=media&token=94d8051b-a614-4aa0-815c-bcf3677c1b05" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft3.png?alt=media&token=ead68b7c-3630-4c68-8608-d32dabbf7644" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft4.png?alt=media&token=f15c82e6-94c2-4ca2-87cf-e22867d0d0f5" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft5.png?alt=media&token=f4a414e3-767a-4917-8b13-4c11cc1fe0d3" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft6.png?alt=media&token=9f61c6d4-8081-442a-8827-347af34524af" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft7.png?alt=media&token=6bea4c50-abd0-432a-a5e6-9e5e868f1694" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft8.png?alt=media&token=4932c2be-385c-4587-9566-7815f2aa194d" },
    { image: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%203%2Fminecraft8.png?alt=media&token=4932c2be-385c-4587-9566-7815f2aa194d" },
  ],
  wrong_index: 0
    }
  ],

  // ══════════════════════════════════════════════════════════
  // JEU 3 — SPRINT — SETS PAR JOUEUR
  // Chaque clé = un nom de set.
  // ══════════════════════════════════════════════════════════
  game3Sets: {
    "Set Nico": { question: "Cite le plus de familles de monstres en Amakna (Dofus)" },
    "Set Toto":   { question: "Cite le plus de pays d'Afrique possible" },
    "Set Guigui":  { question: "Cite le plus de Pokémon de type Plante" },
  },

  // ══════════════════════════════════════════════════════════
  // JEU 4 — 4 À LA SUITE (collectif, pas de sets)
  // ══════════════════════════════════════════════════════════
 game4: {
    themes: [
      {
        label: "🎬 Cinéma",
        questions: [
          { text: "Réalisateur de Titanic ?",           answer: "James Cameron"  },
          { text: "Actrice d'Hermione Granger ?",       answer: "Emma Watson"    },
          { text: "Film avec Mufasa ?",                 answer: "Le Roi Lion"    },
          { text: "Studio derrière Toy Story ?",        answer: "Pixar"          },
          { text: "Acteur principal de Forrest Gump ?", answer: "Tom Hanks"      },
          { text: "Saga avec la Force et des Jedi ?",   answer: "Star Wars"      }
        ]
      },
      {
        label: "🎵 Musique",
        questions: [
          { text: "Groupe qui chante Bohemian Rhapsody ?", answer: "Queen"           },
          { text: "Roi de la pop ?",                       answer: "Michael Jackson" },
          { text: "Instrument d'Elton John ?",             answer: "Piano"           },
          { text: "Daft Punk vient de quel pays ?",        answer: "France"          },
          { text: "Chanteur de Thriller ?",                answer: "Michael Jackson" },
          { text: "Groupe des Beatles originaire de ?",    answer: "Liverpool"       }
        ]
      },
      {
        label: "⚽ Sport",
        questions: [
          { text: "Joueurs dans une équipe de foot ?",         answer: "11"           },
          { text: "Pays avec le plus de Coupes du Monde ?",    answer: "Brésil (5)"   },
          { text: "Sport avec des balais sur glace ?",         answer: "Curling"      },
          { text: "JO d'été 2024 ?",                           answer: "Paris"        },
          { text: "Sets pour gagner à Wimbledon ?",            answer: "3 sets sur 5" },
          { text: "Couleur maillot leader Tour de France ?",   answer: "Jaune"        }
        ]
      },
      {
        label: "🌍 Géographie",
        questions: [
          { text: "Capitale de l'Australie ?",  answer: "Canberra"      },
          { text: "Plus grand pays du monde ?", answer: "Russie"        },
          { text: "Continent du Maroc ?",       answer: "Afrique"       },
          { text: "Plus long fleuve du monde ?",answer: "Nil / Amazone" },
          { text: "Capitale du Canada ?",       answer: "Ottawa"        },
          { text: "Pays en forme de botte ?",   answer: "Italie"        }
        ]
      },
      {
        label: "🔬 Science",
        questions: [
          { text: "Symbole chimique de l'or ?",         answer: "Au"           },
          { text: "Planète la plus proche du Soleil ?", answer: "Mercure"      },
          { text: "Vitesse de la lumière ?",            answer: "300 000 km/s" },
          { text: "Nombre d'os dans le corps humain ?", answer: "206"          },
          { text: "Formule de l'eau ?",                 answer: "H2O"          },
          { text: "Qui a découvert la pénicilline ?",   answer: "Fleming"      }
        ]
      },
      {
        label: "🍽️ Cuisine",
        questions: [
          { text: "Ingrédient principal du guacamole ?", answer: "Avocat"     },
          { text: "Fromage de la pizza Margherita ?",    answer: "Mozzarella" },
          { text: "Pays d'origine des sushis ?",         answer: "Japon"      },
          { text: "Plat national espagnol ?",            answer: "Paella"     },
          { text: "Épice la plus chère du monde ?",      answer: "Safran"     }
        ]
      }
    ]
  },
  // ══════════════════════════════════════════════════════════
  // JEU 5 — QUI EST-CE ?
  // image_url : URL de l'image (Firebase Storage ou autre)
  // answer    : la réponse attendue (affichée à la révélation)
  // hint      : indice optionnel affiché sous l'image
  // ══════════════════════════════════════════════════════════
  game5: [
    {
      image_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%205%2FHogwarts02.webp?alt=media&token=80cf9bcc-4d7b-4c05-b5b3-93bff8044327",
      answer: "Poudlard",
      hint: "Dragée"
    },
    {
      image_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%205%2Fbridge.jpg?alt=media&token=f08b0c3e-9e49-49a2-8f7d-11be35ee7e1d",
      answer: "Sanctuary II",
      hint: "Lobby"
    },
    {
      image_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%205%2Fceleb1.jpeg?alt=media&token=edea8a11-10fb-4b95-960b-428bb7bb98d3",
      answer: "Marion Cotillard",
      hint: "Mort Nulle"
    },
    {
      image_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%205%2Fceleb2.webp?alt=media&token=4175135c-81d4-4d34-9700-96143fd8c3af",
      answer: "Dave",
      hint: "Faux Claude"
    }
  ],

  // ══════════════════════════════════════════════════════════
  // JEU 6 — QUEL EST CE SON ?
  // audio_url : URL du fichier audio original (mp3/ogg)
  // effect    : "reverse" | "pitch_low" | "pitch_high" | "slow" | "fast" | "noise"
  // answer    : titre de la chanson (affiché à la révélation)
  // artist    : artiste (optionnel)
  // ══════════════════════════════════════════════════════════
  game6: [
    {
      audio_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%206%2Facdc.mp3?alt=media&token=b16cadc1-a4b9-4ff9-ae05-677a3717a4bc",
      effect: "reverse",
      answer: "Bohemian Rhapsody",
      artist: "Queen"
    },
    {
      audio_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%206%2Facdc.mp3?alt=media&token=b16cadc1-a4b9-4ff9-ae05-677a3717a4bc",
      effect: "pitch_high",
      answer: "Thriller",
      artist: "Michael Jackson"
    },
    {
      audio_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%206%2Facdc.mp3?alt=media&token=b16cadc1-a4b9-4ff9-ae05-677a3717a4bc",
      effect: "slow",
      answer: "All Star",
      artist: "Smash Mouth"
    },
    {
      audio_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%206%2Facdc.mp3?alt=media&token=b16cadc1-a4b9-4ff9-ae05-677a3717a4bc",
      effect: "noise",
      answer: "Eye of the Tiger",
      artist: "Survivor"
    },
    {
      audio_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%206%2Facdc.mp3?alt=media&token=b16cadc1-a4b9-4ff9-ae05-677a3717a4bc",
      effect: "fast",
      answer: "Smooth Criminal",
      artist: "Michael Jackson"
    },
    {
      audio_url: "https://firebasestorage.googleapis.com/v0/b/quizzgamers-a15dd.firebasestorage.app/o/Jeu%206%2Facdc.mp3?alt=media&token=b16cadc1-a4b9-4ff9-ae05-677a3717a4bc",
      effect: "pitch_low",
      answer: "Never Gonna Give You Up",
      artist: "Rick Astley"
    }
  ]

};
