import { AiOutlineArrowRight } from "react-icons/ai";
import Aesop_Article_Summer_Skin_Care from "../../../public/img/blog1/Aesop_Article_Summer_Skin_Care_2020_Mid_1_Desktop_2560x1440px.jpg";
const BlogOne = () => {
  return (
    <div className=" py-20 flex flex-col lg:flex-row gap-24">
      <div className="mx-auto lg:mx-0 w-11/12 md:w-8/12 lg:w-5/12 pl-0 lg:pl-20">
        <p className="text-xl font-semibold font-Questrial mb-4">
          <small>The Athenaeum</small>
        </p>
        <h1 className="text-2xl font-Questrial mb-4">The warm-up </h1>
        <p className="text-[16px] font-Questrial mb-10">
          In The Athenaeum, our digital reading room: a guide to ensuring a
          healthy complexion through the warmer months
        </p>
        <button className="custom-button border-[#333333] hover:bg-[#333333] hover:text-white">
          <p className="flex justify-between items-center font-Questrial">
            <span>Read more</span>
            <AiOutlineArrowRight></AiOutlineArrowRight>
          </p>
        </button>
      </div>
      <div className="w-12/12 md:w-11/12 lg:w-7/12 pl-5 md:pl-0 md:ml-auto">
        <img
          src={Aesop_Article_Summer_Skin_Care}
          className="md:h-[26rem] lg:h-[32rem] w-full"
          alt=""
        />
      </div>
    </div>
  );
};

export default BlogOne;
