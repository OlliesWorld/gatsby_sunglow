import React from 'react'
import Layout from '../components/layout';
import styled from 'styled-components';
import Seo from "../components/seo"

const ThanksStyles = styled.div`
    margin: 0 auto;
    text-align: center;
`


const ThanksPage = () => (
    <Layout >
        <Seo title="Window Tinting in Durango | Locally Owned &amp; Operated | (970) 335-9600"/>
       
           
            <ThanksStyles>
                <h2>Thank you for requesting an Estimate! </h2>
                <p> We will get back to you as soon as the sun goes down!</p>
            </ThanksStyles>
           
    </Layout >
);

export default ThanksPage;