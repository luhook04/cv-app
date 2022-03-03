import React, { Component } from "react";

class EducationBlock extends Component {
  render() {
    const { education } = this.props;
    return (
      <div className="education-container">
        <div>
          <div className="left-education">
            <p>{education.degree.trim()}</p>
          </div>
          <div className="right-education">
            <p>{education.school.trim()}</p>
            <p>
              {education.startDate.trim()}-{education.graduationDate.trim()}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default EducationBlock;
