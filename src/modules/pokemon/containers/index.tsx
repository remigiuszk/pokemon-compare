import React, { useEffect } from "react";
import styled from "styled-components";
import StyledContainer from "../../layout/Container";
import Header from "../../../typography/Header";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as pokemonActions from "../actions/pokemonActions";
import PropTypes from "prop-types";
import PokemonList from "../components/PokemonList";

const PokemonContainer = styled(StyledContainer)`
  background-color: ${(props) => props.theme.colors.linen};
  align-items: start;
  justify-content: center;
`;

const PokemonPage = ({ pokemonList, actions }) => {
  useEffect(() => {
    if (!pokemonList?.length) {
      actions.loadPokemon();
    }
  }, []);

  return (
    <>
      <PokemonContainer direction="column">
        <Header>Welcome to the pokemon page.</Header>
        <PokemonList pokemonList={pokemonList}></PokemonList>
      </PokemonContainer>
    </>
  );
};

PokemonPage.propTypes = {
  actions: PropTypes.object.isRequired,
  pokemonList: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  return {
    pokemonList: state.pokemon.pokemonList
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage);