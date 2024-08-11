import { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { useReview } from "../../hooks/useReview";
import HashLoader from "react-spinners/HashLoader";
import { toast } from "react-toastify";

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const { id } = useParams();
  const { createReview, isPending } = useReview(id);
  console.log(rating, reviewText);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if ((!rating, !reviewText)) {
      return toast.error("Rating & Reviews Fields are required");
    }
    createReview({ rating, reviewText });
  };

  return (
    <form>
      <div>
        <h3 className="mb-4 text-[16px] font-semibold leading-6 text-headingColor ">
          How would you rate the overall experience?
        </h3>
        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                type="button"
                key={index}
                className={`${
                  index <= ((rating && hover) || hover)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } cursor-pointer border-none bg-transparent text-[22px] outline-none`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-[30px] ">
        <h3 className="mb-4 mt-0 text-[16px] font-semibold leading-6 text-headingColor ">
          Share your feedback or suggestions
        </h3>
        <textarea
          cols="30"
          rows="5"
          className="w-full rounded-md border border-solid border-[#0066ff34] px-4 py-3 outline-primaryColor focus:outline "
          placeholder="Write your message"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <button className="btn" type="submit" onClick={handleSubmitReview}>
        {isPending ? <HashLoader size={25} /> : "Submit Feedback"}
      </button>
    </form>
  );
}

export default FeedbackForm;
