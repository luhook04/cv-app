import React, { Component } from "react";
import uniqid from "uniqid";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";
import { keyboard } from "@testing-library/user-event/dist/keyboard";

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
