import React, { Component } from "react";

class WorkForm extends Component {
  render() {
    const {
      workExperience,
      changeWork,
      addWork,
      deleteWork,
      isLast,
      id
    } = this.props;

    return (
      <div>
        <div className="input-field">
          <input
            type="text"
            name="position"
            className="text-input"
            placeholder="Position"
            value={workExperience.position}
            onChange={(e) => changeWork(e, id)}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="company"
            className="text-input"
            placeholder="Company"
            value={workExperience.company}
            onChange={(e) => changeWork(e, id)}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="startDate"
            className="text-input"
            placeholder="Start date"
            value={workExperience.startDate}
            onChange={(e) => changeWork(e, id)}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="endDate"
            className="text-input"
            placeholder="End date"
            value={workExperience.endDate}
            onChange={(e) => changeWork(e, id)}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="description"
            className="text-input"
            placeholder="Brief description"
            value={workExperience.description}
            onChange={(e) => changeWork(e, id)}
          />
        </div>
        <div className="buttons">
          {isLast ? (
            <button className="btn-add" onClick={addWork}>
              Add
            </button>
          ) : null}
          <button className="btn-del" onClick={() => deleteWork(id)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default WorkForm;
