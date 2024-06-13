import Container from "../../Container";
import styled from "styled-components";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HamburgerMenu from "../../../../components/layout/page-header/navbar/HamburgerMenu";

const StyledPageHeaderContainer = styled(Container)`
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.royalPurple};
`;

const PageHeader = () => {
  return (
    <StyledPageHeaderContainer>
      <HamburgerMenu />
      <Logo />
      <SearchBar />
    </StyledPageHeaderContainer>
  );
};

export default PageHeader;
