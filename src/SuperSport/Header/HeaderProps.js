import React from "react";
import styled from "styled-components";
import ReadMoreReact from "read-more-react";

const HeaderProps = ({ img, name }) => {
  return (
    <Container>
      <Wrapper>
        <img src={img} />
        <Name>
          {name}
          {/* <ReadMoreReact
            text={name}
            // readMoreText="..."
            min={9}
            ideal={10}
            max={13}
          /> */}
        </Name>
      </Wrapper>
    </Container>
  );
};

export default HeaderProps;

const Container = styled.div`
  width: 150px;
  height: 100%;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 350ms;

  img {
    width: 60px;
    height: 60px;
    margin-top: 0px;
    margin-bottom: 20px;
    object-fit: contain;
    transform: scale(1);
    transition: all 350ms;
  }

  :hover {
    background-color: lightgray;
    cursor: pointer;

    img {
      transform: scale(1.2);
    }
  }
`;
const Name = styled.div`
  font-size: 13px;
  color: gray;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 30px;
  object-fit: contain;
`;
