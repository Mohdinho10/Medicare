import { useState } from "react";

import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback";
import SidePanel from "./SidePanel";
import { useGetDoctor } from "../../hooks/useGetDoctor";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

function DoctorDetails() {
  const [tab, setTab] = useState("about");
  const { id } = useParams();
  const { isPending, doctor } = useGetDoctor(id);

  const {
    name,
    // email,
    // phone,
    // bio,
    specialization,
    ticketPrice,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    about,
    totalRating,
    averageRating,
    photo,
  } = doctor || {};
  return (
    <section>
      <div className="mx-auto max-w-[1170px] px-5 ">
        {isPending && <Loader />}
        {!isPending && (
          <div className="grid gap-[50px] md:grid-cols-3 ">
            <div className="md:col-span-2">
              <div className="flex items-center gap-5">
                <figure className="max-h-[200px] max-w-[200px] ">
                  <img src={photo} alt="" className="h-[250px]" />
                </figure>

                <div>
                  <span className="rounded bg-[#ccf0f3] px-6 py-1 text-[12px] font-semibold leading-4 text-irisBlueColor lg:px-6 lg:py-2 lg:text-[16px] lg:leading-7 ">
                    {specialization}
                  </span>
                  <h3 className="mt-3 text-[22px] font-bold leading-9 text-headingColor">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px] ">
                    <span className="flex items-center gap-[6px] text-[14px] font-semibold leading-5 text-headingColor lg:text-[16px] lg:leading-7 ">
                      <img src={starIcon} alt="" /> {averageRating}
                    </span>
                    <span className="text-[14px] font-semibold leading-5 text-textColor lg:text-[16px] lg:leading-7 ">
                      ({totalRating})
                    </span>
                  </div>

                  <p className="text__para text-[14px] leading-6 md:text-[15px] lg:max-w-[390px] ">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quod ut doloribus saepe quo iusto alias
                  </p>
                </div>
              </div>

              <div className="mt-[50px] border-b border-solid border-[#006ff34] ">
                <button
                  onClick={() => setTab("about")}
                  className={`${tab === "about" && "border-b border-solid border-primaryColor"} && mr-5 px-5 py-2 text-[16px] font-semibold leading-7 text-headingColor transition-all duration-300 `}
                >
                  About
                </button>

                <button
                  onClick={() => setTab("feedback")}
                  className={`${tab === "feedback" && "border-b border-solid border-primaryColor"} mr-5 px-5 py-2 text-[16px] font-semibold leading-7 text-headingColor transition-all duration-300 `}
                >
                  Feedback
                </button>
              </div>

              <div className="mt-[50px] ">
                {tab === "about" && (
                  <DoctorAbout
                    name={name}
                    about={about}
                    qualifications={qualifications}
                    experiences={experiences}
                  />
                )}
                {tab === "feedback" && (
                  <Feedback reviews={reviews} totalRating={totalRating} />
                )}
              </div>
            </div>

            <div>
              <SidePanel
                doctorId={doctor._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default DoctorDetails;
