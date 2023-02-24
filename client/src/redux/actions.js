import axios from "axios";

// constants
const URL = "http://localhost:3001";

export const FETCH_TYPES = "FETCH_TYPES";
export const FETCH_POKEMONS = "FETCH_POKEMONS";
export const ORDER = "ORDER";
export const FILTER = "FILTER";
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

export const setCurrentPage = (page) => {
  return { type: SET_CURRENT_PAGE, payload: page };
};

export const filterPokemons = (filters) => {
  return { type: FILTER, payload: filters };
};

export const orderPokemons = (order) => {
  return { type: ORDER, payload: order };
};
