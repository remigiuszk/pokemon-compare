import * as types from "../actions/actionTypes";
import initialState from "./initialState";

const pokemonReducer = (state = initialState.pokemon, action) => {
  switch (action.type) {
    case types.LOAD_POKEMON_SUCCESS:
      return {
        ...state,
        pokemonList: action.payload
      };
    case types.LOAD_POKEMON_DETAILS_SUCCESS:
      console.log(action);
      return {
        ...state,
        pokemonDetails: action.payload
      };
    case types.LOAD_ABILITIES_DETAILS_SUCCESS:
      return {
        ...state,
        abilitiesDetailed: action.payload
      };
    default:
      return state;
  }
};

export default pokemonReducer;
