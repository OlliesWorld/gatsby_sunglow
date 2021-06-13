import React from 'react'
import {graphql, Link } from 'gatsby'

const WpPage = ({data}) => {
    // const {WpPage} = data
    return (
        <>
        <div className="container">
            <h1>{data.title}</h1>
            <div dangerouslySetInnerHTML={{__html: data.content}} />
            <Link to="/">Back to home</Link>
        </div>
        </>
    )
}
export default WpPage

export const query = graphql`
    query PageById($id: String){
         wpPage(id: {eq: $id}) {
             __typename
            id
            uri
            title
            content
            
  }
}

`