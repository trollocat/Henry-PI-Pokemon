import {
  ORDER_BY_NAME,
  ORDER_BY_ATTACK,
  FILTER_BY_TYPE,
  FILTER_BY_SOURCE,
  FETCH_POKEMONS,
  FETCH_TYPES,
  SET_CURRENT_PAGE,
  SEARCH_POKEMONS,
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
    case SEARCH_POKEMONS:
      let resultPokemons = [];
      const search = payload.toLowerCase();
      if (search === "") resultPokemons = state.orderedPokemons;
      else {
        resultPokemons = state.orderedPokemons?.filter(
          (pokemon) => pokemon.name === search
        );
      }
      return {
        ...state,
        pokemons: resultPokemons,
      };
    case ORDER_BY_NAME:
      let orderedPokemonsByName = [];
      if (payload === "asc")
        orderedPokemonsByName = state.pokemons.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      if (payload === "desc")
        orderedPokemonsByName = state.pokemons.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      return {
        ...state,
        orderedPokemons: orderedPokemonsByName,
      };
    case ORDER_BY_ATTACK:
      let orderedPokemonsByAttack = [];
      if (payload === "asc")
        orderedPokemonsByAttack = state.pokemons.sort(
          (a, b) => a.attack - b.attack
        );
      if (payload === "desc")
        orderedPokemonsByAttack = state.pokemons.sort(
          (a, b) => b.attack - a.attack
        );
      return {
        ...state,
        orderedPokemons: orderedPokemonsByAttack,
      };
    case FILTER_BY_TYPE:
      let filteredPokemonsByType = state.orderedPokemons.filter((pokemon) => {
        return payload.every((checkedType) => {
          return pokemon.types.some((type) => {
            return type === checkedType;
          });
        });
      });

      return {
        ...state,
        pokemons: [...filteredPokemonsByType],
        totalPages: Math.ceil(filteredPokemonsByType.length / 12),
      };
    case FILTER_BY_SOURCE:
      let combinedPokemons = [];
      const dbPokemons = state.orderedPokemons.filter(
        (pokemon) => !Number(pokemon.id)
      );
      const apiPokemons = state.orderedPokemons.filter((pokemon) =>
        Number(pokemon.id)
      );
      console.log(dbPokemons);
      console.log(apiPokemons);
      if (payload.db) combinedPokemons = [...combinedPokemons, ...dbPokemons];
      if (payload.api)
        combinedPokemons = [...combinedPokemons, ...apiPokemons];
      return {
        ...state,
        pokemons: combinedPokemons,
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
