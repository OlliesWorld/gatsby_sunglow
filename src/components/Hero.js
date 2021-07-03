import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';
import './styles/GlobalStyles.css';

const HeroStyles = styled.div `
    display: flex;
      
    h2{
        font-size: 2.8rem;
    }
    p{
        font-size: 1.5rem;
        color: black;
    }
  
    a{
        text-decoration: none;
        list-style-type: none;
        text-transform: uppercase;
        color: white;
    }
    
    .wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .5rem 2rem;
    }
    .wrapper h2 {
        font-size: 3rem;
    }
     .wrapper button {
       /* width: 60%; */
       align-self: center;
       
    }  
    @media (max-width: 400px) {
       .gatsby-image-wrapper {
        display: none;
       }
   }
`

const Hero = ({data}) => {
    
    return (
        <HeroStyles>
        <StaticImage src="../images/sunglo_hero.jpg" 
            alt="mountain snow" layout="constrained"
            fit="contain"
            width={1820} height={450}
            placeholder="blurred"/>
        <div className="wrapper">
            <h2>SunGlo Window Films is Durango&#39;s best commercial &amp; home window tinting
service.</h2>
            <p>Schedule your FREE home window tinting consultation NOW to Save $50. We are the
most professional commercial and home window tint service in The Four Corners servicing
Durango, Farmington, Cortez, Pagosa Springs and surrounding areas!</p>
            <Link to="/" className="cta-btn">Schedule a free estimate</Link>
        </div>
        </HeroStyles>
    )
}
export default Hero