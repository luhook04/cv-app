import React from "react";

const WorkExperienceBlock = ({ workExperience }) => {
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
};

export default WorkExperienceBlock;
