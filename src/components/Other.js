import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components';

const OtherStyles = styled.div `
   text-align: center;
   background-color: black;
   padding-bottom: 3rem;
   
   a {
    text-decoration: none;
    color: white;
   }
    .service-wrapper {
        display: flex;
        justify-content: space-evenly;
        
    }
   .service-box {
        padding: 1rem;
        background-color:rgba(139, 142, 145, 0.3);
   }
  
   .service-img {
       margin-bottom: 1rem;
       border: 1px solid rgb(84, 88, 92);
        padding: 2px;
   }
   .heading {
       background-color: rgba(216, 220, 233, 0.1);
       margin-top: 15px;
       margin-bottom: 15px;
       line-height: 1.3;
    font-size: 20px;
   }
`

const Other = ({data}) => {
    
    return (
        <OtherStyles>
        <h2>SECURITY & ANTI-GRAFFITI</h2>
        
        <div className="service-wrapper">
            <div className="service-box">
                <Link to="/">
                    <div className="service-img">
                        <StaticImage src="../images/glassbreak.jpg"
                        alt="installation from below" layout="fixed"
                        width={500}
                         placeholder="blurred" />
                    </div>
                    <div class="heading">
                        <h2>Safety & Security</h2>
                    </div>
                </Link>            
                
            </div>
            <div className="service-box">
               
                <Link to="/">
                <div className="service-img">
                    <StaticImage src="../images/officebuilding.jpg"
                        alt="installation from below" layout="fixed"
                        width={500}
                        placeholder="blurred"/>
                        </div>
                    <div class="heading">
                        <h2>Anit-Graffiti</h2>
                    </div>
                </Link>
            </div>
            
        </div>
        
      
       
        </OtherStyles>
    )
}
export default Other