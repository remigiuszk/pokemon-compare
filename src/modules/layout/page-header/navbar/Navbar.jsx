import styled from "styled-components";
import StyledContainer from "../../Container";
import { NavLink } from "react-router-dom";

const NavbarContainer = styled(StyledContainer)`
  width: 45%;
  justify-content: center;
  @media screen and (max-width: 768px) {
    width: 70%;
  }
`;

const NavbarLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.timberwolf};
  text-decoration: none;
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-family: ${(props) => props.theme.fontFamily};

  &:hover {
    color: ${(props) => props.theme.colors.verdigis};
  }

  &.active {
    color: ${(props) => props.theme.colors.verdigis};
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLink to="/"
       className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavbarLink>
      <NavbarLink
       to="/pokemon"
       className={({ isActive }) => (isActive ? "active" : "")}>Pokemon</NavbarLink>
    </NavbarContainer>
  );
};

export default Navbar;
