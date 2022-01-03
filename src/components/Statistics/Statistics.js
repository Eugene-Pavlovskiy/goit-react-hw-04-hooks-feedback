import React from "react";
import s from "./Statistics.module.css";

function Statistics({
  good_value,
  neutral_value,
  bad_value,
  total,
  positivePercentage,
}) {
  return (
    <div className="statistics__area">
      <ul className={s.statistics__list}>
        <li className={s.statistics__li}>{`Good: ${good_value}`}</li>
        <li className={s.statistics__li}>{`Neutral: ${neutral_value}`}</li>
        <li className={s.statistics__li}>{`Bad: ${bad_value}`}</li>
        <li className={s.statistics__li}>{`Total: ${total}`}</li>
        {!isNaN(positivePercentage) && (
          <li className={s.statistics__li}>{`Positive feedback: ${positivePercentage}%`}</li>
        )}
      </ul>
    </div>
  );
}

export default Statistics;