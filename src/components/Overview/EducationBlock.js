import React from "react";

const EducationBlock = ({ education }) => {
  return (
    <div className="education-container">
      <div className="left-education">
        <p>{education.degree.trim()}</p>
      </div>
      <div className="right-education">
        <p>
          {education.school.trim()}&nbsp;|&nbsp;
          {education.startDate.trim()}-{education.graduationDate.trim()}
        </p>
      </div>
    </div>
  );
};

export default EducationBlock;
