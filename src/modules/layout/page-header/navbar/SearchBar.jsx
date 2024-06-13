import styled from "styled-components";
import StyledContainer from "../Container";

const SearchBarContainer = styled(StyledContainer)`
  width: 45%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

const StyledInput = styled.input`
  border-radius: 32px;
  border: 1px solid ${(props) => props.theme.colors.timberwolf};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  background: url(src/img/search.png) no-repeat scroll 7px 7px;
  background-size: 25px;
  background-color: ${(props) => props.theme.colors.linen};
  padding: 0.4rem 0.4rem 0.4rem 2.5rem;
  height: 1.5rem;
  width: 70%;
  font-family: ${(props) => props.theme.fontFamily};
  font-size: ${(props => props.theme.fontSizes.medium)};
  font-weight: ${(props => props.theme.fontWeight)};
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <StyledInput type="text" placeholder="Looking for anything?"></StyledInput>
    </SearchBarContainer>
  );
};

export default SearchBar;
