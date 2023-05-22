import React from 'react'
import LOGO from "./Assets/logo.jpg"
import "./Assets/header.css"

const Header = () => {
  return (
    <div className='head'>
      <div className="logo">
        <img src={LOGO} alt="" />
      </div>

        <div className="nav">
            <ul className='navcontent'>
                <li className='navcontent'>Services</li>
                <li className='navcontent'>Career</li>
                <li className='navcontent'>About</li>
                <li className='navcontent'>Contact</li>
                <li><i className='fas fa-search'></i></li>
            </ul>
        </div>

        <div className="contact">
            <button>Let's Talk</button>
        </div>

    </div>
  )
}

export default Header
