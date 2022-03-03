import React, { Component } from "react";

class WorkExperienceBlock extends Component {
  render() {
    const { workExperience } = this.props;
    return (
      <div className="work-container">
        <div>
          <div className="left-work">
            <p>{workExperience.position.trim()}</p>
          </div>
          <div className="right-work">
            <p>{workExperience.company.trim()}</p>
            <p>
              {workExperience.startDate.trim()}-{workExperience.endDate}
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
