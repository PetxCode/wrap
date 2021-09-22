import React from "react";
import styled from "styled-components";

export const BlueButton = ({ bg, bc, bc1, bg1, text, c, c1 }) => {
  return (
    <Container bg={bg} bc={bc} bg1={bg1} bc1={bc1} c={c} c1={c1}>
      <Wrapper>{text}</Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "white" : "#5B92E3")};
  padding: 7px;
  border-radius: 50px;
  border: 2px solid;
  border-color: ${({ bc }) => (bc ? "white" : "#5B92E3")};
  transition: all 350ms;
  color: ${({ c }) => (c ? "#5B92E3" : "white")};
  transform: scale(1);

  :hover {
    cursor: pointer;
    border-color: ${({ bc1 }) => (bc1 ? "#5B92E3" : "white")};
    background-color: ${({ bg1 }) => (bg1 ? "#5B92E3" : "white")};
    color: ${({ c1 }) => (c1 ? "white" : "#5B92E3")};
    transform: scale(1.05);
  }
`;

const Wrapper = styled.div`
  font-size: 12px;

  :hover {
  }
`;
