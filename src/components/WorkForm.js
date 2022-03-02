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
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="location"
            className="text-input"
            placeholder="Location"
            value={workExperience.location}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="starDate"
            className="text-input"
            placeholder="Start date"
            value={workExperience.startDate}
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="endDate"
            className="text-input"
            placeholder="End date"
            value={workExperience.endDate}
          />
        </div>
        <div>
          <button>Add</button>
          <button>Delete</button>
        </div>
      </div>
    );
  }
}

export default WorkForm;
