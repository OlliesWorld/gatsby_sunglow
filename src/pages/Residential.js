import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';
import {FaCircle} from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Sidebar from '../components/Sidebar';
import { FaArrowCircleRight } from 'react-icons/fa';

const CTAStyles = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('../images/livingroom-img.jpg');
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
    h2{

        text-transform: uppercase;
    }
`

const ResidentialStyles = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    @media(max-width:400px){
        flex-direction: column;
        width:90%;
    }
   
.content-box {
    margin: 0 auto;
    max-width: 980px;
   @media(max-width:800px){
       width: 80%;
   }
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
    margin-left: 3rem;
    @media(max-width: 800px){
        margin: 0;
    }
}
.video-box {
    text-align: center;
    
}
.intro-video {
    color: var(--clr-orange);
   
}
.video-box iframe {
    width: 100%;
    height: 80vh;
    @media(max-width: 800px){
        height: 30vh;
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

const ResidentialPage = () => (
    <Layout >   
         <CTAStyles>
             <title>Residential Window Tinting for Durango & Surrounding Areas | (970) 335-9600
</title>
                <h2>Exceptional Home Window Tinting Services <br/>Durango & Surrounding Areas</h2>
                <p>SunGlo Durango is a professional residential window tint installation company. We pride ourselves on high value, lifetime warrantied window film packaged with the best tint installation services in the Four Corners Area. Schedule you free residential window film consultation now!
</p>
             <Link className="cta-btn" to='/Estimate'><RightArrow />Schedule a Free Quote</Link>
            </CTAStyles>   
        <ResidentialStyles>  
           
            <div className="content-box">
                <h3>What will Residential Window Tinting Service do for me?</h3>
                <div className="bullet">
                   <FaCircle className="circle"/> <p>Keep out uncomfortable & harmful solar energy while still enjoying the natural light and views of your windows!</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Keep your home cooler by rejecting ~60% of incoming solar heat.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Save up to 15% of your HVAC energy costs.</p>
                </div>
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
            <div className="img-box">
                <StaticImage src="../images/residential-example.png" alt="business with window film" placeholder="blurred" width={800} />
            </div>
            
            <div className="video-box">
                <h3 class="intro-video">Check Out This Time Lapse Video Of Us Tinting High Up Residential Windows</h3>
                <iframe  src="https://www.youtube.com/embed/vmYe3HIM2Yw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
  </div>
  <Sidebar />
        </ResidentialStyles>  

    </Layout >
);

export default ResidentialPage