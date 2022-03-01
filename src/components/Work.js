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

    return (
      <div className="workExperience">
        <h2>Work Experience</h2>
        {workExperience.length === 0 ? (
          <div className="buttons">
            <button className="btn add-btn">Add</button>
          </div>
        ) : null}
        {workExperiences}
      </div>
    );
  }
}

export default Work;
