
import React from "react"

import Header from '../components/Header'
import Hero from '../components/Hero'
import Tint from '../components/Tint'
import Services from '../components/Services'
import Footer from "../components/Footer"


const HomePage = () => {
  // const data = useStaticQuery(graphql `
  //   query MyQuery {
  //         allWpPost {
  //           nodes {
  //             id
  //             title
  //             uri
  //             excerpt
  //           }
  //         }
  //       }

  // `)
  // console.log(data)
  // const {allWpPost} = data
  return (
    <main >
      <title>Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600</title>
      
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
