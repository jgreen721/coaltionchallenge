import React from 'react'
import './ContactUs.css';


const ContactUs = () => {
  return (
    <div>
    <div className="section-content">
      <form action="#">
        <div className="form-div">
          <input type="text" name="username" placeholder="Name *" autoComplete="off" className="form-control" />
        </div>
        <div className="form-row">
        <div className="form-div">
          <input type="text" name="username" placeholder="Phone *" autoComplete="off" className="form-control" />
        </div>
        <div className="form-div">
          <input type="text" name="username" placeholder="Email *" autoComplete="off" className="form-control" />
        </div>
        </div>
        <div className="form-div">
          <textarea name="message" cols="30" rows="10" placeholder="Message *" autoComplete="off" className="textarea-form"/>
        </div>
        <div className="form-div">
          <button className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default ContactUs