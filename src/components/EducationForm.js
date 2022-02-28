import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="input-field">
          <input
            type="text"
            placeholder="School"
            name="school"
            className="text-input"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Location"
            name="location"
            className="text-input"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Degree"
            name="degree"
            className="text-input"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Start date"
            name="startDate"
            className="text-input"
          />
        </div>
        <div className="input-field">
          <input
            type="text"
            placeholder="Graduation date"
            name="graduationDate"
            className="text-input"
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
