import styled from "styled-components";
import StyledContainer from "../../../components/layout/Container";

const PokemonEvolutionChainContainer = styled(StyledContainer)`
  width: 80%;
  background-color: ${(props) => props.theme.colors.timberwolf};
  border: 5px solid black;
  height: 20rem;
`;

const PokemonEvolutionChain = () => {
  return <PokemonEvolutionChainContainer></PokemonEvolutionChainContainer>;
};

export default PokemonEvolutionChain;