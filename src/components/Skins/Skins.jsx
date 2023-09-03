import React from "react";
import Slider from "../Reuseable/Slider";
import product1 from "./../../../public/img/skin/Aesop_Skin_Lucent_Facial_Concentrate_60mL_Web_Large_684x668px.png";
import product2 from "./../../../public/img/skin/Aesop_Skin_Purifying_Facial_Cream_Cleanser_100mL_Web_Large_843x1000px.png";
import product3 from "./../../../public/img/skin/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png";
import product4 from "./../../../public/img/skin/Aesop_Skin_Parsley_Seed_Anti-Oxidant_Eye_Cream_10mL_Web_Large_901x478px.png";
import product5 from "./../../../public/img/skin/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png";
import product6 from "./../../../public/img/skin/Aesop_Skin_B_Triple_C_Facial_Balancing_Gel_60mL_Web_Large_901x478px.png";
const skins = [
  {
    id: 1,
    name: "Lucent Facial Concentrate",
    description: "A Vitamin C-rich layering serum",
    image: product1,
  },
  {
    id: 2,
    name: "Purifying Facial Cream Cleanser",
    description: "A daily cream cleanser for dry skin",
    image: product2,
  },
  {
    id: 3,
    name: "Camellia Nut Facial Hydrating Cream",
    description: "For normal, dry or sensitive skin",
    image: product3,
  },
  {
    id: 4,
    name: "Parsley Seed Anti-Oxidant Eye Cream",
    description: "Nourishes delicate skin around eyes",
    image: product4,
  },
  {
    id: 5,
    name: "B Triple C Facial Balancing Gel",
    description: "Anti-oxidant gel infused with Vitamin B and C",
    image: product5,
  },
  {
    id: 6,
    name: "Mandarin Facial Hydrating Cream",
    description: "Rapidly absorbed, lightly hydrating",
    image: product6,
  },
];
const description = {
  tag: "For the skin",
  title: "Attention for all types",
  details:
    "The well-being of your skin is the product of hydration, nourishment, and protection through discerning rituals. Explore requisite skin care for all skin types.",
  button_name: "See all Skin Care",
};
const Skins = () => {
  return (
    <div>
      <Slider description={description} items={skins} />
    </div>
  );
};

export default Skins;
