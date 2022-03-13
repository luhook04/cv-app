import React from "react";
import EducationForm from "./EducationForm";

const Education = ({
  education,
  changeEducation,
  addEducation,
  deleteEducation
}) => {
  const educationItems = education.map((object, index) => {
    return (
      <EducationForm
        key={object.id}
        id={object.id}
        education={education}
        changeEducation={changeEducation}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
        isLast={index === education.length - 1}
      />
    );
  });

  return (
    <div className="education">
      <h2>Education</h2>
      {education.length === 0 ? (
        <div className="buttons">
          <button className="btn-add" onClick={addEducation}>
            Add
          </button>
        </div>
      ) : null}
      {educationItems}
    </div>
  );
};

export default Education;
