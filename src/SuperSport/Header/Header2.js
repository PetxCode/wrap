import React from "react";
import styled from "styled-components";
import HeaderProps from "./HeaderProps";
import img1 from "../../assets/a1.png";
import img2 from "../../assets/a2.png";
import img3 from "../../assets/a3.png";
import img4 from "../../assets/a4.png";
import img5 from "../../assets/a5.png";
import img6 from "../../assets/a6.png";
import img7 from "../../assets/a7.png";
import img8 from "../../assets/a8.png";
import img9 from "../../assets/a9.png";
import img10 from "../../assets/a10.png";
import img11 from "../../assets/a11.png";
import img12 from "../../assets/a12.png";
import ReadMoreReact from "read-more-react";

const Header2 = () => {
  return (
    <Container>
      <HeaderProps img={img1} name="Champions League" />
      <HeaderProps img={img2} name="DSTV League" />
      <HeaderProps img={img3} name="EUPA League" />
      <HeaderProps img={img4} name="Formula One" />
      <HeaderProps img={img5} name="Golf League" />
      <HeaderProps img={img6} name="Seria A" />
      <HeaderProps img={img7} name="Moto League" />
      <HeaderProps img={img8} name="UEFA League" />
      <HeaderProps img={img9} name="Rugby Championship" />
    </Container>
  );
};

export default Header2;

const Container = styled.div`
  width: 100%;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
