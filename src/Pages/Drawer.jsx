import React from 'react'
import './Drawer.css'
import { IoMdClose } from "react-icons/io";
import { useState } from 'react';

const Drawer = ({ isOpen, onClose, cartItems, DeleteItem }) => {

if (!isOpen) return null;
  return (
  
    

    <>
  
     
          <div className='Drawer'>
     <div className="system">
        <div className="headings">
            <h1>Your Items Will Appears Here</h1>
        <IoMdClose className='closeIcon' onClick={onClose} size={28}/>           
        </div>
        <div className="mainBody">
            <ul>
                <li>
                    <div className="count">
                        <p>Sno</p>
                    </div>
                    <div className="item">
                        <p>Name</p>
                    
                    </div>
                    <div className="price">
                        <p>Price</p>
                    </div>
                    <div className="button" 
              
                    >
                       Actions
                    </div>
                </li>


              {cartItems.map((item, index) => (
  <li key={index}>
    <div className="count">{index + 1}</div>
    <div className="item">{item.name}</div>
    <div className="price">{item.price}</div>
    <div className="button">
  <button id='button' onClick={() => DeleteItem(index)}>Delete</button>
    </div>
  </li>
))}
            </ul>

        </div>
     </div>
    </div>
    </>
  )
}

export default Drawer
