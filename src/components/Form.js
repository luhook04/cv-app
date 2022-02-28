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
        <Personal />
        <Work />
        <Education />
      </div>
    );
  }
}

export default Form;
