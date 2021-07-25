import React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import Seo from '../components/seo'


const ThanksStyles = styled.div`
margin: 0;
    text-align: center;
    background-image: url("/images/cork_1.png");
    height: 60vh;
    .content {
        padding-top: 5rem;
    }
`


const ThanksPage = () => (
    <Layout >
        <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
       
        
            <ThanksStyles>
                <div class="content">

                    <h2>Thank you for requesting an Estimate! </h2>
                    <h2> We will get back to you as soon as the sun goes down!</h2>
                </div>
                
            </ThanksStyles>
           
    </Layout >
);

export default ThanksPage;