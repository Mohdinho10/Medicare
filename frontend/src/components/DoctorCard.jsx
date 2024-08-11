/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import starIcon from "../assets/images/Star.png";
import { BsArrowRight } from "react-icons/bs";

function DoctorCard({ doctor }) {
  const { name, avgRating, totalRating, photo, specialization, experiences } =
    doctor;

  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="h-[300px] w-[300px]" />
      </div>
      <h2 className="mt-3 text-[18px] font-[700] leading-[30px] text-headingColor lg:mt-5 lg:text-[26px] lg:leading-9 ">
        {name}
      </h2>

      <div className="mt-2 flex items-center justify-between lg:mt-4 ">
        <span className="rounded bg-[#ccf0f3] px-2 py-1 text-[12px] font-semibold leading-4 text-irisBlueColor lg:px-6 lg:py-2 lg:text-[16px] lg:leading-7 ">
          {specialization}
        </span>

        <div className="flex items-center gap-[6px]">
          <span className="flex items-center gap-[6px] text-[14px] font-semibold leading-6 text-headingColor lg:text-[16px] lg:leading-7">
            <img src={starIcon} alt="star-icon" /> {avgRating}
          </span>
          <span className="text-[14px] font-[400] leading-6 text-textColor lg:text-[16px] lg:leading-7 ">
            ({totalRating})
          </span>
        </div>
      </div>

      <div className="mt-[18px] flex items-center justify-between lg:mt-5">
        <div>
          {/* <h3 className="text-[16px] font-semibold leading-7 text-headingColor lg:text-[18px] lg:leading-[30px] ">
            + {totalPatients} patients
          </h3> */}
          <p className="text-[14px] font-[400] leading-6 text-textColor ">
            At {experiences && experiences[0]?.hospital}
          </p>
        </div>
        <Link
          to={`/doctors/${doctor._id}`}
          className="group flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
        >
          <BsArrowRight className="h-5 w-6 transition-all duration-300 group-hover:text-white" />
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;
