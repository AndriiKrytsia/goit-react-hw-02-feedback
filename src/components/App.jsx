import { Component } from 'react';
import { Statistics } from '../components/Statistics';
import { FeedbackOptions } from '../components/FeedbackOptions';
import { Section } from '../components/Section';
import { Notification } from '../components/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    this.setState(prevState => ({
      [e.target.name]: prevState[e.target.name] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  };

  render() {
    const allFeedbacks = this.countTotalFeedback();
    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onClick={this.handleClick} />
        </Section>
        <Section title="Statistics">
          {allFeedbacks > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
