import Slider from "../Reuseable/Slider";
import product1 from "./../../../public/img/soap/Aesop_Body_Nurture_Bar_Soap_150g_Web_Front_Medium_1000x608px.png";
import product2 from "./../../../public/img/soap/Aesop_Body_Polish_Bar_Soap_150g_Web_Front_Medium_1000x608px.png";
import product3 from "./../../../public/img/soap/Aesop_Body_Refresh_Bar_Soap_150g_Web_Front_Medium_1000x608px.png";
const soaps = [
  {
    id: 1,
    name: "Nurture Bar Soap",
    description: "Offers a mild yet effective cleanse",
    image: product1,
  },
  {
    id: 2,
    name: "Polish Bar Soap",
    description: "Thoroughly cleanses and exfoliates skin",
    image: product2,
  },
  {
    id: 3,
    name: "Refresh Bar Soap",
    description: "Offers a thorough and enlivening cleanse",
    image: product3,
  },
];
const description = {
  tag: "For the body",
  title: "An expression of care",
  details:
    "Aesop formulations offer the body deserving care, to cleanse, replenish, and nourish skin. Each product is a sensory pleasure to use with its own delightful aroma.",
  button_name: "See all Body Care",
};
const Soaps = () => {
  return (
    <div>
      <Slider description={description} items={soaps} />
    </div>
  );
};

export default Soaps;
