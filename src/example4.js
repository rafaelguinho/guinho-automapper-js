import { map } from "./index.js";

const mapping = [
  { from: "type", to: "data.type" },
  {
    from: "info.action",
    to: "data.relationships.related_person.data[0].action",
  },
  { from: "info.type", to: "data.relationships.related_person.data[0].type" },
  { from: "info.id", to: "data.relationships.related_person.data[0].id" },
  {
    from: "info.kind",
    to: "data.relationships.related_person.data[0].attributes.kind",
  },
  {
    from: "info.name",
    to: "data.relationships.related_person.data[0].attributes.name",
  },
  {
    type: 'transform-from',
    transform: (value) => `${value}ssss`,
    from: "info.notes",
    to: "data.relationships.related_person.data[0].attributes.notes",
  },
  {
    from: "info.birth_date",
    to: "data.relationships.related_person.data[0].attributes.birthdate",
  },
  {
    from: "info.relationship_kind_id",
    to: "data.attributes.relationship_kind_id",
  },
  { from: "principalInsured.id", to: "data.attributes.person_id" },
];

const pokemonOrigin = {"info":{"notes":"NORMAL"}};

let pokemonDest = {};

map(pokemonOrigin, pokemonDest, mapping, true);

document.getElementById("pokemonOrigin").innerText = JSON.stringify(
  pokemonOrigin
);
console.log(pokemonDest);
document.getElementById("pokemonDest").innerText = JSON.stringify(pokemonDest);
