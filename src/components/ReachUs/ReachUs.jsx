import React from 'react'
import { FaFacebookF,FaLinkedinIn,FaTwitter } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";

import "./ReachUs.css";


const ReachUs = () => {
  const links = [
    {id:1,name:'facebook',icon:<FaFacebookF/>},
    {id:2,name:'twitter',icon:<FaTwitter/>},
    {id:3,name:'linkedin',icon:<FaLinkedinIn/>},
    {id:4,name:'pinterest',icon:<FaPinterestP/>},
  ]
  return (
    <div className="section-content">
      <div className="address-card">
        <h5>Coalition Skills Test</h5>
        <div className="my-2">
          <h5>535 La Plata Street</h5>
          <h5>4200 Argentina</h5>
        </div>
        <div>
          <h5>Phone: 385.154.11.28.38</h5>
          <h5>Fax: 385.154.35.66.78</h5>
        </div>
      </div>
      <div>
      <ul className="media-links">
        {links.map(link=>(
          <li key={link.id} className="media-link-item">
          <a href="#" className="media-link">
            {link.icon}
          </a>
          </li>
        ))}
      </ul>
      <div className="form-div hide">
          <button className="submit-btn">Submit</button>
        </div>
      </div>
 
    </div>
  )
}

export default ReachUs