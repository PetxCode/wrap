import React from "react";
import styled from "styled-components";

const SideBar = () => {
  return (
    <Container>
      <Wrapper>SideBar</Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 70vh;
  width: 150px;
  background-color: #103464;
  color: white;
  z-index: 1;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  transition: all 350ms;
`;
const Wrapper = styled.div``;
