import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-parent">
              <div className="nav-overlay"></div>

      <div className="navbar-content uppercase">
        <div className="navbar-content-column">
          <h5 className="red-text text-">Call us now!</h5>
          <h5 className="text-white">385.154.11.28.35</h5>
        </div>
        <div className="navbar-content-column">
          <button className="site-btn">Login</button>
          <button className="site-btn">Sign Up</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar