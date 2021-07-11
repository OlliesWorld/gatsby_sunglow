import React from "react"

import Layout from '../components/layout'
import styled from 'styled-components';
import ContactForm from "../components/Form";
import { StaticImage } from "gatsby-plugin-image";

const ContactStyles = styled.div`
  display: flex;
  justify-content: center;
  
  @media (max-width: 800px) {
    flex-direction: column; 
    align-items: center;
    
  }
`
const SideBarStyles = styled.div`
  display: flex;
  width: 50%;
  margin-left: 5rem;
  .box {
    width: 350px;
  }
  @media (max-width: 800px){
    width: 80%;
    margin-left: 2rem;
  }
  @media (max-width: 400px){
    flex-direction: column;
    margin-left: 1rem;
    p {
      width: 80%;
    }
  }
`
const AreaStyles = styled.div`
  text-align: center;
  h2 {
    font-size: 3.5rem;
  }
  p{
    font-size: 2rem;
  }
`
const ContactPage = () => {


  
  return (
    <Layout>
      <title>Contact Us | SunGlo Durango | (970) 335-9600</title>
      <ContactStyles>
      
        <ContactForm />
        <SideBarStyles className="sidebar">
          <div className="box about">
            <StaticImage src="../images/building-img.jpg" layout="constrained"
                    fit="contain"
                    width={270} height={150}
                    placeholder="blurred"/>
                    <h3>About us</h3>
                    <p>Our first priority is to enhance life by improving the windows in our community. SunGlo is designed to provide benefits that will increase one’s standard of living today, and continue to produce benefits into the future.</p>
              </div>
              <div className="box tint">
              <StaticImage src="../images/about-pic.jpg" layout="constrained"
                      fit="contain"
                      width={270} height={150}
                      placeholder="blurred"/>
                      <h3>Home Window Tint</h3>
                      <p>We pride ourselves on high quality home window tint products and elite customer service. Your SunGlo Window Film Expert will exceed your expectations at every turn! We serve in all major areas of Colorado </p>
            </div>

        </SideBarStyles>
        
      </ContactStyles>
      <AreaStyles>
        <h2>Contact Us</h2>
          <p>Commercial and residential window tinting in Durango and all surrounding areas.</p>
      </AreaStyles>
  </Layout>
  )
}
export default ContactPage