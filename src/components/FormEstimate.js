import React from "react"

const EstimateForm = () => {
  
    return (  
        <>
         <form name="estimate" method="POST" netlify-honeypot="bot-field" action="/ThanksEstimate/" netlify>
            <label htmlFor="nameInput" className="Form--Title">Free Estimate Form</label>
         
            <input className='Form--Input' type='text' placeholder='Name' name='name'  required />
          
            <input className='Form--Input' type='email' placeholder='Email' name='email' required />
        
            <input className='Form--Input' type='phone' placeholder='Phone' name='phone'   />
          
            <input className='Form--Input'  type='date' placeholder='Requested Estimate Date' name='date'  />
         
           <textarea className='Form--Textarea' placeholder='Message' name='message' rows='8'  required />
         
          <div>
            <button className='Button Form--SubmitButton' type='submit'>Send</button>
          </div>
        </form>
  
        </>
    )
}
export default EstimateForm