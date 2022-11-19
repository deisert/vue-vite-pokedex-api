//package for easier fetch
//I dont use webpack in this project, so the import looks like this
import fetch from "node-fetch";

//and not like this
//const fetch = require("node-fetch");

exports.handler = async function () {
  const pokemonData = await fetch("https://pokeapi.co/api/v2/pokedex/2/").then(
    (response) => response.json()
  );

  return {
    statusCode: 200,
    body: JSON.stringify(pokemonData),
  };
};
