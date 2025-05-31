import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            We create awesome web experiences with modern designs and smooth
            navigation. Stay connected and explore more!
          </p>
        </div>

        <div className="footer-links">
          <h2>Quick Links</h2>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#maini"> Categories </a>
            </li>
            <li>
              <a href="#main">Main</a>
            </li>
            <li>
              <a href="#feature">Feature</a>
            </li>
          
          </ul>
        </div>

        <div className="footer-contact">
          <h2>Contact Info</h2>
          <p>Email: info@example.com</p>
          <p>Phone: +92 300 1234567</p>
          <p>Address: Karachi, Pakistan</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 GreenLeaf. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
