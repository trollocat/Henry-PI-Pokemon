import { ORDER, FILTER, FETCH_POKEMONS, SET_CURRENT_PAGE } from "./actions";

const initialState = {
  pokemons: [],
  currentPage: 1,
  totalPages: 0,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POKEMONS:
      return {
        ...state,
        pokemons: payload,
        totalPages: Math.ceil(payload.count / 12),
      };
    case SET_CURRENT_PAGE:
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
