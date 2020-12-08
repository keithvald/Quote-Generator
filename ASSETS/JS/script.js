const quotesData = [
  {
    "text": "Dans le monde il n’y a pas d’un côté le bien et le mal, il y a une part de lumière et d’ombre en chacun de nous. Ce qui compte c’est celle que l’on choisit de montrer dans nos actes, ça c’est ce que l’on est vraiment.",
    "author": "Sirus Black, Harry Potter et L'ordre du Phoenix."
  },
  {
    "text": "Ce ne sont pas nos capacités qui déterminent ce que nous sommes, Harry, ce sont nos choix !",
    "author": "Albus Dumbledore, Harry Potter et La Chambre des Secrets."
  },
  {
    "text": "Je respecte ton avis tu vois mais, en même temps c’est pas le mien donc c’est pas le bon…",
    "author": "Brice, Brice de nice."
  },
  {
    "text": "Vous savez pourquoi le fou est la carte la plus puissante dans un jeu de tarot ? Contrairement à ce que l’on croit le fou n’est pas du tout symbole de folie, on le dit fou parce qu’il est insaisissable et qu’il a la possibilité de devenir qui il veut.",
    "author": "Bu bu, Insaisissable 2."
  },
  {
    "text": "Une vie pour une vie, ma dette est payée.",
    "author": "Chang, Mulan."
  },
  {
    "text": "Je te vois.",
    "author": "Jake, Avatar."
  }
  ];

  const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

let currentQuote = '';
let currentAuthor = '';

function getRandomColor() {
  const randomColor = colors[
    Math.floor(Math.random() * colors.length)
  ];

  // Your code below

  // Your code above
}

function getRandomQuote() {
  const randomQuote = quotesData[
    Math.floor(Math.random() * quotesData.length)
  ];

  currentQuote = randomQuote.text;
  currentAuthor = randomQuote.author;

  // Your code below

  // Your code above

  getRandomColor();
}

getRandomQuote();

// Your code below

// Your code above