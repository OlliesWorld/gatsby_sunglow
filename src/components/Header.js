import React from 'react'
import '../components/styles/GlobalStyles.css';
import { StaticImage } from 'gatsby-plugin-image';
import NavBar from './NavBar/NavBar';
import styled from 'styled-components';



const HeaderStyles = styled.header`
  margin-bottom: .5rem;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-evenly;
 
h1{ 
  text-align: center;
}
  @media ( max-width: 400px) {
    .gatsby-image-wrapper {
      overflow: none;
      width: 100px;
    }
    img {
      width: 150px;
      height: 50px;
      margin-left: 2rem;
      margin-top: 1rem;
    }
  }
  
`;

export default function Header() {
  return (
    <HeaderStyles>
      <StaticImage src="../images/SunGlo-logo.png" alt="logo" placeholder="blurred" layout="fixed"  width={200} />
        <NavBar />
    </HeaderStyles>
  );
}
