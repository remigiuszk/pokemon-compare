import * as types from "../../../redux/actions/actionTypes";
import instance from "../../../api/api_instance";

export function loadPokemonSuccess(pokemonList) {
  return { type: types.LOAD_POKEMON_SUCCESS, payload: pokemonList };
}

export function loadPokemon() {
  return async (dispatch) => {
    return await instance
      .get("/pokemon")
      .then((response) => {
        const mappedResult = response.data.results.map((pokemon) => ({
          id: getIdFromUrl(pokemon.url),
          url: pokemon.url,
          name: pokemon.name
        }));

        dispatch(loadPokemonSuccess(mappedResult));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadPokemonDetailsSuccess(pokemonDetails) {
  return { type: types.LOAD_POKEMON_DETAILS_SUCCESS, payload: pokemonDetails };
}

export function loadPokemonDetails(pokemonId) {
  return async (dispatch) => {
    return await instance
      .get(`/pokemon/${pokemonId}`)
      .then((response) => {
        console.log(response);
        const mappedResponse = mapPokemonDetails(response.data);
        console.log(mappedResponse);
        dispatch(loadPokemonDetailsSuccess(mappedResponse));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadAbilitiesDetailsSuccess(detailedAbilities) {
  console.log("action payload", detailedAbilities);
  return { type: types.LOAD_ABILITIES_DETAILS_SUCCESS, payload: detailedAbilities };
}

export function loadAbilitiesDetails(abilities) {
  return async (dispatch) => {
    try {
      const mappedAbilities = [];

      for (let index = 0; index < abilities.length; index++) {
        const id = getIdFromUrl(abilities[index].url);
        const response = await instance.get(`/ability/${id}`);
        const mappedResponse = mapAbilityDetails(response.data);
        mappedAbilities.push(mappedResponse);
      }

      dispatch(loadAbilitiesDetailsSuccess(mappedAbilities));
    } catch {
      console.log("error");
    }
  };
}

const getIdFromUrl = (url) => {
  const slicedUrl = url.slice(0, url.length - 1);
  const slicedArray = slicedUrl.split("/");

  return Number(slicedArray[slicedArray.length - 1]);
};

const mapPokemonDetails = (detailsResponse) => {
  return {
    id: detailsResponse.id,
    name: detailsResponse.name,
    types: detailsResponse.types.map((type) => {
      return type.type.name;
    }),
    stats: detailsResponse.stats.map((stat) => {
      return {
        name: stat.stat.name,
        value: stat.base_stat
      };
    }),
    abilities: detailsResponse.abilities.map((ability) => {
      return {
        name: ability.ability.name,
        url: ability.ability.url
      };
    }),
    moves: detailsResponse.moves.map((move) => {
      return {
        name: move.move.name,
        url: move.move.url
      };
    }),
    encounterLocations: detailsResponse.location_area_encounters,
    species: detailsResponse.spieces?.url
  };
};

const mapAbilityDetails = (abilitiesResponse) => {
  return {
    id: abilitiesResponse.id,
    name: abilitiesResponse.name,
    effect: abilitiesResponse.effect_entries.find(
      (effectEntry) => effectEntry.language.name === "en"
    ).effect
  };
};
