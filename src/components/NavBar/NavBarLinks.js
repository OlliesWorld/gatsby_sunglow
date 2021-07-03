import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'

const NavItem = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    padding: 1rem 1.5rem;
    border: 0;
    cursor: pointer;
    color: black;
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
    // const NavBtn = styled(Link)`
    //     padding: 0.875rem;
    //     margin: 1rem;
    //     background-color: rgb(255, 103, 0);
    //     background-image:  linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
    //     border-top: 1px solid var(--clr-orange);
    //     border-right: 1px solid var(--clr-orange);
    //     border-bottom: 1px solid var(--clr-orange);
    //     border-left: 1px solid var(--clr-orange);
    //     border-radius: 0px;
    //     padding: 0.775em 0.875em;
    //     text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    //     text-transform: uppercase;
    //     font-weight: bold;
    //     font-size: 1rem;
    //     cursor: pointer;
    //     color: white;
    //     overflow: hidden;
        
    //  `

export default function NavBarLinks () {
    return (
    <>
                        <NavItem to='/'>Home</NavItem>
                        <NavItem to='/Commercial'>Commercial</NavItem>
                        <NavItem to='/Residential'>Residential</NavItem>
                        <NavItem to='/'>About</NavItem>
                        <NavItem to='/'>Contact</NavItem>
                

                    
                    <Link className="cta-btn" to='/Estimate'>Free Estimate</Link>
           
        </>
    )
}