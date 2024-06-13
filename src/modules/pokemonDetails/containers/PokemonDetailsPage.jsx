import React, { useEffect } from "react";
import Layout from "../../../components/layout/Layout";
import styled from "styled-components";
import StyledContainer from "../../../components/layout/Container";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as pokemonActions from "../../../redux/actions/pokemonActions";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import PokemonMainInfo from "../components/PokemonMainInfo";
import PokemonStats from "../../../components/pokemon/PokemonStats";

const PokemonDetailsContainer = styled(StyledContainer)`
  background-color: ${(props) => props.theme.colors.linen};
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const PokemonDetailsPage = (props) => {
  const { pokemonId } = useParams();
  const { pokemonDetails, actions, abilitiesDetailed } = props;

  useEffect(() => {
    actions.loadPokemonDetails(pokemonId);
  }, [pokemonId]);

  useEffect(() => {
    actions.loadAbilitiesDetails(pokemonDetails?.abilities || []);
  }, [pokemonDetails?.id]);

  return (
    <Layout>
      <PokemonDetailsContainer>
        {pokemonDetails && (
          <>
            <PokemonMainInfo
              id={pokemonDetails?.id}
              name={pokemonDetails?.name}
              types={pokemonDetails?.types || []}
            />
            <PokemonStats abilities={abilitiesDetailed} />
          </>
        )}
      </PokemonDetailsContainer>
    </Layout>
  );
};

PokemonDetailsPage.propTypes = {
  pokemonDetails: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    pokemonDetails: state.pokemon.pokemonDetails,
    abilitiesDetailed: state.pokemon.abilitiesDetailed
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(pokemonActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailsPage);
