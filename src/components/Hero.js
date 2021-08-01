import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import './styles/GlobalStyles.css'

const Hero = () => {
    
    return (
        <HeroStyles>
        <StaticImage src="../images/sunglo_hero.jpg" 
            alt="Office Looking out the window displaying Sunglo's window film" layout="constrained"
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

const HeroStyles = styled.div `
    display: flex;
      
    h2{
        font-size: 2.8rem;
        margin-top: -1.2rem;
        
    }
    p{
        font-size: 1.5rem;
        color: black;
        line-height: 1.5;
        width: 90%;
        margin-right: 4rem;
        padding-bottom: .5rem;
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
        @media (max-width: 800px) {
            background-color: rgba(0, 0, 0, 0.5);
            background-image: url('/images/sunglo_hero.jpg');
            padding: 2rem;
            h2 {
                background-color: rgb(255, 103, 0, .7);
                padding: 1rem;
                text-align: center;
            }
            p {
                width: 100%;
                background-color: rgba(0, 0, 0, 0.5);
                margin: 0;
            }
        }
    }
    .wrapper h2 {
        font-size: 3rem;
       
    }
     .wrapper button {
       align-self: center;
       
    }  
    @media (max-width: 800px) {
       .gatsby-image-wrapper {
        display: none;
       }
   }
`