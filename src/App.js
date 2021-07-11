import React, { Component } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics.jsx';
import FeedbackOptiops from './components/FeedbackOptions.jsx';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick() {}
  countTotalFeedback() {}
  countPositiveFeedbackPercentage() {}
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptiops options={Object.keys(this.state)} />
        </Section>
        <Section title="Statistics">
          <Statistics />
        </Section>
      </>
    );
  }
}

export default App;
