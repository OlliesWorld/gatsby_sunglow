import { Link } from 'gatsby';
import React from 'react';
import Seo from "../components/seo"
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';

import { StaticImage } from 'gatsby-plugin-image';
import Sidebar from '../components/Sidebar';
import { FaArrowCircleRight, FaCircle } from 'react-icons/fa';


const ResidentialPage = () => (
    <Layout > 
        <Seo title="Residential Window Tinting for Durango & Surrounding Areas | (970) 335-9600"/>  
            <CTAStyles>
                <div className="cta-content">
                    
                        <h2>Exceptional Home Window Tinting Services <br/>Durango & Surrounding Areas</h2>
                        <p>SunGlo Durango is a professional residential window tint installation company. We pride ourselves on high value, lifetime warrantied window film packaged with the best tint installation services in the Four Corners Area. Schedule you free residential window film consultation now!
                    </p>
                    <Link className="cta-btn" to='/Estimate'><RightArrow />Schedule a Free Quote</Link>
                </div>
            </CTAStyles>  
            <div className='divider'></div>
            <BackgroundStyles>
            <ResidentialStyles>  
           
                <div className="section">
                <div className="content-box">
                    <h2>What will Residential Window Tinting Service do for me?</h2>
                    <div className="bullet">
                       <FaCircle className="circle"/> <p>Keep out uncomfortable & harmful solar energy while still enjoying the natural light and views of your windows!</p>
                    </div>
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Keep your home cooler by rejecting ~60% of incoming solar heat.</p>
                    </div>
                    <br/>
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Save up to 15% of your HVAC energy costs.</p>
                    </div>
                    <br/>
                    <div className="bullet">
                       <FaCircle className="circle"/> <p>Reduce bothersome glare with privacy window film from SunGlo Window Films.</p>
                    </div>
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Protect your floors, wall hangings & fixtures from fading and sun damage.</p>
                    </div>
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Shade your family while inside your home from the skin damage that can result from UV ray exposure.</p>
                    </div>
                    <div className="bullet">
                       <FaCircle className="circle"/> <p>Improve the quality of your CURRENT windows at an affordable cost!</p>
                    </div>
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Create privacy where it is needed with privacy window film in Denver.</p>
                    </div>
                        <h3>Not only will you enjoy energy savings, diminished glare, reduced fading, privacy and better window insulation, but your home will have greater temperature comfort with home window tinting in Denver!</h3>
                        <h3>SunGlo Window Films is Denver, Colorado’s BEST Home Window Tinting Denver Service</h3>
                        <p>We pride ourselves on high quality home window tint products & elite customer service. Your SunGlo Window Tint Film Denver Expert will exceed your expectations at every turn! Plus, nearly all of our home window tinting Denver products carry a Lifetime Warranty.</p>
                        <p>Take the time to have a FREE home window tinting Denver estimate done on your home! During the estimate you will learn how film can benefit specific areas of your home, see actual film samples, and discover exactly what retrofitting your windows will cost.</p>
                        <h2>We are eager to meet your residential window tinting service needs in Denver!</h2>
                </div>
                    <Sidebar />
                </div>
            <div className="img-box">
                <StaticImage src="../images/residential/Residential_2.jpg" alt="Man on tall scaffolding installing Sunglo's Window Film" placeholder="blurred" width={500} height={400} layout="fixed"/>
                <StaticImage src="../images/residential/Residential_3.jpg" alt="Window looking outside displays Sunglo's Window Film" placeholder="blurred" width={500} height={400} layout="fixed"/>
                <StaticImage src="../images/residential/Residential_8.jpeg" alt="Great living room view with Sunglo's Window Film installed " placeholder="blurred" width={500} height={400} layout="fixed"/>
                <StaticImage src="../images/residential/Residential_4.jpg" alt="Installing Sunglo's Window Film with scaffolding" placeholder="blurred" width={500} height={500} layout="fixed"/>
                <StaticImage src="../images/residential/Residential_6.jpeg" alt="Installing Sunglo's Window Film with ladder while enjoying the view" placeholder="blurred" width={500} height={500} layout="fixed"/>
                <StaticImage src="../images/residential/Residential_7.jpeg" alt="Sunglo's Window Film provides home owner with a incredible view" placeholder="blurred" width={500} height={500} layout="fixed"/>
            </div>
            
            <div className="video-box">
                <h2 class="intro-video">Check Out This Time Lapse Video Of Us Tinting High Up Residential Windows</h2>
                <iframe  src="https://www.youtube.com/embed/vmYe3HIM2Yw" title="Residential Sunglo's Window Film Install" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
  
  
        </ResidentialStyles>  
        </BackgroundStyles> 
    </Layout >
);

export default ResidentialPage

const CTAStyles = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('/images/Residential_Header.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no repeat;
    padding-bottom: 35px;
    padding-top: 35px;
    color: white;
    max-width: 1140px;
    margin-left: 10rem;
    margin-right: auto;
    margin-bottom: 1rem;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    h2{
        text-transform: uppercase;
    }
    @media (max-width: 1200px) {
        margin-left:1rem;
        width: 95%;
    }
    @media (max-width: 400px) {
        margin-left:.5rem;   
    }
    .cta-content {
        background-color: rgba(0, 0, 0, 0.5);
        width: 50%;
        margin-left: 45rem;
        padding: 1rem;
        @media (max-width: 1200px) {
        margin-left:1rem;
        padding: 1rem;
        width: 95%;
    }
}
`
const BackgroundStyles = styled.div`
    background-image: url("/images/nice_snow.png");
    padding-bottom: 1rem;
`
const ResidentialStyles = styled.div`
    margin-left: 1rem;
    margin-right: 2.2rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    
    @media(max-width:400px){
        flex-direction: column;
        margin-left: 0.5rem;
        width:100%;
    }
   
.section {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 8rem;
    
    
    @media(max-width:800px){
        flex-direction: column;
       width: 100%;
       margin:2rem;
   }
   @media(max-width:400px){
       width: 95%;
       margin: 2rem 0;
   }
} 
.content-box {
    padding-right: 5rem;
    @media(max-width:400px){
       margin-left: 2rem;
        width:100%;
    }
}
.bullet {
    display: inline-flexbox;
}
.circle {
    width: .5em;
    color: var(--clr-orange);
    padding-top:.25em;
    margin-right:.25em;
}
.img-box {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-bottom: 2rem;
    margin-left: 5rem;
    .gatsby-image-wrapper {
        box-shadow: 5px 5px 5px 5px grey;
    }
 
    @media(max-width: 1200px){
        grid-template-columns: 1fr 1fr;
        margin-left: 6rem;
        
    }
    @media(max-width: 400px){
        grid-template-columns: 1fr;
        margin-left: .2rem;
        margin-bottom: 1rem;
       img{ 
            width: 70%;
        }
    }
}
.video-box {
    margin: 0 auto;
    @media (max-width: 400px) {
        margin: 0;
    }
}
.intro-video {
    color: var(--clr-orange);
    @media (max-width: 400px) {
        font-size: 1rem;
        width: 70%;
        text-align: center;
    }
}
.video-box iframe {
    margin-left: 5rem;
    width: 80%;
    height: 75vh;
    @media(max-width: 800px){
        height: 40vh;
        width: 90%;
        margin-left: 3rem;
    }
    @media (max-width: 400px) {
        margin-left: .5rem;
        width: 92vw;
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
