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
  @media (min-width: 1245px){
   :nth-last-child(2) {
      margin-right: 5rem;
    }
  }
 
  
   `
   const CTAStyles = Styled.div `
    display: flex;
    
    @media (max-width: 1300px) {
      
      flex-direction: column;
      margin: .5rem;
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
                        <CTAStyles>
                        <a className="phone" href="tel:9707446699"  >CALL OR TEXT: <br/>(970) 744-6699</a>
                        
                        <Link className="cta-btn" to='/Estimate'>Free Estimate</Link>
                        </CTAStyles>
        </>
    )
}