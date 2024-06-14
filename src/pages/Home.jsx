import React from "react";
import Header from "../typography/Header";
import StyledContainer from "../modules/layout/Container";
import styled from "styled-components";

const HomeContainer = styled(StyledContainer)`
  background-color: ${(props) => props.theme.colors.linen};
  height: 100vh;
  align-items: start;
  justify-content: center;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Header>Welcome to the homepage.</Header>
      </HomeContainer>
    </>
  );
};

export default Home;
