const axios = require("axios");
const { parsePokemon, getPokemonTypesFromDb } = require("../utils/helpers");
const { Pokemon } = require("../db");

const getPokemonData = async () => {
  try {
    // db pokemons
    const pokemonsInDb = await Pokemon.findAll();
    const pokemonsInDbCompletos = await Promise.all(
      pokemonsInDb.reverse().map(async (pokemonInDb) => {
        // get types thanks to associative table with a helper
        const pokemonTypes = await getPokemonTypesFromDb(pokemonInDb);
        const pokemonCompleto = {
          ...pokemonInDb.dataValues,
          types: pokemonTypes,
        };
        return pokemonCompleto;
      })
    );

    // api pokemons
    const pokemonPromises = [];
    let i = 1;

    while (i <= 120) {
      let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemonPromises.push(apiData);
      i++;
    }

    const rawPokemons = (await Promise.all(pokemonPromises)).map(
      (response) => response.data
    );
    const parsedPokemons = rawPokemons.map((pokemon) => parsePokemon(pokemon));

    const allPokemons = [...pokemonsInDbCompletos, ...parsedPokemons];

    return allPokemons;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = getPokemonData;
