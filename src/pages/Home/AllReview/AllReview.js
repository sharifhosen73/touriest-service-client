import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import ReviewItme from "../ReviewItem/ReviewItme";

const AllReview = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`https://touriest-service-server.vercel.app/review?${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("place-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          logOut();
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);

  return (
    <div>
      {reviews.length > 0 ? (
        <div className="grid grid-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewItme key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <h1 className="text-6xl text-orange-600 font-bold text-center my-20">
          No reviews were added
        </h1>
      )}
    </div>
  );
};

export default AllReview;
