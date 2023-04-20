import { Component } from 'react';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option =>
    this.setState(previouseState => ({ [option]: previouseState[option] + 1 }));

  TotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  PositiveFeedbackPercentage = () => {
    const total = this.TotalFeedback();
    return total
      ? Math.floor((this.state.good * 100) / this.TotalFeedback())
      : 0;
  };

  render() {
    return (
      <>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {this.TotalFeedback() ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.TotalFeedback()}
              positivePercentage={this.PositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </>
    );
  }
}
