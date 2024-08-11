import { Link, NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.png";
// import userImg from "../assets/images/avatar-icon.png";
import { useUser } from "../context/UserContext";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find a doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const { user } = useUser();
  console.log(user?.photo);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTo > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Add your logic here to check if the menu should be closed on scroll
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    handleStickyHeader();
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  }, []);

  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="logo" />
          </div>

          {/* menu */}
          <div
            className={`navigation ${isMenuOpen ? "show__menu" : ""}`}
            onClick={toggleMenu}
          >
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-[1rem] font-[600] leading-7 text-primaryColor"
                        : "text-[16px] font-[500] leading-7 text-textColor transition-all duration-300 hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* nav right */}
          <div className="flex items-center gap-4">
            {user ? (
              <div>
                <Link
                  to={`${user.role === "doctor" ? "/doctor/profile" : "/users/profile"}`}
                >
                  {user?.photo ? (
                    <figure className="h-[35-px] w-[35px] cursor-pointer rounded-full">
                      <img
                        src={user?.photo}
                        className="w-full rounded-full"
                        alt="user"
                      />
                    </figure>
                  ) : (
                    <button className="flex h-[44px] items-center justify-center rounded-[50px] bg-primaryColor px-6 py-2 font-[600] text-white">
                      Profile
                    </button>
                  )}
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="flex h-[44px] items-center justify-center rounded-[50px] bg-primaryColor px-6 py-2 font-[600] text-white">
                  Login
                </button>
              </Link>
            )}

            <span className="z-[99999] md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? (
                <IoMdClose className="h-6 w-6 cursor-pointer" />
              ) : (
                <BiMenu className="h-6 w-6 cursor-pointer" />
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
