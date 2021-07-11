import React from 'react'
import '../components/styles/GlobalStyles.css';

import NavBar from './NavBar/NavBar';
import styled from 'styled-components';



const HeaderStyles = styled.header`
  margin-bottom: .5rem;
  position: relative;
  z-index: 1;
  
 
h1{ 
  text-align: center;
}
  
  
`;

export default function Header() {
  return (
    <HeaderStyles>
        <NavBar />
    </HeaderStyles>
  );
}
