import styled from "styled-components";
import StyledContainer from "../../../components/layout/Container";
import PropTypes from "prop-types";
import Header from "../../../components/typography/Header";
import PokemonTypes from "./PokemonTypes";
import * as Constants from "../../../constants";
import PokemonEvolutionChain from "./PokemonEvolutionChain";

const MainInfoContainer = styled(StyledContainer)`
  width: 40%;
`;

const StyledImg = styled.img`
  width: 50%;
`;

const StyledHeader = styled(Header)`
  font-size: 75px;
  font-weight: 600;
  text-transform: uppercase;
`;

const PokemonMainInfo = ({ id, name, types }) => {
  const thumbnailSrc = Constants.THUMBNAIL_BASE_URL + id + ".svg";

  return (
    <MainInfoContainer direction="column">
      <StyledHeader>
        #{id?.toString().padStart(3, "0")} {name}
      </StyledHeader>
      <StyledImg src={thumbnailSrc}></StyledImg>
      <PokemonTypes types={types} />
      <PokemonEvolutionChain />
    </MainInfoContainer>
  );
};

PokemonMainInfo.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default PokemonMainInfo;
