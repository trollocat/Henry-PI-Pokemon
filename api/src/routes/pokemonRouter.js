const pokemonRouter = require("express").Router();
const { Pokemon } = require("../db");
const getPokemonData = require("../controllers/getPokemonData");
const getPokemonById = require("../controllers/getPokemonById");
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
  // no query
  const allPokemons = await getPokemonData();
  res.status(200).json(allPokemons);
  // query
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
    // in api
    const pokemonInApi = await getPokemonById(idPokemon);
    if (pokemonInApi) return res.status(201).json(pokemonInApi);
  } catch (error) {
    res
      .status(404)
      .send(`The pokemon with ID ${idPokemon} does not exist.`);
  }
});

module.exports = pokemonRouter;
