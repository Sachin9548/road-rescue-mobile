import './Allservicess.css';
import service31 from "../../assets/service31.jpg"
import service32 from "../../assets/service32.jpg"
import service33 from "../../assets/service33.webp"
import service34 from "../../assets/service34.webp"
import service35 from "../../assets/service35.jpg"
const Services3 = () => {
  return (
    <>
      <div className="Services1">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-Trailer-Banner.jpg.webp"
            src={service31}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banners-truck-Trailer-ms3.jpg.webp"
            src={service32}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        <div className="title-section">
          <h2>Truck and Trailer Repair Services </h2>
        </div>

        <div className="section1">
          <div className="leftsection1detail">
            <h1>12 Years of Excellence in Keeping Your Haul on the Road!</h1>
            <p>
              At ROAD RESCUE Centre , we’re not just experts in comprehensive
              Truck and Trailer Repair services; we also bring over a decade of
              experience to the table. With a strong commitment to quality and
              efficiency, we ensure that your heavy trucks and trailers stay in
              prime condition, so you can hit the road with confidence.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Heavy-Truck-Repairs-Edmonton-3.jpg.webp"
              src={service33}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
        </div>
        <div className="title-section">
          <h2>Our Truck and Trailer Repair Services Include </h2>
        </div>

        <div className="section2">
          <div className="section2left">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/commercial-truck-repairing-services.jpg.webp"
              src={service34}
              alt="Truck tire services"
              className="section2-img"
            />
          </div>
          <div className="leftsection2detail">
            <h4>Routine Maintenance</h4>
            <p>
              Preventive care is key to a truck and trailer's longevity. Our
              skilled technicians perform routine maintenance to keep your
              vehicles in top shape and reduce the risk of breakdowns.
            </p>
            <h4>Emergency Repairs</h4>
            <p>
              Whether it's a breakdown on the highway or a minor glitch, our
              experts are ready to diagnose and fix issues promptly to minimize
              downtime.
            </p>
            <h4>Spare Parts</h4>
            <p>
              We maintain a well-stocked inventory of high-quality spare parts,
              ensuring that we have the right components for most repairs on
              hand.
            </p>
          </div>
        </div>

        <div className="section1">
          <div className="leftsection1detail">
            <h4>Experienced Team</h4>
            <p>
              With over 12 years of hands-on experience in handling heavy trucks
              and trailers, our technicians bring unparalleled skills and
              knowledge to the job, from engine troubles to brake repairs.
            </p>
            <h4>24/7 Availability</h4>
            <p>
              Emergencies can strike at any time, which is why we offer
              round-the-clock assistance to get you back on the road quickly.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/male-mechanics-posing-together-repair-shop.jpg"
              src={service35}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
        </div>

        <div className="title-detail">
          <p>
            When you choose ROAD RESCUE Centre for Heavy Truck Tire Services,
            you’re choosing reliability, convenience, and peace of mind on the
            road. No matter where your journey takes you, we’re here to ensure
            you have a smooth ride and, if needed, help you buy new tires that
            best suit your needs.
          </p>
          <p>
            For immediate assistance, to schedule routine tire maintenance, or
            to explore our range of new tires, contact us at
            <strong>+1 (647) 618-6511</strong>
            Let us keep your heavy truck tires in top shape.
          </p>
        </div>
      </div>
    </>
  );
};
export default Services3;
