
import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {useStaticQuery, graphql, Link } from 'gatsby'
 import Header from '../components/Header'
// import Nav from '../components/Nav'

const HomePage = () => {
  const data = useStaticQuery(graphql `
    query MyQuery {
          allWpPost {
            nodes {
              id
              title
              uri
              excerpt
            }
          }
        }

  `)
  console.log(data)
  const {allWpPost} = data
  return (
    <main >
      <title>Home Page</title>
      <Header />
      <StaticImage src="../images/eclipse-logo.png" alt="logo" placeholder="blurred" width={100} />
      <div className="container">
        <h1>SunGlow Films Durango</h1>
        
          {allWpPost.nodes.map( ({id, title, excerpt,uri}) => (
            <div className="box">
            <h2>{title}</h2>
           
              <span dangerouslySetInnerHTML={{__html:excerpt}} />
            
            <Link to={uri}>Read More</Link>
          </div>
          )) }
          
          <div className="box">
            <h2 >Goodby Mars</h2>
            
            <span dangerouslySetInnerHTML={{__html:'<p>This is a 2nd excerpt..</p>'}} />
           
            <Link to='#'>Read More</Link>
       </div>
      </div>
    </main>
  );
};

export default HomePage;
