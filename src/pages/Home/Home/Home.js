import React from "react";
import FirstCard from "../FirstCard/FirstCard";
import Place from "../Place/Place";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Place />
      <FirstCard />
    </div>
  );
};

export default Home;
