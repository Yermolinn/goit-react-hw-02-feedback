import { useState } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    if (option === 'good') setGood(s => s + 1);
    if (option === 'neutral') setNeutral(s => s + 1);
    if (option === 'bad') setBad(s => s + 1);
  };

  const totalFeedback = () => good + neutral + bad;

  const positiveFeedbackPercentage = () => {
    const total = totalFeedback();
    return total ? Math.floor((good * 100) / totalFeedback()) : 0;
  };

  // useEffect(() => {
  //   console.log('useEffect go!');
  // }, [setGood]);

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      {totalFeedback() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback()}
            positivePercentage={positiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </>
  );
};
