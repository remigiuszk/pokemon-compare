import styled from "styled-components";
import Pokeball from "../../../img/pokeball.png"
import StyledContainer from "../Container";

const StyledLogoContainer = styled(StyledContainer)`
    width: 10%;
    justify-content: center;
`;

const Logo = () => {
  return (
    <StyledLogoContainer>
      <img src={Pokeball} width={75} height={75}/>
    </StyledLogoContainer>
  );
};

export default Logo;
