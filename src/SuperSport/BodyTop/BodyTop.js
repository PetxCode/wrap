import React from "react";
import styled from "styled-components";
import BodyTopButton from "./BodyTopButton";
import BodyRedButton from "./BodyRedButton";
import { AiOutlineAppstoreAdd, AiOutlineAppstore } from "react-icons/ai";

const BodyTop = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <BodyTopButton title="All Tournament" toggle />
        </Holder>
        <Holder1>
          <BodyTopButton title="Coming Soon" bg c bg1 c1 />
          <BodyRedButton title="In Progress" />
          <BodyTopButton title="Result" bg c bg1 c1 />
        </Holder1>
        <Menu>
          <AppMenu />
          <AppMenu1 />
        </Menu>
      </Wrapper>
    </Container>
  );
};

export default BodyTop;

const AppMenu1 = styled(AiOutlineAppstoreAdd)`
  font-size: 50px;
  height: 100%;
  color: gray;
  transform: scale(1);
  transition: all 350ms;
  margin: 0 10px;

  :hover {
    color: black;
    cursor: pointer;
    transform: scale(1.09);
  }
`;

const AppMenu = styled(AiOutlineAppstore)`
  font-size: 50px;
  height: 100%;
  color: gray;
  transform: scale(1);
  transition: all 350ms;
  margin: 0 10px;

  :hover {
    color: black;
    cursor: pointer;
    transform: scale(1.09);
  }
`;
const Menu = styled.div``;
const Holder1 = styled.div`
  flex: 1;
  display: flex;
`;
const Holder = styled.div`
  margin-right: 40px;
`;

const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
