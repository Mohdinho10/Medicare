import { useGetBookings } from "../hooks/useGetBookings";
import DoctorCard from "./DoctorCard";
import Loader from "./Loader";

function Bookings() {
  const { isPending, bookings } = useGetBookings();

  return (
    <div>
      {isPending && <Loader />}

      {!isPending && (
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {bookings?.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor?._id} />
          ))}
        </div>
      )}
      {!isPending && bookings?.length === 0 && (
        <h2 className="mt-5 text-center text-[20px] font-semibold leading-7  text-primaryColor">
          Yo did not book any doctor yet!
        </h2>
      )}
    </div>
  );
}

export default Bookings;
