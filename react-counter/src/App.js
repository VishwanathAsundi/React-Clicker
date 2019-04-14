import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }
  increment() {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement() {
    this.setState({
      count: this.state.count - 1
    })
  }
  reset() {
    this.setState({
      count: 0
    })
  }
  render() {
    return (
      <div>
        <div className="my-box">
          <h1 className="text-dark font-weight-bold">   {this.state.count}</h1>
          <div className="buttons">
            <button onClick={this.increment} className="btn-success">+</button>
            <button onClick={this.reset} className="btn-secondary">Reset</button>
            <button onClick={this.decrement} className="btn-danger">-</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
