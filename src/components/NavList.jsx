import React from "react";
import styled from "styled-components";

const Navlist = () => {
  return (
    <NavList>
      <li>About </li>
      <li> Work</li>
      <li> Contact</li>
      <li>Resume</li>
    </NavList>
  );
};

const NavList = styled.ul`
  display: none;
  flex-direction: column;
  width: 100%;
  &:hover {
  }
  li {
    background-color: lightgray;
    font-size: 2rem;
    width: 100%;
    text-align: center;
    font-family: "Caveat", cursive;
    list-style: none;
  }
  li:hover {
    cursor: pointer;
    font-weight: bold;
    background: white;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export default Navlist;
