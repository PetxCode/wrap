import React from "react";
import styled from "styled-components";
import GlobalButton from "./GlobalButton";
import img from "../assets/pix.png";

const HomeScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Header>
            Best WP Project Bidding Theme – Freelance Marketplace 2021
          </Header>
          <SubTitle>
            The most complete freelancer marketplace theme in the world. Build
            your freelancer website with the best template. Finest written code
            and awesome customer support!
          </SubTitle>
          <Other>
            <Start>Starting from</Start>
            <Cash> $149</Cash>
            <GlobalButton text="Start for free" clr1 bg bc clr />
          </Other>
        </Content>
        <Image src={img} />
      </Wrapper>
    </Container>
  );
};

export default HomeScreen;

const Header = styled.div`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 50px;
`;
const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  line-height: 1.2;
`;
const Other = styled.div`
  display: flex;
  align-items: center;
`;
const Start = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Cash = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 0 10px;
  color: lightgreen;
`;

const Content = styled.div`
  min-width: 300px;
  width: 600px;
  margin: 10px;
  padding-bottom: 10px;
`;
const Image = styled.img`
  min-width: 320px;
  width: 800px;
  /* height: 600px; */
  min-height: 400px;
  margin: 10px;
  object-fit: contain;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 30px;
`;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  background-image: url("bg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: whitesmoke;
  font-family: Poppins;
`;

// const Container = styled.div``
// const Container = styled.div``
{
  /* <GlobalButton text="View Demo" tt bld bg clr bc />
      <GlobalButton text="Purchase Theme" bld tt bc clr1 /> */
}
