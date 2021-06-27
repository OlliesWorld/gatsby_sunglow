import React, { useState } from "react"
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components';

const FormStyles = styled.div `
  background-color: black;
  background-image: url('https://dta0yqvfnusiq.cloudfront.net/sunglowf/2015/12/sunglo_sitebg1_new.jpg');
  form {
    text-align: center;
    padding-top: 2rem;
    input {
      
      height: 50px;
      width: 25rem;
      margin: 1rem;
      border:  1px solid rgb(255, 103, 0);
    }
    textarea {
      width: 25rem;
      border:  1px solid rgb(255, 103, 0);
    }
  }
  .Form--Title {
   text-transform: uppercase;
   font-weight: bold;
    border-bottom:solid 1px rgb(255, 103, 0);
    font-size: 2rem;
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
const EstimateForm = () => {

  // Post-Submit Navigate
  const postSubmit = () => {
    navigate('/Thanks')
  }

  // Simple controlled form setup (Control your own state)
  const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  })

  return (
    <Layout>
      
      <FormStyles>
      <form className="Form" formname="Estimate" formValues={formValues} postSubmit={postSubmit} >
        <label htmlFor="nameInput" className="Form--Title">Free Estimate Form</label>
        <div className='Form--Label'>
         <input placeholder='Name' className='Form--Input' type="text" name="name" value={formValues.name} onChange={handleChange} required />
        </div>
        <div className='Form--Label'>
          <input className='Form--Input'  type='email'
                    placeholder='Email'
                    name='email' value={formValues.email} onChange={handleChange} required />
        </div>
        <div className='Form--Label'>
          <input className='Form--Input'  type='phone'
                    placeholder='Phone'
                    name='phone' value={formValues.phone} onChange={handleChange}  />
        </div>
        <div className='Form--Label'>
          <input className='Form--Input'  type='date'
                    placeholder='Requested Estimate Date'
                    name='date' value={formValues.date} onChange={handleChange} />
        </div>
        <div className='Form--Label'>
         <textarea className='Form--Input Form--Textarea'
                    placeholder='Message'
                    name='message'
                    rows='8' value={formValues.message} onChange={handleChange} required />
        </div>
        <div>
          <button className='Button Form--SubmitButton'
                type='submit'
                value='Contact' >Send</button>
        </div>
      </form>

      </FormStyles>
      </Layout>
  )
}
export default EstimateForm