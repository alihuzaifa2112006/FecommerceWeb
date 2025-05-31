import React, { useState, useEffect } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { GiShoppingBag } from "react-icons/gi";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import './Navbar.css';
import Drawer from './Drawer';

const Navbar = ({ openDrawer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showIcon, setShowIcon] = useState(true);


  const toggleMenu = () => setIsOpen(!isOpen);
  

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > viewportHeight - 10) {
        setShowIcon(false);
      } else {
        setShowIcon(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav>
        <h1>GreenLeafs</h1>
        <ul className="desktop-nav">
          <li><a href="#main">HOME</a></li>
          <li><a href="#maini">CATEGORIES</a></li>
          <li><a href="#feature">FEATURES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
          <li><a id='cartIcon' href="#">


            
            <GiShoppingBag onClick={openDrawer} size={28} />
            
            </a></li>
        </ul>

        
        {showIcon && (
          <div className="responsive-icon" onClick={toggleMenu}>
            {isOpen ? <MdClose size={28} className='closeIcon' /> : <IoMenu size={28} />}
          </div>
        )}
      </nav>

      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav">
          <li><a href="#main" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#maini" onClick={toggleMenu}>CATEGORIES</a></li>
          <li><a href="#feature" onClick={toggleMenu}>FEATURES</a></li>
          <li><a href="#about" onClick={toggleMenu}>ABOUT</a></li>
          <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
          <li><a id='cartIcon' href="#" onClick={toggleMenu}><GiShoppingBag onClick={openDrawer} size={28} /></a></li>
        </ul>
      </div>

      {isOpen && <div className="overlay" onClick={toggleMenu}></div>}

       
    </>
  );
};

export default Navbar;
