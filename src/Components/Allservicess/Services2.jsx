import './Allservicess.css';
import Truck from "../../assets/Truck.webp";
import Truckm from "../../assets/Truckm.webp";
import Truck2 from "../../assets/Truck2.jpg";
import Truck3 from "../../assets/Truck3.jpg";
import Truck4 from "../../assets/Truck4.jpg";

const Services2 = () => {
  return (
    <>
      <div className="Services1">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banners-For-tire.jpg.webp"
            src={Truck}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banners-Tire-Services-ms-m.jpg.webp"
            src={Truckm}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        <div className="title-section">
          <h2>Heavy Truck Tire Services </h2>
        </div>

        <div className="section1">
          <div className="leftsection1detail">
            <h1>Wherever You Roam, We Roll Along!</h1>
            <p>
              At ROAD RESCUE Centre , we understand that time is of the essence
              when you’re on the road with heavy trucks or medium vehicles.
              That’s why we’ve rolled out our comprehensive mobile repair and
              service units that bring expertise, efficiency, and spare parts
              right to your location.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/worker-with-wheel-wheel-replacement-man-uniform-1.jpg"
              src={Truck2}
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
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/driver-checks-goods-man-uniform-truck-garage-1.jpg"
              src={Truck3}
              alt="Truck tire services"
              className="section2-img"
            />
          </div>
          <div className="leftsection2detail">
            <h4>On-Road Assistance</h4>
            <p>
              If you're stuck on the road with a tire emergency, we're just a
              call away. Our mobile units are equipped to provide on-the-spot
              assistance, including tire replacement and repair.
            </p>
            <h4>Wide Selection</h4>
            <p>
              We offer all major brands of tires, both for replacement and
              purchase. Whether you're looking to buy new tires for your heavy
              truck or need an on-site installation, we've got you covered.
            </p>
            <h4>Expert Technicians</h4>
            <p>
              Our team of experienced technicians specializes in heavy truck
              tires. They'll assess the condition of your tires and recommend
              the best course of action, whether it's a quick fix, a tire
              replacement, or buying new tires.
            </p>
          </div>
        </div>

        <div className="section1">
          <div className="leftsection1detail">
            <h4>Preventive Maintenance</h4>
            <p>
              We believe in proactive care. Our tire experts can provide routine
              inspections and maintenance to ensure your tires are in optimal
              condition, reducing the risk of on-road emergencies.
            </p>
            <h4>24/7 Availability</h4>
            <p>
              Tire issues can strike at any hour. That's why we offer
              round-the-clock assistance, ready to respond to your tire-related
              emergencies.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/brutal-mechanic-fixing-hubcap-car-wheel.jpg"
              src={Truck4}
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
export default Services2;
