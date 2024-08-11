import { useState } from "react";
// import { useUser } from "../context/UserContext";
import { useLogout } from "../hooks/useLogout";
import Bookings from "../components/Bookings";
import Settings from "../components/Settings";
import { useGetProfile } from "../hooks/useGetProfile";
import Loader from "../components/Loader";
// import { useGetBookings } from "../hooks/useGetBookings";
function UserProfile() {
  // const { user } = useUser();
  // const { isPending, bookings } = useGetBookings();
  // console.log(bookings);
  const { isPending, userData } = useGetProfile();
  const { logout } = useLogout();
  const [tab, setTab] = useState("bookings");

  return (
    <section>
      <div className="mx-auto max-w-[1170px] px-5">
        {isPending && <Loader />}
        {!isPending && (
          <div className="grid gap-10 md:grid-cols-3">
            <div className="rounded-md px-[30px] pb-[50px] ">
              <div className="flex items-center justify-center">
                {userData?.photo && (
                  <figure className="h-[100px] w-[100px] rounded-full border-2 border-solid border-primaryColor ">
                    <img
                      src={userData?.photo}
                      alt="user-image"
                      className="h-full w-full rounded-full"
                    />
                  </figure>
                )}
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-[18px] font-bold leading-[30px] text-headingColor ">
                  {userData?.name}
                </h3>
                <p className="text-[15px] font-medium leading-6 text-textColor ">
                  {userData?.email}{" "}
                </p>
                <p className="text-[15px] font-medium leading-6 text-textColor ">
                  Blood Type:{" "}
                  <span className="ml-2 text-[22px] leading-8 text-headingColor ">
                    {userData?.bloodType}
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[30px] ">
                <button
                  className="mt-4 w-full rounded-md bg-[#181a1e] p-3 text-[16px] leading-7 text-white "
                  onClick={logout}
                >
                  Logout account
                </button>
                <button className="mt-4 w-full rounded-md bg-red-600 p-3 text-[16px] leading-7 text-white ">
                  Delete account
                </button>
              </div>
            </div>

            <div className="md:col-span-2 md:px-[30px] ">
              <div>
                <button
                  onClick={() => setTab("bookings")}
                  className={`${tab === "bookings" && "bg-primaryColor font-normal text-white transition-all duration-300"} mr-5 rounded-md border border-solid border-primaryColor p-2 text-[16px] font-semibold leading-7 text-headingColor`}
                >
                  My Bookings
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${tab === "settings" && "bg-primaryColor font-normal text-white transition-all duration-300"} mr-5 rounded-md border border-solid border-primaryColor p-2 text-[16px] font-semibold leading-7 text-headingColor`}
                >
                  Profile settings
                </button>
              </div>
              {tab === "bookings" && <Bookings />}
              {tab === "settings" && <Settings user={userData} />}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default UserProfile;
