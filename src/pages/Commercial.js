import { Link } from 'gatsby'
import Seo from '../components/seo'
import React from 'react'
import Layout from '../components/layout'
import CTAStyles from '../components/styles/CTAStyles'
import '../components/styles/GlobalStyles.css'
import styled from 'styled-components'
import {FaArrowCircleRight, FaCircle} from 'react-icons/fa'
import { StaticImage } from 'gatsby-plugin-image'
import Sidebar from '../components/Sidebar'



const CommercialPage = () => (
    <Layout >  
        <Seo title="Commercial Window Tint in Durango & Surrounding Areas | (970) 335-9600"/>
          
             <CCTAStyles>
                <CTAStyles>
                 
                    <div className="cta-content">
                        <h2>COMMERCIAL WINDOW TINTING SERVICE <br/>DURANGO & Surrounding Areas</h2>
                        <p>SunGlo Durango is a locally owned and operated commercial window tinting installation service for 10 years. We offer Solar control window film, Security window film and all types of Decorative film for glass. Call today to schedule your Complementary commercial window tint estimate!</p>
                                     <Link className="cta-btn" to='/Estimate'><RightArrow/>Start Saving <span>Now</span></Link>
                    </div>
                 
                </CTAStyles>   
             </CCTAStyles>
            <div className='divider'></div>
            <BackgroundStyles>
            <CommercialStyles>  
           
            <div className="section">
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
                    <br/>
                    <div className="bullet">
                    <FaCircle className="circle"/>  <p>Control Reduce glare.</p>
                    </div>
                    <div className="bullet">
                    <FaCircle className="circle"/>  <p>Achieve greater security with Security Window Film. Security Window Film Denver is a thick, clear window film deters intruders by making entry through windows more difficult & noisier.</p>
                    </div>
        
                    
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Retrofit current glass with patterned or frosted Decorative Window Film Denver to achieve view control and dress up conference rooms or store fronts.</p>
                    </div>
                                   <div className="bullet">
                       <FaCircle className="circle"/> <p>Our Safety & Security solutions help reduce the risk of crime, personal injury, and property damage by holding broken glass shards together and keeping windows intact.</p>
                    </div>
                    <br/>
                    <div className="bullet">
                        <FaCircle className="circle"/> <p>Graffiti Free films reduce this cost by allowing you to simply replace the film instead of the defaced windows or glass.</p>
                    </div>
                    <h3>The best part of these benefits can be had at a fraction of the cost of replacing the existing glass!</h3>
                    <p>If you are looking for quality products and Excellent Customer service in you Commercial film needs call SunGlo Window Films Durango. We has been in business in Colorado since 1991 and in Durango since 2011. We carry an A+ BBB rating. Customer satisfaction is of the highest importance to us!</p>
                    <h3>If you choose SunGlo Window Films for Commercial Window Tinting Services in Durango, you will not be disappointed!</h3>
                </div>
                
                <Sidebar />
            </div>
            <div className="img-box">
                <StaticImage src="../images/commercial/Commercial_1.jpeg" alt="Office Cubicle with Sunglo's Decorative Window Film" placeholder="blurred" width={375} height={300} layout="fixed"/>
                <StaticImage src="../images/commercial/Commercial_2.jpeg" alt="Man installing Sunglo's Window Film" placeholder="blurred" width={375} height={300} layout="fixed"/>
                <StaticImage src="../images/commercial/Commercial_3.jpeg" alt="business with Sunglo Window film installation in progress" placeholder="blurred" width={375} height={300}  layout="fixed" />
                <StaticImage src="../images/commercial/Commercial_7.jpeg" alt="Looking at office widows from the outside with Sunglo's Decorative Window Film" placeholder="blurred" width={375} height={300}  layout="fixed"/>
                <StaticImage src="../images/commercial/Commercial_5.jpeg" alt="Installing Sunglo's Window Film using ladders in a office" placeholder="blurred" width={375} height={300} layout="fixed"/>
                <StaticImage src="../images/commercial/Commercial_6.jpeg" alt="Office with a beautiful view now with Sunglo Window Film installed" placeholder="blurred" width={375} height={300} layout="fixed" />
            </div>
            
           
            </CommercialStyles>  
        </BackgroundStyles>
    </Layout >
);

export default CommercialPage
const BackgroundStyles = styled.div`
    background-image: url("/images/nice_snow.png");
    padding-bottom: 1rem;
`
const CommercialStyles = styled.div`
    
    padding-top: 5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
   
    @media(max-width:400px){
        flex-direction: column;
        margin: 0;
        padding: 0;
        width:99%;
    }
  
.section {
    display: flex;
    justify-content: space-evenly;
    margin: 1rem 8rem;
  
    @media(max-width:800px){
        flex-direction: column;
        justify-content: center;
        width: 100%;
        margin: 2rem;
   }
   @media(max-width:400px){
       margin:2rem 0;
       align-items: center;
       width: 95%;
   }
} 
.content-box {
    padding-right: 5rem;
    justify-items: center;
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

.img-box {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    
    .gatsby-image-wrapper {
        box-shadow: 5px 5px 5px 1px  rgb(255, 103, 0);
        
        @media (max-width: 450px) {
            box-shadow: none;  
             
            }
        }
    @media(max-width: 800px){
        grid-template-columns: 1fr;
    
    }
    @media(max-width: 400px){
      
       grid-template-columns: 1fr;
        img{
           
            width: 96%;
        }
    }
}

`

const CCTAStyles = styled.div`
    background-image: url('/images/Commercial_Header.jpg');
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