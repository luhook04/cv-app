import React, { Component } from "react";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";

class Form extends Component {
  render() {
    const {
      personal,
      education,
      workExperience,
      changePersonal,
      changeEducation,
      changeWork,
      addEducation,
      addWork,
      deleteEducation,
      deleteWork
    } = this.props;

    return (
      <div>
        <Personal personal={personal} changePersonal={changePersonal} />
        <Work
          workExperience={workExperience}
          changeWork={changeWork}
          addWork={addWork}
          deleteWork={deleteWork}
        />
        <Education
          education={education}
          changeEducation={changeEducation}
          addEducation={addEducation}
          deleteEducation={deleteEducation}
        />
      </div>
    );
  }
}

export default Form;
