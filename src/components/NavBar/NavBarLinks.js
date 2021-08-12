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
    .phone {
    border: solid rgb(255, 103, 0) 2px;
    padding: .3rem .5rem;
    color: black;
    font-size: .8rem;
    line-height: 1.3;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media (max-width: 1245px) {
        font-size: .5rem;
        padding: .2rem .3rem;
    }
  }
  .cta-btn {
    position: relative;
    display: inline-block;
    padding: 0.875rem;
    margin: 1rem ;
    background-color: var(--clr-orange);
    background-image: var(--clr-ogradient);
    border-top: 1px solid var(--clr-orange);
    border-right: 1px solid var(--clr-orange);
    border-bottom: 1px solid var(--clr-orange);
    border-left: 1px solid var(--clr-orange);
    border-radius: 0px;
    padding: 0.775em 0.875em;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
    color: white;
    overflow: hidden;
    

@media (max-width: 1245px) {
        margin: .5rem 0;
        font-size: .5rem;
        
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
                        <CTAStyles>
                        <a className="phone" href="tel:3032795884"  >CALL OR TEXT: <br/>(970) 335-9600</a>
                        
                        <Link className="cta-btn" to='/Estimate'>Free Estimate</Link>
                        </CTAStyles>
        </>
    )
}