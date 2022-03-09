import React, { Component } from "react";

class WorkExperienceBlock extends Component {
  render() {
    const { workExperience } = this.props;
    return (
      <div className="work-container">
        <div className="work-flex">
          <div className="left-work">
            <p>{workExperience.position.trim()}</p>
          </div>
          <div className="right-work">
            <p>
              {workExperience.company.trim()}&nbsp;|&nbsp;
              {workExperience.startDate.trim()}-{workExperience.endDate.trim()}
            </p>
          </div>
        </div>
        <div className="work-description">
          <p>{workExperience.description.trim()}</p>
        </div>
      </div>
    );
  }
}

export default WorkExperienceBlock;
