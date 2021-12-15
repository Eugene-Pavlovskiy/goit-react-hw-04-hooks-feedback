import { Component } from 'react';
import s from './App.module.css';

import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import { Section } from './components/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
    const name = e.target.value;
    this.setState(prevState => {
      return {
        [name]: (prevState[name] += 1),
      };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;

    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100) || 0;
  }
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const feedbackBtnsOptions = Object.keys(this.state);

    return (
      <div className={s.app}>
        <Section title={'Please leave feedback'}>
          <div className={s.feedbackForm}>
            <FeedbackOptions
              feedbackBtnsOptions={feedbackBtnsOptions}
              onLeaveFeedback={this.onLeaveFeedback}
            />
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </div>
        </Section>
      </div>
    );
  }
}

export default App;