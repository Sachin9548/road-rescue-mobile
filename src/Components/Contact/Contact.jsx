import React, { useState } from 'react';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import contact1 from '../../assets/contact1.webp';
import contact2 from '../../assets/contact2.webp';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true); // Start loading
    const form = event.target;

    // Simulate form submission delay
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
    }).then(() => {
      setIsLoading(false); // Stop loading after submission
      window.location.reload(); // Reload the page
    }).catch(() => {
      setIsLoading(false); // Stop loading even if there's an error
      alert('Failed to submit. Please try again.');
    });
  };

  return (
    <>
      <div className="contactus">
        <div className="homebanner">
          <img src={contact1} alt="Truck services image" className="homebanner-img" />
        </div>
        <div className="homebannermobile">
          <img src={contact2} alt="Truck services mobile banner" className="homebanner-img-mobile" />
        </div>
        <div className="contactform">
          <div className="contactleftsection">
            <p>
              <FaMapMarkerAlt className="icon" />
              ROAD RESCUE MOBILE SERVICE INC, 5758 DIXIE RD, MISSISSAUGA,
              ONTARIO L4W1J3
            </p>
            <p>
              <FaPhoneAlt className="icon" />
              +1 (647) 618-6511
            </p>
          </div>
          <div className="contactrightsection">
            <h3>Write to Us for Quick Response</h3>
            <form 
              action="https://script.google.com/macros/s/AKfycbxL7sZFv8lW08Ayw0F9AiYmraaN-v-Tn5Riw2hdeRdTtp0yt3eKcGmds8KJHZvYx6W6ng/exec" 
              method="POST" 
              className="contact-form"
              onSubmit={handleSubmit} // Attach onSubmit handler
            >
              <label htmlFor="name">Name</label>
              <input type="text" name="name" placeholder="Enter your name" required />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" required />
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" name="phone" placeholder="Enter your phone number" required />
              <label htmlFor="message">Message</label>
              <textarea name="message" placeholder="Write your message" cols="30" rows="6" required></textarea>
              <button type="submit" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit'}
              </button>
            </form>
            {isLoading && <p className="loading-message">Please wait, submitting your message...</p>}
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9404614845575!2d-79.64495572434305!3d43.64940705267691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b39f9e3778783%3A0xf8b43e155235446a!2sMississauga%20Truck%20Centre!5e0!3m2!1sen!2sin!4v1729750306380!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
