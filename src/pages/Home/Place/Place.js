import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePlace from "../SinglePlace/SinglePlace";

const Place = () => {
  const [places, setPlaces] = useState([]);
  const [size, SetSize] = useState(3);

  const handlePlaceS = () => {
    SetSize(6);
  };
  console.log(size);

  useEffect(() => {
    fetch("http://localhost:5000/place")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="my-20">
      <h2 className="text-5xl text-orange-600 text-center mb-8 font-bold">
        Popular Tourist Spot
      </h2>
      <div className="grid grid-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {places.map((place) => (
          <SinglePlace key={place._id} place={place} />
        ))}
      </div>
      <Link to="/place" className="lg:ml-96">
        <button
          onClick={handlePlaceS}
          className="btn btn-outline btn-secondary px-24 ml-16 lg:ml-20"
        >
          All Places
        </button>
      </Link>
    </div>
  );
};

export default Place;
