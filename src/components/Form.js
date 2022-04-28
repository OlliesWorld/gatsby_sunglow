import { navigate } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import './styles/GlobalStyles.css'

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const ContactForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setPhone({ ...phone, [e.target.phone]: e.target.value })
    setMessage({ ...message, [e.target.message]: e.target.value })
  }

  const handleSubmit = (event) => {
    // Prevent the default onSubmit behavior
    event.preventDefault();
    // POST the encoded form with the content-type header that's required for a text submission
    // Note that the header will be different for POSTing a file
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": event.target.getAttribute("name"), 
        ...name
      })
    })
      // On success, redirect to the custom success page using Gatsby's `navigate` helper function
      .then(() => navigate("/Thanks/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <FormStyles>
    <a className="cta-btn" href="tel:9707446699">CALL OR TEXT: (970)744-6699</a>
    <form data-netlify="true" action="/" name="contactUs" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact-form" />
     
        <input
          name="Name"
          type="text"
          onChange={handleChange}
          required
          placeholder="Name"
          className='Form--Input'
        />
      
          
              <input className='Form--Input' type='email' placeholder='Email' name='email' onChange={handleChange} required />
          
              <input className='Form--Input' type='phone' placeholder='Phone' name='phone'  onChange={handleChange}/>
          
              <p>How Can We Assist You?</p>
              <textarea className='Form--Textarea' placeholder='Message' name='message' rows='8' minlength="8" onChange={handleChange} required />
         
            <div>
              <button className='Button Form--SubmitButton' type='submit' >Contact Us</button>
            </div>
         
        </form>
  
        </FormStyles>
    )
}
export default ContactForm

const FormStyles = styled.div `
 @media (max-width: 640px) {
      width: 90%;
      margin: 0 auto;
    }
    .cta-btn {
      text-align: center;
      margin-left: 4rem;
      @media (max-width: 800px) {
        margin-left: 8rem;
        
      }
    @media (max-width: 640px) {
      
      margin-left: 2rem;
      width: 80%;
    }
  }
  form {
    text-align: center;
    padding-top: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .Form--Input {
      height: 50px;
      width: 25rem;
      margin: 1rem;
      border:  1px solid rgb(255, 103, 0);
      @media (max-width: 640px) {
      width: 90%;
      margin: .5rem 0;
     
    }
    }
    textarea {
      width: 25rem;
      border:  1px solid rgb(255, 103, 0);
      @media (max-width: 640px) {
      width: 90%;
      margin: 0;
      }
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

