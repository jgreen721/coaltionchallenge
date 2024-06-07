import React from 'react'
import "./MainSectionHeader.css"

const MainSectionHeader = () => {
  return (
    <div className="main-section-header-container">
        <h5 className='site-path-text'>Home/Who we are/<span className="current">Contact</span></h5>
        <div className="contact-info-blurb">
          <h2 className="contact-h3 text-orange">Contact</h2>
          <h5>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, quidem itaque. Aperiam soluta corporis voluptates veniam, fuga nisi unde porro minus cum quos quas pariatur! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam aperiam iusto neque. </h5>
        </div>
    </div>
  )
}

export default MainSectionHeader