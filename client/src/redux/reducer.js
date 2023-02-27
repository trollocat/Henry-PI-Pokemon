import {
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_BY_TYPE,
  FILTER_BY_SOURCE,
  FETCH_POKEMONS,
  FETCH_TYPES,
  SET_CURRENT_PAGE,
} from "./actions";

const initialState = {
  allPokemons: [],
  types: [],
  detail: [],
  orderedPokemons: [],
  pokemons: [],
  currentPage: 1,
  totalPages: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TYPES:
      return {
        ...state,
        types: payload,
      };
    case FETCH_POKEMONS:
      return {
        ...state,
        allPokemons: payload,
        orderedPokemons: payload,
        pokemons: payload,
        totalPages: Math.ceil(payload.length / 12),
      };
    case ORDER_BY_NAME:
      let orderedPokemonsByName = [];
      if (payload === "asc")
        orderedPokemonsByName = state.orderedPokemons.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      if (payload === "desc")
        orderedPokemonsByName = state.orderedPokemons.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      return {
        ...state,
        orderedPokemons: orderedPokemonsByName,
      };
    case ORDER_BY_ATTACK:
      let orderedPokemonsByAttack = [];
      if (payload === "asc")
        orderedPokemonsByAttack = state.orderedPokemons.sort((a, b) => a.attack - b.attack);
      if (payload === "desc")
        orderedPokemonsByAttack = state.orderedPokemons.sort((a, b) => b.attack - a.attack);
      return {
        ...state,
        orderedPokemons: orderedPokemonsByAttack,
      };
    case FILTER_BY_TYPE:
      return {
        ...state,
      };
    case FILTER_BY_SOURCE:
      return {
        ...state,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: payload,
      };
    default:
      return { ...state };
  }
};

export default reducer;
