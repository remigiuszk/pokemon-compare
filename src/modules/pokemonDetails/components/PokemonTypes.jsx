import styled from "styled-components";
import StyledContainer from "../../../components/layout/Container";
import { TYPES_IMG_BASE_PATH } from "../../../constants";

const TypeImage = styled.img`
  width: 100px;
  height: 50px;
`;

const PokemonTypes = ({ types }) => {
  console.log(types);
  return (
    <StyledContainer>
      {types.map((type) => {
        const typeSrcPath = TYPES_IMG_BASE_PATH + type + ".png";
        return <TypeImage key={type} src={typeSrcPath} />;
      })}
    </StyledContainer>
  );
};

export default PokemonTypes;
