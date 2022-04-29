import { navigate } from 'gatsby'
import React, { useState } from 'react'


// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const EstimateForm = (props) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [date, setDate] = useState("")
  const [message, setMessage] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
    setEmail({ ...email, [e.target.email]: e.target.value })
    setPhone({ ...phone, [e.target.phone]: e.target.value })
    setDate({ ...date, [e.target.date]: e.target.value })
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
      .then(() => navigate("/ThanksEstimate/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
 
    <form data-netlify="true" action="/" name="estimate" method="post" onSubmit={handleSubmit}>
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
              <input className='Form--Input'  type='date' placeholder='Requested Estimate Date' name='date'  />
              <p>How Can We Assist You?</p>
              <textarea className='Form--Textarea' placeholder='Message' name='message' rows='8'  onChange={handleChange} required />
         
            <div>
              <button className='Button Form--SubmitButton' type='submit' >Contact Us</button>
            </div>
         
        </form>
  
        
    )
}
export default EstimateForm