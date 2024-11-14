import './About.css';
import aboutdesktop from "../../assets/aboutdesktop.webp"
import aboutmobile from "../../assets/aboutmobile.webp"
import aboutteam from "../../assets/aboutteam.webp"
const About = () => {
  return (
    <>
      <div className="aboutpage">
        {/* aboutpage banner */}
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Truck-banners-About-us.jpg.webp"
            src={aboutdesktop}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/About-us-ms.jpg.webp"
            src={aboutmobile}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        {/* section1 of about */}
        <div className="section1">
          <div className="leftsection1detail">
            <h1>About Us</h1>
            <p>
              ROAD RESCUE MOBILE SERVICE INC. proudly stands as a premier
              independent repair and maintenance establishment, having served
              our valued customers for over 10 years. Our unwavering commitment
              revolves around swiftly and securely reinstating our customers’
              vehicles to optimal functionality. Specializing in suspension,
              brakes, and steering, we extend our expert care to a wide spectrum
              of vehicles, encompassing the gamut from light to medium, and even
              heavy-duty. Our mission remains resolute to ensure that your
              journey back on the road is both prompt and reliable.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/about.jpg.webp"
              src={aboutteam}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
        </div>

        <div className="aboutsection2">
          <h1>Still Running</h1>
          <h4>ROAD RESCUE MOBILE SERVICE INC SINCE 2013</h4>
          <p>
            At ROAD RESCUE MOBILE SERVICE INC, our commitment to excellence
            extends beyond mechanical expertise; it’s deeply rooted in our
            ethical approach to heavy vehicle and truck repair and service. Our
            work ethics are the cornerstone of our operations. We pride
            ourselves on honesty, integrity, and transparency in all our
            dealings. With a dedication to delivering the highest quality
            workmanship, we prioritize safety and precision, ensuring that each
            repair and service adheres to the strictest industry standards. Our
            team’s unwavering commitment to ethical practices means you can
            trust us to not only keep your heavy vehicles and trucks running
            smoothly but also to uphold the values that define our reputation in
            the industry.
          </p>
        </div>
      </div>
    </>
  );
};
export default About;
