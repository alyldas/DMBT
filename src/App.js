import React from "react";
import "./styles.css";

var Duration = require("duration");

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      passed: new Duration(new Date(2019, 7, 1), new Date()),
      left: new Duration(new Date(), new Date(2020, 8, 1)),
      passedp:
        (new Duration(new Date(2019, 7, 1), new Date()).seconds / 31536000) *
        100
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        passed: new Duration(new Date(2019, 7, 1), new Date()),
        left: new Duration(new Date(), new Date(2020, 8, 1)),
        passedp: (this.state.passed.seconds / 31536000) * 100
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h3>Прошло {Math.round(this.state.passedp * 100) / 100}%</h3>
        <h4>{this.state.passed.months} месяцев</h4>
        <h4>{this.state.passed.days} дней</h4>
        <h4>{this.state.passed.hours} часов</h4>
        <h4>{this.state.passed.minutes} минут</h4>
        <h4>{this.state.passed.seconds} секунд</h4>
        <h3>Осталось {Math.round((100 - this.state.passedp) * 100) / 100}%</h3>
        <h4>{this.state.left.months} месяцев</h4>
        <h4>{this.state.left.days} дней</h4>
        <h4>{this.state.left.hours} часов</h4>
        <h4>{this.state.left.minutes} минут</h4>
        <h4>{this.state.left.seconds} секунд</h4>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1>DMBT</h1>
      <Counter />
    </div>
  );
}
