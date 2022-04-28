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
            <div className="content-box">
                <h2>SunGlo Window Films is Durango&#39;s best commercial &amp; home window tinting
                    service.</h2>
                <p>Schedule your FREE home window tinting consultation NOW to Save $50. We are the
                    most professional commercial and home window tint service in The Four Corners servicing
                    Durango, Farmington, Cortez, Pagosa Springs and surrounding areas!</p>
                <Link to="/Estimate" className="cta-btn">Schedule a free estimate</Link>
            </div>
        </div>
        </HeroStyles>
    )
}
export default Hero

const HeroStyles = styled.div `
    display: flex;
    color: black;
    h2{
        font-size: 2.8rem;
        @media ( max-width: 800px) {
           font-size: 2rem;
       }
    }
    p{
        font-size: 1.5rem;
        line-height: 1.5;
       @media ( max-width: 800px) {
           font-size: 1.3rem;
       }
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
        @media (max-width: 1007px) {
            /* background-color: rgba(0, 0, 0, .8); */
            background-image: url('/images/sunglo_hero.jpg');
            padding: 2rem;
            
        }
        @media ( max-width: 640px) {
            background-image: none;
           
        }
    }
   
     .wrapper button {
       align-self: center;
       
    }
    
    
     
    @media (max-width: 1007px) {
       .gatsby-image-wrapper {
        display: none;
       }
       .content-box {         
        background-color: rgba(0, 0, 0, 0.5);
        margin: 0 auto;
        padding: 1rem 2rem;
        width: 100%;
        color: white;
              
           } 
   }
`