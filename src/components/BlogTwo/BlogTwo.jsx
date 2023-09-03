import { AiOutlineArrowRight } from "react-icons/ai";
import image from "../../../public/img/blog2/Aesop_Home_2023_Post-Poo_Drops_Web_Homepage_Secondary_Mid_Desktop_2560x1540px.png";
const BlogTwo = () => {
  return (
    <div className=" py-20 flex flex-col-reverse lg:flex-row-reverse gap-24">
      <div className="mx-auto lg:mx-0 w-11/12 md:w-8/12 lg:w-5/12 pl-0 lg:pr-20">
        <h1 className="text-2xl font-Questrial mb-4">
          Post-Poo Drops has returned{" "}
        </h1>
        <p className="text-[16px] font-Questrial mb-10">
          Here to make the malodorous melodious once again. Dispense this
          favoured formulation into the toilet bowl after flushing to
          effectively mask disagreeable odours.
        </p>
        <button className="custom-button border-[#333333] hover:bg-[#333333] hover:text-white">
          <p className="flex justify-between items-center font-Questrial">
            <span>Discover Post-Poo Drops</span>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </p>
        </button>
      </div>
      <div className="w-12/12 md:w-11/12 lg:w-7/12 pr-5 md:pr-0 md:mr-auto">
        <img src={image} className="md:h-[26rem] lg:h-[32rem] w-full" alt="" />
      </div>
    </div>
  );
};

export default BlogTwo;
