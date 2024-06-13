import styled from "styled-components";

const SmallHeader = styled.h1`
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: 600;
`;

export default SmallHeader;
