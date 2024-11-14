import React from 'react';
import './Services.css'; // Import the CSS file
import { Link } from 'react-router-dom'; // For routing

const Services = () => {
  return (
    <div className="servicessection">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-item">
          <Link to="/services/service1">
            <div className="service-content">
              <h3>On Road and Mobile Repair</h3>
              <p>Quick and reliable repairs to keep you moving.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/services/service2">
            <div className="service-content">
              <h3>Tire Services</h3>
              <p>High-quality tire replacement and maintenance.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/services/service3">
            <div className="service-content">
              <h3>Truck and Trailer Repair</h3>
              <p>Comprehensive truck and trailer repair services.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/services/service4">
            <div className="service-content">
              <h3>Preventive Maintenance</h3>
              <p>Keep your vehicles in top shape with regular check-ups.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/services/service5">
            <div className="service-content">
              <h3>Frontend and Alignment</h3>
              <p>Precision alignment and front-end repair services.</p>
            </div>
          </Link>
        </div>
        <div className="service-item">
          <Link to="/services/service6">
            <div className="service-content">
              <h3>Welding and Fabrication</h3>
              <p>Professional welding and fabrication for heavy trucks.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
