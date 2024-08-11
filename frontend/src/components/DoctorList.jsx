// import { doctors } from "../assets/data/doctors";
import { useGetDoctors } from "../hooks/useGetDoctors";
import DoctorCard from "./DoctorCard";

function DoctorList() {
  const { isPending, doctors } = useGetDoctors("");
  console.log(doctors);

  return (
    <>
      {!isPending && (
        <div className="mt-[30px] grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:mt-[55px] lg:gap-[30px] ">
          {doctors?.map((doctor) => (
            <DoctorCard doctor={doctor} key={doctor?._id} />
          ))}
        </div>
      )}
    </>
  );
}

export default DoctorList;
