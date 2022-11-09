import React from "react";

const ReviewItme = ({ review }) => {
  const { name, photoURL, email, spot, message } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className=" px-10 pt-10">
        <img src={photoURL} alt="Shoes" className="rounded-xl h-48" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title">{name}</h2>
        <h2 className="card-title"> {spot}</h2>
        <h2 className="card-title">{email}</h2>
        <p>{message}</p>
        <div className="card-actions flex justify-between">
          <button className="btn btn-primary">Delete</button>
          <button className="btn btn-primary">Update</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewItme;
