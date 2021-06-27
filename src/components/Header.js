import React from 'react'
import '../components/styles/GlobalStyles.css';

import Nav from './Nav';
import styled from 'styled-components';



const HeaderStyles = styled.header`
margin: 0;
position: relative;
  z-index: 1;
  Nav {
    position: relative;
    background-color: $white;
    padding-top: 1.0625rem;
    padding-bottom: 1.0625rem;
  }
h1{ 
  text-align: center;
}
  
  
`;

export default function Header() {
  return (
    <HeaderStyles>
      
      {/* <StaticImage src="../images/eclipse-logo.png" alt="logo" placeholder='blurred' /> */}
        <Nav />
        <h1>SunGlow Films Durango</h1>
      
    </HeaderStyles>
  );
}
