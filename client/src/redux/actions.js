import axios from "axios";

// constants
const URL = "http://localhost:3001";

export const FETCH_TYPES = "FETCH_TYPES";
export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const SEARCH_POKEMON = "SEARCH_POKEMON";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const FILTER_BY_TYPE = "FILTER_BY_TYPE";
export const FILTER_BY_SOURCE = "FILTER_BY_SOURCE";
export const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

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
  return { type: ORDER_BY_NAME, payload: name };
};

export const orderPokemonsByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
};
export const orderPokemonsByAttack = (order) => {
  return { type: ORDER_BY_ATTACK, payload: order };
};

export const filterPokemonsByType = (types) => {
  return { type: FILTER_BY_TYPE, payload: types };
};
export const filterPokemonsBySource = (source) => {
  return { type: FILTER_BY_SOURCE, payload: source };
};

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};
