import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import AllPlaceItem from "../AllPlaceItem/AllPlaceItem";
import AllReview from "../AllReview/AllReview";

const AllPlace = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/place`)
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <div>
      <Helmet>
        <title>All Places</title>
      </Helmet>
      <h1 className="text-5xl text-orange-600 font-bold text-center mt-10">
        All Places
      </h1>
      <div className="grid grid-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10">
        {places.map((place) => (
          <AllPlaceItem key={places._id} place={place} />
        ))}
      </div>
      <div>
        <h1 className="text-5xl text-orange-600 font-bold text-center mt-10">
          All Review
        </h1>
        <AllReview />
      </div>
    </div>
  );
};

export default AllPlace;
