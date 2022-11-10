import React, { useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const Update = () => {
  const allReview = useLoaderData();
  const { _id, name, photoURL, email, spot, message } = allReview;
  const [review, setReview] = useState(allReview);
  const navigate = useNavigate();

  const handleUpdateReview = (e) => {
    e.preventDefault();

    // Patch Method
    fetch(`https://touriest-service-server.vercel.app/review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => {
        res.json();
        navigate("/all-review");
        toast.success("Successfully Update");
      })
      .then((data) => console.log(data));
  };

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newReview = { ...review };
    newReview[field] = value;
    setReview(newReview);
  };

  return (
    <div className="hero mt-10">
      <Helmet>
        <title>Update Review</title>
      </Helmet>

      <div className="card flex-shrink-0 w-3/5  shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center mt-5">Update Review</h1>
        <form onSubmit={handleUpdateReview} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handleOnChange}
              defaultValue={name}
              placeholder="Your Name"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Photo</span>
            </label>
            <input
              type="text"
              name="photoURL"
              onChange={handleOnChange}
              defaultValue={photoURL}
              placeholder="Photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourist Spot</span>
            </label>
            <input
              type="text"
              name="spot"
              onChange={handleOnChange}
              defaultValue={spot}
              placeholder="Tourist Spot"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleOnChange}
              defaultValue={email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              name="message"
              onChange={handleOnChange}
              defaultValue={message}
              placeholder="Message"
            ></textarea>
          </div>

          <input
            type="submit"
            className="btn btn-primary"
            value="Update Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Update;
