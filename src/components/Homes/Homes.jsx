import React from "react";
import Slider from "../Reuseable/Slider";
import product1 from "./../../../public/img/homes/Aesop_Home_Post-Poo_Drops_100mL_Web_Large_782x796px.png";
import product2 from "./../../../public/img/homes/Aesop_Home_Aganice_Aromatique_Candle_Web_Large_1102x962px.png";
import product3 from "./../../../public/img/homes/Aesop_Home_Bronze_Incense_Holder_Web_Large_1150x481px.png";
import product4 from "./../../../public/img/homes/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png";
import product5 from "./../../../public/img/homes/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png";
import product6 from "./../../../public/img/homes/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png";
import product7 from "./../../../public/img/homes/Aesop_Home_Callippus_Aromatique_Candle_Web_Large_1102x962px.png";
const homes = [
  {
    id: 1,
    name: "Post-Poo Drops",
    description: "A botanical bathroom deodoriser",
    image: product1,
  },
  {
    id: 2,
    name: "Aganice Aromatique Candle",
    description: "Cardamom, Mimosa, Tobacco",
    image: product2,
  },
  {
    id: 3,
    name: "Bronze Incense Holder",
    description: "Murasaki Aromatique Incense",
    image: product3,
  },
  {
    id: 4,
    name: "Callippus Aromatique Candle",
    description: "A marriage of deep greens and earthy spices",
    image: product4,
  },
  {
    id: 5,
    name: "Callippus Aromatique Candle",
    description: "A marriage of deep greens and earthy spices",
    image: product5,
  },
  {
    id: 6,
    name: "Callippus Aromatique Candle",
    description: "A marriage of deep greens and earthy spices",
    image: product6,
  },
  {
    id: 7,
    name: "Callippus Aromatique Candle",
    description: "A marriage of deep greens and earthy spices",
    image: product7,
  },
];
const description = {
  tag: "For the home",
  title: "Domestic pleasures",
  details:
    "Our range of aromatic formulations for the home are practical and pleasing in equal measure.",
  button_name: "See all Home",
};
const Homes = () => {
  return (
    <div>
      <Slider description={description} items={homes} />
    </div>
  );
};

export default Homes;
