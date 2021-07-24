import React, { useState } from "react"
// import { navigate } from 'gatsby'


const EstimateForm = () => {
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
        <>
         <form
              name="estimate"
              Content-Type="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              // data-netlify-recaptcha="true"   // new Netlify data attribute regarding recaptcha submissions
              action="/Thanks/"
              onSubmit={handleChange}
            >
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
                   >Send</button>
          </div>
        </form>
  
        </>
    )
}
export default EstimateForm