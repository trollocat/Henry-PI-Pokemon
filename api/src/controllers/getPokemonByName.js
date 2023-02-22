const axios = require("axios");
const { parsePokemon, getPokemonTypesFromDb } = require("../utils/helpers");
const { Pokemon } = require("../db");

const getPokemonByName = async (name) => {
  try {
    const nameNormalized = name.toLowerCase();
    // in db?
    const pokemonInDb = await Pokemon.findOne({
      where: { name: nameNormalized },
    });
    if (pokemonInDb) {
      const pokemonTypes = await getPokemonTypesFromDb(pokemonInDb)
      console.log(pokemonTypes);
      return { ...pokemonInDb.dataValues, types: pokemonTypes };
    }

    // in api?
    const rawPokemon = (
      await axios(`https://pokeapi.co/api/v2/pokemon/${nameNormalized}`)
    ).data;
    const pokemon = parsePokemon(rawPokemon);
    return pokemon;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getPokemonByName;
