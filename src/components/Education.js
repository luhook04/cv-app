import React, { Component } from "react";

class Education extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placeholder="School" />
        <input placeholder="Degree" />
        <input placeholder="Start Date" />
        <input placeholder="Graduation Date" />
        <button>Add</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default Education;
