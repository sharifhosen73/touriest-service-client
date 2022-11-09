import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Helmet } from "react-helmet";

const PlaceItem = () => {
  const { name, img, description, price } = useLoaderData();

  return (
    <div className="card card-compact mx-auto w-3/4 bg-base-100 shadow-xl mt-8">
      <Helmet>
        <title>Tourist Spot</title>
      </Helmet>
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title text-3xl">{name}</h2>
        <h2 className="card-title text-2xl">Cost: {price}</h2>
        <p className="text-justify">{description}</p>

        <div className="card-actions justify-end">
          <Link to="/">
            <button className="btn btn-outline btn-primary">Go To Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaceItem;
