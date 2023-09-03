import {
  AiOutlineArrowRight,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FiArrowUpRight } from "react-icons/fi";
import "./Footer.css";
import { FaCheck, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const Footer = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="bg-[#252525] ">
      <div className="footer text-white font-Questrial custom-container border-b-[3px] ">
        {/* subscribe */}
        <div className="subscribe">
          <h3 className="text-xs md:text-base font-semibold border-b w-full border-white mb-5 pb-3">
            Subscribe to Aesop communications
          </h3>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Email address"
              className="w-full border bg-inherit border-white py-3 px-2"
            />
            <button className="absolute top-4 right-2">
              <AiOutlineArrowRight />
            </button>
          </div>
          <div className="flex  items-start gap-2 group">
            <div
              className="relative "
              onClick={() => {
                setChecked(!checked);
              }}
            >
              <input
                type="checkbox"
                id="check"
                className="w-4 h-4 cursor-pointer appearance-none rounded-sm accent-[#252525] border border-gray-300"
              />
              {checked && (
                <FaCheck className="text-xs absolute top-[3px] left-[2px] " />
              )}
            </div>
            <label className="text-xs md:text-base">
              <span
                className=""
                onClick={() => {
                  setChecked(!checked);
                }}
              >
                Subscribe to receive communications from Aesop. By subscribing,
                you confirm you have read and understood our{" "}
              </span>
              <a href="" className="underline">
                privacy policy.
              </a>
            </label>
          </div>
        </div>
        {/* Orders and support */}
        <div className="order">
          <h3 className="text-xs md:text-base font-semibold border-b w-full border-white mb-5 pb-3">
            Orders and support
          </h3>
          <ul className="text-base md:text-[19px] space-y-1">
            <li className="cursor-pointer flex gap-1 items-center ">
              <span>
                <small>Contact us</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>FAQs</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>Shipping</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>Returns</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>Order history</small>
              </span>
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>Terms and conditions</small>
              </span>
            </li>
          </ul>
        </div>
        {/* Services */}
        <div className="services">
          <h3 className="text-xs md:text-base  font-semibold border-b w-full border-white mb-5 pb-3">
            Services
          </h3>
          <ul className="text-base md:text-[19px] space-y-1">
            <li className="cursor-pointer">
              <span>
                <small>Live assistance</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Corporate gifts</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Facial Appointments</small>
              </span>
            </li>
            <li className="cursor-pointer ">
              <span>
                <small>Click and Collect</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Video consultation</small>
              </span>
            </li>
          </ul>
        </div>
        {/* Location preferences */}
        <div className="location">
          <h3 className="text-xs md:text-base font-semibold border-b w-full border-white mb-5 pb-3">
            Location preferences
          </h3>
          <h3 className="mb-2 text-sm md:text-lg font-semibold">
            <small>Shipping:</small>
          </h3>
          <p className="cursor-pointer underline text-xs md:text-base">
            Hong Kong SAR, China
          </p>
          <h3 className="mb-2 mt-7 text-sm md:text-lg font-semibold">
            <small>Language:</small>
          </h3>
          <p className="cursor-pointer underline text-xs md:text-[13px]">
            English
          </p>
          <p className="cursor-pointer  text-xs md:text-[13px]">繁體中文</p>
        </div>
        {/* Sustainability */}
        <div className="sustainability">
          <h3 className="text-xs md:text-base font-semibold border-b w-full border-white mb-5 pb-3">
            Sustainability
          </h3>
          <p className="mr-1">
            <span className="text-sm md:text-[17px]">
              <small>
                All Aesop products are vegan, and we do not test our
                formulations or ingredients on animals. We are Leaping Bunny
                approved and a Certified B Corporation.{" "}
                <a href="">Learn more</a>
              </small>
            </span>
          </p>
        </div>
        {/* About */}
        <div className="about">
          <h3 className="text-xs md:text-base font-semibold border-b w-full border-white mb-5 pb-3">
            About
          </h3>
          <ul className="text-base md:text-[19px] space-y-1">
            <li className="cursor-pointer">
              <span>
                <small>Our story</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Foundation</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Careers</small>
              </span>
            </li>
            <li className="cursor-pointer ">
              <span>
                <small>Privacy policy</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Accessibility</small>
              </span>
            </li>
            <li className="cursor-pointer">
              <span>
                <small>Cookie Policy</small>
              </span>
            </li>
          </ul>
        </div>
        {/* Social media */}
        <div className="hidden lg:block social">
          <h3 className="text-base font-semibold border-b w-full border-white mb-5 pb-3">
            Social media
          </h3>
          <ul className="text-[19px] space-y-1">
            <li className="cursor-pointer flex gap-1 items-center ">
              <span>
                <small>Instagram</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>Twitter</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>LinkedIn</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>WeChat</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
            <li className="cursor-pointer flex gap-1 items-center">
              <span>
                <small>Weibo</small>
              </span>
              <FiArrowUpRight className="text-lg" />
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between items-center custom-container py-6 text-white">
        <p className="text-[17px]">© Aesop</p>
        <div className="flex gap-6 text-2xl lg:hidden">
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default Footer;
