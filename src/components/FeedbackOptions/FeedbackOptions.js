import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

function FeedbackOptions({ feedbackBtnsOptions, onLeaveFeedback }) {
  return (
    <div className={s.feedbackOptions}>
      {feedbackBtnsOptions.map(opt => (
        <button
          className={s.feedbackBtn}
          key={opt}
          type="button"
          value={opt}
          onClick={onLeaveFeedback}
        >
          {opt} +1
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  feedbackBtnsOptions: PropTypes.arrayOf(PropTypes.string),
};

export default FeedbackOptions;