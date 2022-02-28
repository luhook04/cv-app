import React, { Component } from "react";

class WorkForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="input-field">
          <input
            type="text"
            name="position"
            className="text-input"
            placeholder="Position"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="company"
            className="text-input"
            placeholder="Company"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="location"
            className="text-input"
            placeholder="Location"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="starDate"
            className="text-input"
            placeholder="Start date"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            name="endDate"
            className="text-input"
            placeholder="End date"
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
