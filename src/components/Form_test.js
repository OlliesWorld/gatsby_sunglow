import { navigate } from "gatsby"
import React, { useState } from "react";

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const NameForm = (props) => {
  const [name, setName] = useState("")

  const handleChange = (e) => {
    setName({ ...name, [e.target.name]: e.target.value })
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
      .then(() => navigate("/thank-you/"))
      // On error, show the error in an alert
      .catch(error => alert(error));
  };

  return (
    <form data-netlify="true" action="/" name="contact-form" method="post" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact-form" />
      <label>
        Name:
        <input
          name="firstName"
          type="text"
          onChange={handleChange}
        />
      </label>
      <input className='Form--Input' type='email' placeholder='Email' name='email' required />
          
          <input className='Form--Input' type='phone' placeholder='Phone' name='phone'  />
      
          <p>How Can We Assist You?</p>
          <textarea className='Form--Textarea' placeholder='Message' name='message' rows='8'  required />
     
      <input type="submit"/>
    </form>
  );
}

export default NameForm