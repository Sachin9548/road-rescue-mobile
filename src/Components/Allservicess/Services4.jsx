import service41 from "../../assets/service41.webp"
import service42 from "../../assets/service42.webp"

const Services4 = () => {

  return (
    <>
      <div className="services4">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banners-routine-services.jpg.webp"
            src={service41}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Truck-banners-for-routine-ms-2.jpg.webp"
            src={service42}

            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        <div className="title-section">
          <h2>
            Our services are vital in maintaing your fuel efficiency and
            increasing the overall lifespan of your vehicle. Book a service
            appointment today.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Services4;
