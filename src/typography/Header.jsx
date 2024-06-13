import styled from "styled-components";

const Header = styled.h2`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.large};
  font-weight: ${(props) => props.theme.fontWeight};
  width: 100%;
  margin: 0.5rem;
`;

export default Header;
