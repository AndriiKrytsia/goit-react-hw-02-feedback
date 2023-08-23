import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onClick }) => {
  return (
    <>
      <button name="good" onClick={e => onClick(e)}>
        Good
      </button>
      <button name="neutral" onClick={e => onClick(e)}>
        Neutral
      </button>
      <button name="bad" onClick={e => onClick(e)}>
        Bad
      </button>
    </>
  );
};
