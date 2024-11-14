import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import './Navbar.css'; // Import the CSS file for styling
import logo from "../../assets/logo.jpeg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/"><img className='logoweb' src={logo}/></Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <span className="close">&times;</span> : <span>&#9776;</span>}
      </div>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li onClick={toggleMenu}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/about">About Us</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/services">Services</Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="/contact">Contact</Link>
        </li>
        <li onClick={toggleMenu} className='desktopcall'>
          <a
            href="tel:+16479786511"
            className="call-btn"
            style={{ color: 'white' }}
          >
            CALL +1 (647) 618-6511
          </a>
        </li>
      </ul>
      <ul className='mobilecall'>
      <li className='mobilecallme'>
          <a
            href="tel:+16479786511"
            className="call-btn"
            style={{ color: 'white' }}
          >
            CALL +1 (647) 618-6511
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
