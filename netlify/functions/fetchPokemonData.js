//package for easier fetch
//const fetch = require("node-fetch");
import fetch from "node-fetch";

exports.handler = async function () {
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokedex/2/").then(
    (response) => response.json()
  );

  return {
    statusCode: 200,
    body: JSON.stringify(pokemonData),
  };
};
