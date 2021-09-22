import React from "react";
import styled from "styled-components";

export const RedButton = ({ bg, bc, bc1, bg1, text, c, c1 }) => {
  return (
    <Container bg={bg} bc={bc} bg1={bg1} bc1={bc1} c={c} c1={c1}>
      <Wrapper>{text}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "white" : "red")};
  padding: 7px;
  border-radius: 50px;
  border: 2px solid;
  border-color: ${({ bc }) => (bc ? "white" : "red")};
  transition: all 350ms;
  color: ${({ c }) => (c ? "red" : "white")};
  transform: scale(1);

  :hover {
    cursor: pointer;
    border-color: ${({ bc1 }) => (bc1 ? "red" : "white")};
    background-color: ${({ bg1 }) => (bg1 ? "red" : "white")};
    color: ${({ c1 }) => (c1 ? "white" : "red")};
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  /* color: ${({ c }) => (c ? "red" : "white")};
  transition: all 350ms; */

  :hover {
    /* color: ${({ c1 }) => (c1 ? "white" : "red")}; */
  }
`;
