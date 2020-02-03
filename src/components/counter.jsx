import React, { Component } from "react";

export default class Counter extends Component {
  // state = {
  //   count: this.props.counter.value
  // };

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  // handleDecrement = () => {
  //   if (this.state.count > 0) {
  //     this.setState({ count: this.state.count - 1 });
  //   } else {
  //     this.setState({ count: 0 });
  //   }
  // };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Decrement{" "}
        </button>
        <span className={this.badgeClasses()}> {this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          {" "}
          Increment{" "}
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2"
        >
          {" "}
          Delete{" "}
        </button>
      </div>
    );
  }

  badgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
}
