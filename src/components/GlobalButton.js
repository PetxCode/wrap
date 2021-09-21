import React from "react";
import styled from "styled-components";

const GlobalButton = ({ text, bg, bc, clr, bld, tt, bg1, clr1 }) => {
  return (
    <Container bg={bg} bc={bc} clr={clr} bld={bld} bg1={bg1} clr1={clr1}>
      <Wrapper tt={tt}>{text} </Wrapper>
    </Container>
  );
};

export default GlobalButton;

const Container = styled.div`
  width: 150px;
  height: 45px;
  background-color: ${({ bg }) => (bg ? "transparent" : "#0069d9")};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  color: ${({ clr }) => (clr ? "#0069d9" : "white")};
  font-weight: ${({ bld }) => (bld ? "bold" : "normal")};
  border: 3px solid;
  border-color: ${({ bc }) => (bc ? "#0069d9" : "transparent")};
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    color: ${({ clr1 }) => (clr1 ? "white" : "#0069d9")};
    background-color: ${({ bg1 }) => (bg1 ? "transparent" : "#0069d9")};
    transform: scale(1.02);
  }
`;
const Wrapper = styled.div`
  text-transform: ${({ tt }) => (tt ? "uppercase" : "")};
`;
// #0069d9 #FFFF00
