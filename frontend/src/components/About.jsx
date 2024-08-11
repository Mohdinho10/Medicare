import aboutImg from "../assets/images/about.png";
import aboutCardImg from "../assets/images/about-card.png";
import { Link } from "react-router-dom";

function About() {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col justify-between gap-[50px] lg:flex-row lg:gap-[130px] xl:gap-0 ">
          {/* About img */}
          <div className="relative z-10 order-2 w-3/4 lg:order-1 lg:w-1/2 xl:w-[770px]">
            <img src={aboutImg} alt="" />
            <div className="absolute bottom-4 right-[-30%] z-20 w-[200px] md:right-[-7%] md:w-[300px] lg:right-[y22%] ">
              <img src={aboutCardImg} alt="" />
            </div>
          </div>
          {/* About content */}
          <div className="order-1 w-full lg:order-2 lg:w-1/2 xl:w-[670px] ">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best publics hospitals in the Nation and #1 in
              Texas. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Non vitae maxime unde nisi reiciendis doloremque.
            </p>

            <p className="text__para mt-[30px] ">
              Our best is something we strive for each day, caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. Providing the best. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nulla, placeat deserunt. Sed
              asperiores neque rerum rem? Deserunt, est voluptatibus. Enim?
            </p>

            <Link to="/">
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
