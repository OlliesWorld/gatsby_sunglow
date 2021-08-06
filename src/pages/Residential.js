import { Link } from 'gatsby';
import React from 'react';
import Seo from "../components/seo"
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';
import CTAStyles from '../components/styles/CTAStyles'
import { StaticImage } from 'gatsby-plugin-image';
import Sidebar from '../components/Sidebar';
import { FaArrowCircleRight, FaCircle } from 'react-icons/fa';


const ResidentialPage = () => (
    <Layout > 
        <Seo title="Residential Window Tinting for Durango & Surrounding Areas | (970) 335-9600"/>  
            <RCTAStyles>
            <CTAStyles>
                <div className="cta-content">
                    
                        <h2>Exceptional Home Window Tinting Services <br/>Durango & Surrounding Areas</h2>
                        <p>SunGlo Durango is a professional Residential window tint installation company. We pride ourselves on High Value, Lifetime warrantied window film added with the best Tint Installation services in the Four Corners Area! Schedule your FREE Window Film consultation Today!</p>
                    <Link className="cta-btn" to='/Estimate'><RightArrow />Schedule a Free Quote</Link>
                </div>
                </CTAStyles>
            </RCTAStyles>  
            <div className='divider'></div>
            <BackgroundStyles>
            <ResidentialStyles>  
           
                <div className="section">
                    <div className="content-box">
                        <h2>What will Residential Window Tinting Service do for me?</h2>
                        <div className="bullet">
                        <FaCircle className="circle"/> <p>Helps Keep out uncomfortable & harmful solar energy while still enjoying the natural light and views of your windows of Beautiful Colorado!</p>
                        </div>
                        <div className="bullet">
                            <FaCircle className="circle"/> <p>Keeps your home cooler by rejecting ~60% of incoming solar heat.</p>
                        </div>
                        <br/>
                        <div className="bullet">
                            <FaCircle className="circle"/> <p>Save up to 15% of your HVAC energy costs.</p>
                        </div>
                        <br/>
                        <div className="bullet">
                        <FaCircle className="circle"/> <p>Reduce glare and improve visibility of your TV and other devices with window film from SunGlo.</p>
                        </div>
                        <div className="bullet">
                            <FaCircle className="circle"/> <p>Block 99% of damaging UV and protect your furnishings from fading. Shade your family from the skin damage that can result from UV ray exposure.</p>
                        </div>
                        <div className="bullet">
                            <FaCircle className="circle"/> <p>Improve the quality of your CURRENT windows at an affordable cost! </p>
                        </div>
                        <div className="bullet">
                        <FaCircle className="circle"/> <p>Sunglo privacy film can add style to your home where it is needed.</p>
                        </div>
                        
                            <h3>Now you can enjoy energy savings, diminished glare, reduced fading, privacy and better window insulation, and your home will have greater temperature comfort with Window Film!</h3>
                            <p>We pride ourselves on high quality Window Tint products & the Best customer service. Your SunGlo Window Tint Expert will exceed your expectations at every turn! Plus, nearly all of our home window tinting products carry a Lifetime Warranty.</p>
                            <h3 className="underline">SunGlo Window Films is Colorado’s BEST 4 Corners Home and Commercial Window Tinting Service</h3>
                          
                    </div>
                    <Sidebar />
                </div>
                <div className="img-box">
                    <StaticImage src="../images/residential/Residential_2.jpg" alt="Man on tall scaffolding installing Sunglo's Window Film" placeholder="blurred" width={375} height={300}  layout="fixed"/>
                    <StaticImage src="../images/residential/Residential_3.jpg" alt="Window looking outside displays Sunglo's Window Film" placeholder="blurred" width={375} height={300} layout="fixed"/>
                    <StaticImage src="../images/residential/Residential_8.jpeg" alt="Great living room view with Sunglo's Window Film installed " placeholder="blurred" width={375} height={300}  layout="fixed"/>
                    <StaticImage src="../images/residential/Residential_4.jpg" alt="Installing Sunglo's Window Film with scaffolding" placeholder="blurred" width={375} height={300}  layout="fixed"/>
                    <StaticImage src="../images/residential/Residential_6.jpeg" alt="Installing Sunglo's Window Film with ladder while enjoying the view" placeholder="blurred" width={375} height={300}  layout="fixed"/>
                    <StaticImage src="../images/residential/Residential_7.jpeg" alt="Sunglo's Window Film provides home owner with a incredible view" placeholder="blurred" width={375} height={300} layout="fixed"/>
                </div>
            
            <div className="video-box">
                <h2 className="intro-video">Check Out This Time Lapse Video Of Us Tinting High Up Residential Windows</h2>
                <iframe  src="https://www.youtube.com/embed/vmYe3HIM2Yw" title="Residential Sunglo's Window Film Install" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
  
  
        </ResidentialStyles>  
        </BackgroundStyles> 
    </Layout >
);

export default ResidentialPage

const RCTAStyles = styled.div`
    /* background-color: rgba(0, 0, 0, 0.5); */
    background-image: url('/images/Residential_Header.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no repeat;
    max-width: 1140px;
    @media (max-width: 400px) {
        /* display: none; */
        background-image: none;
        margin: 0;
        /* height: 350px; */
    }
    
`
const BackgroundStyles = styled.div`
    background-image: url("/images/nice_snow.png");
    padding-bottom: 1rem;
`
const ResidentialStyles = styled.div`
    margin-right: 2.2rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    @media(max-width:400px){
        flex-direction: column;
        padding-left: .5rem;
        width:100%;
    }
   
.section {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 8rem;
    
    
    @media(max-width:800px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin:2rem;
   }
   @media(max-width:400px){
       width: 95%;
       margin: 2rem 0;
   }
} 
.content-box {
    /* padding-right: 5rem; */
    @media(max-width:400px){
        padding: 0 1rem;
        width:90%;
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
.Sidebar {
    display: flex;
    justify-content: center;
} 
.underline {
    text-decoration: underline var(--clr-orange);
    text-align: center;
    line-height: 1.2;
    @media (max-width: 400px) {
        font-size: 1.5rem;
    }
}
.img-box {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin-bottom: 2rem;
    
    .gatsby-image-wrapper {
        box-shadow: 5px 5px 5px 5px grey;
        @media (max-width: 400px) {
            box-shadow: none;   
        }
    }
 
    @media(max-width: 800px){
        grid-template-columns: 1fr;
        
        
    }
    @media(max-width: 400px){
        grid-template-columns: 1fr;
        margin-bottom: 1rem;
       img{ 
            width: 96%;
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
    text-align: center;
    @media (max-width: 400px) {
        font-size: 1rem;
        width: 70%;
        text-align: center;
        margin: 0.5rem auto;
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
