import PropTypes from 'prop-types';
import { Button, FeedbackButton } from 'components/App/Feedback.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Button>
      {options.map(option => {
        const text = option[0].toUpperCase() + option.slice(1, option.length);

        return (
          <FeedbackButton
            key={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {text}
          </FeedbackButton>
        );
      })}
    </Button>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
