import React from 'react'

import { StaticImage } from "gatsby-plugin-image";
import Nav from './Nav';
import styled from 'styled-components';



const HeaderStyles = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: stretch;
  }
  img {
    max-height: 3rem;
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
      <div className="bar">
      <StaticImage src="../images/eclipse-logo.png" alt="logo" width={200} />
        <Nav />
      </div>
      
    </HeaderStyles>
  );
}
