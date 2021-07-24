import React from 'react'
import {Link} from 'gatsby'
import FooterStyles from './styles/FooterStyles';
import { StaticImage } from 'gatsby-plugin-image';
import { FaFacebookF } from 'react-icons/fa';


export default function Footer () {
    
    return (
        <FooterStyles>          
                    <div className="footer-nav">
                        <div className="nav-links">
                            <Link to='/'>Home</Link>
                            <Link to='/Commercial'>Commercial</Link>
                            <Link to='/Residential'>Residential</Link>
                            <Link to='/About'>About</Link>
                            <Link to='/Contact'>Contact</Link>
                        </div>
                        <div className="social-links">
                          <a target="_blank" rel="noreferrer" href="https://www.facebook.com/SunGloWF/?fref=ts" aria-labelledby="button-label">
                              <FaFacebookF className="white"/>
                                <span id="button-label" hidden>Facebook</span>
                              </a>
            
                        </div>
                    </div>
                    
                    <div className="info">
                        <Link to='/'><StaticImage src="../images/SunGlo-logo.png" alt="Sunglo Window Film Durango Logo" placeholder="blurred" width={200} /></Link>
                        <a className="callLink" href="tel:3032795884">CALL OR TEXT: <br/>(970) 335-9600</a>
                        <div>
                            <Link className="cta-btn footer" to='/Estimate'>Free Estimate</Link>
                        </div>
                        
                    </div>
                    © {new Date().getFullYear()} Sunglo Window Film, Built by <a href="https://roni.rocks/"  target="_blank" rel="noreferrer" ><span className="roni" role="img">🐶Roni</span></a>
        </FooterStyles>
    )
}