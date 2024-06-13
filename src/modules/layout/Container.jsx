import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  gap: 1rem;
  padding: 0.5rem;
  align-items: center;
  text-align: center;
`;

export default StyledContainer;