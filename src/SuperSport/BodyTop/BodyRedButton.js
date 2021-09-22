import React from "react";
import styled from "styled-components";
import { AiFillCaretDown } from "react-icons/ai";

// const toggle = true;

const BodyRedButton = ({ bg, bg1, c, c1, title, toggle }) => {
  return (
    <Container bg={bg} bg1={bg1} c={c} c1={c1}>
      <Wrapper>
        <Title>{title}</Title>
        {toggle ? <Icons /> : null}
      </Wrapper>
    </Container>
  );
};

export default BodyRedButton;

const Icons = styled(AiFillCaretDown)`
  margin-left: 5px;
`;
const Title = styled.div``;
const Container = styled.div`
  background-color: ${({ bg }) => (bg ? "white" : "#CC0202")};
  color: ${({ c }) => (c ? "#CC0202" : "white")};
  height: 60px;
  width: 200px;
  margin: 20px 5px;
  transition: all 350ms;

  :hover {
    cursor: pointer;
    background-color: ${({ bg1 }) => (bg1 ? "#CC0202" : "white")};
    color: ${({ c1 }) => (c1 ? "white" : "#CC0202")};
  }
`;
const Wrapper = styled.div`
  height: 60px;
  width: 200px;
  justify-content: center;
  align-items: center;
  display: flex;
`;
