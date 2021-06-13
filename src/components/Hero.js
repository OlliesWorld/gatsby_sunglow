import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';

const HeroStyles = styled.div `
    position: relative;
    margin: 0 2rem;
   
    
    color: orange;
    h2{

        font-size: 3rem;
    }
    p{
        font-size: 1.5rem;
    }
    button {
        background-color: orange;
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
`

const Hero = ({data}) => {
    
    return (
        <HeroStyles>
        <StaticImage src="https://images.unsplash.com/photo-1574578284351-0cf859d807d4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzd8fHdpbmRvdyUyMG1vdW50YWluc3xlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="mountain snow"/>
        <h2>The Finest Home & Commercial Window Tinting</h2>
        <p>With a 25 year history, an A+ BBB rating & offering American Made Products backed by exceptional warranties; SunGlo Window Films is your Best Choice for window tinting in Colorado!</p>
        <button><Link to="/">Schedule a free estimate</Link></button>
        </HeroStyles>
    )
}
export default Hero