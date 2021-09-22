import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

// const toggle = true;

const BodyTopButton = ({ bg, bg1, c, c1, title, toggle }) => {
  return (
    <Container bg={bg} bg1={bg1} c={c} c1={c1}>
      <Wrapper>
        <Title>{title}</Title>
        {toggle ? <Icons /> : null}
      </Wrapper>
    </Container>
  );
};

export default BodyTopButton;

const Icons = styled(AiFillCaretDown)`
  margin-left: 5px;
`;
const Title = styled.div``;
const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "white" : "#103464")};
  color: ${({ c }) => (c ? "#103464" : "white")};
  height: 60px;
  width: 200px;
  margin: 20px 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: ${({ bg1 }) => (bg1 ? "#103464" : "white")};
    color: ${({ c1 }) => (c1 ? "white" : "#103464")};
  }
`;
const Wrapper = styled.div`
  height: 60px;
  width: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
