import { map } from "./index.js";

const mapping = [
  {
    type: "process-from",
    process_from: {
      id_field: "moves[0].move.id",
      collection_find: "included",
      field_find: "attributes.name",
      find: (id) => {
        return (item) => item.type == "moves" && item.id == id;
      },
    },
    to: "moves[0].name",
  },
  {
    type: "process-from",
    process_from: {
      id_field: "moves[1].move.id",
      collection_find: "included",
      field_find: "attributes.name",
      find: (id) => {
        return (item) => item.type == "moves" && item.id == id;
      },
    },
    to: "moves[1].name",
  },
];

const pokemonOrigin = {
  forms: [{ name: "bulbasaur" }],
  height: 7,
  moves: [
    {
      move: {
        id: 1,
      },
    },
    {
        move: {
          id: 2,
        },
      },

  ],
  included: [
    {
      id: 1,
      type: "moves",
      attributes: {
        name: 'razor-wind',
      },
    },
    {
        id: 2,
        type: "moves",
        attributes: {
          name: "swords-dance",
        },
      },
  ],
};

let pokemonDest = {};

map(pokemonOrigin, pokemonDest, mapping);

document.getElementById("pokemonOrigin").innerText = JSON.stringify(
  pokemonOrigin
);
document.getElementById("pokemonDest").innerText = JSON.stringify(pokemonDest);
