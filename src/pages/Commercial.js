import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';
import {FaArrowCircleRight, FaCircle} from 'react-icons/fa';
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

const CommercialStyles = styled.div`
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

const CommercialPage = () => (
    <Layout >   
         <CTAStyles>
             <title>Commercial Window Tint in Durango & Surrounding Areas | (970) 335-9600</title>
                <h2>COMMERCIAL WINDOW TINTING SERVICE <br/>DURANGO & Surrounding Areas</h2>
                <p> SunGlo Durango is a locally owned and operated commercial window tinting
                    installation service. We offer solar control window film, security window film and all types of
                    decorative film for glass. Call today to schedule your complementary commercial window tint
                    estimate!</p>
             <Link className="cta-btn" to='/Estimate'><RightArrow/>Start Saving <span>Now</span></Link>
            </CTAStyles>   
        <CommercialStyles>  
           
            <div className="content-box">
                <h3>What will Commercial Window Tinting Service do for me?</h3>
                <div className="bullet">
                   <FaCircle className="circle"/> <p>Eliminate “hot spots” where employees & most importantly customers can become uncomfortable & unproductive.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Increase energy efficiency by reducing load on HVAC systems when selecting commercial window tinting service from SunGlo Window Film.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Reduce fading on inventory & fixtures by eliminating 99% of harmful UV rays.</p>
                </div>
                <div className="bullet">
                   <FaCircle className="circle"/> <p>Reduce bothersome glare with Window Privacy Film Denver.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Achieve greater security with Security Window Film. Security Window Film Denver is a thick, clear window film deters intruders by making entry through windows more difficult & noisier.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Retrofit current glass with patterned or frosted Decorative Window Film Denver to achieve view control and dress up conference rooms or store fronts.</p>
                </div>
               <div className="bullet">
                   <FaCircle className="circle"/> <p>Diminish the costly impact of glass graffiti.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Create privacy, keeping onlookers from seeing in with Window Privacy Film Denver.</p>
                </div>
                <h3>The best part is these benefits can be had at a fraction of the cost of replacing the existing glass!</h3>
                <p>f you are looking for quality products and customer service excellence in your Denver commercial window tinting company, you have come to the right place! SunGlo Window Films has been in business in Colorado since 1991. We carry an A+ BBB rating. Customer satisfaction is of the highest importance to us to ensure we will be around for another 20 years.</p>
                <h3>If you choose SunGlo Window Films for Commercial Window Tinting Services in Denver, you will not be disappointed!</h3>
            <div className="img-box">
                <StaticImage src="../images/example1.png" alt="business with window film" placeholder="blurred" width={800} />
            </div>
            </div>
            <Sidebar />
        </CommercialStyles>  

    </Layout >
);

export default CommercialPage