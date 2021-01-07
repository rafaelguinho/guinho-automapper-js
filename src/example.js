import { map } from "./index.js";

const mapping = [
  {
    from: 'name',
    to: 'forms[0].name',
  },
  {
    from: 'height',
    to: 'height',
  },
  {
    from: 'type',
    to: 'types[0].type.name',
  },
  {
    from: 'secondary_type',
    to: 'types[1].type.name',
  },
  {
    from: 'moves[0].name',
    to: 'moves[0].move.name',
  },
  {
    from: 'moves[1].name',
    to: 'moves[1].move.name',
  }
];


const pokemonOrigin = {
  name: 'bulbasaur',
  height: 7,
  type: 'grass',
  secondary_type: 'poison',
  moves: [
    {
      name: 'razor-wind'
    },
    {
      name: 'swords-dance'
    }
  ]
};

let pokemonDest = {};

map(pokemonOrigin, pokemonDest, mapping, true);

document.getElementById('pokemonOrigin').innerText = JSON.stringify(pokemonOrigin); 
document.getElementById('pokemonDest').innerText = JSON.stringify(pokemonDest); 