import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import DoctorList from "../components/DoctorList";
import About from "../components/About";
// import ServicesList from "../components/ServicesList";
import heroImg1 from "../assets/images/hero-img01.png";
import heroImg2 from "../assets/images/hero-img02.png";
import heroImg3 from "../assets/images/hero-img03.png";
import icon1 from "../assets/images/icon01.png";
import icon2 from "../assets/images/icon02.png";
import icon3 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import FaqList from "../components/FaqList";
// import Testimonial from "../components/Testimonial";

function HomePage() {
  return (
    <>
      <section className="hero__section 2xl:h-[800px] pt-[60px]">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-[90px] lg:flex-row">
            {/* Hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] font-[800] leading-[46px] text-headingColor md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life by Allah`s will.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto possimus sint aliquam, necessitatibus iusto neque
                  molestiae, voluptates amet vel maxime repudiandae natus.
                </p>
                <button className="btn">Request Appointment</button>
              </div>

              {/* Hero counter */}
              <div className="mt-[30px] flex flex-col gap-5 lg:mt-[70px] lg:flex-row lg:items-center lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] font-[700] leading-[56px] text-headingColor lg:text-[44px] lg:leading-[54px] ">
                    30+
                  </h2>
                  <span className="mt-[-14px] block h-2 w-[100px] rounded-full bg-yellowColor"></span>
                  <p>Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] font-[700] leading-[56px] text-headingColor lg:text-[44px] lg:leading-[54px] ">
                    15+
                  </h2>
                  <span className="mt-[-14px] block h-2 w-[100px] rounded-full bg-purpleColor"></span>
                  <p>Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] font-[700] leading-[56px] text-headingColor lg:text-[44px] lg:leading-[54px] ">
                    100%
                  </h2>
                  <span className="mt-[-14px] block h-2 w-[100px] rounded-full bg-irisBlueColor"></span>
                  <p>Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/* Hero Content */}
            <div className="flex justify-end gap-[30px]">
              <div>
                <img src={heroImg1} alt="hero-img" className="w-full" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg2} alt="" className="mb-[30px] w-full" />
                <img src={heroImg3} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero section ends */}

      <section>
        <div className="container">
          <div className="mx-auto lg:w-[470px]">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health systems offers
              unmatched, expert health care.
            </p>
          </div>

          <div className="mt-[30px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-[55px] lg:grid-cols-3 lg:gap-[30px] ">
            <div className="px-5 py-[30px] ">
              <div className="flex items-center justify-center">
                <img src={icon1} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-center text-[26px] font-[700] leading-9 text-headingColor ">
                  Find a Doctor
                </h2>
                <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor ">
                  World-class for everyone. Our health System offers unmatched,
                  expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
                >
                  <BsArrowRight className="h-5 w-6 transition-all duration-300 group-hover:text-white" />
                </Link>
              </div>
            </div>

            {/* first */}
            <div className="px-5 py-[30px] ">
              <div className="flex items-center justify-center">
                <img src={icon2} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-center text-[26px] font-[700] leading-9 text-headingColor ">
                  Find a Location
                </h2>
                <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor ">
                  World-class for everyone. Our health System offers unmatched,
                  expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
                >
                  <BsArrowRight className="h-5 w-6 transition-all duration-300 group-hover:text-white" />
                </Link>
              </div>
            </div>

            {/* second */}
            <div className="px-5 py-[30px] ">
              <div className="flex items-center justify-center">
                <img src={icon3} alt="icon" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-center text-[26px] font-[700] leading-9 text-headingColor ">
                  Book an Appointment
                </h2>
                <p className="mt-4 text-center text-[16px] font-[400] leading-7 text-textColor ">
                  World-class for everyone. Our health System offers unmatched,
                  expert health care. From the lab to the clinic.
                </p>
                <Link
                  to="/doctors"
                  className="group mx-auto mt-[30px] flex h-[44px] w-[44px] items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor "
                >
                  <BsArrowRight className="h-5 w-6 transition-all duration-300 group-hover:text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/* Services section */}
      {/* <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched.
              expert health care
            </p>
          </div>
          <ServicesList />
        </div>
      </section> */}
      {/* Services section end */}

      {/* Features section */}
      <section>
        <div className="container">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br /> anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* Feature img */}
            <div className="relative z-10 mt-[50px] flex justify-end lg:mt-0 xl:w-[770px] ">
              <img src={featureImg} alt="feature-img" className="w-3/4" />{" "}
              {/**md:bottom-[100px] I removed it from the followed div */}
              <div className="absolute bottom-[50px] left-0  z-20 w-[150px] rounded-[10px] bg-white p-2 pb-3 md:bottom-[-20px]  md:left-5 lg:w-[248px] lg:px-4 lg:pb-[26px] lg:pt-4 ">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3 ">
                    <p className="text-[10px] font-[600] leading-[10px] text-headingColor lg:text-[14px] lg:leading-5 ">
                      Tue, 24
                    </p>
                    <p className="text-[10px] font-[400] leading-[10px] text-textColor lg:text-[14px] lg:leading-5">
                      10:00AM
                    </p>
                  </div>
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-yellowColor px-[6px]  py-1 lg:h-[34px] lg:w-[34px] lg:px-[9px] lg:py-3">
                    <img src={videoIcon} alt="video-icon" />
                  </span>
                </div>

                <div className="mt-2 w-[65px] rounded-full bg-[#ccf0f3] px-2 py-1 text-[8px] font-[500] leading-[8px] text-irisBlueColor lg:mt-4 lg:w-[96px] lg:px-[10px] lg:py-[6px] lg:text-[12px] lg:leading-4 ">
                  Consultation
                </div>

                <div className="mt-2 flex items-center gap-[6px] lg:mt-[18px] lg:gap-[10px] ">
                  <img src={avatarIcon} alt="avatar-icon" />
                  <h4 className="text-[10px] font-[700] leading-3 text-headingColor lg:text-[16px] lg:leading-[22px] ">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our great doctors */}
      <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px]">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched.
              expert health care
            </p>
          </div>
          <DoctorList />
        </div>
      </section>

      {/* Faq section */}
      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className="hidden w-1/2 md:block">
              <img src={faqImg} alt="faq-img" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {/* <section>
        <div className="container">
          <div className="mx-auto xl:w-[470px] ">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health system offers unmatched.
              expert health care
            </p>
          </div>
          <Testimonial />
        </div>
      </section> */}
    </>
  );
}

export default HomePage;
