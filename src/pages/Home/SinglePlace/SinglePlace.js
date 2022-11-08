import React from "react";
import { Link } from "react-router-dom";

const SinglePlace = ({ place }) => {
  const { _id, name, img, description } = place;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
      <figure>
        <img className="h-60 w-full" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="text-justify">
          {description?.length > 100 ? (
            <p>
              {description.slice(0, 100) + "..."}
              <Link className="text-blue-800 ml-2" to={`/place/${_id}`}>
                Read More
              </Link>
            </p>
          ) : (
            <p>{description}</p>
          )}
        </div>

        <div className="card-actions justify-end">
          <Link to={`/place/${_id}`}>
            <button className="btn btn-primary">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePlace;
