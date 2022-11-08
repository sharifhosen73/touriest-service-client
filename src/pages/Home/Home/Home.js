import React from "react";
import FirstCard from "../FirstCard/FirstCard";
import OfferCard from "../OfferCard/OfferCard";
import Place from "../Place/Place";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Place />
      <FirstCard />
      <OfferCard />
    </div>
  );
};

export default Home;
