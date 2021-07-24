import React, { useState } from "react"
import styled from "styled-components"

const ContactForm = () => {
  
    // Simple controlled form setup (Control your own state)
    const handleChange = e => setFormValues({ ...formValues, [e.target.name]: e.target.value })
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  
    return (
        
        <FormStyles>
            <a className="cta-btn" href="tel:9703359600">CALL OR TEXT: (970) 335-9600</a>
            <form
              name="contact-us"
              Content-Type="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/Thanks/"
              onSubmit={handleChange}
            >
         <input type="hidden" name="contact-us" value="contact" />
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
              <p>How Can We Assist You?</p>
           <textarea className='Form--Input Form--Textarea'
                      placeholder='Message'
                      name='message'
                      rows='8' value={formValues.message} onChange={handleChange} required />
          </div>
          <div>
            <button className='Button Form--SubmitButton'
                  type='submit'
                   >Contact Us</button>
          </div>
        </form>
  
        </FormStyles>
    )
}
export default ContactForm

const FormStyles = styled.div `
 @media (max-width: 400px) {
      width: 90%;
      margin: 0 auto;
    }
  form {
    text-align: center;
    padding-top: .5rem;
    
   
    input {
      
      height: 50px;
      width: 25rem;
      margin: 1rem;
      border:  1px solid rgb(255, 103, 0);
      @media (max-width: 400px) {
      width: 90%;
      margin: .5rem 0;
     
    }
    }
    textarea {
      width: 25rem;
      border:  1px solid rgb(255, 103, 0);
      @media (max-width: 400px) {
      width: 90%;
      margin: 0;
    }
    }
  }
  .cta-btn {
    margin-left: 4rem;
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

