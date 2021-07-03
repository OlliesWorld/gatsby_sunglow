import React from 'react'
import {Link} from 'gatsby'
import Styled from 'styled-components'

const NavItem = Styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border: 0;
    cursor: pointer;
    color: black;
    
  @media (min-width: 900px){
   :nth-last-child(3) {
      margin-right: 5rem;
    }
  }
    :after {
        height: 2px;
        background: rgb(252, 83, 8);
        content: '';
        width: 0;
        position: absolute;
        transform: translateX(-50%);
        transition: width 0.4s;
        transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
        left: 50%;
        margin-top: 2rem;
    }
    :hover,
    :focus a{
      outline: none;
      text-decoration:none;
      &:after {
        width: calc(100% - 60px);
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
                
                        <p className="phone">Call or Text <br/><strong>970-335-9600</strong></p>
                        <Link className="cta-btn" to='/Estimate'>Free Estimate</Link>
           
        </>
    )
}