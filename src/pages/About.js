import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import CTAStyles from '../components/styles/CTAStyles'
import '../components/styles/GlobalStyles.css'
import styled from 'styled-components'
import { FaArrowCircleRight, FaCircle } from 'react-icons/fa'

import Sidebar from '../components/Sidebar'
import Seo from '../components/seo'

const AboutPage = () => (
    <Layout >
        <Seo title="About Us | Durango’s Best Commercial &amp; Home Window Tinting Company"/>     
        <ACTAStyles>
         <CTAStyles>  
                
                    <div className="cta-content">
                        <p>We are Durango’s most professional residential and commercial window film installation company. SunGlo Durango is here to help with you window tinting needs across the Four Corner’s Area servicing Durango, Farmington, Cortez, Pagosa Springs, Telluride and surrounding areas. Call now to schedule a FREE window tint estimate!</p>
                                     <Link className="cta-btn" to='/Estimate'><RightArrow/>Start Saving <span>Now</span></Link>
                    </div>
               
            </CTAStyles>
            </ACTAStyles>  
            <div className='divider'></div> 
        <AboutStyles>  
           
            <div className="section">
                <div className="content-box">
                <h3>Enhancing Life by Improving Windows</h3>
                <p>Mission Statement: Our first priority is improving the windows in our community. SunGlo is designed to provide benefits that will increase one’s standard of living today, and continue to produce benefits into the future. SunGlo’s vision is to be the best in the Rocky Mountain Region at providing our community with the resources to enhance any building. Being the best means excellent quality, value, and service. We love what we do, and in doing what we love, we hope to create a more effect world.</p>
                <h3>A Colorado WINDOW Tinting company</h3>
                <p>SunGlo is a Durango window film company established in 2011. We pride ourselves on being retrofit professionals that offer elite levels of service and expertise to our clientele. Our focus has been on professionalism in window tinting. </p>
                <p>SunGlo is a Colorado owned, operated and focused organization. We truly love the wonderful communities that we do business in. Colorado is and always will be our home. We feel SunGlo is here to serve our Colorado customers and foster successful development within our local industry.</p>
                    <h3>A Problem Solver</h3>
                    <p>It is our priority to provide our residential and commercial customers with high value solutions for their window problems. SunGlo retrofits your windows to provide:</p>
                        <div className="list">
                            <div className="bullet">
                                <FaCircle className="circle"/><p>Solar Control</p>
                            </div>
                            <div className="bullet">
                                <FaCircle className="circle"/><p>Energy </p>
                            </div>
                            <div className="bullet">
                                <FaCircle className="circle"/><p>UV Protection</p>
                            </div>
                            <div className="bullet">
                                <FaCircle className="circle"/><p>Glare Prevention</p>
                            </div>
                            <div className="bullet">
                                <FaCircle className="circle"/><p>Security</p>
                            </div>
                            <div className="bullet">
                                <FaCircle className="circle"/><p>View Control</p>
                            </div>
                            <div className="bullet">
                                <FaCircle className="circle"/><p>Ambiance</p>
                            </div>
                        </div>
                        <p>We provide high quality window films that have the best clarity and scratch resistance. These films are long-term solutions to your window problems at an affordable cost. SunGlo offers window film installation services in Durango and all surrounding areas. All films furnished by SunGlo carry a substantial manufacture warranty.</p>
                
                
                    </div>
                
                
                <Sidebar />
            </div>
        </AboutStyles>  

    </Layout >
)

export default AboutPage


const ACTAStyles = styled.div`
    background-image: url("/images/Residential_5.jpg");
    background-position: center center;
    background-size: cover;
    max-width: 1140px;
    @media (max-width: 640px) {
        /* display: none; */
        background-image: none;
        margin: 0;
        height: 350px;
    }
    
`

const AboutStyles = styled.div`
    background-image: url("/images/nice_snow.png");
    padding-top: 1rem;
    padding-right: 3.5rem;
    display: flex;
    margin: 0 ;
   
    @media(max-width: 1007px){
        flex-direction: column;
      justify-content: center;
      align-items: center;

        margin: 0 auto;
       padding: 0;
        
    }
     
.section {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 8rem;
    
    @media(max-width: 1007px){
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 90%;
        margin:1rem auto;
   }
   @media(max-width: 640px){
       margin:2rem 0;
       width: 95%;
   }
} 
.content-box {
    padding-right: 5rem;
   @media (max-width: 1007px) { 
       width: 100%;
       margin:0 auto;
       padding: 0;
   }
   @media(max-width: 640px){
        width: 90%;
       
       
    }
} 

.bullet {
    display: flex;
    /* justify-content: center; */
    
}
.circle {
    width: .5em;
    color: var(--clr-orange);
    padding-top:.25em;
    margin-right:.25em;
}
.img-box {
    
    width: 100%;
    text-align: center;

    @media(max-width: 1007px){
        margin: 0;
        
    }
    @media(max-width: 640px){
        
        padding-bottom: .5rem;
       
    }
}
.img-box img {
    padding-right: 2rem;
    @media(max-width: 640px){
        
        padding-right: 0;
       
    }
}
.list {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
