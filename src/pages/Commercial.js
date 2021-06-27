import { Link } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import '../components/styles/GlobalStyles.css';
import styled from 'styled-components';
import {FaCircle} from 'react-icons/fa';
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
`

const CommercialStyles = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
   
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
    margin-left: 3rem;
}


`

const CommercialPage = () => (
    <Layout >   
         <CTAStyles>
                <h2>COMMERCIAL WINDOW TINTING SERVICE DURANGO</h2>
                <p> As a building owner, commercial window tinting can be your best friend! Window tinting is an affordable way for a business owner to to solve a wide variety of problems that windows create. SunGlo will use this affordable product to save you money & make your building more efficient, safer & more comfortable.</p>
             <Link className="cta-btn" to='/Estimate'>Start Saving <span>Now</span></Link>
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