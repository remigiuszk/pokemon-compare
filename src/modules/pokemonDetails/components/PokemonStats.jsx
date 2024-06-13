import styled from "styled-components";
import StyledContainer from "../../layout/Container";
import Header from "../../../components/typography/Header";
import StyledParagraph from "../../../components/typography/Paragraph";
import PropTypes from "prop-types";

const PokemonStatsContainer = styled(StyledContainer)`
  width: 40%;
  background-color: ${(props) => props.theme.colors.timberwolf};
  border: 5px solid black;
  height: 100%;
  justify-content: start;
  align-items: start;
  text-align: start;
`;

const StyledHeader = styled(Header)`
  text-transform: capitalize;
  font-size: 36px;
  font-weight: 700;
`;

const PokemonStats = ({ abilities }) => {
  return (
    <PokemonStatsContainer direction="column">
      {abilities?.map((ability) => {
        return (
          <div key={ability.id}>
            <StyledHeader>{ability.name}</StyledHeader>
            <StyledParagraph>{ability.effect}</StyledParagraph>
          </div>
        );
      })}
    </PokemonStatsContainer>
  );
};

PokemonStats.propTypes = {
  abilities: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      effect: PropTypes.string.isRequired
    })
  )
};

export default PokemonStats;
