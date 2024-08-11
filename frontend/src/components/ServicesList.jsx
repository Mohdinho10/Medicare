import { services } from "../assets/data/services";
import ServicesCard from "./ServicesCard";
function ServicesList() {
  return (
    <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[-30px] ">
      {services.map((service, index) => (
        <ServicesCard service={service} index={index} key={index} />
      ))}
    </div>
  );
}

export default ServicesList;
