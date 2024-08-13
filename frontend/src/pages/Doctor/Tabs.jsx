/* eslint-disable react/prop-types */

import { useLogout } from "../../hooks/useLogout";
function Tabs({ tab, setTab }) {
  const { logout } = useLogout();
  return (
    <div>
      <div className=" h-max flex-col items-center rounded-md bg-white p-[30px] shadow-panelShadow transition-all duration-300 lg:flex ">
        <button
          onClick={() => setTab("overview")}
          className={`${tab === "overview" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} btn mt-0  w-full rounded-md transition-all duration-300`}
        >
          Overview
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${tab === "appointments" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} btn mt-0  w-full rounded-md transition-all duration-300`}
        >
          Appointments
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${tab === "settings" ? "bg-indigo-100 text-primaryColor" : "bg-transparent text-headingColor"} btn mt-0  w-full rounded-md transition-all duration-300`}
        >
          Profile
        </button>
        <div className="mt-[50px] w-full  ">
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
    </div>
  );
}

export default Tabs;
