import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function ServicesCard({ service, index }) {
  const { name, desc, bgColor, textColor } = service;
  return (
    <div className="px-3 py-[30px] lg:px-5 ">
      <h2 className="text-[26px] font-[700] leading-9 text-headingColor ">
        {name}
      </h2>
      <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor">
        {desc}
      </p>
      <div className="mt-[30px] flex items-center justify-between ">
        <Link
          to="/doctors"
          className="group  flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
        >
          <BsArrowRight className="h-5 w-6 transition-all duration-300 group-hover:text-white" />
        </Link>
        <span
          className="flex h-[44px] w-[44px] items-center justify-center text-[18px] font-[600] leading-[30px] "
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
}

export default ServicesCard;
