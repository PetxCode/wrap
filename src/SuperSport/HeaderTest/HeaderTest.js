import React, { useState, useEffect } from "react";
import styled from "styled-components";
import img from "../../assets/ss.png";
import { TiThMenu } from "react-icons/ti";
import SideBar from "./SideBar";
import Fade from "react-reveal/Fade";

export const HeaderTest = () => {
  const [toggle, setToggle] = useState(false);

  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <All>
        <Logo src={img} />
        <Menu>
          <Wrapper>Home</Wrapper>
          <Wrapper>About</Wrapper>
          <Wrapper>Sport</Wrapper>
          <Wrapper>League</Wrapper>
          <Wrapper>Contact</Wrapper>
        </Menu>
        <SubMenu>
          <Wrapper>About</Wrapper>
          <Wrapper>Sport</Wrapper>
          <Wrapper>League</Wrapper>
          <Wrapper>Contact</Wrapper>
        </SubMenu>

        <SubMenu1>
          <MyMenu onClick={onToggle} />
        </SubMenu1>
      </All>
      <SideContainer>
        <Fade left when={toggle}>
          {" "}
          <SideBar />
        </Fade>
      </SideContainer>
    </Container>
  );
};

const Logo = styled.img`
  height: 50px;
  object-fit: contain;
  margin-right: 40px;
`;
const SideContainer = styled.div`
  transition: all 350ms;
  margin-top: 1px;
`;

const Container = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  background-color: #103464;
  color: white;
`;

const Menu = styled.div`
  display: flex;
  flex: 1;
`;
const All = styled.div`
  display: flex;
  width: 90%;
  height: 80px;
  align-items: center;
  margin: 0 auto;
  /* background-color: red; */
`;

const MyMenu = styled(TiThMenu)`
  color: white;
  font-size: 30px;
  cursor: pointer;
`;
const SubMenu = styled.div`
  display: flex;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
const SubMenu1 = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: flex;
  }
`;
const Wrapper = styled.div`
  margin: 0 10px;
`;

{
  /* <SubMenu1>
          <Wrapper>About1</Wrapper>
          <Wrapper>Sport1</Wrapper>
          <Wrapper>League1</Wrapper>
          <Wrapper>Contact1</Wrapper>
        </SubMenu1> */
}
