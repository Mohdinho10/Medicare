/* eslint-disable react/prop-types */
import { useState } from "react";

import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import FeedbackForm from "./FeedbackForm";

function Feedback({ reviews, totalRating }) {
  const [showFeedbackForm, setShowFeedbackForm] = useState(false);
  return (
    <div>
      <div className="mb-[50px] ">
        <h4 className="mb-[30px] text-[20px] font-bold leading-[30px] text-headingColor ">
          All reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div className="mb-[30px] flex justify-between gap-10 " key={index}>
            <div className="flex gap-3">
              <figure className="h-10 w-10 rounded-full">
                <img
                  src={review?.user?.photo}
                  alt="avatar"
                  className="w-full"
                />
              </figure>

              <div>
                <h5 className="text-[16px] font-bold leading-6 text-primaryColor ">
                  {review?.user?.name}
                </h5>
                <p className="text-[14px] leading-6 text-textColor ">
                  {formatDate(review?.createdAt)}
                </p>
                <p className="text__para mt-3 text-[15px] font-medium">
                  {review?.reviewText}
                </p>
              </div>
            </div>

            <div className="flex gap-1">
              {/* {[...Array(5).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067ff" />
              ))} */}
              {[...Array(review?.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#0067ff" />
              ))}
            </div>
          </div>
        ))}
      </div>
      {!showFeedbackForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowFeedbackForm(true)}>
            Give Feedback
          </button>
        </div>
      )}
      {showFeedbackForm && <FeedbackForm />}
    </div>
  );
}

export default Feedback;
