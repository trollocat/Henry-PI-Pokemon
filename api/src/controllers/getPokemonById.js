const axios = require("axios");
const { parsePokemon } = require("../utils/helpers");

const getPokemonById = async (id) => {
  // api only
  const rawPokemon = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)).data;
  const pokemon = parsePokemon(rawPokemon);
  return pokemon;
};

module.exports = getPokemonById;