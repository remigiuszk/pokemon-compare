import styled from "styled-components";
import StyledContainer from "../../layout/Container";
import * as Constants from "../../../constants";
import PropTypes from "prop-types";
import SmallHeader from "../../../typography/SmallHeader";
import { Link } from "react-router-dom";

const PokemonTileContainer = styled(StyledContainer)`
  background-color: ${(props) => props.theme.colors.timberwolf2};
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.royalPurple};
  border-radius: 15px;
  width: 18rem;
  height: 25rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.timberwolf};
    cursor: pointer;
  }
`;

const StyledImg = styled.img`
  width: 200px;
  height: 300px;
`;

const StyledSmallHeader = styled(SmallHeader)`
  text-transform: capitalize;
`;

const PokemonTile = ({ pokemon }) => {
  const thumbnailSrc = Constants.THUMBNAIL_BASE_URL + pokemon.id + ".svg";

  return (
    <Link to={"/pokemon/" + pokemon.id}>
      <PokemonTileContainer direction="column">
        <StyledImg src={thumbnailSrc}></StyledImg>
        <div>
          <StyledSmallHeader>
            #{pokemon.id} {pokemon.name}
          </StyledSmallHeader>
        </div>
      </PokemonTileContainer>
    </Link>
  );
};

PokemonTile.propTypes = {
  pokemon: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};

export default PokemonTile;
