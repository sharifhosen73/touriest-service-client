import React from "react";
import "./Slide.css";
import image1 from "../../../images/image003.jpg";
import image2 from "../../../images/image007.jpg";
import image3 from "../../../images/Lalakhal-Shari-River.jpg";
import image4 from "../../../images/National_Monument_Dhaka_Smriti_Soudho.jpg";
import SliderItem from "../SliderItem/SliderItem";

const Slider = () => {
  const bannerData = [
    {
      image: image1,
      prev: 4,
      id: 1,
      next: 2,
      place: "Rangamati Hill",
    },
    {
      image: image2,
      prev: 1,
      id: 2,
      next: 3,
      place: "Rangamati Bridge",
    },
    {
      image: image3,
      prev: 2,
      id: 3,
      next: 4,
      place: "Sajek khagracori",
    },
    {
      image: image4,
      prev: 3,
      id: 4,
      next: 1,
      place: "The National Martyrs",
    },
  ];

  return (
    <div className="carousel w-full mb-20">
      {bannerData.map((slide) => (
        <SliderItem key={slide.id} slide={slide} />
      ))}
    </div>
  );
};

export default Slider;
