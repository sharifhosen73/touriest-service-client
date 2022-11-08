import React from "react";

const FirstCard = () => {
  return (
    <div className="hero min-h-screen bg-base-200 mb-20">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://placeimg.com/260/400/arch"
          className="max-w-sm rounded-lg shadow-2xl w-1/2"
          alt=""
        />
        <div className="w-1/2">
          <h1 className="text-5xl font-bold">Day trip to Viñales Valley</h1>
          <p className="py-6 text-justify">
            Escape the busy life of Havana and get lost in nature on this day
            tour. Visit the tobacco plantations of Viñales, where the best
            tobacco in the world grows. You will stop at a cigar factory to
            learn about the manual processing of tobacco leaves into cigars. You
            will also have time to hike, explore subterranean caves, and
            appreciate some of the oldest geological formations of Cuba.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default FirstCard;
