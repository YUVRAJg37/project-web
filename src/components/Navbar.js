import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/Menudata";
import { Button } from "./Button";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  background: black;
  justify-content: space-between; //space between two components
  padding: 16px 32px;
  z-index: 100px;
  position: fixed;
  width: 100%;
  background: green;
`;

const NavLink = css`
  color: white;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 100%;
  cursor: pointer; //Cursor style while hovering on text
  text-decoration: none; //underline
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    height: 30px;
    width: 30px;
    background-size: contain;
    cursor: pointer;
    top: 0;
    right: 0;
    &:hover {
      transform: scale3d(1.2, 1, 1);
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
`;

const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 64px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Logo</Logo>
      <MenuBars />
      <NavMenu>
        {/* Extracting data from menuData and linking our title/item to index (index will act as a link) */}
        {menuData.map((item, index) => (
          <NavMenuLinks to={item.link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </NavMenu>
      <NavButton>
        <Button to="/contact" primary="true">
          Contact US
        </Button>
      </NavButton>
    </Nav>
  );
};

export default Navbar;
