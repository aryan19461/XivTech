import React from 'react'
import CardImg from './Assets/card.avif'
import "./Assets/collab.css"
const Card = () => {
  return (
<div className="card">
    <div className="card_head">
        <img src={CardImg} alt="" />
    </div>
    <div className="card_body">
        <p>Bot Automation Simplified <br /> Build, Deploy and Scale bots</p>
    </div>
</div>
  )
}

export default Card
