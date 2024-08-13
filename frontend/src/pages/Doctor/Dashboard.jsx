import { useGetDoctorProfile } from "../../hooks/useGetDoctorProfile";
import { useState } from "react";
import starIcon from "../../assets/images/Star.png";
import Loader from "../../components/Loader";
import DoctorAbout from "./DoctorAbout";
import Tabs from "./Tabs";
import DoctorProfile from "./DoctorProfile";
import Appointments from "./Appointments";

function Dashboard() {
  const { isPending, doctorData } = useGetDoctorProfile();
  console.log(doctorData);
  const [tab, setTab] = useState("overview");

  return (
    <section>
      <div className="mx-auto max-w-[1170px] px-5 ">
        {isPending && <Loader />}
        {!isPending && (
          <div className="grid gap-[30px] lg:grid-cols-3 lg:gap-[50px] ">
            <Tabs tab={tab} setTab={setTab} />
            <div className="lg:col-span-2">
              {doctorData?.isApproved === "pending" && (
                <div className="mb-4 flex rounded-lg bg-yellow-200 p-4 text-yellow-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 flex-shrink-0"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                    />
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review manually and approve within 3 days.
                  </div>
                </div>
              )}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    <div className="mb-20 flex items-center gap-4">
                      <figure className="max-h-[200px] max-w-[200px] ">
                        <img
                          src={doctorData?.photo}
                          alt=""
                          className="w-full"
                        />
                      </figure>
                      <div>
                        {doctorData?.specialization && (
                          <span className="lg:px06 rounded bg-[#ccf0f3] px-4 py-1 text-[12px] font-semibold leading-4 text-irisBlueColor lg:py-2 lg:text-[16px] lg:leading-6 ">
                            {doctorData?.specialization}
                          </span>
                        )}
                        {doctorData?.name && (
                          <h3 className="mt-3 text-[22px] font-bold leading-9 text-headingColor ">
                            {doctorData?.name}
                          </h3>
                        )}

                        <div className="flex items-center gap-[6px] ">
                          <span className="flex items-center gap-[6px] text-[14px] font-semibold leading-5 text-headingColor lg:text-[16px] lg:leading-6 ">
                            <img src={starIcon} alt="star-rating" />
                            {doctorData?.averageRating}
                          </span>
                          <span className="text-[14px] font-semibold leading-5 text-textColor lg:text-[16px] lg:leading-6 ">
                            ({doctorData?.totalRating})
                          </span>
                        </div>
                        <p className="text__para font-[15px] leading-6 lg:max-w-[390px] ">
                          {doctorData?.bio}
                        </p>
                      </div>
                    </div>
                    <DoctorAbout
                      name={doctorData?.name}
                      about={doctorData?.about}
                      qualifications={doctorData?.qualifications}
                      experiences={doctorData?.experiences}
                    />
                  </div>
                )}
                {tab === "appointments" && (
                  <Appointments appointments={doctorData?.appointments} />
                )}
                {tab === "settings" && (
                  <DoctorProfile doctorData={doctorData} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dashboard;
