import React from "react";
import { useLoaderData } from "react-router-dom";

const PlaceItem = () => {
  const place = useLoaderData();
  console.log(place);
  return (
    <div>
      <h1></h1>
    </div>
  );
};

export default PlaceItem;
