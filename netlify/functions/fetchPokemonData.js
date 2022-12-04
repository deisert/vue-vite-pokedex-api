//package for easier fetch
//I dont use webpack in this project, so the import looks like this
import fetch from "node-fetch";

//and not like this
//const fetch = require("node-fetch");

exports.handler = async function () {
  const pokemonDataApi = await fetch("https://pokeapi.co/api/v2/pokedex/2", {
    cache: "force-cache",
  }).then((response) => response.json());

  //"mapping" the api response json to access it easier in the frontend
  const pokemonEntries = pokemonDataApi.pokemon_entries
    ? pokemonDataApi.pokemon_entries.map((pokemon) => {
        const pokemonNameUppercase =
          pokemon.pokemon_species.name[0].toUpperCase() +
          pokemon.pokemon_species.name.substring(1);

        return {
          pokemonId: pokemon.entry_number,
          pokemonName: pokemonNameUppercase,
          pokemonUrl: pokemon.pokemon_species.url,
        };
      })
    : [];

  return {
    statusCode: 200,
    body: JSON.stringify(pokemonEntries),
  };
};
