import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number; // `count` is a number
}

// Class component with TypeScript
class Counter extends Component<{}, CounterState> {
  // Initialize the state
  state: CounterState = {
    count: 0,
  };

  // Method to increment the count
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;