import React, { useState } from "react";
import styled from "styled-components";
//components
import toggleImage from "../images/toggler.svg";
import Navlist from "./NavList";

const Nav = () => {
  //State
  const [navExpanded, setNavExpanded] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  //Event Handlers

  const ExpandNavHandler = (state) => {
    setNavExpanded(!state);
  };

  return (
    <>
      <NavBar>
        <div>
          <p className="logo" href="#">
            Dev
          </p>
        </div>
        <ToggleButton
          onClick={() => ExpandNavHandler(navExpanded)}
          className={navExpanded ? "expanded" : ""}
        >
          <img src={toggleImage} alt="" />
        </ToggleButton>
        <ToggleBar>
          <li>About </li>
          <li>Resume</li>
          <li> Work</li>
          <li> Contact</li>
        </ToggleBar>
      </NavBar>

      {navExpanded && <Navlist />}
    </>
  );
};

const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    background-color: #d4d4d4;
    text-decoration: none;
    border: none;
    border-radius: 2rem;
    font-size: 3rem;
    padding: 0 3px;
    margin: 1rem 3rem;
    font-family: "Palette Mosaic", cursive;
    color: #23d997;
    transition: all 0.3s ease;
  }
  .logo:hover {
    cursor: pointer;
    background-color: white;
  }
  .toggleImage {
    height: 3rem;
  }
`;

const ToggleBar = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 50vw;
  align-items: center;
  margin: 0 3rem;
  img {
    height: 2.5rem;
    margin: auto;
  }
  li {
    /* margin-right: 5rem; */
    font-size: 2rem;
    font-family: "Caveat", cursive;
    list-style: none;
  }
  li:hover {
    color: #23d997;
    cursor: pointer;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ToggleButton = styled.button`
  position: absolute;
  top: 20px;
  right: 40px;
  padding: 3px;
  border-radius: 10px;
  display: none;
  border: 2px solid #3d3939;
  background: transparent;
  cursor: pointer;
  opacity: 0.7;

  img {
    height: 40px;
    width: 50px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default Nav;
