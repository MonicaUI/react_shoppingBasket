import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const {
      onReset,
      counters,
      onDecrement,
      onDelete,
      onIncrement
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-2 ">
          {" "}
          Reset{" "}
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onReset={onReset}
            counter={counter}
            onDecrement={onDecrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
