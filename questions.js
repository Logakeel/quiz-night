// ============================================================
//  QUESTIONS.JS — Modifiez ce fichier avant chaque soirée
//  Ne touchez pas à index.html !
// ============================================================
//
//  FORMATS DISPONIBLES PAR QUESTION :
//
//  Texte seul :
//    media_url: null, media_type: null, image_only: false
//
//  Image + texte :
//    media_url: "https://...", media_type: "image", image_only: false
//
//  Image seule (l'image EST la question) :
//    media_url: "https://...", media_type: "image", image_only: true
//
//  Audio + texte :
//    media_url: "https://...", media_type: "audio", image_only: false
//
//  correct : index de la bonne réponse dans le tableau answers (commence à 0)
//    ex: correct: 0 → la 1ère réponse est la bonne
//        correct: 2 → la 3ème réponse est la bonne
//
// ============================================================

// ============================================================
//  AVATARS — Ajoutez vos images ici
//  Uploadez vos illustrations sur Firebase Storage (ou autre)
//  et collez les URLs ci-dessous.
//  Le nom s'affiche sous l'avatar dans le lobby.
// ============================================================
const AVATARS = [
  { name: "Mystère",  url: null },  // null = emoji générique si pas d'image
  { name: "Alice",    url: "https://firebasestorage.googleapis.com/VOTRE_URL/alice.png" },
  { name: "Bob",      url: "https://firebasestorage.googleapis.com/VOTRE_URL/bob.png" },
  { name: "Cara",     url: "https://firebasestorage.googleapis.com/VOTRE_URL/cara.png" },
  { name: "Dan",      url: "https://firebasestorage.googleapis.com/VOTRE_URL/dan.png" },
  // Ajoutez autant d'avatars que vous voulez...
];

const QUESTIONS = {

  // ══════════════════════════════════════════════════════════
  // JEU 1 — DUO / CARRÉ / CASH
  // Ajoutez autant de questions que vous voulez,
  // elles seront piochées aléatoirement.
  // ══════════════════════════════════════════════════════════
  game1: [

    // ── Texte simple ──
    {
      text: "Quel est le plus grand océan du monde ?",
      media_url: null,
      media_type: null,
      image_only: false,
      answers: [
        "Océan Pacifique",   // ← bonne réponse (correct: 0)
        "Océan Atlantique",
        "Océan Indien",
        "Océan Arctique"
      ],
      correct: 0
    },

    // ── Texte simple ──
    {
      text: "Dans quel pays se trouve le Mont Fuji ?",
      media_url: null,
      media_type: null,
      image_only: false,
      answers: [
        "Chine",
        "Corée du Sud",
        "Japon",             // ← bonne réponse (correct: 2)
        "Taïwan"
      ],
      correct: 2
    },

    // ── Image + texte ──
    {
      text: "Quel monument est représenté ici ?",
      media_url: "https://firebasestorage.googleapis.com/VOTRE_URL/monument.jpg",
      media_type: "image",
      image_only: false,
      answers: [
        "La Tour Eiffel",    // ← bonne réponse (correct: 0)
        "Big Ben",
        "La Sagrada Familia",
        "Le Colisée"
      ],
      correct: 0
    },

    // ── Image seule (pas de texte affiché) ──
    {
      text: "",
      media_url: "https://firebasestorage.googleapis.com/VOTRE_URL/drapeau.jpg",
      media_type: "image",
      image_only: true,
      answers: [
        "Italie",
        "France",            // ← bonne réponse (correct: 1)
        "Belgique",
        "Luxembourg"
      ],
      correct: 1
    },

    // ── Audio + texte ──
    {
      text: "Quel instrument entendez-vous ?",
      media_url: "https://firebasestorage.googleapis.com/VOTRE_URL/instrument.mp3",
      media_type: "audio",
      image_only: false,
      answers: [
        "Alto",
        "Contrebasse",
        "Violoncelle",
        "Violon"             // ← bonne réponse (correct: 3)
      ],
      correct: 3
    },

  ],


  // ══════════════════════════════════════════════════════════
  // JEU 2 — L'INTRUS
  // 3 rounds, 9 réponses par round dont 1 fausse.
  // wrong_index : position de la mauvaise réponse (commence à 0)
  // ══════════════════════════════════════════════════════════
  game2: [

    // ── Round 1 ──
    {
      question: "Capitales européennes (1 intrus)",
      media_url: null,
      media_type: null,
      answers: [
        "Lyon",        // ← INTRUS (wrong_index: 0) — Lyon n'est pas une capitale
        "Paris",
        "Berlin",
        "Madrid",
        "Rome",
        "Lisbonne",
        "Vienne",
        "Amsterdam",
        "Bruxelles"
      ],
      wrong_index: 0
    },

    // ── Round 2 — avec image ──
    {
      question: "Fruits (1 intrus)",
      media_url: null,
      media_type: null,
      answers: [
        "Pomme",
        "Poire",
        "Banane",
        "Carotte",     // ← INTRUS (wrong_index: 3) — légume
        "Mangue",
        "Kiwi",
        "Fraise",
        "Cerise",
        "Ananas"
      ],
      wrong_index: 3
    },

    // ── Round 3 ──
    {
      question: "Films Marvel (1 imposteur DC)",
      media_url: null,
      media_type: null,
      answers: [
        "Iron Man",
        "Thor",
        "Captain America",
        "Avengers",
        "Batman Begins",  // ← INTRUS (wrong_index: 4) — film DC
        "Black Panther",
        "Spider-Man",
        "Doctor Strange",
        "Ant-Man"
      ],
      wrong_index: 4
    },

  ],


  // ══════════════════════════════════════════════════════════
  // JEU 3 — SPRINT DE RÉPONSES
  // 1 question par joueur (slot 0, 1, 2, 3)
  // Le joueur a 30s pour citer le plus de réponses possible.
  // ══════════════════════════════════════════════════════════
  game3: [
    { question: "Citez le plus de pays d'Afrique possible",          media_url: null, media_type: null },
    { question: "Citez le plus de capitales européennes possible",    media_url: null, media_type: null },
    { question: "Citez le plus de Pokémon de type Feu possible",      media_url: null, media_type: null },
    { question: "Citez le plus de sports olympiques possible",        media_url: null, media_type: null },
  ],


  // ══════════════════════════════════════════════════════════
  // JEU 4 — 4 À LA SUITE
  // 6 thèmes, questions posées à l'oral par l'hôte.
  // Ajoutez autant de questions par thème que vous voulez.
  // ══════════════════════════════════════════════════════════
  game4: {
    themes: [

      {
        label: "🎬 Cinéma",
        questions: [
          { text: "Réalisateur de Titanic ?",            answer: "James Cameron"  },
          { text: "Actrice d'Hermione Granger ?",        answer: "Emma Watson"    },
          { text: "Film avec Mufasa ?",                  answer: "Le Roi Lion"    },
          { text: "Studio derrière Toy Story ?",         answer: "Pixar"          },
          { text: "Acteur principal de Forrest Gump ?",  answer: "Tom Hanks"      },
          { text: "Saga avec la Force et des Jedi ?",    answer: "Star Wars"      },
        ]
      },

      {
        label: "🎵 Musique",
        questions: [
          { text: "Groupe qui chante Bohemian Rhapsody ?", answer: "Queen"            },
          { text: "Roi de la pop ?",                       answer: "Michael Jackson"  },
          { text: "Instrument d'Elton John ?",             answer: "Piano"            },
          { text: "Daft Punk vient de quel pays ?",        answer: "France"           },
          { text: "Chanteur de Thriller ?",                answer: "Michael Jackson"  },
          { text: "Groupe des Beatles originaire de ?",    answer: "Liverpool"        },
        ]
      },

      {
        label: "⚽ Sport",
        questions: [
          { text: "Joueurs dans une équipe de foot ?",          answer: "11"           },
          { text: "Pays avec le plus de Coupes du Monde ?",     answer: "Brésil (5)"   },
          { text: "Sport avec des balais sur glace ?",          answer: "Curling"      },
          { text: "JO d'été 2024 ?",                            answer: "Paris"        },
          { text: "Nombre de sets pour gagner à Wimbledon ?",   answer: "3 sets sur 5" },
          { text: "Couleur du maillot du leader au Tour de France ?", answer: "Jaune"  },
        ]
      },

      {
        label: "🌍 Géographie",
        questions: [
          { text: "Capitale de l'Australie ?",        answer: "Canberra"       },
          { text: "Plus grand pays du monde ?",        answer: "Russie"         },
          { text: "Continent du Maroc ?",              answer: "Afrique"        },
          { text: "Plus long fleuve du monde ?",       answer: "Nil / Amazone"  },
          { text: "Capitale du Canada ?",              answer: "Ottawa"         },
          { text: "Quel pays a la forme d'une botte ?", answer: "Italie"        },
        ]
      },

      {
        label: "🔬 Science",
        questions: [
          { text: "Symbole chimique de l'or ?",         answer: "Au"          },
          { text: "Planète la plus proche du Soleil ?", answer: "Mercure"     },
          { text: "Vitesse de la lumière ?",            answer: "300 000 km/s" },
          { text: "Nombre d'os dans le corps humain ?", answer: "206"         },
          { text: "Formule de l'eau ?",                 answer: "H2O"         },
          { text: "Qui a découvert la pénicilline ?",   answer: "Fleming"     },
        ]
      },

      {
        label: "🍽️ Cuisine",
        questions: [
          { text: "Ingrédient principal du guacamole ?",    answer: "Avocat"      },
          { text: "Fromage de la pizza Margherita ?",       answer: "Mozzarella"  },
          { text: "Pays d'origine des sushis ?",            answer: "Japon"       },
          { text: "Plat national espagnol ?",               answer: "Paella"      },
          { text: "Épice la plus chère du monde ?",         answer: "Safran"      },
          { text: "Ingrédient secret du Coca-Cola ? 😄",   answer: "Inconnu !"   },
        ]
      },

    ]
  }

};
