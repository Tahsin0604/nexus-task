import logo from "../../../public/img/logo.svg";
import logoBlack from "../../../public/img/logo-black.svg";
import { BiSearch, BiHeart } from "react-icons/bi";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import "./MobileNav.css";

const MobileNav = ({ isOriginal }) => {
  return (
    <div className={`flex justify-between items-center custom-container `}>
      {isOriginal ? (
        <img src={logo} alt="" className="h-6" />
      ) : (
        <img src={logoBlack} alt="" className="h-6" />
      )}
      <ul
        className={`flex items-center gap-6 font-Questrial font-semibold text-[.915rem] ${
          isOriginal ? "text-white" : "text-black"
        }`}
      >
        <li
          className={`text-xl  cursor-pointer ${
            isOriginal ? "text-white" : "text-black"
          }`}
        >
          <BiSearch></BiSearch>
        </li>
        <li
          className={`text-xl  cursor-pointer ${
            isOriginal ? "text-white" : "text-black"
          }`}
        >
          <BiHeart></BiHeart>
        </li>

        <li className="cursor-pointer">
          <button
            className={`group relative text-base font-normal ${
              isOriginal ? "text-white" : "text-black"
            } transition-all duration-300 focus:outline-none`}
          >
            <span className="relative z-10">Cart</span>
            <div
              className={`absolute left-0 w-0  ${
                isOriginal ? "bg-white" : "bg-black"
              } h-[2px] transition-all duration-300 transform translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:w-full`}
            ></div>
          </button>
        </li>
        <li
          className={`text-xl ${
            isOriginal ? "text-white" : "text-black"
          } cursor-pointer`}
        >
          <HiOutlineMenuAlt4></HiOutlineMenuAlt4>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
