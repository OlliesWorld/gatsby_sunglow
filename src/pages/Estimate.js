import React from "react"

import Layout from '../components/layout'
import styled from 'styled-components';
import EstimateForm from '../components/FormEstimate';

const FormStyles = styled.div `
  background-color: black;
  background-image: url('https://dta0yqvfnusiq.cloudfront.net/sunglowf/2015/12/sunglo_sitebg1_new.jpg');
  
  form {
    background-color: rgb(73, 69, 70);
    opacity: 0.9;
    text-align: center;
    padding-top: 2rem;
    input {
      height: 50px;
      width: 21rem;
      margin: 1rem;
      border:  1px solid rgb(255, 103, 0);
    }
    textarea {
      width: 22rem;
      border:  1px solid rgb(255, 103, 0);
    }
  }
  .Form--Title {
    color: var(--clr-orange);
   text-transform: uppercase;
   font-weight: bold;
    border-bottom:solid 1px rgb(255, 103, 0);
    font-size: 2rem;
    @media (max-width: 800px){
      font-size: 1.5rem;
    }
  }
  .Form--SubmitButton {
      padding: 0.875rem 2rem;
      margin: 1rem 2rem;
      background-color: rgb(255, 103, 0);
      background-image: linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
      border: 1px solid rgb(255, 103, 0);
      border-radius: 0px;
      padding: 0.775em 0.875em;
      
      text-transform: uppercase;
      font-weight: bold;
      font-size: 1rem;
      cursor: pointer;
      color: white;
      overflow: hidden;
  }

`
const EstimatePage = () => {
  return (
    <Layout>
      <title>Estimate | SunGlo Durango | (970) 335-9600
</title>
      <FormStyles>

      <EstimateForm />
      </FormStyles>
      </Layout>
  )
}
export default EstimatePage