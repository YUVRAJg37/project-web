import React from "react";
import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuData } from "../data/Menudata";

const Nav = styled.nav`
  height: 60px;
  display: flex;
  background: black;
  justify-content: space-between; //space between two components
  padding: 16px 32px;
  z-index: 100px;
  position: fixed;
  width: 100%;
  background: #000;
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

const MenuBars = styled.i``;

const NavMenu = styled.div``;

const NavMenuLinks = styled(Link)`
  ${NavLink}
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
    </Nav>
  );
};

export default Navbar;
