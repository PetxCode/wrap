import React from "react";
import styled from "styled-components";

const AdComp = () => {
  return (
    <Container>
      <Wrapper>Ad</Wrapper>
    </Container>
  );
};

export default AdComp;

const Wrapper = styled.div`
  width: 70%;
  height: 100%;
  background-color: white;
  margin: 30px auto;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 120px;
`;
