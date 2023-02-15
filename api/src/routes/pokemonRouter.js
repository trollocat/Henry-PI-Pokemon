const pokemonRouter = require("express").Router();
const { Pokemon } = require("../db");
const getPokemonData = require("../controllers/getPokemonData");
const getPokemonById = require("../controllers/getPokemonById");
const getPokemonByName = require("../controllers/getPokemonByName");
const { validate } = require("uuid");

pokemonRouter.post("/", async (req, res) => {
  try {
    const { name, image, hp, attack, defense, speed, height, weight } =
      req.body;

    const newPokemon = await Pokemon.create({
      name,
      image,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });

    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(404).json(error.message);
  }
});
pokemonRouter.get("/", async (req, res) => {
  let { name } = req.query;
  try {
    // no query
    if (!name) {
      const allPokemons = await getPokemonData();
      return res.status(200).json(allPokemons);
    }
    // query
    const pokemon = await getPokemonByName(name);
    if (!pokemon)
      throw Error(`There is no pokemon named "${name}".`);
    return res.status(200).json(pokemon);
  } catch (error) {
    res.status(404).send(error.message);
  }
});
pokemonRouter.get("/:idPokemon", async (req, res) => {
  // params
  const { idPokemon } = req.params;
  try {
    // first i have to validate the UUID
    if (validate(idPokemon)) {
      // in db
      const pokemonInDb = await Pokemon.findByPk(idPokemon);
      if (pokemonInDb) return res.status(200).json(pokemonInDb);
    }
    if (!parseInt(idPokemon))
      throw Error(`ID must be an integer or a UUID.`);
    // in api
    const pokemonInApi = await getPokemonById(idPokemon);
    if (!pokemonInApi)
      throw Error(`The pokemon with ID ${idPokemon} does not exist.`);
    return res.status(200).json(pokemonInApi);
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = pokemonRouter;
