import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reduxRating } from "../redux/ratingSlice";

import RatingButton from "./RatingButton";

import "./Rating.css";
import star from "../icon-star.svg";

export default function Rating(props) {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  /* Texting redux */
  const dispatch = useDispatch();

  const form = new Array(5).fill(0).map((_, i) => {
    return (
      <RatingButton
        key={i}
        value={i + 1}
        changeRating={changeRating}
        selected={rating - 1 === i}
      />
    );
  });

  function changeRating(rating) {
    setRating(rating);
  }

  function submitRating() {
    dispatch(reduxRating(rating));
    navigate("/thank-you");
  }

  return (
    <>
      <div className="rating-circle">
        <img src={star} className="App-logo" alt="logo" />
      </div>
      <h1 className="rating-title">How did we do?</h1>
      <p className="rating-desc">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-form">{form}</div>
      <button className="rating-submit" onClick={submitRating}>
          submit
      </button>
    </>
  );
}
