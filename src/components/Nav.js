import React from 'react'
import {Link} from 'gatsby'
import NavStyles from './styles/NavStyles';
// import styled from 'styled-components';
// import { StaticImage } from "gatsby-plugin-image";

// const NavStyles = styled.div`
// display: flex;
// justify-content: space-around;
// margin-top: 1rem;
//     ul {
//         display: flex;
//         justify-content: space-between;
        
//     }
//     li {
//         text-decoration: none;
//         text-transform: uppercase;
//         list-style-type: none;
//         padding: 1rem;
        
//     }
//     a {
//         color: black;
//     }
//     img {
//         max-height: 3em;
        
//     }
// `


export default function Nav () {
    return (
        <NavStyles>
            {/* <StaticImage src="../images/eclipse-logo.png" alt="logo" placeholder="blurred" width={200} /> */}
           
            
                    <Link to='/'>Home</Link>
                
            
                    <Link to='/'>Commercial</Link>
                
            
                    <Link to='/'>Residential</Link>
                
            
                    <Link to='/'>Portfolio</Link>
                
            
                    <Link to='/'>Why Us</Link>
                
            
                    <Link to='/'>About</Link>
                
            
                    <Link to='/'>Contact</Link>
                
            
        </NavStyles>
    )
}