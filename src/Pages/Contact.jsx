import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="ContactSection" id='contact'>
      <div className="leftSide">
        <div className="overlayBox">
          <h2>GreenLeafs</h2>
          <p>We love to hear from you!</p>
        </div>
      </div>
      <div className="rightSide">
        <form className="contactForm">
          <h3>Contact Us</h3>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
