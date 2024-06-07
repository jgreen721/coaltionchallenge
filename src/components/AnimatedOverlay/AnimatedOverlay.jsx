import React from 'react'
import "./AnimatedOverlay.css"

const AnimatedOverlay = () => {
  return (
    <div className="animated-overlay-parent">
        <div className="animated-overlay-content">
            <div className="overlay-card">
                <div className="overlay-header-one">
                    <h1 className="overlay-header-text">Coalition</h1>
                </div>
                <div className="overlay-header-two">
                    <h1 className="overlay-header-text">Technologies</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AnimatedOverlay