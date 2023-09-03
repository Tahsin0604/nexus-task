import { useSwiper } from "swiper/react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useEffect, useState } from "react";

const SliderNavigation = ({ visible }) => {
  const swiper = useSwiper();
  const [visiblePrev, setVisiblePrev] = useState(false);
  const [visibleNext, setVisibleNext] = useState(true);
  const [isStart, setIsStart] = useState(swiper.isBeginning);
  const [isEnd, setIsEnd] = useState(swiper.isEnd);
  useEffect(() => {
    if (isStart === true && isEnd === false) {
      setVisiblePrev(false);
      setVisibleNext(true);
      return;
    }
    if (isStart === false && isEnd === true) {
      setVisiblePrev(true);
      setVisibleNext(false);
      return;
    }
    if (isStart === false && isEnd === false) {
      setVisiblePrev(true);
      setVisibleNext(true);
      return;
    }
  }, [isStart, isEnd]);

  const handlePrev = () => {
    swiper.slidePrev();
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    console.log(swiper.isBeginning, swiper.isEnd);
  };

  const handleNext = () => {
    swiper.slideNext();
    setIsStart(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    console.log(swiper.isBeginning, swiper.isEnd);
  };

  return (
    <div className="absolute inset-0 flex justify-between ">
      <div className="flex flex-col justify-center h-full z-10">
        {swiper && !swiper.isBeginning && (
          <button
            onClick={() => handlePrev()}
            className={`bg-[#333333]  text-white h-20 w-20 flex justify-center items-center relative transition delay-100 duration-300 ${
              visible
                ? visiblePrev
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-80 opacity-0"
                : "-translate-x-80 opacity-0"
            }`}
          >
            <MdOutlineKeyboardArrowLeft className="text-4xl font-light"></MdOutlineKeyboardArrowLeft>
          </button>
        )}
      </div>
      <div className="flex flex-col justify-center h-full z-10">
        {swiper && !swiper.isEnd && (
          <button
            onClick={() => handleNext()}
            className={`bg-[#333333] z-10 text-white h-20 w-20 flex justify-center items-center relative transition delay-100 duration-300 ${
              visible
                ? visibleNext
                  ? "translate-x-0 opacity-100"
                  : "translate-x-80 opacity-0"
                : "translate-x-80 opacity-0"
            }`}
          >
            <MdOutlineKeyboardArrowRight className="text-4xl font-light"></MdOutlineKeyboardArrowRight>
          </button>
        )}
      </div>
    </div>
  );
};

export default SliderNavigation;
