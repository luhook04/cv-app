import React from "react";
import PersonalHeading from "./PersonalHeading";
import EducationBlock from "./EducationBlock";
import WorkExperienceBlock from "./WorkExperienceBlock";

const Overview = ({ personal, education, workExperience }) => {
  const educationBlocks = education.map((block) => {
    return <EducationBlock key={block.id} education={block} />;
  });
  const workExperienceBlocks = workExperience.map((block) => {
    return <WorkExperienceBlock key={block.id} workExperience={block} />;
  });
  return (
    <div className="overview">
      <PersonalHeading personal={personal} />
      <div className="overview-body">
        <section className="overview-section">
          <p className="description">{personal.description.trim()}</p>
        </section>
        <section className="overview-section">
          <h3>Work Experience</h3>
          {workExperienceBlocks}
        </section>
        <section className="overview-section">
          <h3>Education</h3>
          {educationBlocks}
        </section>
      </div>
    </div>
  );
};

export default Overview;
