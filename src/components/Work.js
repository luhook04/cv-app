import React from "react";
import WorkForm from "./WorkForm";

const Work = ({ workExperience, changeWork, addWork, deleteWork }) => {
  const workExperiences = workExperience.map((object, index) => {
    return (
      <WorkForm
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
          <button className="btn-add" onClick={addWork}>
            Add
          </button>
        </div>
      ) : null}
      {workExperiences}
    </div>
  );
};

export default Work;
