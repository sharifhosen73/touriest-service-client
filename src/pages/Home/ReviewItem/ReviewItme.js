import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const ReviewItme = ({ review }) => {
  const { _id, name, photoURL, email, spot, message } = review;

  // Delete Method
  const handleDelete = () => {
    fetch(`https://touriest-service-server.vercel.app/review/${_id}`, {
      method: "DELETE",
    })
      .then((res) => {
        res.json();
        toast.success("Successfully Deleted");
      })
      .then((data) => console.log(data));
  };

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
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
          <Link to={`/review/${_id}`}>
            <button className="btn btn-primary">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReviewItme;
