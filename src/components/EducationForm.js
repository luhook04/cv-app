import React, { Component } from "react";

class EducationForm extends Component {
  render() {
    const {
      education,
      changeEducation,
      addEducation,
      deleteEducation,
      isLast,
      id
    } = this.props;

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
          {isLast ? <button onClick={addEducation}>Add</button> : null}
          <button onClick={() => deleteEducation(id)}>Delete</button>
        </div>
      </div>
    );
  }
}

export default EducationForm;
