import { AiOutlineArrowRight } from "react-icons/ai";
import image1 from "../../../public/img/slider/Aesop_Fashion_Walk_II_Mid_Desktop_2560x1440px.jpg";
import image2 from "../../../public/img/slider/Aesop_HK_Store_IFC_III_Hero_Bleed_Desktop_2880x1620px.jpg";
import image3 from "../../../public/img/slider/Aesop_MOKO_II_Mid_Desktop_2560x1440px.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import "./Slider.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

// import required modules
import { Scrollbar } from "swiper/modules";
// import SliderNavigation from "./SliderNavigation";
import { useState } from "react";
import SliderNavigation from "../Reuseable/SliderNavigation";

const BlogThree = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className=" py-20 flex flex-col lg:flex-row gap-24">
      <div className="mx-auto lg:mx-0 w-11/12 md:w-8/12 lg:w-5/12 pl-0 lg:pl-20">
        <h1 className="text-2xl font-Questrial mb-4">Store locator</h1>
        <p className="text-[16px] font-Questrial mb-10">
          Our consultants are available to host you in-store and provide
          tailored guidance on gift purchases.
        </p>
        <button className="custom-button border-[#333333] hover:bg-[#333333] hover:text-white">
          <p className="flex justify-between items-center font-Questrial">
            <span>Find a nearby store</span>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </p>
        </button>
      </div>

      <div
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="w-12/12 md:w-11/12 lg:w-7/12 pl-5 md:pl-0 md:ml-auto"
      >
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          modules={[Scrollbar]}
          className="mySwiper relative  w-full"
        >
          <div className="w-full">
            <SwiperSlide className="h-[32rem] w-full mb-12">
              <img src={image1} className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="h-[32rem] w-full mb-12">
              <img src={image2} className="h-full" />
            </SwiperSlide>
            <SwiperSlide className="h-[32rem] w-full mb-12">
              <img src={image3} className="h-full" />
            </SwiperSlide>
          </div>
          <SliderNavigation visible={visible}></SliderNavigation>
        </Swiper>
      </div>
    </div>
  );
};

export default BlogThree;
