import logo from "../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  const socialLinks = [
    {
      icon: <AiFillYoutube className="h-5 w-4 group-hover:text-white" />,
    },
    {
      icon: <AiFillGithub className="h-5 w-4 group-hover:text-white" />,
    },
    {
      icon: <AiOutlineInstagram className="h-5 w-4 group-hover:text-white" />,
    },
    {
      icon: <RiLinkedinFill className="h-5 w-4 group-hover:text-white" />,
    },
  ];

  const quickLinks01 = [
    {
      path: "/",
      display: "Home",
    },
    {
      path: "/",
      display: "About Us",
    },
    {
      path: "/services",
      display: "Services",
    },
    {
      path: "/",
      display: "Blog",
    },
  ];

  const quickLinks02 = [
    {
      path: "/find-a-doctor",
      display: "Find a Doctor",
    },
    {
      path: "/",
      display: "Request an Appointment",
    },
    {
      path: "/",
      display: "Find a Location",
    },
    {
      path: "/",
      display: "Get an Opinion",
    },
  ];

  const quickLinks03 = [
    {
      path: "/",
      display: "Donate",
    },
    {
      path: "/",
      display: "Contact Us",
    },
  ];

  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex flex-col flex-wrap justify-between gap-[30px] md:flex-row ">
          <div>
            <img src={logo} alt="logo" />
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              Copyright &copy; {year} developed by Muhammad Abubakar all right
              reserved
            </p>

            <div className="mt-4 flex items-center gap-3">
              {socialLinks.map((link, index) => (
                <Link
                  // to={link.path}
                  key={index}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-solid border-[#181a1e] transition-all duration-300 hover:border-none hover:bg-primaryColor"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-[700] leading-[30px] text-headingColor  ">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] font-[400] leading-7 text-textColor "
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-[700] leading-[30px] text-headingColor  ">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] font-[400] leading-7 text-textColor "
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 text-[20px] font-[700] leading-[30px] text-headingColor  ">
              I want to:
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] font-[400] leading-7 text-textColor "
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
