import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';
import {FaArrowCircleRight} from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Sidebar from '../components/Sidebar';


const CTAStyles = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    padding-bottom: 35px;
    padding-top: 35px;
    color: white;
    max-width: 1140px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    h2 {
        text-transform:uppercase;
    }
`

const AboutStyles = styled.div`
    margin-left: 1rem;
    padding: 0;
    display: flex;
    @media(max-width:400px){
        flex-direction: column;
        width:90%;
    }
   
.content-box {
    margin: 0 auto;
    max-width: 980px;
   
} 

.bullet {
    display: flex;
}
.circle {
    width: .5em;
    color: var(--clr-orange);
    padding-top:.25em;
    margin-right:.25em;
}
.img-box {
    margin-left: 2rem;
    @media(max-width: 800px){
        margin: 0;
    }
}

`
const RightArrow = styled(FaArrowCircleRight)`
    
    animation: slide1 1s ease-in-out infinite;
    margin-right: 1rem;
    @keyframes slide1 {
  0%,
  100% {
    transform: translate(0, 0);
  }

  50% {
    transform: translate(10px, 0);
  }
}
  `

const AboutPage = () => (
    <Layout >   
         <CTAStyles>
             <title>About Us | Durango’s Best Commercial & Home Window Tinting Company | (970)335-9600</title>
                {/* <h2>COMMERCIAL WINDOW TINTING SERVICE <br/>DURANGO & Surrounding Areas</h2> */}
                <p>We are Durango’s most professional residential and commercial window film installation company. SunGlo Durango is here to help with you window tinting needs across the Four Corner’s Area servicing Durango, Farmington, Cortez, Pagosa Springs and surrounding areas. Call now to schedule a FREE window tint estimate!
</p>
             <Link className="cta-btn" to='/Estimate'><RightArrow/>Start Saving <span>Now</span></Link>
            </CTAStyles>   
        <AboutStyles>  
           
            <div className="content-box">
            <h3>Enhancing Life by Improving Windows</h3>

            <p>Mission Statement: Our first priority is to enhance life by improving the windows in our community. SunGlo is designed to provide benefits that will increase one’s standard of living today, and continue to produce benefits into the future. SunGlo’s vision is to be the best in the Rocky Mountain Region at providing our community with the resources to enhance any building. Being the best means excellent quality, value, and service. We love what we do, and in doing what we love, we hope to create a more sustainable world.</p>
            <h3>A Colorado WINDOW Tinting company</h3>

            <p>SunGlo is a Denver window film company established in 1991. We pride ourselves on being retrofit professionals that offer elite levels of service and expertise to our clientele. Since 1991, our focus has been on professionalism in window tinting. In 2015 SunGlo opened Denver Auto Tint to deliver the same level of service to Denver automotive window tinting customers. In 2018 Fort Collins Auto Tint opened its doors expanding our automotive window tinting reach to Norther Colorado.</p>

            <p>SunGlo is a Colorado owned, operated and focused organization. We truly love the wonderful communities that we do business in. Colorado is and always will be our home. We feel SunGlo is here to serve our Colorado customer and foster successful development within our local industry.</p>
          
                <h3>A Problem Solver</h3>
                <p>It is our priority to provide our residential and commercial customers with high value solutions for their window problems. SunGlo retrofits your windows to provide:</p>
                <li>Solar Control</li>
                <li>Energy </li>
                <li>UV Protection</li>
                <li>Glare Prevention</li>
                <li>Security</li>
                <li>View Control</li>
                <li>Ambiance</li>
                <StaticImage src="../images/hallway.jpg" alt="hallway with large windows at the end with Sunglo Window Film"layout="constrained"
                fit="contain" width={258} height={300}
                placeholder="blurred"/>
            
            <p>We provide high quality window films that have the best clarity and scratch resistance. These films are long-term solutions to your window problem at an affordable cost. SunGlo offers window film installation services in Denver, Fort Collins, Boulder, Colorado Springs, Durango and all surrounding areas. All films furnished by SunGlo carry a substantial manufacture warranty.</p>
                
           
                </div>
            
            
            <Sidebar />
        </AboutStyles>  

    </Layout >
);

export default AboutPage