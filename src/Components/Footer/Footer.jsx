import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footersection">
      <div className="footersectionleft">
        <h2>ROAD RESCUE MOBILE SERVICE INC</h2>
        <p>
          <FaMapMarkerAlt /> 5758 DIXIE RD MISSISSAUGA ONTARIO L4W1J3
        </p>
        <p>
          <FaPhoneAlt /> +1 (647) 618-6511
        </p>
      </div>
      <div className="footersectionmid">
        <h3>Important Links</h3>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footersectionright">
        <h3>Our Services</h3>
        <ul>
          <li>
            <Link to="/services/service1">On Road and Mobile Repair</Link>
          </li>
          <li>
            <Link to="/services/service2">Tire Services</Link>
          </li>
          <li>
            <Link to="/services/service3">Truck and Trailer Repair</Link>
          </li>
          <li>
            <Link to="/services/service4">Preventive Maintenance</Link>
          </li>
          <li>
            <Link to="/services/service5">Frontend and Alignment</Link>
          </li>
          <li>
            <Link to="/services/service6">Welding and Fabrication</Link>
          </li>
        </ul>
      </div>
      <p className="footer-rights">
        © 2024 Truck Services. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
