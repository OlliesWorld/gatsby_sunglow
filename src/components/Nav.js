import React from 'react'
import {Link} from 'gatsby'
import NavStyles from './styles/NavStyles';


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