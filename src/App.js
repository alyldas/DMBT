import React from "react";
import "./styles.css";
import "bulma/css/bulma.css";

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
        <progress
          class="progress is-primary"
          value={Math.round(this.state.passedp * 100) / 100}
          max="100"
        />
        <h2 class="subtitle">
          Прошло {Math.round(this.state.passedp * 100) / 100}%
        </h2>
        <div class="columns">
          <div class="column">{this.state.passed.months} месяцев</div>
          <div class="column">{this.state.passed.days} дней</div>
          <div class="column">{this.state.passed.hours} часов</div>
          <div class="column">{this.state.passed.minutes} минут</div>
          <div class="column">{this.state.passed.seconds} секунд</div>
        </div>
        <h2 class="subtitle">
          Осталось {Math.round((100 - this.state.passedp) * 100) / 100}%
        </h2>
        <div class="columns">
          <div class="column">{this.state.left.months} месяцев</div>
          <div class="column">{this.state.left.days} дней</div>
          <div class="column">{this.state.left.hours} часов</div>
          <div class="column">{this.state.left.minutes} минут</div>
          <div class="column">{this.state.left.seconds} секунд</div>
        </div>
      </div>
    );
  }
}

export default function App() {
  return (
    <div className="App">
      <h1 class="title">DMBT</h1>
      <Counter />
    </div>
  );
}
