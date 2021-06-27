import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';

const ServiceStyles = styled.div `
   text-align: center;
   p {
       font-size: 14px;
   }
   a {
    text-decoration: none;
    color: black;
   }
    .service-wrapper {
        display: flex;
        justify-content: space-evenly;
    }
   .service-box {
        width: 377px;
   }
   .service-box h3 {
    
       font-size: 20px;
   }
   .service-img {
    border: black 1px solid;
    width: 100%;
    padding: .2rem;
    margin-bottom: 1rem;
   }
  
   .btn-service {
        background-color: rgb(255, 103, 0);
        background-image: linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
        border-top: 1px solid rgb(255, 103, 0);
        border-right: 1px solid rgb(255, 103, 0);
        border-bottom: 1px solid rgb(255, 103, 0);
        border-left: 1px solid rgb(255, 103, 0);
        border-radius: 0px;
        padding: 0.775em 0.875em;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1rem;
   }
   .btn-service a {
    
    color: rgb(255, 255, 255);
   }
`

const Services = ({data}) => {
    
    return (
        <ServiceStyles>
        <h2>Industry Leading Services & Products</h2>
        <h4> We offer high quality, American Made films with the best clarity, scratch resistance, and outstanding performance. </h4>
        <div className="service-wrapper">
            <div className="service-box">
                <Link to="/">
                    <div className="service-img">
                        <StaticImage src="../images/about-pic.jpg"
                        alt="installation from below" layout="fixed"
                         placeholder="blurred" />
                    </div>
                    <h3>About Us</h3>
                </Link>
                <p>SunGlo is a Denver window film company established in 1991. It is our priority to provide residential and commercial customers with the best solutions for their window problems.</p>
            
                <button className="btn-service"><Link to="/">Learn More About Us</Link></button>
            </div>
            <div className="service-box">
                <div className="service-img">
                    <StaticImage src="../images/building-img.jpg"
                        alt="installation from below" layout="fixed"
                        placeholder="blurred"/>
                        </div>
                <h3>Commercial Window Tint Service</h3>
                <p>As a building owner, commercial window tint can be your best friend! Window tinting is an affordable way for a business owner to to solve a wide variety of problems that windows create. </p>
            
                <button className="btn-service"><Link to="/">More About Commercial Window Tint</Link></button>
            </div>
            <div className="service-box">
                <div className="service-img">
                    <StaticImage src="../images/about-pic.jpg"
                        alt="installation from below" layout="fixed"
                        placeholder="blurred"/>
                        </div>
                <h3>Residential Window Tint Service</h3>
                <p>Not only will you enjoy energy savings, diminished glare, reduced fading, and better window insulation, but your home will have greater temperature comfort with home window film!</p>
            
                <button className="btn-service"><Link to="/">Residential Window Tint Info</Link></button>
            </div>
        </div>
        
      
       
        </ServiceStyles>
    )
}
export default Services