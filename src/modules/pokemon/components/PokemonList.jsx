import styled from "styled-components";
import PokemonTile from "./PokemonTile";
import PropTypes from "prop-types";
import StyledContainer from "../../layout/Container";

const PokemonListContainer = styled(StyledContainer)`
  background-color: ${(props) => props.theme.colors.linen};
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  height: 80%;
`;

const PokemonList = ({ pokemonList }) => {
  return (
    <PokemonListContainer>
      {pokemonList.map((pokemon) => (
        <PokemonTile key={pokemon.id} pokemon={pokemon}></PokemonTile>
      ))}
    </PokemonListContainer>
  );
};

PokemonList.propTypes = {
  pokemonList: PropTypes.array.isRequired
};

export default PokemonList;
