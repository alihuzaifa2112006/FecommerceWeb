import React from 'react'
import Navbar from '../Pages/Navbar'
import { motion } from 'framer-motion'  
import './Home.css'

const Home = ({ openDrawer } ) => {
  return (
    <div>
      <div className="HomeSection" id='main'>
       <div className="Bg-Image">
        <div className="homeContent">
          <Navbar openDrawer={openDrawer} /> 
          <div className="innerContent">
          
            <motion.h1 
              id='heading1'
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, ease: "easeOut"  }}
            >
              Welcome To GreenLeaf <br /> For Your Plant
            </motion.h1>

            <h2 id='heading2'>Buy & Sell Your Plants At Destop</h2>
          <motion.a
  id='shopBtn'
  href="#maini"
  initial={{ scale: 0.8, opacity: 0 }}
  animate={{ scale: 1, opacity: 1 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.95 }}
>
  Shop Now
</motion.a>

          </div>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Home
