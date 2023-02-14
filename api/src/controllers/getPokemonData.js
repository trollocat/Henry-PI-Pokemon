const axios = require("axios");
const { awaitConsoleLog } = require("../utils/helpers");
const { Pokemon } = require("../db");

const getPokemonData = async () => {
  try {
    // db pokemons
    const dbPokemons = await Pokemon.findAll();

    // api pokemons
    const pokemonPromises = [];
    let i = 1;

    while (i <= 40) {
      let apiData = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`);
      pokemonPromises.push(apiData);
      i++;
    }

    const rawPokemons = (await Promise.all(pokemonPromises)).map(
      (response) => response.data
    );
    const parsedPokemons = rawPokemons.map((pokemon) => {
      return {
        id: pokemon.id,
        name: pokemon.forms[0].name,
        image: pokemon.sprites.other["official-artwork"].front_default,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        height: pokemon.height,
        weight: pokemon.weight,
      };
    });

    const allPokemons = [...dbPokemons, ...parsedPokemons];

    return allPokemons;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = getPokemonData;
