import React from 'react';
import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateProp = type => {
    this.setState(prevStat => {
      return { [type]: prevStat[type] + 1 };
    });
  };

  Total = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    const total = this.Total();
    if (total === 0) {
      return 0;
    }
    const positivePercent = (good / total) * 100;
    return Math.round(positivePercent);
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updateProp}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.Total() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.Total()}
              positivePercentage={this.positiveFeedback()}
            />
          )}
        </Section>
      </div>
    );
  }
}
