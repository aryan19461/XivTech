import React from 'react'
import midimg from "./Assets/midIMG.webp"
import "./Assets/header.css"
const MiddleDiv = () => {
  return (
    <div className='mid'>
        <div className="midHead">
            <img className='imgmid' src={midimg} alt="" />
               <div className="write">     
                  <h1>AI + RPA = Enabling End-to-End Automation</h1>
                    <h6>Drive Efficiency, Automate and Monetize</h6>
              </div>
        </div>

    </div>
  )
}

export default MiddleDiv
