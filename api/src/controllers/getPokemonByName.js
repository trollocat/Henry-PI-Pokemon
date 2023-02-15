const axios = require("axios");
const { parsePokemon } = require("../utils/helpers");
const { Pokemon } = require("../db");

const getPokemonByName = async (name) => {
  try {
    const nameNormalized = name.toLowerCase();
    // in db?
    const dbPokemon = await Pokemon.findOne({
      where: { name: nameNormalized },
    });
    if (dbPokemon) return dbPokemon;

    // in api?
    const rawPokemon = (
      await axios(`https://pokeapi.co/api/v2/pokemon/${nameNormalized}`)
    ).data;
    const pokemon = parsePokemon(rawPokemon);
    return pokemon;
  } catch (error) {
    return false;
  }
};

module.exports = getPokemonByName;
