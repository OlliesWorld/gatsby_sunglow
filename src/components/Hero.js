import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';
import './styles/GlobalStyles.css';

const HeroStyles = styled.div `
    /* position: relative; */
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
        background-image: url('../image/nice_snow.png');
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
            <h2>The Finest Home & Commercial Window Tinting</h2>
            <p>With a 25 year history, an A+ BBB rating & offering American Made Products backed by exceptional warranties; SunGlo Window Films is your Best Choice for window tinting in Colorado!</p>
            <Link to="/" className="cta-btn">Schedule a free estimate</Link>
        </div>
        </HeroStyles>
    )
}
export default Hero