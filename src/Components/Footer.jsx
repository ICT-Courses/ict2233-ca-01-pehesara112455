import React from 'react';
import '../Styles/global.css'; // Custom styles
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
 return(
    <footer className='footer bg-dark text-white p-2 pb-2'>
       <div className='Footer-container'>
      <h1>Mobile Store</h1>

      <div className='links'style={{display:"flex",flexDirection:"column"}}>
             <h6 className="footer-heading">MORE</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/About">About Policy</a></li>
              <li><a href="Phones">Phones</a></li>
              <li><a href="Contact">Contact Us</a></li>
            </ul>
      </div>
      <div className='links'style={{display:"flex",flexDirection:"column"}}>
             <h6 className="footer-heading">Contact Us On</h6>
            <ul className="footer-links list-unstyled">
              <li><a href="/">Facebook</a></li>
              <li><a href="/About">Whatsapp</a></li>
              <li><a href="Phones">Instragram</a></li>
            </ul>

      </div>
    
      

       </div>
       <div className='Footer-container2'>
        <p> © 2024 Nova Mobiles. All rights reserved.
</p>
    </div>

    </footer>
 )
  
};

export default Footer;