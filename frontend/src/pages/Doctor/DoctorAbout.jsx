/* eslint-disable react/prop-types */
import { formatDate } from "../../utils/formatDate";

function DoctorAbout({ name, about, qualifications, experiences }) {
  return (
    <div>
      <div>
        <h3 className="flex items-center gap-2 text-[20px] font-semibold leading-[30px] text-headingColor ">
          About of
          <span className="text-[24px] font-bold leading-9 text-irisBlueColor ">
            {name}
          </span>
        </h3>

        <p className="text__para">{about}</p>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] font-semibold leading-[30px] text-headingColor ">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {qualifications?.map((item, index) => (
            <li
              key={index}
              className="mb:gap-5 mb-[30px] flex flex-col sm:flex-row sm:items-end sm:justify-between"
            >
              <div>
                <span className="font-semibold leading-6 text-irisBlueColor ">
                  {formatDate(item?.staringDate)} -{" "}
                  {formatDate(item?.endingDate)}
                </span>
                <p className="text-[16px] font-medium leading-6 text-textColor ">
                  {item?.degree}
                </p>
              </div>
              <p className="text-[14px] font-medium leading-5 text-textColor ">
                {item?.university}
              </p>
            </li>
          ))}

          {/* <li className="mb:gap-5 mb-[30px] flex flex-col sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="font-semibold leading-6 text-irisBlueColor ">
                {formatDate("07-04-2010")} - {formatDate("09-13-2014")}
              </span>
              <p className="text-[16px] font-medium leading-6 text-textColor ">
                PHD in Surgeon
              </p>
            </div>
            <p className="text-[14px] font-medium leading-5 text-textColor ">
              New Apollo Hospital, New York.
            </p>
          </li> */}
        </ul>
      </div>

      <div className="mt-12">
        <h3 className="text-[20px] font-semibold leading-[30px] text-headingColor ">
          Experience
        </h3>
        <ul className="grid gap-[30px]  pt-4 sm:grid-cols-2 md:p-5">
          {experiences?.map((item, index) => (
            <li className="rounded bg-[#fff9ea] p-4 " key={index}>
              <span className="text-[15px] font-semibold leading-6 text-yellowColor">
                {formatDate(item?.staringDate)} - {formatDate(item?.endingDate)}
              </span>
              <p className="text-[16px] font-medium leading-6 text-textColor ">
                {item?.position}
              </p>
              <p className="text-[14px] font-medium leading-5 text-textColor ">
                {item?.hospital}
              </p>
            </li>
          ))}

          {/* <li className="rounded bg-[#fff9ea] p-4 ">
            <span className="text-[15px] font-semibold leading-6 text-yellowColor">
              {formatDate("07-04-2010")} - {formatDate("09-13-2014")}
            </span>
            <p className="text-[16px] font-medium leading-6 text-textColor ">
              Sr. Surgeon
            </p>
            <p className="text-[14px] font-medium leading-5 text-textColor ">
              New Apollo Hospital, New York.
            </p>
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default DoctorAbout;
