import React from "react";
import { Helmet } from "react-helmet";
import FirstCard from "../FirstCard/FirstCard";
import OfferCard from "../OfferCard/OfferCard";
import Place from "../Place/Place";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Tourist Spot</title>
      </Helmet>
      <Slider />
      <Place />
      <FirstCard />
      <OfferCard />
    </div>
  );
};

export default Home;
