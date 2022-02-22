import React, { Component } from "react";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";

class Form extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Personal Information</h2>
        <Personal />
        <h2>Work Experience</h2>
        <Work />
        <h2>Education</h2>
        <Education />
      </div>
    );
  }
}

export default Form;
