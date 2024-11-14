import Welding from "../../assets/Welding.jpg"
import Weldingd from "../../assets/Weldingd.jpg"
import service61 from "../../assets/service61.webp"
import service62 from "../../assets/service62.jpg"
import service63 from "../../assets/service63.jpg"
const Services6 = () => {
  return (
    <>
      <div className="services6">
        <div className="homebanner">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Welding-And-Fabrication.jpg.webp"
            src={Weldingd}
            alt="Truck services image"
            className="homebanner-img"
          />
        </div>
        <div className="homebannermobile">
          <img
            // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/Welding-And-Fabrication-ms.jpg.webp"
            src={Welding}
            alt="Truck services mobile banner"
            className="homebanner-img-mobile"
          />
        </div>

        <div className="title-section desktop">
          <h2>Masterful welding & precision fabrication</h2>
        </div>

        <div className="section1 firstimg">
          <div className="leftsection1detail">
            <p>
              At our service center, we specialize in comprehensive repair and
              maintenance solutions for heavy trucks. We understand that the
              rigors of the road can take a toll on your vehicles, often
              requiring expert welding and repair to ensure they operate at peak
              performance. Our team of highly skilled technicians is well-versed
              in the art of heavy truck repair, from addressing engine issues to
              fine-tuning complex mechanical systems. With state-of-the-art
              equipment and a commitment to quality, we strive to provide
              top-notch welding and repair services that get your trucks back on
              the road safely and swiftly.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/cutting-metal-with-plasma-equipment-plant.png.webp"
              src={service61}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
        </div>
        <div className="section1">
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/professional-industrial-welder-welding-metal-parts-metalworking-factory.jpg"
              src={service62}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
          <div className="leftsection1detail">
            <p>
              We take pride in being a one-stop destination for heavy truck
              owners, offering a wide range of services that cater to various
              repair needs. Whether it’s welding, structural repair, or routine
              maintenance, our dedicated team is ready to tackle any challenge.
              When you choose us, you’re choosing excellence, reliability, and a
              partner that understands the critical role your trucks play in
              your business’s success.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
        </div>
        <div className="section1 firstimg">
          <div className="leftsection1detail">
            <p>
              At our workshop, we’re masters of diesel fuel tank repair. Our
              skilled welders are experts in both aluminum and steel welding. We
              don’t just fix tiny leaks we’re here to tackle any challenge. From
              pinhole leaks to wear-related issues and broken tank steps, we’ve
              got you covered. We can even trim tank ends, mend broken baffles,
              and smooth out dents and dings. No matter the size or material, if
              it needs welding, consider it done with precision and care.
            </p>
            {/* <span>24/7 Availability</span> */}
          </div>
          <div className="section1right">
            <img
              // src="https://mississaugatruckrepair.com/wp-content/uploads/2023/09/welding.jpg"
              src={service63}
              alt="Truck tire services"
              className="section1-img"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services6;
