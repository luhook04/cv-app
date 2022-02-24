import uniqid from "uniqid";
import React, { Component } from "react";
import Form from "./components/Form";
import Overview from "./components/Overview";
import {
  emptyEducation,
  emptyPersonal,
  emptyWork
} from "./components/EmptyObjs/EmptyObjs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal       : {
        ...emptyPersonal
      },
      workExperience : {
        ...emptyWork,
        id : uniqid()
      },
      education      : {
        ...emptyEducation,
        id : uniqid()
      }
    };
  }

  render() {
    return (
      <div>
        <Form />
        <Overview />
      </div>
    );
  }
}

export default App;
