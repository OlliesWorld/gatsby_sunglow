import React from 'react'
import {Link} from 'gatsby'
import FooterStyles from './styles/FooterStyles';
import { StaticImage } from 'gatsby-plugin-image';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';

export default function Footer () {
    
    return (
        <FooterStyles>          
                    <div className="footer-nav">
                        <div className="nav-links">
                            <Link to='/'>Home</Link>
                            <Link to='/'>Commercial</Link>
                            <Link to='/'>Residential</Link>
                            <Link to='/'>About</Link>
                            <Link to='/'>Contact</Link>
                        </div>
                        <div className="social-links">
                          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SunGloWF/?fref=ts"><FaFacebookF className="white"/></a>
                          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/SunGlo_WF"><FaTwitter className="white"/></a>
                          <a target="_blank" rel="noopener noreferrer" href="https://plus.google.com/+SunGloWindowFilmsDenver"><FaGooglePlusG className="white"/></a>
                        </div>
                    </div>
                    
                    <div className="info">
                        <Link to='/'><StaticImage src="../images/eclipse-logo.png" alt="logo" placeholder="blurred" width={200} /></Link>
                        <div>
                            <Link className="cta-btn" to='/'>Schedule Your Appointment Now</Link>
                        </div>
                        
                    </div>
                    © {new Date().getFullYear()}Sunglo Window Film, Built by <a href="https://roni.rocks/"  ><span className="roni">🐶</span></a>
        </FooterStyles>
    )
}