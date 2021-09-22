import React from "react";
import styled from "styled-components";
import img from "../../assets/logo@3x.png";
import img1 from "../../assets/pod.png";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { RedButton } from "./RedButton";
import { BlueButton } from "./BlueButton";

const Header1 = () => {
  return (
    <Container>
      <Wrapper>
        <Logo src={img} />
        <Menu>
          <NavLink>Football</NavLink>
          <NavLink>Rugby</NavLink>
          <NavLink>Cricket</NavLink>
          <NavLink>Golf</NavLink>
          <NavLink>Motorsport</NavLink>
          <NavLink>
            More
            <Icons />
          </NavLink>
        </Menu>
        <SubMenu>
          <Sub>
            <SubLogo src={img1} />
          </Sub>
          <Sub>win</Sub>
          <Sub>tv guide</Sub>
          <Sub>
            <RedButton text="Red Button" bc1 />
          </Sub>
          <Sub>
            <BlueButton text="Red Button" bc1 />
          </Sub>
          <Sub>
            <Search />
          </Sub>
        </SubMenu>
      </Wrapper>
    </Container>
  );
};

export default Header1;

const Search = styled(AiOutlineSearch)`
  color: white;
  font-size: 30px;
  font-weight: bold;
  :hover {
    cursor: pointer;
  }
`;

const Icons = styled(AiFillCaretDown)`
  color: white;
  margin-left: 10px;
  position: absolute;
  bottom: 0;
`;

const SubLogo = styled.img`
  width: 30px;
  height: 50px;
  object-fit: contain;
`;

const Sub = styled.div`
  margin: 0 10px;
  text-transform: uppercase;
`;

const NavLink = styled.div`
  margin: 0 10px;
  position: relative;
`;

const Logo = styled.img`
  object-fit: contain;
  width: 150px;
  height: 50px;
  margin-right: 40px;
`;

const SubMenu = styled.div`
  display: flex;
  align-items: center;
`;

const Menu = styled.div`
  flex: 1;
  display: flex;
  text-transform: uppercase;
  font-size: 14px;

  :hover {
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  align-items: center;
`;

const Container = styled.div`
  background-color: #103464;
  width: 100%;
  height: 70px;
  color: white;
  display: flex;
  align-items: center;
`;
