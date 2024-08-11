import patientAvatar from "../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  return (
    <div className="mt-[30px] lg:mt-[55px] ">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="rounded-3 px-5 py-[30px] ">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor ">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              “I have taken medical services from them. They treat so well and
              they provide the best medical services ”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3 px-5 py-[30px] ">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor ">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              “I have taken medical services from them. They treat so well and
              they provide the best medical services ”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3 px-5 py-[30px] ">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor ">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              “I have taken medical services from them. They treat so well and
              they provide the best medical services ”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3 px-5 py-[30px] ">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor ">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              “I have taken medical services from them. They treat so well and
              they provide the best medical services ”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3 px-5 py-[30px] ">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor ">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              “I have taken medical services from them. They treat so well and
              they provide the best medical services ”
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="rounded-3 px-5 py-[30px] ">
            <div className="flex items-center gap-[13px] ">
              <img src={patientAvatar} alt="patient avatar" />
              <div>
                <h4 className="text-[18px] font-semibold leading-[30px] text-headingColor ">
                  Muhibur Rahman
                </h4>
                <div className="flex items-center gap-[2px] ">
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                  <HiStar className="h-5 w-[18px] text-yellowColor " />
                </div>
              </div>
            </div>
            <p className="mt-4 text-[16px] font-[400] leading-7 text-textColor ">
              “I have taken medical services from them. They treat so well and
              they provide the best medical services ”
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Testimonial;
