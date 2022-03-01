import React, { Component } from "react";

class Work extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { workExperience, changeWork, addWork, deleteWork } = this.props;
    const workExperiences = workExperience.map((object, index) => {
      return (
        <ExperienceForm
          key={object.id}
          id={object.id}
          workExperience={workExperience}
          changeWork={changeWork}
          addWork={addWork}
          deleteWork={deleteWork}
          isLast={index === workExperience.length - 1}
        />
      );
    });
  }
}

export default Work;
