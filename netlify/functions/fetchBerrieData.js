//package for easier fetch
//I dont use webpack in this project, so the import looks like this
import fetch from "node-fetch";

//and not like this
//const fetch = require("node-fetch");

exports.handler = async function () {
  const berriesDataApi = await fetch(
    "https://pokeapi.co/api/v2/berry?offset=0&limit=64"
  ).then((response) => response.json());

  //"mapping" the api response json to access it easier in the frontend
  const berriesEntries = berriesDataApi.results
    ? berriesDataApi.results.map((berry) => {
        return {
          berryName: berry.name,
          berryUrl: berry.url,
        };
      })
    : [];

  return {
    statusCode: 200,
    body: JSON.stringify(berriesEntries),
  };
};
