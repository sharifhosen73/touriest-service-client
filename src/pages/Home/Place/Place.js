import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SinglePlace from "../SinglePlace/SinglePlace";

const Place = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("place.json")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="my-20">
      <div className="grid grid-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10">
        {places.map((place) => (
          <SinglePlace key={place.id} place={place} />
        ))}
      </div>
      <Link to="/place" className="lg:ml-96">
        <button className="btn btn-outline btn-secondary px-24 ml-16 lg:ml-20">
          All Places
        </button>
      </Link>
    </div>
  );
};

export default Place;
