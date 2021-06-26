
import React from "react"

import Header from '../components/Header'
import Hero from '../components/Hero'
import Tint from '../components/tint'
import Services from '../components/services'
import Footer from "../components/footer"
import Other from "../components/Other"

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
      <h1>SunGlow Films Durango</h1>
      <Hero />
      <div className='divider-top'></div>
        <Tint />
        <div className='divider'></div>
        <Services />
        <div className='divider'></div>
          {/* {allWpPost.nodes.map( ({id, title, excerpt,uri}) => (
            <div className="box" key={id}>
            <h2>{title}</h2>
           
              <span dangerouslySetInnerHTML={{__html:excerpt}} />
            
            <Link to={uri}>Read More</Link>
          </div>
          )) } */}
          <Other />
        
    <Footer />
    </main>
  );
 };

export default HomePage
