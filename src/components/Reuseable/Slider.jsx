// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./Slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Scrollbar } from "swiper/modules";
import SliderNavigation from "./SliderNavigation";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ description, items }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="py-20  relative"
    >
      <div className="lg:hidden mx-auto lg:mx-0 w-11/12 md:w-11/12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <p className="text-lg font-semibold font-Questrial mb-4">
              <small>{description.tag}</small>
            </p>
            <h1 className="text-2xl font-Questrial mb-4">
              {description.title}
            </h1>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-[15px] font-Questrial mb-10">
              {description.details}
            </p>
            <button className="flex items-center font-Questrial">
              <span>{description.button_name}</span>
              <AiOutlineArrowRight className="ml-1"></AiOutlineArrowRight>
            </button>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={60}
        breakpoints={{
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          0: {
            slidesPerView: "auto", // Set to 'auto' to take up full width
            slidesPerGroup: 1, // You can adjust this as needed
          },
        }}
        scrollbar={true}
        pagination={{
          clickable: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper px-20 relative z-0 "
      >
        <div className="">
          <SwiperSlide className="h-[30rem] hidden lg:block">
            <p className="text-lg font-semibold font-Questrial mb-4">
              <small>{description.tag}</small>
            </p>
            <h1 className="text-2xl font-Questrial mb-4">
              {description.title}
            </h1>
            <p className="text-[15px] font-Questrial mb-10">
              {description.details}
            </p>
            <button className="flex items-center font-Questrial">
              <span>{description.button_name}</span>
              <AiOutlineArrowRight className="ml-1"></AiOutlineArrowRight>
            </button>
          </SwiperSlide>
          {items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="h-[30rem] flex flex-col justify-end pb-16 items-center"
            >
              <div>
                <img
                  src={item.image}
                  className="h-80 sm:h-96 md:h-80 w-[45rem]"
                />
                <div className="font-Questrial text-center text-[15px]">
                  <p className="font-semibold">{item.name}</p>
                  <p>{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>

        <SliderNavigation visible={visible}></SliderNavigation>
      </Swiper>
    </div>
  );
};

export default Slider;
