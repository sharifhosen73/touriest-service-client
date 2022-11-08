import React from "react";
import { Link } from "react-router-dom";

const SinglePlace = ({ place }) => {
  const { id, name, img, description } = place;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <img className="h-60 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-justify">{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/place/${id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePlace;
