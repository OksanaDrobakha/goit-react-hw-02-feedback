// import React from 'react';

// class Counter extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleIncrementGood = () => {
//     this.setState(prevState => ({
//       good: prevState.good + 1,
//     }));
//   };
//   handleIncrementNeutral = () => {
//     this.setState(prevState => ({
//       neutral: prevState.neutral + 1,
//     }));
//   };
//   handleIncrementBad = () => {
//     this.setState(prevState => ({
//       bad: prevState.bad + 1,
//     }));
//   };

//   Total = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     return total;
//   };

//   positiveFeedback = () => {
//     const { good } = this.state;
//     const total = this.Total();
//     if (total === 0) {
//       return 0;
//     }
//     const positivePercent = (good / total) * 100;
//     return Math.round(positivePercent);
//   };

//   render() {
//     return (
//       <div>
//         <section>
//           <h1>Please leave feedback</h1>
//           <div className="Statistic_controls">
//             <button type="button" onClick={this.handleIncrementGood}>
//               Good
//             </button>
//             <button type="button" onClick={this.handleIncrementNeutral}>
//               Neutral
//             </button>
//             <button type="button" onClick={this.handleIncrementBad}>
//               Bad
//             </button>
//           </div>
//           <div className="Statistic_value">
//             <h2>Statistics</h2>
//             <span>Good: {this.state.good}</span>
//             <span>Neutral: {this.state.neutral}</span>
//             <span>Bad: {this.state.bad}</span>
//             <span>Total: {this.Total()}</span>
//             <span>Positive feedback: {this.positiveFeedback()}%</span>
//           </div>
//         </section>
//       </div>
//     );
//   }
// }

// export default Counter;
