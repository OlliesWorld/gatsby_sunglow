import React from "react"
import Seo from "../components/seo"

import Header from '../components/Header'
import Hero from '../components/Hero'
import Tint from '../components/Tint'
import Services from '../components/Services'
import Footer from "../components/Footer"


const HomePage = () => {
 
  return (
    <main >
      <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
      
      
      <Header />
     
       
      <Hero />
      <div className='divider'></div>
        <Tint />
        <div className='divider'></div>
        <Services />
        
         
        
    <Footer />
    </main>
  );
 };
export default HomePage