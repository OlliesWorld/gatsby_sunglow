import React from 'react'
import {Link} from 'gatsby'
import NavStyles from './styles/NavStyles';
import { StaticImage } from 'gatsby-plugin-image';
import './styles/GlobalStyles.css';

export default function Nav () {
    return (
        <NavStyles>
            <Link to='/'><StaticImage src="../images/eclipse-logo.png" alt="logo" placeholder="blurred" width={200} /></Link>
           
            
                    <div className="nav-links">
                        <Link to='/'>Home</Link>
                        <Link to='/Commercial'>Commercial</Link>
                        <Link to='/'>Residential</Link>
                        <Link to='/'>About</Link>
                        <Link to='/'>Contact</Link>
                    </div>

                    <Link className="cta-btn" to='/Estimate'>Free Estimate</Link>
                
            
        </NavStyles>
    )
}