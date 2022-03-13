import React from "react";

const EducationForm = ({
  education,
  changeEducation,
  addEducation,
  deleteEducation,
  isLast,
  id
}) => {
  return (
    <div>
      <div className="input-field">
        <input
          type="text"
          placeholder="School"
          name="school"
          className="text-input"
          value={education.school}
          onChange={(e) => changeEducation(e, id)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          className="text-input"
          value={education.degree}
          onChange={(e) => changeEducation(e, id)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Start date"
          name="startDate"
          className="text-input"
          value={education.startDate}
          onChange={(e) => changeEducation(e, id)}
        />
      </div>
      <div className="input-field">
        <input
          type="text"
          placeholder="Graduation date"
          name="graduationDate"
          className="text-input"
          value={education.graduationDate}
          onChange={(e) => changeEducation(e, id)}
        />
      </div>
      <div className="buttons">
        {isLast ? (
          <button className="btn-add" onClick={addEducation}>
            Add
          </button>
        ) : null}
        <button className="btn-del" onClick={() => deleteEducation(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
