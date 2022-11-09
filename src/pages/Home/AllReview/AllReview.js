import React, { useEffect, useState } from "react";
import ReviewItme from "../ReviewItem/ReviewItme";

const AllReview = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

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
