import { BiSearch } from "react-icons/bi";
import MobileNav from "../MobileNav/MobileNav";
import { useEffect, useState } from "react";

const Header = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isOriginal, setIsOriginal] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    // if (window.scrollY < 50) {
    //   setIsNavbarVisible(false);
    // }

    const handleScroll = () => {
      if (window.scrollY < 150) {
        setIsOriginal(true);
        setIsNavbarVisible(false);
      } else {
        setIsOriginal(false);
        const currentScrollPos = window.scrollY;
        const isScrollingUp = prevScrollPos > currentScrollPos;
        setIsNavbarVisible(isScrollingUp);
        prevScrollPos = currentScrollPos;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative">
      <div className="py-[8px] bg-[#c2c2af] font-Questrial lg:text-center custom-container">
        <p className="text-[.915rem]">
          Trained Aesop consultations are available to provide bespoke skin care
          advise.
          <a className="font-semibold cursor-pointer hover:underline text-sm ml-3">
            Book a video consultation
          </a>
        </p>
      </div>
      <div className="bg-[#252525] py-[8px] flex justify-between lg:justify-center custom-container">
        <button className="text-white text-[15px] border-b border-[#252525] hover:border-white pr-1 transition delay-300 duration-300 ease-in-out flex items-center">
          <span className="text-left ">
            Click and Collect is now available at Hong Kong stores. Enjoy
            complimentary shipping on orders over HK$400
          </span>
          <span className="ml-6 text-lg">+</span>
        </button>
      </div>
      <nav
        className={`hidden md:flex justify-between gap-4 items-center px-12  py-8 ${
          isOriginal
            ? "static"
            : isNavbarVisible
            ? "fixed top-0 inset-x-0 bg-[#fffef2] z-20 border-b border-slate-300 translate-y-0 opacity-100 transition duration-400 delay-150"
            : "-translate-y-80 opacity-0 transition duration-400 delay-150"
        }`}
      >
        <ul className="flex items-center gap-4 font-Questrial font-semibold text-[.85rem]">
          <li className="cursor-pointer hidden lg:block">Skin Care</li>
          <li className="cursor-pointer hidden lg:block">Body & Hand</li>
          <li className="cursor-pointer hidden lg:block">Hair</li>
          <li className="cursor-pointer hidden lg:block">Fragrance</li>
          <li className="cursor-pointer hidden lg:block">Home</li>
          <li className="cursor-pointer hidden lg:block">Kits & Travel</li>
          <li className="cursor-pointer hidden lg:block">Gifts</li>
          <li className="cursor-pointer md:block">Shop</li>
          <li className="cursor-pointer">Read</li>
          <li className="cursor-pointer">Stores</li>
          <li className="cursor-pointer hidden lg:block">
            Facial Appointments
          </li>
          <li className="text-2xl text-slate-500 cursor-pointer">
            <BiSearch></BiSearch>
          </li>
        </ul>
        <ul className="flex items-center gap-4 font-Questrial font-semibold text-[.85rem]">
          <li className="cursor-pointer">Login</li>
          <li className="cursor-pointer">Cabinet</li>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </nav>
      <div
        className={`  ${
          isOriginal
            ? "absolute md:hidden inset-x-0 top-44 z-10"
            : isNavbarVisible
            ? "fixed top-0 inset-x-0 bg-[#fffef2] md:hidden z-20 border-b border-slate-300 translate-y-0 opacity-100 transition duration-400 delay-150 py-6"
            : "-translate-y-20 opacity-0 md:hidden transition duration-400 delay-150"
        }`}
      >
        <MobileNav isOriginal={isOriginal}></MobileNav>
      </div>
    </div>
  );
};

export default Header;
