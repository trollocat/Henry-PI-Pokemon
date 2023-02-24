import {
  ORDER,
  FILTER,
  FETCH_POKEMONS,
  FETCH_TYPES,
  SET_CURRENT_PAGE,
} from "./actions";

const initialState = {
  pokemons: [],
  types: [],
  detail: [],
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
        totalPages: Math.ceil(payload.length / 12),
      };
    case FILTER:
      return {
        ...state,
      };
    case ORDER:
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
