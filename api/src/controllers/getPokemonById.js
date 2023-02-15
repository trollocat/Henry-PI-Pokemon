const axios = require("axios");
const { parsePokemon } = require("../utils/helpers");

const getPokemonById = async (id) => {
  try {
    // api
    const rawPokemon = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}`))
      .data;
    const pokemon = parsePokemon(rawPokemon);
    return pokemon;
  } catch (error) {
    return false;
  }
};

module.exports = getPokemonById;
