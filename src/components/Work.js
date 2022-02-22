import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placeholder="Company" />
        <input placeholder="Position" />
        <input placeholder="Start Date" />
        <input placeholder="End Date" />
        <button>Add</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Work;
