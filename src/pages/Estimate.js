import React, { useState } from "react"
import { navigate } from 'gatsby'
import Layout from '../components/layout'
import styled from 'styled-components';

const FormStyles = styled.div `
  background-color: black;
  form {
    text-align: center;
    input {
      height: 50px;
      width: 25rem;
      margin: 1rem;
    }
    textarea {
      width: 25rem;
    }
  }
  .Form--SubmitButton {
    
      position: relative;
      display: inline-block;
      padding: 0.875rem 2rem;
      margin: 1rem 2rem;
      background-color: rgb(255, 103, 0);
      background-image: linear-gradient(0deg, rgb(255, 103, 0) 10%, rgb(255, 160, 0) 90%);
      border-top: 1px solid rgb(255, 103, 0);
      border-right: 1px solid rgb(255, 103, 0);
      border-bottom: 1px solid rgb(255, 103, 0);
      border-left: 1px solid rgb(255, 103, 0);
      border-radius: 0px;
      padding: 0.775em 0.875em;
      text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
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
    navigate('/thanks')
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
      <form className="Form" formName="Estimate" formValues={formValues} postSubmit={postSubmit} >
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
                    name='date' value={formValues.date} onChange={handleChange} required />
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