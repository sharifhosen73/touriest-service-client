import React from "react";
import "./SliderItem.css";

const SliderItem = ({ slide }) => {
  const { image, id, prev, next, place } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="slider-img w-full">
        <img src={image} alt="" className="w-full slide-image" />
      </div>
      <div className="absolute lg:ml-20 ">
        <h1 className="text-5xl font-bold text-white lg:mt-20 ">
          WelCome To Our Website
        </h1>
        <h3 className="text-xl font-bold text-white lg:my-10">{place}</h3>
        <button className="btn btn-outline btn-secondary px-16 text-xl">
          See All
        </button>
      </div>

      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SliderItem;
