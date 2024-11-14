import './Allservicess.css';
import service1d from "../../assets/service1d.webp";
import service1m from "../../assets/service1m.webp";
import service11 from "../../assets/service11.webp";
import service12 from "../../assets/service12.jpg";

const Services1 = () => {
  return (
    <>
      <div className="Services1">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banneR-MOBILE-REPAIR.jpg.webp"
            src={service1d}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banners-Mobile-Repair-ms3.jpg.webp"
            src={service1m}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        <div className="title-section">
          <h2>
            On-Road Mobile Repair Services for Heavy Trucks and Medium Vehicles
          </h2>
        </div>

        <div className="section1">
          <div className="leftsection1detail">
            <h1>Keep Rolling with Confidence!</h1>
            <p>
              At ROAD RESCUE Centre, we understand that the road can be
              unpredictable, especially when you’re driving heavy trucks. That’s
              why we’ve got your back with our specialized Heavy Truck Tire
              Services. Whether you need a tire replaced, repaired, or you’re
              looking to buy new tires, we’re here to keep you rolling smoothly.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/man-try-fix-car-engine-problem-local-road-2048x1367.jpg.webp"
              src={service11}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
        </div>
        <div className="title-section">
          <h2>Our Heavy Truck Tire Services Include </h2>
        </div>

        <div className="section2">
          <div className="section2left">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/medium-shot-man-holding-wrench-1.jpg"
              src={service12}
              alt="Truck tire services"
              className="section2-img"
            />
          </div>
          <div className="leftsection2detail">
            <h4>Emergency Repairs</h4>
            <p>
              Whether you're dealing with a major breakdown or a minor glitch,
              our skilled technicians are ready to diagnose and resolve the
              issue promptly, so you can continue your journey worry-free.
            </p>
            <h4>Scheduled Maintenance</h4>
            <p>
              Routine maintenance is the key to a vehicle's longevity. Our
              mobile units are equipped to perform scheduled maintenance,
              ensuring your fleet stays in peak condition.
            </p>
            <h4>Extensive Spare Parts</h4>
            <p>
              We carry a wide range of high-quality spare parts in our mobile
              units, reducing downtime by ensuring that most repairs can be
              completed on the spot.
            </p>
            <h4>Expert Technicians</h4>
            <p>
              Our team of experienced technicians specializes in heavy trucks
              and medium vehicles, equipped with the expertise and tools to
              address various issues, from engine troubles to brake repairs.
            </p>
            <h4>Round-the-Clock Availability</h4>
            <p>
              Emergencies can happen at any hour. That's why our mobile repair
              services are available 24/7, ready to assist you whenever and
              wherever you need us.
            </p>
          </div>
        </div>
        <div className="title-detail">
          <p>
            When you choose ROAD RESCUE Centre, you’re choosing convenience,
            reliability, and a commitment to keeping your heavy trucks and
            medium vehicles running smoothly. No matter where your route takes
            you, we’re dedicated to ensuring you stay on it.
          </p>
          <p>
            Get in touch with us at<strong> +1 (647) 618-6511</strong> to
            schedule your on-road mobile repair service today, and experience
            the convenience of expert repair wherever you are
          </p>
        </div>
      </div>
    </>
  );
};
export default Services1;
