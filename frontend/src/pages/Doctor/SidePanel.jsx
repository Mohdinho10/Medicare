/* eslint-disable react/prop-types */
import { useUser } from "../../context/UserContext";
import { useCreateBooking } from "../../hooks/useCreatBooking";
import { convertTIme } from "../../utils/convertTime";
import { formatCurrency } from "../../utils/currency";

function SidePanel({ doctorId, ticketPrice, timeSlot }) {
  const { book } = useCreateBooking();
  const { user } = useUser();
  console.log(user);

  const loggedIn = user._id === doctorId;
  console.log(loggedIn);

  const bookingHandler = () => {
    book(doctorId);
  };

  return (
    <>
      {ticketPrice && (
        <div className="rounded-md p-3 shadow-panelShadow lg:p-5">
          <div className="flex items-center justify-between">
            <p className="text__para mt-0 font-semibold">Ticket Price</p>
            <span className="text-[16px] font-bold leading-7 text-headingColor lg:text-[22px] lg:leading-8 ">
              {formatCurrency(ticketPrice)}
            </span>
          </div>

          <div className="mt-[30px] ">
            <p className="text__para mt-0 font-semibold text-headingColor">
              Available Time Slots:
            </p>

            <ul className="mt-3">
              {timeSlot?.map((item, index) => {
                <li
                  className="mb-2 flex items-center justify-between"
                  key={index}
                >
                  <p className="text-[15px] font-semibold leading-6 text-textColor ">
                    {item?.day.charAt(0).toUpperCase() + item.day.slice(1)}
                  </p>
                  <p className="text-[15px] font-semibold leading-6 text-textColor ">
                    {convertTIme(item.startingTime)} -{" "}
                    {convertTIme(item.endingTime)}
                  </p>
                </li>;
              })}
            </ul>
          </div>
          {!loggedIn && (
            <button
              onClick={bookingHandler}
              className="btn w-full rounded-md px-2"
            >
              Book Appointment
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default SidePanel;
