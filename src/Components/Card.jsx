import React from 'react'
import './HomePlant.css'
import AllData from '../Data/AllData'
const Card = ({id, name,  description, price , image, addToCart}) => {
  return (
    <div>
      <div className="card">
        <div className="imgBox">
          <img src={image} alt="Plant" />
        </div>
        <div className="contentBox">
          <h2>{name}</h2>
          <p>{description}</p>
          <button  onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default Card
