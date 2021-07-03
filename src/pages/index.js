
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
      <title>Home Page</title>
      
      <Header />
      <div className='divider'></div>
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
