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

    this.changePersonal = this.changePersonal.bind(this);
    this.changeWork = this.changeWork.bind(this);
    this.addWork = this.addWork.bind(this);
    this.deleteWork = this.deleteWork.bind(this);
    this.changeEducation = this.changeEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  changePersonal(e) {
    const { name, value } = e.target;
    this.setState({
      personal : {
        ...this.state.personal,
        [name] : value
      }
    });
  }

  changeWork(e, id) {
    const { name, value } = e.target;
    const newWorkArray = this.state.workExperience.map((workItem) => {
      if (workItem.id === id) {
        return {
          ...workItem,
          [name] : value
        };
      }
      return workItem;
    });
    this.setState({
      workExperience : newWorkArray
    });
  }

  changeEducation(e, id) {
    const { name, value } = e.target;
    const newEducationArray = this.state.education.map((educationItem) => {
      if (educationItem.id === id) {
        return {
          ...educationItem,
          [name] : value
        };
      }
      return educationItem;
    });
    this.setState({
      education : newEducationArray
    });
  }

  addWork() {
    const newWorkObj = {
      ...emptyWork,
      id : uniqid()
    };
    this.setState({
      workExperience : this.state.workExperience.concat(newWorkObj)
    });
  }

  addEducation() {
    const newEducationObj = {
      ...emptyEducation,
      id : uniqid()
    };
    this.setState({
      education : this.state.education.concat(newEducationObj)
    });
  }

  deleteWork(id) {
    const filteredWork = this.state.workExperience.filter(
      (workObj) => workObj.id !== id
    );
    this.setState({
      workExperience : filteredWork
    });
  }

  deleteEducation(id) {
    const filteredEdu = this.state.education.filter(
      (educationObj) => educationObj.id !== id
    );
    this.setState({
      education : filteredEdu
    });
  }

  render() {
    return (
      <div>
        <Form />
      </div>
    );
  }
}

export default App;
