import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../../context/AuthProvider";

const Review = () => {
  const { user } = useContext(AuthContext);

  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = user?.email;
    const photoURL = form.photoURL.value;
    const spot = form.spot.value;
    const message = form.message.value;
    console.log(name, photoURL, email, spot, message);
  };

  return (
    <div className="hero mt-10">
      <Helmet>
        <title>Review</title>
      </Helmet>

      <div className="card flex-shrink-0 w-3/5  shadow-2xl bg-base-100">
        <h1 className="text-3xl font-bold text-center mt-5">Review</h1>
        <form onSubmit={handleReview} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              defaultValue={user?.email}
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
              placeholder="Message"
            ></textarea>
          </div>

          <input type="submit" className="btn btn-primary" value="Sign In" />
        </form>
      </div>
    </div>
  );
};

export default Review;
