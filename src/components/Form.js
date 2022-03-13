import React from "react";
import Work from "./Work";
import Education from "./Education";
import Personal from "./Personal";

const Form = ({
  personal,
  education,
  workExperience,
  changePersonal,
  changeEducation,
  changeWork,
  addEducation,
  addWork,
  deleteEducation,
  deleteWork
}) => {
  return (
    <div>
      <Personal personal={personal} changePersonal={changePersonal} />
      <Work
        workExperience={workExperience}
        changeWork={changeWork}
        addWork={addWork}
        deleteWork={deleteWork}
      />
      <Education
        education={education}
        changeEducation={changeEducation}
        addEducation={addEducation}
        deleteEducation={deleteEducation}
      />
    </div>
  );
};

export default Form;
