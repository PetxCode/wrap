import React from "react";
import styled from "styled-components";
import Header1 from "./Header/Header";
import Header2 from "./Header/Header2";
import AdComp from "./AdComp";
import BodyTop from "./BodyTop/BodyTop";

export const MainBuild = () => {
  return (
    <Container>
      <Header1 />
      <Header2 />
      <AdComp />
      <Wrapper>
        <BodyTop />
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const Container = styled.div`
  background-color: #e7e8ea;
  width: 100%;
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  font-family: Poppins;
`;
