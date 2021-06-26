import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';

const TintStyles = styled.div `
   
    
    .wrapper {
        width: 100%;
        display: flex;
        height: 400px;
        margin-bottom: 2rem;
    }
    .content {
        width: 50%;
        margin:2rem 5rem;
        
    }
    h2 {
        font-size: 3rem;
        
    }
    .btn-service a {
        font-size: 20px;
        text-decoration: none;
        color: white;
        text-transform: uppercase;
        font-weight: bold;
        
    }

   .btn-service {
        border: none;
        margin-left: 3rem;
        
        border-radius: 0px;
        padding: 0.775em 0.875em;
        text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
      
   }
   .residential {
        background-color: rgb(255, 103, 0);
        background-image: linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
   }
   .commercial {
        background-color: rgb(53, 56, 59);
        background-image: linear-gradient(0deg, transparent 10%, rgba(0, 0, 0, 0.38) 90%);  
   }
   .quote {
        background-color: rgb(144, 0, 0);
        background-image: linear-gradient(0deg, rgb(203, 6, 6) 10%, transparent 90%);     
        /* padding: 1rem 2.5rem;  */
   }
   
`

const Tint = ({data}) => {
    
    return (
        <TintStyles>
       <div className="wrapper">
           
           <div className="content">
               <h2>WINDOW TINTING SERVICES</h2>
               <p>Window tinting is PERFECT for Colorado homes & businesses. It allows you to enjoy the view & natural light of our 300+ days of sunshine through your windows while keeping out the negative effects of solar radiation. Reduce heat & glare, conserve energy and stop fading with commercial & home window tinting.</p>
           
           
           
           </div>
           
           <StaticImage src="https://dta0yqvfnusiq.cloudfront.net/sunglowf/2015/03/sunglo_sitebg2.jpg"
               alt="mountain snow" layout="fixed"
                height={400}
                placeholder="blurred"/>
       </div>
        <button className="btn-service commercial"><Link to="/">Commercial Window Tint</Link></button>
            <button className="btn-service residential"><Link to="/">Residential Window Tint</Link></button>
            <button className="btn-service quote"><Link to="/">Get Your Free Quote</Link></button>
        </TintStyles>
    )
}
export default Tint