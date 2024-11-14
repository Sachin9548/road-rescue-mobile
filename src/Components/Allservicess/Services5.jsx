import service51 from "../../assets/service51.jpg"
import service52 from "../../assets/service52.webp"
const Services5 = () => {
  return (
    <>
      <div className="services5">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Frontend-And-Alignment.jpg.webp"
            src={service51}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/08/Repairs-ms.jpg.webp"
            src={service52}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        <div className="title-section">
          <h2>
            Whether you've been in a fender bender or it's time for major
            maintenance services, we've got you covered.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Services5;
