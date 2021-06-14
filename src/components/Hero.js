import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';

const HeroStyles = styled.div `
    position: relative;
    
    color: rgb(252, 83, 8);
    h2{

        font-size: 2.8rem;
    }
    p{
        font-size: 1.5rem;
        color: black;
       
    }
    button {
        background-color: rgb(252, 83, 8);
        padding: 1rem 1.5rem;
        outline: none;
        border: black;
    }
    a{
        text-decoration: none;
        list-style-type: none;
        text-transform: uppercase;
        color: white;
    }
    
    .wrapper {
        position: absolute;
        content:'';
        top: 10rem;
        background: rgba(128, 128, 128, 0.3);
        left: 30rem;
        z-index:1;
        padding: 1rem 4rem;
    }
    .wrapper p, button {
        margin-left: 15rem;
    }
`

const Hero = ({data}) => {
    
    return (
        <HeroStyles>
        <StaticImage src="../images/window.jpg" 
            alt="mountain snow" layout="fixed"
            width={1820} height={600}
             placeholder="blurred"/>
        <div class="wrapper">
            <h2>The Finest Home & Commercial Window Tinting</h2>
            <p>With a 25 year history, an A+ BBB rating & offering American Made Products backed by exceptional warranties; SunGlo Window Films is your Best Choice for window tinting in Colorado!</p>
            <button><Link to="/">Schedule a free estimate</Link></button>
        </div>
        </HeroStyles>
    )
}
export default Hero