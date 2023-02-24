import {
  ORDER,
  FILTER,
  FETCH_POKEMONS,
  SET_CURRENT_PAGE,
  FETCH_TYPES,
} from "./actions";

const initialState = {
  allPokemons: [],
  pokemons: [],
  types: [],
  detail: [],
  // dudosos
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
        pokemons: payload,
        totalPages: Math.ceil(payload.count / 12),
      };
    case SET_CURRENT_PAGE:
      // no se si la voy a usar
      return {
        ...state,
        currentPage: payload,
      };
    case FILTER:
      return {
        ...state,
      };
    case ORDER:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default reducer;
