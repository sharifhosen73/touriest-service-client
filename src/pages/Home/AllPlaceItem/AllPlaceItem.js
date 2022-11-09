import React from "react";
import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const AllPlaceItem = ({ place }) => {
  const { _id, name, img, price, description } = place;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl mb-4">
      <PhotoProvider>
        <PhotoView src={img}>
          <img src={img} className="h-60 w-full" alt="" />
        </PhotoView>
      </PhotoProvider>

      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title">Cost: {price}</h2>
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
      </div>
    </div>
  );
};

export default AllPlaceItem;
