import React from 'react'
import footIMG from "./Assets/logo.jpg"
import "./Assets/collab.css"
const Footer = () => {
  const currentYear = new Date().getFullYear();
    return (
    <div className='Footer'>
         <div className="FootContainer">  
            <div className="footerimg">
                <img className='footimg' src={footIMG} alt="" />
                    <br />
            </div>
            <p className='parafoot'>By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.</p>

           <div className="outerFooter"> 
                <div >
                    <ul className='LocationList'>
                        <li>Toronto</li>
                        <li>New Delhi</li>
                    </ul>
                </div>
                <div className="ServicesListDIV">
                    <ul className="ServicesList">
                        <li>Complete AI + RPA Automation</li>
                        <li>Cloud Services</li>
                        <li>Delivery pipeline</li>
                        <li>Build better Apps</li>
                        <li>Simplify Cloud Ops</li>
                    </ul>
                </div>
                <div className="XivTechListDIV">
                    <ul className="XivTechList">
                        <li>About</li>
                        <li>Career</li>
                        <li>Contacts</li>
                    </ul>
                </div>
          </div> 
        </div>  
        <div className='copyright'>    
            <p className='cTEXT'>© {currentYear} XivTech, Inc. All Rights Reserved</p>
        </div> 
    </div>
  )
}

export default Footer
