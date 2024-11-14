import Services from '../Services/Services';
import n3 from "../../assets/n3.webp"
import n4 from "../../assets/n4.png"
const Servicespage = () => {
  return (
    <>
      <div className="servicepage">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Welding-And-Fabrication.jpg.webp"
            src={n4}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div> 
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Home-page-ms.jpg.webp"
            // src={homeservice2}
            src={n3}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>
        <Services />
      </div>
    </>
  );
};

export default Servicespage;
