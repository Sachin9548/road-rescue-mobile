import React from 'react';
import './Home.css';
import home1 from "../../assets/home1.jpg";
import home2 from "../../assets/home2.webp";
import home3 from "../../assets/home3.webp";
import home4 from "../../assets/home4.webp";
import Gallery1 from "../../assets/Gallery1.webp";
import Gallery2 from "../../assets/Gallery2.webp";
import logo1 from "../../assets/logo1.webp";
import logo2 from "../../assets/logo2.webp";
import logo3 from "../../assets/logo3.webp";
import logo4 from "../../assets/logo4.webp";
import logo5 from "../../assets/logo5.webp";

import Homemobilebanner from "../../assets/Homemobilebanner.webp";
import Services from '../Services/Services';
const Home = () => {
  return (
    <div className="home">
      <div className="homebanner">
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Untitled-2-1.png.webp"
          src={home1}
          alt="Truck services image"
          className="homebanner-img"
        />
      </div>
      <div className="homebannermobile">
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Home-page-ms.jpg.webp"
          src={Homemobilebanner}
          alt="Truck services mobile banner"
          className="homebanner-img-mobile"
        />
      </div>
      {/* section1 */}
      <div className="section1">
        <div className="leftsection1detail">
          <h1>Convenient Mobile Truck Repair</h1>
          <p>
            Wouldn’t it be nice to dial a truck mechanic’s number and have him
            come to your location with all the modern tools to get your rig
            running again? You can! We use state-of-the-art equipment and our
            mechanics are fully certified to work on even the most complex
            issues with just about any big rig. <br /> <br />
            So don’t bother driving to a garage or opening your wallet for a
            tow—just give ROAD RESCUE MOBILE SERVICE INC a call.
          </p>
          <span>Call us at (647) 618-6511</span>
        </div>
        <div className="section1right">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Untitled-3.png.webp"
            src={home2}
            alt="Truck tire services"
            className="section1-img"
          />
        </div>
      </div>
      {/* section2 */}

      <div className="section2">
        <div className="section2left">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Untitl.png.webp"
            src={home3}
            alt="Truck tire services"
            className="section2-img"
          />
        </div>
        <div className="leftsection2detail">
          <h1>Industrial Engine Repair</h1>
          <p>
            ROAD RESCUE MOBILE SERVICE are acknowledges the significant worry
            that arises when engine problems occur, affecting both drivers and
            fleet managers. That is why we offer a comprehensive range of engine
            diagnostic and repair services that cater to both diesel and
            gasoline engines. <br /> <br />
            Our team consists of highly skilled mechanics who possess the
            necessary certifications, expertise, and experience to detect and
            resolve any engine issues. Our goal is to ensure that your vehicle
            performs optimally and efficiently.
          </p>
          {/* <span>24/7 Availability</span> */}
        </div>
      </div>
      {/* section3 */}

      <div className="section1">
        <div className="leftsection1detail">
          <h1>Transmission Repair</h1>
          <p>
            Ensuring the optimal performance of your industrial vehicle’s
            transmission is crucial. At ROAD RESCUE MOBILE SERVICE INC, we
            specialize in providing expert transmission repair services tailored
            to a wide range of large vehicles, including semi-trucks, buses, and
            certain types of farm equipment.
            <br /> <br />
            Our team of highly skilled mechanics possesses the necessary
            expertise and knowledge to accurately diagnose and repair any
            transmission-related problems, ensuring the uninterrupted operation
            of your vehicle. You can rely on us to keep your transmission in
            excellent condition, enabling your industrial vehicle to perform at
            its peak.
          </p>
          {/* <span>24/7 Availability</span> */}
        </div>
        <div className="section1right">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/feet.jpg.webp"
            src={home4}
            alt="Truck tire services"
            className="section1-img"
          />
        </div>
      </div>

      <Services />

      <div className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-container">
          <div className="leftgalleryimg">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/1.jpg.webp"
              src={Gallery1}
              alt="Gallery Image 1"
              className="gallery-img"
            />
          </div>
          <div className="rightgalleryimg">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/2.jpg.webp"
              src={Gallery2}
              alt="Gallery Image 2"
              className="gallery-img"
            />
          </div>
        </div>
      </div>

      {/* brand */}

      <div className="brandsection">
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/logo.png.webp"
          src={logo1}
          alt="Brand Logo 1"
          className="brand-logo"
        />
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/logo2.png.webp"
          src={logo2}

          alt="Brand Logo 2"
          className="brand-logo"
        />
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/logo3.png.webp"
          src={logo3}

          alt="Brand Logo 3"
          className="brand-logo"
        />
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Untitled-5.png.webp"
          src={logo4}

          alt="Brand Logo 4"
          className="brand-logo"
        />
        <img
          // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/LOGO-2.png.webp"
          src={logo5}
          alt="Brand Logo 5"
          className="brand-logo"
        />
      </div>
    </div>
  );
};

export default Home;
