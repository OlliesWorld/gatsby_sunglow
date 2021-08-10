import React, { useState } from "react"
import Styled from "styled-components"
import NavbarLinks from "./NavBarLinks"
// import { StaticImage } from 'gatsby-plugin-image';
// import {Link} from 'gatsby'
import '../styles/GlobalStyles.css'

const Navigation = Styled.nav`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-evenly;
  
  @media (max-width: 56.25rem) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
   
  }
`

const Toggle = Styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 5vw;
 

  @media (max-width: 900px) {
    display: flex;
     
  }
`

const Navbox = Styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  
  @media (max-width: 900px) {
    flex-direction: column;
    position: fixed;
    width: 40%;
    justify-content: flex-start;
    padding-top: 1vh;
    background-color: rgb(73, 69, 70);
    opacity: 0.9;
    color: white;
    transition: all 0.3s ease-in;
    top: 5vh;
    left: ${props => (props.open ? "-100%" : "60%")};
    
    a{
      color: white;
      font-size: 1.2rem;
      margin: .2rem;
      padding: 1rem .5rem;
      text-transform: uppercase;
     
    }
   
    
    @media (max-width: 700px) {
      left: ${props => (props.open ? "-100%" : "50%")};
      width: 50%;
      top: 13vh;

    }
  }
`

const Hamburger = Styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  margin-left: 10rem;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
    props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
  a {
    margin-top: 1rem;
  }
`
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
     
     
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    </Navigation>
    
  )
}

export default Navbar
