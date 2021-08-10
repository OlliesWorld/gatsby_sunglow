import React from 'react'
import {Link} from 'gatsby'
import Styled from 'styled-components'

const NavItem = Styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border: 0;
    cursor: pointer;
    display: inline-block;
    color: black;
    background-color: transparent; 
    background: transparent center bottom / 100% 5px no-repeat linear-gradient(var(--clr-orange) 0 0);
    transition: 0.3s linear;
    :hover {      
      background-size: 50% 5px;
    }
  @media (min-width: 1007px){
   :nth-last-child(3) {
      margin-right: 5rem;
    }
  }
 
  
   `

export default function NavBarLinks () {
    return (
    <>
                        <NavItem to='/'>Home</NavItem>
                        <NavItem to='/Commercial'>Commercial</NavItem>
                        <NavItem to='/Residential'>Residential</NavItem>
                        <NavItem to='/About'>About</NavItem>
                        <NavItem to='/Contact'>Contact</NavItem>
                        <a className="phone" href="tel:3032795884"  >CALL OR TEXT: <br/>(970) 335-9600</a>
                        
                        <Link className="cta-btn" to='/Estimate'>Free Estimate</Link>
           
        </>
    )
}