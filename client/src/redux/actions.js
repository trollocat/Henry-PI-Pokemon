import axios from "axios";

// constants
const URL = "http://localhost:3001";

export const FETCH_TYPES = "FETCH_TYPES";
export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const SEARCH_POKEMONS = "SEARCH_POKEMONS";
export const ORDER_POKEMONS = "ORDER_POKEMONS";
export const FILTER_POKEMONS = "FILTER_POKEMONS";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
export const CREATE_POKEMON = "CREATE_POKEMON";

// actions
export const fetchTypes = () => {
  return async (dispatch) => {
    try {
      const fetchedTypes = (await axios(`${URL}/type`)).data;
      return dispatch({ type: FETCH_TYPES, payload: fetchedTypes });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const fetchPokemons = () => {
  return async (dispatch) => {
    try {
      const fetchedPokemons = (await axios(`${URL}/pokemon`)).data;
      return dispatch({ type: FETCH_POKEMONS, payload: fetchedPokemons });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const searchPokemons = (name) => {
  return { type: SEARCH_POKEMONS, payload: name };
};

export const orderPokemons = (rules) => {
  return { type: ORDER_POKEMONS, payload: rules };
};

export const filterPokemons = (filters) => {
  return { type: FILTER_POKEMONS, payload: filters };
};

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};

export const createPokemon = (pokemon) => {
  return async (dispatch) => {
    try {
      const createdPokemon = (
        await axios({ method: "post", url: `${URL}/pokemon`, data: pokemon })
      ).data;
      return dispatch({ type: CREATE_POKEMON, payload: createdPokemon });
    } catch (error) {
      console.log(error.message);
    }
  };
};
