import React, { Component } from "react";

class Personal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Job Title" />
        <input placeholder="Address" />
        <input placeholder="Phone" />
        <input placeholder="Email" />
        <textarea placeholder="Description" />
      </div>
    );
  }
}

export default Personal;
