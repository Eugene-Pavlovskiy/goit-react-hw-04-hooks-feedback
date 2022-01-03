import React from "react";
import s from "./FeedbackOptions.module.css";

function Feedback({ onClick }) {
  return (
    <>
      <div className="button__area">
        <ul className={s.button__list}>
          <li>
            <button
              className={s.button__btn}
              id="good_value"
              onClick={onClick}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className={s.button__btn}
              id="neutral_value"
              onClick={onClick}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className={s.button__btn}
              id="bad_value"
              onClick={onClick}
            >
              Bad
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Feedback;