import logo from "../../../public/img/logo.svg";
import { AiOutlineArrowRight } from "react-icons/ai";

import "./Banner.css";
const Banner = () => {
  return (
    <div className="min-h-[69vh] overflow-hidden">
      <div className="relative banner custom-container z-0 min-h-[69vh] h-full pt-24 pb-28 md:pb-52 lg:pb-30">
        <div className="hidden md:flex items-start gap-24">
          <img src={logo} alt="" className="md:h-8 lg:h-10" />
          <div className="text-white font-Questrial md:w-[38rem] lg:w-[27rem] ">
            <p className="text-lg font-bold mb-4">
              <small>Bar Soaps</small>
            </p>
            <h1 className="text-3xl w-10/12 mb-4">
              A body care classic, reimagined
            </h1>
            <p className="mb-6 font-Questrial">
              Breathing new life into the humble bar soap are Nurture, Polish
              and Refresh—three additions to the range, each imparting a unique
              constellation of benefits. 
            </p>
            <button className="custom-button border-white hover:bg-white hover:text-black">
              <p className="flex justify-between items-center font-Questrial">
                <span>Discover Bar Soaps</span>
                <AiOutlineArrowRight></AiOutlineArrowRight>
              </p>
            </button>
          </div>
        </div>
        <div className="banner-img absolute inset-0 -z-10"></div>
        {/*  */}
      </div>
    </div>
  );
};

export default Banner;
