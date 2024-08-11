import { services } from "../assets/data/services";
import ServicesCard from "../components/ServicesCard";

function ServicesPage() {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[-30px] ">
          {services.map((service, index) => (
            <ServicesCard service={service} index={index} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPage;
