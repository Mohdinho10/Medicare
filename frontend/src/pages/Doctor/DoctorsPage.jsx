// import { doctors } from "../../assets/data/doctors";
import { useEffect, useState } from "react";
import DoctorCard from "../../components/DoctorCard";
import Loader from "../../components/Loader";
import Testimonial from "../../components/Testimonial";
import { useGetDoctors } from "../../hooks/useGetDoctors";

function DoctorsPage() {
  const [query, setQuery] = useState("");

  const [debounceQuery, setDebounceQuery] = useState("");

  const searchHandler = () => {
    setQuery(query.trim());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const { isPending, doctors } = useGetDoctors(debounceQuery);
  return (
    <>
      <section className="bg-[#fff9ae] ">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="mx-auto mt-[30px] flex max-w-[570px] items-center justify-between rounded-md bg-[#0066ff2c] ">
            <input
              type="search"
              className="w-full cursor-pointer bg-transparent py-4 pl-4 pr-2 focus:outline-none"
              placeholder="Search doctor by name or specifications"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={searchHandler}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {isPending && <Loader />}
          {!isPending && (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {doctors.map((doctor) => (
                <DoctorCard doctor={doctor} key={doctor.id} />
              ))}
              {doctors.length === 0 && !isPending && (
                <p className="text-center">No doctor found</p>
              )}
            </div>
          )}
        </div>
      </section>

      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px] ">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              {" "}
              World-class care for everyone. Our health system offers unmatched.
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
}

export default DoctorsPage;
