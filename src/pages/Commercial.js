import { Link } from 'gatsby';
import Seo from "../components/seo"
import React from 'react';
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';
import {FaArrowCircleRight, FaCircle} from 'react-icons/fa';
import { StaticImage } from 'gatsby-plugin-image';
import Sidebar from '../components/Sidebar';


const CTAStyles = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    background-image: url('/Commercial-Header.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no repeat;
    padding-bottom: 35px;
    padding-top: 35px;
    color: white;
    max-width: 1140px;
    height: 500px;
    margin-left: 10rem;
    margin-right: auto;
    margin-bottom: 1rem;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    @media (max-width: 800px) {
        margin-left:1rem;
        width: 95%;
    }
    @media (max-width: 400px) {
        margin-left:.5rem;
        
    }
    h2 {
        text-transform:uppercase;
    }
    .cta-content {
        background-color: rgba(0, 0, 0, 0.5);
        width: 50%;
        margin-left: 47rem;
        padding: 1rem;
        @media (max-width: 800px) {
        margin-left:1rem;
        padding: 1rem;
        width: 95%;
    }
    }
`

const CommercialStyles = styled.div`
    margin-left: 1rem;
    margin-right: 2.2rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    
    @media(max-width:400px){
        flex-direction: column;
        
        width:90%;
    }
  
.content-box {
    margin: 0 auto;
    max-width: 1080px;
    h2 {
        font-size:8rem;
    }
    @media(max-width:800px){
       width: 80%;
       margin:2rem;
   }
   @media(max-width:400px){
       width: 95%;
       margin:2rem 0;
   }
   p {
       font-size: 1rem;
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
    @media (max-width: 800px) {
        display: none;
    }
}
.img-box {
    display: flex;
    justify-content: center;
    width: 100%;
    img {
        padding-right: 2rem;
    }
    @media(max-width: 800px){
        flex-direction: column;
        margin-left: 9rem;
        
        img{

            padding: 1rem 0;
        }
    }
    @media(max-width: 400px){
       margin-left: 1rem;
        
        
        img{
            width: 80%;
           
        }
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
        <Seo title="Commercial Window Tint in Durango & Surrounding Areas | (970) 335-9600"/>
       
         <CTAStyles>
             
                <div className="cta-content">
                    <h2>COMMERCIAL WINDOW TINTING SERVICE <br/>DURANGO & Surrounding Areas</h2>
                    <p> SunGlo Durango is a locally owned and operated commercial window tinting
                        installation service. We offer solar control window film, security window film and all types of
                        decorative film for glass. Call today to schedule your complementary commercial window tint
                        estimate!</p>
                                 <Link className="cta-btn" to='/Estimate'><RightArrow/>Start Saving <span>Now</span></Link>
                </div>
            </CTAStyles>   
        <CommercialStyles>  
           
            <div className="content-box">
                <h2>What will Commercial Window Tinting Service do for me?</h2>
                <div className="bullet">
                    <FaCircle className="circle"/>  <p>Eliminate “hot spots” where employees & most importantly customers can become uncomfortable & unproductive.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/> <p>Increase energy efficiency by reducing load on HVAC systems when selecting tinting service from SunGlo Window Film.</p>
                </div>
                <div className="bullet">
                    <FaCircle className="circle"/>  <p>Reduce fading on inventory & fixtures by eliminating 99% of harmful UV rays.</p>
                </div>
                <div className="bullet">
                <FaCircle className="circle"/>  <p>Achieve greater security with Security Window Film. Security Window Film Denver is a thick, clear window film deters intruders by making entry through windows more difficult & noisier.</p>
                </div>
                <div className="bullet">
                <FaCircle className="circle"/> <p>Reduce bothersome glare with Window Privacy Film Denver.</p>
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
                <p>If you are looking for quality products and customer service excellence in your Denver commercial window tinting company, you have come to the right place! SunGlo Window Films has been in business in Colorado since 1991. We carry an A+ BBB rating. Customer satisfaction is of the highest importance to us to ensure we will be around for another 20 years.</p>
                <h3>If you choose SunGlo Window Films for Commercial Window Tinting Services in Denver, you will not be disappointed!</h3>
                
                <Sidebar />
            </div>
            <div className="img-box">
                <StaticImage src="../images/imagecontent/commercial 1.jpg" alt="business with window film" placeholder="blurred" width={400} height={400} layout="fixed"/>
                <StaticImage src="../images/imagecontent/commercial 2.jpg" alt="business with window film" placeholder="blurred" width={400} height={400} 
     layout="fixed"/>
                <StaticImage src="../images/imagecontent/Commercial-Header.jpg" alt="business with window film" placeholder="blurred" width={400} height={400}  
     layout="fixed" />
            </div>
            
           
        </CommercialStyles>  

    </Layout >
);

export default CommercialPage