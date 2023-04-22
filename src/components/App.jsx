// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { SectionTitle } from './SectionTitle/SectionTitle';
// import { Statistics } from './Statistics/Statistics';
import Counter from './Counter';
import { Component } from 'react';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return <Counter />;
  }
}
